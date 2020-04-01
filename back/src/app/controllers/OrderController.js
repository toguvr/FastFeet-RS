import * as Yup from 'yup';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import File from '../models/File';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/Deliveryman';
import Order from '../models/Order';

import NewOrderMail from '../jobs/NewOrderMail';
import Queue from '../../lib/Queue';

class OrderController {
  async index(req, res) {
    const order = await Order.findAll({
      include: [
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['name', 'id', 'email'],
        },
        {
          model: Recipient,
          as: 'recipient',
        },
        {
          model: File,
          as: 'signature',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    return res.json(order);
  }

  async show(req, res) {
    const order = await Order.findAll({
      where: {
        deliveryman_id: req.params.deliverymanId,
        canceled_at: null,
        end_date: null,
      },
      include: [
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['name', 'id', 'email'],
        },
        {
          model: Recipient,
          as: 'recipient',
        },
        {
          model: File,
          as: 'signature',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    return res.json(order);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number().required(),
      deliveryman_id: Yup.number().required(),
      product: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { recipient_id, deliveryman_id, product } = req.body;

    const order = await Order.create({
      recipient_id,
      deliveryman_id,
      product,
    });

    // notify deliveryman provider

    const deliveryman = await Deliveryman.findByPk(deliveryman_id);
    const recipient = await Recipient.findByPk(recipient_id);

    const all = {
      recipient: recipient.name,
      cep: recipient.cep,
      street: recipient.street,
      city: recipient.city,
      complement: recipient.complement,
      number: recipient.number,
      order: order.product,
      deliveryman: deliveryman.name,
    };

    await Queue.add(NewOrderMail.key, {
      recipient,
      deliveryman,
      order,
    });

    return res.json(order);
  }

  async update(req, res) {
    const {
      signature_id,
      start_date,
      end_date,
      canceled_at,
      product,
      deliveryman_id,
      recipient_id,
    } = req.body;
    const currentOrder = await Order.findByPk(req.params.orderId, {
      include: [
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['name', 'id', 'email'],
        },
        {
          model: Recipient,
          as: 'recipient',
        },
        {
          model: File,
          as: 'signature',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    if (start_date) {
      const searchDate = Number(start_date);

      const currentTime = format(searchDate, 'HH:mm:ss');

      if (!(currentTime > '08:00:00' && currentTime < '18:00:00')) {
        return res.status(400).json({ error: 'error hour' });
      }
      const value = format(searchDate, "yyyy-MM-dd'T'HH:mm:ssxxx");

      const withdraw = await currentOrder.update({ start_date: value });
      return res.json(withdraw);
    }

    if (end_date) {
      const searchDate = Number(end_date);

      const value = format(searchDate, "yyyy-MM-dd'T'HH:mm:ssxxx");
      const finish = await currentOrder.update({ end_date: value });
      return res.json(finish);
    }

    if (canceled_at) {
      const searchDate = Number(canceled_at);

      const value = format(searchDate, "yyyy-MM-dd'T'HH:mm:ssxxx");
      const finish = await currentOrder.update({ canceled_at: value });
      return res.json(finish);
    }

    const finishOrder = await currentOrder.update({
      product,
      recipient_id,
      deliveryman_id,
    });

    return res.json(finishOrder);
  }

  async destroy(req, res) {
    const order = await Order.destroy({
      where: { id: req.params.orderId },
    });
    return res.json(order);
  }
}

export default new OrderController();

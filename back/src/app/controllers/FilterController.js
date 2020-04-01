import { Op } from 'sequelize';
import File from '../models/File';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/Deliveryman';
import Order from '../models/Order';

class OrderController {
  async index(req, res) {
    const { orderFilter, deliverymanFilter, recipientFilter } = req.query;

    if (orderFilter) {
      const order = await Order.findAll({
        where: {
          product: {
            [Op.like]: `%${orderFilter}%`,
          },
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

      return res.json({ order });
    }
    if (deliverymanFilter) {
      const deliverymen = await Deliveryman.findAll({
        where: {
          name: {
            [Op.like]: `%${deliverymanFilter}%`,
          },
        },
        attributes: ['id', 'name', 'email'],
        include: [
          {
            model: File,
            as: 'avatar',
            attributes: ['name', 'path', 'url'],
          },
        ],
      });
      return res.json({ deliverymen });
    }
    if (recipientFilter) {
      const recipient = await Recipient.findAll({
        where: {
          name: {
            [Op.like]: `%${recipientFilter}%`,
          },
        },
      });
      return res.json({ recipient });
    }

    const recipient = await Recipient.findAll({});
    const deliverymen = await Deliveryman.findAll({
      attributes: ['id', 'name', 'email'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });
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

    return res.json({ recipient, order, deliverymen });
  }
}

export default new OrderController();

import { format } from 'date-fns';
import Order from '../models/Order';
import DeliveryProblem from '../models/DeliveryProblem';
import Deliveryman from '../models/Deliveryman';
import Recipient from '../models/Recipient';
import Queue from '../../lib/Queue';
import CancellationMail from '../jobs/CancellationMail';

class DeliveryProblemController {
  async index(req, res) {
    const order = await DeliveryProblem.findAll({
      include: [
        {
          model: Order,
          as: 'delivery',
        },
      ],
    });

    return res.json(order);
  }

  async show(req, res) {
    const order = await DeliveryProblem.findAll({
      where: {
        delivery_id: req.params.deliveryId,
      },
      include: [
        {
          model: Order,
          as: 'delivery',
        },
      ],
    });

    return res.json(order);
  }

  async store(req, res) {
    console.log(req.body);
    const order = await DeliveryProblem.create(req.body);

    return res.json(order);
  }

  async update(req, res) {
    const deliveryProblem = await DeliveryProblem.findOne({
      where: { id: req.params.problemId },
    });
    const currentOrder = await Order.findOne({
      where: { id: deliveryProblem.delivery_id },
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
      ],
    });

    const { canceled_at } = req.body;

    const searchDate = Number(canceled_at);

    const value = format(searchDate, "yyyy-MM-dd'T'HH:mm:ssxxx");
    const finish = await currentOrder.update({ canceled_at: value });

    await Queue.add(CancellationMail.key, {
      finish,
    });

    return res.json(finish);
  }
}

export default new DeliveryProblemController();

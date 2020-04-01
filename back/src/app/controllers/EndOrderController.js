import { Op } from 'sequelize';
import File from '../models/File';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/Deliveryman';
import Order from '../models/Order';

class EndOrderController {
  async show(req, res) {
    const order = await Order.findAll({
      where: {
        deliveryman_id: req.params.deliverymanId,
        end_date: { [Op.ne]: null },
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
}

export default new EndOrderController();

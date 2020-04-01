import { format, startOfDay, endOfDay } from 'date-fns';

import { Op } from 'sequelize';

import Order from '../models/Order';

class DeliverymanStartOrderController {
  async update(req, res) {
    const { start_date } = req.body;
    const currentOrder = await Order.findByPk(req.params.orderId);

    const searchDate = Number(start_date);

    const currentTime = format(searchDate, 'HH:mm:ss');

    if (!(currentTime > '08:00:00' && currentTime < '18:00:00')) {
      return res
        .status(400)
        .json({ error: 'Pick-up time only from 8am to 6pm' });
    }

    const deliveryman_withdrawals = await Order.count({
      where: {
        deliveryman_id: currentOrder.deliveryman_id,
        start_date: {
          [Op.between]: [startOfDay(new Date()), endOfDay(new Date())],
        },
      },
    });
    console.log(deliveryman_withdrawals);
    if (deliveryman_withdrawals < 5) {
      const value = format(searchDate, "yyyy-MM-dd'T'HH:mm:ssxxx");

      const withdraw = await currentOrder.update({ start_date: value });
      return res.json(withdraw);
    }
    return res
      .status(400)
      .json({ error: 'You can only make 5 withdrawals per day' });
  }
}

export default new DeliverymanStartOrderController();

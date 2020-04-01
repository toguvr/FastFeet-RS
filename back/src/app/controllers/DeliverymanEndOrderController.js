import { format } from 'date-fns';
import File from '../models/File';
import Order from '../models/Order';

class DeliverymanEndOrderController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;
    const file = await File.create({
      name,
      path,
    });

    const searchDate = Date.now();

    const value = format(searchDate, "yyyy-MM-dd'T'HH:mm:ssxxx");

    const order = await Order.findOne({
      where: { id: req.params.orderId },
    });

    const SignatureFinish = await order.update({
      signature_id: file.id,
      end_date: value,
    });

    return res.json(SignatureFinish);
  }
}

export default new DeliverymanEndOrderController();

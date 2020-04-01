import File from '../models/File';
import Deliveryman from '../models/Deliveryman';

class AvatarController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;
    const file = await File.create({
      name,
      path,
    });

    const deliveryman = await Deliveryman.findOne({
      where: { id: req.params.deliveryId },
    });
    const avatarDeliveryman = await deliveryman.update({ avatar_id: file.id });
    return res.json(avatarDeliveryman);
  }
}

export default new AvatarController();

import Recipient from '../models/Recipient';
import User from '../models/User';

class RecipientController {
  async store(req, res) {
    const admin = await User.findByPk(req.userId);

    if (!admin) {
      return res.status(401).json({
        error: 'You are not admin',
      });
    }
    const recipient = await Recipient.create(req.body);

    return res.json(recipient);
  }

  async update(req, res) {
    const admin = await User.findByPk(req.userId);

    if (!admin) {
      return res.status(401).json({
        error: 'You are not admin',
      });
    }
    const recipient = await Recipient.findByPk(req.params.id);
    const newRecipient = await recipient.update(req.body);

    return res.json(newRecipient);
  }
}

export default new RecipientController();

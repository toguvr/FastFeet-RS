import * as Yup from 'yup';
import Deliveryman from '../models/Deliveryman';
import User from '../models/User';
import File from '../models/File';

class DeliverymanController {
  async index(req, res) {
    const admin = await User.findByPk(req.userId);

    if (!admin) {
      return res.status(400).json({ error: 'You are not admin' });
    }
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
    return res.json(deliverymen);
  }

  async destroy(req, res) {
    const admin = await User.findByPk(req.userId);

    if (!admin) {
      return res.status(400).json({ error: 'You are not admin' });
    }
    const deliverymen = await Deliveryman.destroy({
      where: { id: req.params.id },
    });
    return res.json(deliverymen);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
    });

    const admin = await User.findByPk(req.userId);

    if (!admin) {
      return res.status(400).json({ error: 'You are not admin' });
    }

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const userExists = await Deliveryman.findOne({
      where: { email: req.body.email },
    });

    if (userExists) {
      return res.status(400).json({ error: 'Deliveryman already exists' });
    }
    const deliveryman = await Deliveryman.create(req.body);

    return res.json(deliveryman);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
    });

    const admin = await User.findByPk(req.userId);

    if (!admin) {
      return res.status(400).json({ error: 'You are not admin' });
    }

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const user = await Deliveryman.findByPk(req.params.id);

    const { email } = req.body;

    const userExists = await Deliveryman.findOne({ where: { email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const { id, name } = await user.update(req.body);
    return res.json({ id, name, email });
  }
}

export default new DeliverymanController();

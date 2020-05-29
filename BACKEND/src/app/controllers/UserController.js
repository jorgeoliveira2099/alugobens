import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),

      cpf: Yup.string().required().min(13),
      telefone: Yup.string().required().min(11),
      cep: Yup.string().required().min(10),
      cidade: Yup.string().required(),
      estado: Yup.string().required().max(2),
      bairro: Yup.string().required(),
      rua: Yup.string().required(),
      complemento: Yup.string().required(),
    });

    try {
      if (!(await schema.isValid(req.body))) {
        return res.status(400).json({ error: 'validate fails adfgqui' });
      }
    } catch (error) {
      return res.status(400).json({ error });
    }

    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }
    const {
      id,
      name,
      email,
      provider,
      cpf,
      telefone,
      cep,
      cidade,
      estado,
      bairro,
      rua,
      complemento,
    } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
      provider,
      cpf,
      telefone,
      cep,
      cidade,
      estado,
      bairro,
      rua,
      complemento,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'validate fails 2' });
    }

    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'password does match' });
    }

    const {
      id,
      name,
      provider,
      cpf,
      telefone,
      cep,
      cidade,
      estado,
      bairro,
      rua,
      complemento,
    } = await user.update(req.body);

    return res.json({
      id,
      name,
      email,
      provider,
      cpf,
      telefone,
      cep,
      cidade,
      estado,
      bairro,
      rua,
      complemento,
    });
  }
}
export default new UserController();

import User from '../models/User';

class UserController {
  async create(req, res) {
    const novoUser = await User.create({
      nome: 'Ana',
      sobrenome: 'Luiz',
      email: 'anaLuiz@gmail.com',
      password: '12345',
    });
    res.json(novoUser);
  }
}

export default new UserController();

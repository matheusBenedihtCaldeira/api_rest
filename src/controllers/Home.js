import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Ana',
      sobrenome: 'Luiz',
      email: 'anaLuiz@gmail.com',
      idade: 19,
      peso: 74,
      altura: 1.80,

    });
    res.json(novoAluno);
  }
}

export default new HomeController();

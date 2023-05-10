import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll();
    res.json(alunos);
  }

  async create(req, res) {
    try {
      const aluno = Aluno.create(req.body);
      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        erros: e.erros.map((err) => err.message),
      });
    }
  }

  async shows(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          erros: ['Faltando id'],
        });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          erros: ['Aluno não existe'],
        });
      }
      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        erros: e.erros.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          erros: ['Faltando id'],
        });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          erros: ['Aluno não existe'],
        });
      }
      await aluno.destroy();
      return res.json({
        status: 'success',
        message: 'Aluno apagado do sistema',
      });
    } catch (e) {
      return res.status(400).json({
        erros: e.erros.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          erros: ['Faltando id'],
        });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          erros: ['Aluno não existe'],
        });
      }
      const novosDados = aluno.update(req.body);
      return res.json(novosDados);
    } catch (e) {
      return res.status(400).json({
        erros: e.erros.map((err) => err.message),
      });
    }
  }
}

export default new AlunoController();

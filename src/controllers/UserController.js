import User from '../models/User';

class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome_completo', 'email'] });
      return res.json(users);
    } catch {
      return res.status(500).json({ errors: ['Erro interno no servidor.'] });
    }
  }

  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, nome_completo, email } = novoUser;
      return res.status(201).json({ id, nome_completo, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors ? e.errors.map((err) => err.message) : ['Erro na requisição.'],
      });
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id, { attributes: ['id', 'nome_completo', 'email'] });
      if (!user) return res.status(404).json({ errors: ['Usuário não encontrado.'] });

      return res.json(user);
    } catch {
      return res.status(400).json({ errors: ['ID inválido.'] });
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(404).json({
          errors: ['Usuário não existe.'],
        });
      }

      const updatedUser = await user.update(req.body);
      const { id, nome_completo, email } = updatedUser;

      return res.json({ id, nome_completo, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors ? e.errors.map((err) => err.message) : ['Erro na requisição.'],
      });
    }
  }

  async destroy(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(404).json({
          errors: ['Usuário não existe.'],
        });
      }

      await user.destroy();
      return res.json({ status: 'success', message: 'Conta deletada com sucesso.' });
    } catch {
      return res.status(400).json({
        errors: ['Erro na requisição.'],
      });
    }
  }
}

export default new UserController();

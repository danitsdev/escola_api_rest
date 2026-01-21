import fs from 'fs';
import { resolve } from 'path';
import Aluno from '../models/Aluno';
import Foto from '../models/Foto';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll({
      attributes: ['id', 'nome_completo', 'email', 'idade', 'peso', 'altura'],
      order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
      include: {
        model: Foto,
        attributes: ['url', 'filename'],
      },
    });
    return res.json(alunos);
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors ? e.errors.map((err) => err.message) : ['Erro desconhecido.'],
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Falta ID'],
        });
      }

      const aluno = await Aluno.findByPk(id, {
        attributes: ['id', 'nome_completo', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
          attributes: ['url', 'filename'],
        },
      });

      if (!aluno) {
        return res.status(404).json({
          errors: ['Aluno não existe'],
        });
      }

      return res.json(aluno);
    } catch {
      return res.status(400).json({
        errors: ['Erro na requisição.'],
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Falta ID'],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(404).json({
          errors: ['Aluno não existe'],
        });
      }

      const alunoAtualizado = await aluno.update(req.body);

      return res.json(alunoAtualizado);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors ? e.errors.map((err) => err.message) : ['Erro na requisição.'],
      });
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Falta ID'],
        });
      }

      const aluno = await Aluno.findByPk(id, {
        include: { model: Foto },
      });

      if (!aluno) {
        return res.status(404).json({
          errors: ['Aluno não existe'],
        });
      }

      if (aluno.Foto) {
        const caminhoFoto = resolve(__dirname, '..', '..', 'uploads', 'images', aluno.Foto.filename);
        if (fs.existsSync(caminhoFoto)) {
          fs.unlinkSync(caminhoFoto);
        }
      }

      await aluno.destroy();

      return res.json({ status: 'success', message: 'Aluno excluído com sucesso.' });
    } catch {
      return res.status(400).json({
        errors: ['Erro na requisição.'],
      });
    }
  }
}

export default new AlunoController();

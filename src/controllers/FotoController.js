import multer from 'multer';
import fs from 'fs';
import { resolve } from 'path';
import multerConfig from '../config/multerConfig';
import Foto from '../models/Foto';

const upload = multer(multerConfig).single('foto');

class FotoController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;

        const fotoAntiga = await Foto.findOne({ where: { aluno_id } });

        if (fotoAntiga) {
          const caminhoFotoAntiga = resolve(__dirname, '..', '..', 'uploads', 'images', fotoAntiga.filename);

          if (fs.existsSync(caminhoFotoAntiga)) {
            fs.unlinkSync(caminhoFotoAntiga);
          }

          await fotoAntiga.destroy();
        }

        const foto = await Foto.create({ originalname, filename, aluno_id });

        return res.json(foto);
      } catch {
        return res.status(400).json({
          errors: ['Aluno não existe ou erro interno.'],
        });
      }
    });
  }
}

export default new FotoController();

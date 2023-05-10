import multer from 'multer';
import multerConfig from '../config/multer';

const upload = multer(multerConfig).single('foto');

class FotoController {
  async crete(req, res) {
    return upload(req, res, (err) => {
      if (err) {
        return res.status(400).json({
          erros: [err.code],
        });
      }
      return res.json(req.file);
    });
  }
}

export default new FotoController();

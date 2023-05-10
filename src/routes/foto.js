import { Router } from 'express';
import fotoController from '../controllers/Foto';
// import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', fotoController.crete);

export default router;

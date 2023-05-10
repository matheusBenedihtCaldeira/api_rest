import { Router } from 'express';
import fotoController from '../controllers/Foto';

const router = new Router();

router.post('/', fotoController.crete);

export default router;

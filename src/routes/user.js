import { Router } from 'express';
import userController from '../controllers/User';

const router = new Router();

router.post('/', userController.create);

export default router;

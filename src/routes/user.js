import { Router } from 'express';
import userController from '../controllers/User';

const router = new Router();

router.post('/', userController.create);
router.get('/', userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
export default router;

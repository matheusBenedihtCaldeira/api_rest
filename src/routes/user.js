import { Router } from 'express';
import userController from '../controllers/User';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();
// Falha de segurança
router.get('/', userController.index);
router.get('/:id', userController.show);
router.post('/', userController.create);
router.put('/:id', userController.update);
router.delete('/:id', loginRequired, userController.delete);
export default router;

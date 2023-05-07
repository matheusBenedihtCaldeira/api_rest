import { Router } from 'express';
import userController from '../controllers/User';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();
// Falha de segurança
router.get('/', loginRequired, userController.index);
router.get('/:id', userController.show);
router.post('/', userController.create);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);
export default router;

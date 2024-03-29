import { Router } from 'express';
import alunoController from '../controllers/Aluno';

const router = new Router();
import loginRequired from '../middlewares/loginRequired';

router.get('/', alunoController.index);
router.post('/', loginRequired, alunoController.create);
router.put('/:id', loginRequired, alunoController.update);
router.get('/:id', alunoController.show);
router.delete('/:id', loginRequired, alunoController.delete);
export default router;

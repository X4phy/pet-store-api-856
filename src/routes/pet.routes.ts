import { Router } from 'express';
import * as petController from '../controllers/pet.controller';

const router = Router();


router.get('/', petController.getAll);
router.get('/:id', petController.getOne);
router.post('/', petController.create);
router.put('/:id', petController.update);
router.delete('/:id', petController.remove);

export default router;
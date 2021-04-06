import { Router } from 'express';
import SpentController from '../controllers/SpentController';

const spentRouter = Router();

spentRouter.post('/:id', SpentController.removeBalance);

export default spentRouter;

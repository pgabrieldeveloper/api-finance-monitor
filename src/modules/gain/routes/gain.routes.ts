import { Router } from 'express';
import GainController from '../controllers/GainController';

const gainRouter = Router();

gainRouter.post('/', GainController.create);
export default gainRouter;

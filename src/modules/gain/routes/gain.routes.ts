import { Router } from 'express';
import GainController from '../controllers/GainController';
import Gain from '../typeorm/entities/Gain';

const gainRouter = Router();

gainRouter.post('/:id', GainController.create);
export default gainRouter;

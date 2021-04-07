import { Router } from 'express';
import GainController from '../controllers/GainController';
import Gain from '../typeorm/entities/Gain';

const gainRouter = Router();

gainRouter.post('/', GainController.create);
export default gainRouter;

import { Router } from 'express';
import isAuthenticate from '../../user/middleware/isAuthenticate';
import SpentController from '../controllers/SpentController';

const spentRouter = Router();

spentRouter.post('/', isAuthenticate, SpentController.removeBalance);

export default spentRouter;

import { Router } from 'express';
import UserController from '../controller/UserController';

const userRoutes = Router();

userRoutes.post('/', UserController.create);

export default userRoutes;

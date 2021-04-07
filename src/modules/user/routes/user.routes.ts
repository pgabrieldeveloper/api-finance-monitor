import { Router } from 'express';
import UserController from '../controller/UserController';

const userRoutes = Router();

userRoutes.post('/', UserController.create);
userRoutes.post('/login', UserController.login);

export default userRoutes;

import { Router } from 'express';
import UserController from '../controller/UserController';
import isAuthenticate from '../middleware/isAuthenticate';

const userRoutes = Router();

userRoutes.post('/', UserController.create);
userRoutes.post('/login', UserController.login);
userRoutes.post('/wallet', isAuthenticate, UserController.addWallet);

export default userRoutes;

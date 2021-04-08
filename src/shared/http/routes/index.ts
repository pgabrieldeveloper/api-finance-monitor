import { Router } from 'express';
import spentRouter from '../../../modules/spent/routes/spent.route';
import gainRouter from '../../../modules/gain/routes/gain.routes';
import userRoutes from '../../../modules/user/routes/user.routes';
import walletRoutes from '../../../modules/wallet/routes/wallet.routes';
import isAuthenticate from '../../../modules/user/middleware/isAuthenticate';
const routes = Router();
routes.get('/', (req, res) => {
  return res.json({ message: 'Olá finance-API' });
});
routes.use('/wallet', isAuthenticate, walletRoutes);
routes.use('/user', userRoutes);
routes.use('/gain', isAuthenticate, gainRouter);
routes.use('/spent', isAuthenticate, spentRouter);
export default routes;

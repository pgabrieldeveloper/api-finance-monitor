import { Router } from 'express';
import gainRouter from '../../../modules/gain/routes/gain.routes';
import userRoutes from '../../../modules/user/routes/user.routes';
import walletRoutes from '../../../modules/wallet/routes/wallet.routes';
const routes = Router();
routes.get('/', (req, res) => {
  return res.json({ message: 'Olá express' });
});
routes.use('/wallet', walletRoutes);
routes.use('/user', userRoutes);
routes.use('/gain', gainRouter);
export default routes;

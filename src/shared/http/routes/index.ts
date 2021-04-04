import { Router } from 'express';
import userRoutes from '../../../modules/user/routes/user.routes';
import walletRoutes from '../../../modules/wallet/routes/wallet.routes';
const routes = Router();
routes.get('/', (req, res) => {
  return res.json({ message: 'Olá express' });
});
routes.use('/wallet', walletRoutes);
routes.use('/user', userRoutes);

export default routes;

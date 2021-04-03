import { Router } from 'express';
import walletRoutes from '../../../modules/wallet/routes/wallet.routes';
const routes = Router();
routes.get('/', (req, res) => {
  return res.json({ message: 'Olá express' });
});
routes.use('/wallet', walletRoutes);

export default routes;

import { celebrate } from 'celebrate';
import { Router } from 'express';
import WalletController from '../controller/WalletController';

const walletRoutes = Router();

walletRoutes.get('/', WalletController.show);

export default walletRoutes;

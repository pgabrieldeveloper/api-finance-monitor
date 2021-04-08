import { celebrate } from 'celebrate';
import { Router } from 'express';
import WalletController from '../controller/WalletController';
import { Segments, Joi } from 'celebrate';

const walletRoutes = Router();

walletRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      balance: Joi.number().required(),
    },
  }),
  WalletController.create,
);

walletRoutes.get('/:id', WalletController.show);

export default walletRoutes;

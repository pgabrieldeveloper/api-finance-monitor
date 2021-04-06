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
walletRoutes.post(
  '/gain/:id',
  celebrate({
    [Segments.BODY]: {
      value: Joi.number().required(),
    },
  }),
  WalletController.add,
);
walletRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      balance: Joi.number().required(),
    },
  }),
  WalletController.create,
);
walletRoutes.post(
  '/spent/:id',
  celebrate({
    [Segments.BODY]: {
      value: Joi.number().required(),
    },
  }),
  WalletController.removeBalance,
);
walletRoutes.get('/:id', WalletController.show);

export default walletRoutes;

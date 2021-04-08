import { json, Request, Response } from 'express';
import AddBalanceService from '../services/AddBalanceService';
import CreateWalletService from '../services/CreateWalletService';
import RemoveBalanceService from '../services/RemoveBalanceService';
import ShowWalletSetvice from '../services/ShowWalletSetvice';
class WalletController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { balance } = req.body;
    const wallet = await CreateWalletService.execute({ balance });

    return res.status(201).json(wallet);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const wallet = await ShowWalletSetvice.execute({ id });
    return res.status(200).json(wallet);
  }
}

export default new WalletController();

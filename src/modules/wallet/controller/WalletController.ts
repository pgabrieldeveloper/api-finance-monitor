import { Request, Response } from 'express';
import AddBalanceService from '../services/AddBalanceService';
import CreateWalletService from '../services/CreateWalletService';
class WalletController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { balance } = req.body;
    const wallet = await CreateWalletService.execute({ balance });

    return res.status(201).json(wallet);
  }
  public async add(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { value } = req.body;
    const wallet = await AddBalanceService.execute({ id, value });
    return res.status(200).json(wallet);
  }
}

export default new WalletController();

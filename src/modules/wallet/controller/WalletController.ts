import { Request, Response } from 'express';
import CreateWalletService from '../services/CreateWalletService';
import ShowWalletSetvice from '../services/ShowWalletSetvice';
class WalletController {
  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;
    const wallet = await ShowWalletSetvice.execute({ id });
    return res.status(200).json(wallet);
  }
}

export default new WalletController();

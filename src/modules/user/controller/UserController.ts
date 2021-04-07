import { json, Request, Response } from 'express';
import AddWalletToUser from '../services/AddWalletToUser';
import CreateUserService from '../services/CreateUserService';
import LoginUserService from '../services/LoginUserService';
class UserController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    const user = await CreateUserService.execute({ name, email, password });

    return res.status(200).json(user);
  }
  public async login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    console.log(password);
    const session = await LoginUserService.execute({ email, password });
    return res.status(200).json(session);
  }
  public async addWallet(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;
    const { balance } = req.body;
    const user = await AddWalletToUser.execute({ id, balance });
    return res.status(200).json(user);
  }
}

export default new UserController();

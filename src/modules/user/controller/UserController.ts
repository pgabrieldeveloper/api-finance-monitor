import { json, Request, Response } from 'express';
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
    const session = await LoginUserService.execute({ email, password });
    return res.status(200).json(session);
  }
}

export default new UserController();

import { json, Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';
class UserController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    const user = await CreateUserService.execute({ name, email, password });

    return res.status(200).json(user);
  }
}

export default new UserController();

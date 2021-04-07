import { Request, Response } from 'express';
import CreateGainService from '../service/CreateGainService';
class GainController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;
    const { value } = req.body;
    console.log(value);
    const gain = await CreateGainService.execute({ value, id });
    return res.status(200).json(gain);
  }
}

export default new GainController();

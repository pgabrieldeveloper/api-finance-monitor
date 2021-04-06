import { Request, Response } from 'express';
import CreatSpentService from '../services/CreatSpentService';
class SpentController {
  public async removeBalance(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { value } = req.body;
    const spent = await CreatSpentService.execute({ id, value });
    return res.status(201).json(spent);
  }
}

export default new SpentController();

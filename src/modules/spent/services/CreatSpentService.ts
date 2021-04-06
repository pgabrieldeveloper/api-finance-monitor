import WalletRepository from '../../wallet/typeorm/repository/WalletRepository';
import { getCustomRepository } from 'typeorm';
import Spent from '../typeorm/entities/Spent';
import SpentRepository from '../typeorm/repository/SpentRepository';
import AppError from '../../../shared/errors/AppError';
import RemoveBalanceService from '../../wallet/services/RemoveBalanceService';

interface IRequest {
  id: string;
  value: number;
}

class CreatSpentService {
  public async execute({ id, value }: IRequest): Promise<Spent> {
    const spentRepository = getCustomRepository(SpentRepository);
    const walletRepository = getCustomRepository(WalletRepository);
    const wallet = await walletRepository.findOne(id);
    if (!wallet) {
      throw new AppError('Wallet not found', 404);
    }
    const spent = spentRepository.create({ value, wallet });
    await spentRepository.save(spent);

    const walletSpent = await RemoveBalanceService.execute({ id, value });
    console.log(walletSpent);
    return spent;
  }
}
export default new CreatSpentService();

import WalletRepository from '../../wallet/typeorm/repository/WalletRepository';
import { getCustomRepository } from 'typeorm';
import Gain from '../typeorm/entities/Gain';
import GainRepository from '../typeorm/repository/GainRepository';
import AppError from '../../../shared/errors/AppError';
import AddBalanceService from '../../wallet/services/AddBalanceService';
import UserRepository from '../../user/typeorm/repository/UserRepository';

interface IRequest {
  id: string;
  value: number;
}

class CreateGainService {
  public async execute({ id, value }: IRequest): Promise<Gain> {
    const gainRepository = getCustomRepository(GainRepository);
    const userRepository = getCustomRepository(UserRepository);
    const user = await userRepository.findOne(id);

    if (!user?.wallet) {
      throw new AppError('Wallet not found', 404);
    }
    const wallet = user.wallet;
    const gain = gainRepository.create({ value, wallet });
    await gainRepository.save(gain);

    const walletGain = await AddBalanceService.execute({
      id: wallet.id,
      value,
    });
    console.log(walletGain);
    return gain;
  }
}
export default new CreateGainService();

import WalletRepository from '../../wallet/typeorm/repository/WalletRepository';
import { getCustomRepository } from 'typeorm';
import Gain from '../typeorm/entities/Gain';
import GainRepository from '../typeorm/repository/GainRepository';
import AppError from '../../../shared/errors/AppError';

interface IRequest {
  value: number;
}

class CreateGainService {
  public async execute({ value }: IRequest): Promise<Gain> {
    const gainRepository = getCustomRepository(GainRepository);
    const walletRepository = getCustomRepository(WalletRepository);
    const wallet = await walletRepository.findOne(
      'b8946206-24cb-49c9-ad79-0875c90ff7f5',
    );

    const gain = gainRepository.create({ value, wallet });
    await gainRepository.save(gain);
    return gain;
  }
}
export default new CreateGainService();

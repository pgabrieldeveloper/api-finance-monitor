import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Wallet from '../typeorm/entities/Wallet';
import WalletRepository from '../typeorm/repository/WalletRepository';
import GainRepository from '../../gain/typeorm/repository/GainRepository';
interface IRequest {
  id: string;
  value: number;
}
class AddBalanceService {
  public async execute({ id, value }: IRequest): Promise<Wallet> {
    const walletRepository = getCustomRepository(WalletRepository);
    const gainRepository = getCustomRepository(GainRepository);
    const balance = await walletRepository.balance(id);
    const wallet = await walletRepository.findOne(id);
    if (!wallet) {
      throw new AppError('Wallet not found', 404);
    }
    const gain = gainRepository.create({ value, wallet });
    await gainRepository.save(gain);
    const newBalance = parseFloat(balance) + value;
    wallet.balance = newBalance;
    await walletRepository.save(wallet);
    return wallet;
  }
}

export default new AddBalanceService();

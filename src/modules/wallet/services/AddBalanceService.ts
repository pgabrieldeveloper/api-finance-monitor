import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Wallet from '../typeorm/entities/Wallet';
import WalletRepository from '../typeorm/repository/WalletRepository';
import GainRepository from '../../gain/typeorm/repository/GainRepository';
import CreateGainService from '../../gain/service/CreateGainService';
interface IRequest {
  id: string;
  value: number;
}
class AddBalanceService {
  public async execute({ id, value }: IRequest): Promise<Wallet> {
    const walletRepository = getCustomRepository(WalletRepository);
    const balance = await walletRepository.balance(id);
    const wallet = await walletRepository.findOne(id);
    if (!wallet) {
      throw new AppError('Wallet not found', 404);
    }
    const newBalance = parseFloat(balance) + value;
    wallet.balance = newBalance;
    await walletRepository.save(wallet);
    return wallet;
  }
}

export default new AddBalanceService();

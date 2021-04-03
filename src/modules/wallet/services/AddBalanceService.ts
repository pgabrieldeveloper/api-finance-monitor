import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Wallet from '../typeorm/entities/Wallet';
import WalletRepository from '../typeorm/repository/WalletRepository';
interface IRequest {
  id: string;
  value: number;
}
class AddBalanceService {
  public async execute({ id, value }: IRequest): Promise<Wallet> {
    const walletRepository = getCustomRepository(WalletRepository);
    const balance = await walletRepository.balance(id);
    // await walletRepository.save(wallet);
    const wallet = await walletRepository.findOne(id);
    if (!wallet) {
      throw new AppError('Wallet not found', 404);
    }
    wallet.balance = parseFloat(balance) + value;
    await walletRepository.save(wallet);
    return wallet;
  }
}

export default new AddBalanceService();

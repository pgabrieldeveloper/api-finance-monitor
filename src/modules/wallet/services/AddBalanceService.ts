import AppError from 'src/shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Wallet from '../typeomr/entities/Wallet';
import WalletRepository from '../typeomr/repository/WalletRepository';
interface IRequest {
  id: string;
  value: number;
}
class AddBalanceService {
  public async execute({ id, value }: IRequest): Promise<Wallet> {
    const walletRepository = getCustomRepository(WalletRepository);
    const wallet = await walletRepository.findOne(id);
    if (!wallet) {
      throw new AppError('Wallet not found', 404);
    }
    wallet.balance += value;

    await walletRepository.save(wallet);

    return wallet;
  }
}

export default new AddBalanceService();

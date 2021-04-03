import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Wallet from '../typeorm/entities/Wallet';
import WalletRepository from '../typeorm/repository/WalletRepository';

interface IRequest {
  id: string;
}

class ShowWalletSetvice {
  public async execute({ id }: IRequest): Promise<Wallet> {
    const walletRepository = getCustomRepository(WalletRepository);
    const wallet = await walletRepository.findOne(id);

    if (!wallet) {
      throw new AppError('Wallet not found', 404);
    }
    const balance = wallet.balance.toString();
    wallet.balance = parseFloat(balance);
    return wallet;
  }
}

export default new ShowWalletSetvice();

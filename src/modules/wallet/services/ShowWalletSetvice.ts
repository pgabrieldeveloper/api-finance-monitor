import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Wallet from '../typeorm/entities/Wallet';
import WalletRepository from '../typeorm/repository/WalletRepository';
import UserRepository from '../../user/typeorm/repository/UserRepository';

interface IRequest {
  id: string;
}

class ShowWalletSetvice {
  public async execute({ id }: IRequest): Promise<Wallet> {
    const walletRepository = getCustomRepository(WalletRepository);
    const userRepository = getCustomRepository(UserRepository);
    const user = await userRepository.findOne(id);
    if (!user) {
      throw new AppError('User not found', 404);
    }

    const wallet = await walletRepository.findOne(user.wallet.id);

    if (!wallet) {
      throw new AppError('Wallet not found', 404);
    }
    const balance = wallet.balance.toString();
    wallet.balance = parseFloat(balance);
    return wallet;
  }
}

export default new ShowWalletSetvice();

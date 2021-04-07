import UserRepository from '../../user/typeorm/repository/UserRepository';
import { getCustomRepository } from 'typeorm';
import Wallet from '../typeorm/entities/Wallet';
import WalletRepository from '../typeorm/repository/WalletRepository';
import AppError from '../../../shared/errors/AppError';

interface IRequest {
  balance?: number;
}

class CreateWalletService {
  public async execute({ balance }: IRequest): Promise<Wallet> {
    const walletRepository = getCustomRepository(WalletRepository);
    const userRepository = getCustomRepository(UserRepository);

    if (!balance) {
      const wallet = walletRepository.create({
        balance: 0,
      });
      await walletRepository.save(wallet);
      return wallet;
    } else {
      const wallet = walletRepository.create({
        balance,
      });
      await walletRepository.save(wallet);
      return wallet;
    }
  }
}

export default new CreateWalletService();

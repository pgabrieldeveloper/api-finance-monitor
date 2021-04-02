import { getCustomRepository } from 'typeorm';
import Wallet from '../typeomr/entities/Wallet';
import WalletRepository from '../typeomr/repository/WalletRepository';

interface IRequest {
  balance?: number;
}

class CreateWalletService {
  public async execute({ balance }: IRequest): Promise<Wallet> {
    const walletRepository = getCustomRepository(WalletRepository);
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

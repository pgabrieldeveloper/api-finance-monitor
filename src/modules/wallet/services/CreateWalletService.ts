import { getCustomRepository } from 'typeorm';
import Wallet from '../typeorm/entities/Wallet';
import WalletRepository from '../typeorm/repository/WalletRepository';

interface IRequest {
  balance?: number;
}

class CreateWalletService {
  public async execute({ balance }: IRequest): Promise<Wallet> {
    console.log(1);
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

export default new CreateWalletService();

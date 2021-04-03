import { EntityRepository, Repository } from 'typeorm';
import AppError from '../../../../shared/errors/AppError';
import Wallet from '../entities/Wallet';

@EntityRepository(Wallet)
class WalletRepository extends Repository<Wallet> {
  public async balance(id: string): Promise<string> {
    const wallet = await this.findOne(id);
    if (!wallet) {
      throw new AppError('Wallet not found', 404);
    }

    return wallet.balance.toString();
  }
}

export default WalletRepository;

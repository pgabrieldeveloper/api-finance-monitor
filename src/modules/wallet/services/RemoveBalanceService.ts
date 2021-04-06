import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Wallet from '../typeorm/entities/Wallet';
import WalletRepository from '../typeorm/repository/WalletRepository';
import SpentRepository from '../../spent/typeorm/repository/SpentRepository';
interface IRequest {
  id: string;
  value: number;
}
class RemoveBalanceService {
  public async execute({ id, value }: IRequest): Promise<Wallet> {
    const walletRepository = getCustomRepository(WalletRepository);
    const spentRepository = getCustomRepository(SpentRepository);
    const balance = await walletRepository.balance(id);
    const wallet = await walletRepository.findOne(id);
    if (!wallet) {
      throw new AppError('Wallet not found', 404);
    }
    const spent = spentRepository.create({ value, wallet });
    const newBalance = parseFloat(balance) - value;
    wallet.balance = newBalance;
    console.log(spent);
    spent.wallet = wallet;
    await spentRepository.save(spent);

    await walletRepository.save(wallet);
    return wallet;
  }
}

export default new RemoveBalanceService();

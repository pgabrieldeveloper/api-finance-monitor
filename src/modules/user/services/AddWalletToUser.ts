import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import UserRepository from '../typeorm/repository/UserRepository';
import CreateWalletService from '../../wallet/services/CreateWalletService';
import User from '../typeorm/entities/User';

interface IRequest {
  id: string;
  balance: number;
}
class AddWalletToUser {
  public async execute({ id, balance }: IRequest): Promise<User> {
    const userRepository = getCustomRepository(UserRepository);
    const user = await userRepository.findOne(id);

    if (!user) {
      throw new AppError('user Not Found', 404);
    }
    const wallet = await CreateWalletService.execute({ balance });

    user.wallet = wallet;

    await userRepository.save(user);
    return user;
  }
}

export default new AddWalletToUser();

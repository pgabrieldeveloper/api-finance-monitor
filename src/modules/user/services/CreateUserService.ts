import AppError from '../../../shared/errors/AppError';
import { CreateDateColumn, getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UserRepository from '../typeorm/repository/UserRepository';
import { hash } from 'bcryptjs';
import WalletRepository from '../../wallet/typeorm/repository/WalletRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: IRequest): Promise<User> {
    const userRepository = getCustomRepository(UserRepository);
    const walletRepository = getCustomRepository(WalletRepository);
    const wallet = await walletRepository.findOne(
      '3f5dcee0-72a5-4363-86e3-ffdb0f8f7366',
    );
    const user = await userRepository.findByEmail(email);
    if (user) {
      throw new AppError('User alredy Exists', 401);
    }
    const hasPw = await hash(password, 8);
    const newUser = userRepository.create({
      name,
      email,
      password: hasPw,
      wallet,
    });
    await userRepository.save(newUser);
    return newUser;
  }
}

export default new CreateUserService();

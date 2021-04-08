import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UserRepository from '../typeorm/repository/UserRepository';
import { hash } from 'bcryptjs';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: IRequest): Promise<User> {
    console.log('oioooooooooooooooooooi 1');
    const userRepository = getCustomRepository(UserRepository);
    console.log('oiiiiiiiiiiiii 1');
    console.log('oii 1');

    const user = await userRepository.findByEmail(email);
    console.log('oiidsadasdasdasd 1');

    if (user) {
      throw new AppError('User alredy Exists', 401);
    }
    console.log('oii 1');
    const hasPw = await hash(password, 8);
    const newUser = userRepository.create({
      name,
      email,
      password: hasPw,
    });
    await userRepository.save(newUser);
    return newUser;
  }
}

export default new CreateUserService();

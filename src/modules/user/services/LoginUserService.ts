import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import UserRepository from '../typeorm/repository/UserRepository';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import jwt from '../../../config';
import User from '../typeorm/entities/User';

interface IRequest {
  email: string;
  password: string;
}
interface IResponse {
  user: User;
  token: string;
}

class LoginUserService {
  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const userRepository = getCustomRepository(UserRepository);
    const user = await userRepository.findByEmail(email);
    if (!user) {
      throw new AppError('User not found', 404);
    }
    console.log(user);
    console.log(password);
    const confirmerdPassword = await compare(password, user.password);
    console.log(1);

    if (!confirmerdPassword) {
      throw new AppError('email/password invalid combination');
    }
    const token = sign({}, jwt.secret, {
      subject: user.id,
      expiresIn: jwt.expiresIn,
    });
    return { user, token };
  }
}
export default new LoginUserService();

import AppError from 'src/shared/errors/AppError';
import { EntityRepository, Repository } from 'typeorm';
import User from '../entities/User';

@EntityRepository(User)
class UserRepository extends Repository<User> {
  public async findByEmail(email: string): Promise<User> {
    const user = await this.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      throw new AppError('user not found', 404);
    }
    return user;
  }
}

export default UserRepository;

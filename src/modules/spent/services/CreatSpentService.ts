import { getCustomRepository } from 'typeorm';
import Spent from '../typeorm/entities/Spent';
import SpentRepository from '../typeorm/repository/SpentRepository';
import AppError from '../../../shared/errors/AppError';
import RemoveBalanceService from '../../wallet/services/RemoveBalanceService';
import UserRepository from '../../user/typeorm/repository/UserRepository';

interface IRequest {
  id: string;
  value: number;
}

class CreatSpentService {
  public async execute({ id, value }: IRequest): Promise<Spent> {
    console.log('passando pelo service1');
    const spentRepository = getCustomRepository(SpentRepository);
    console.log('passando pelo service2');

    const userRepository = getCustomRepository(UserRepository);
    console.log('passando pelo service3');

    const user = await userRepository.findOne(id);
    console.log('passando pelo service4');

    if (!user?.wallet) {
      throw new AppError('Wallet not found', 404);
    }
    console.log('passando pelo service5');

    const wallet = user.wallet;
    console.log('passando pelo service6');

    const spent = spentRepository.create({ value, wallet });
    console.log('passando pelo service7');

    await spentRepository.save(spent);
    console.log('passando pelo service8');

    const walletSpent = await RemoveBalanceService.execute({
      id: wallet.id,
      value,
    });
    console.log(walletSpent);

    return spent;
  }
}
export default new CreatSpentService();

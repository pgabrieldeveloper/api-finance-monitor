import { EntityRepository, Repository } from 'typeorm';
import Spent from '../entities/Spent';

@EntityRepository(Spent)
class SpentRepository extends Repository<Spent> {}

export default SpentRepository;

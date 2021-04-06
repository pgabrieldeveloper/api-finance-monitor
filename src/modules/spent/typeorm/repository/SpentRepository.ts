import { EntityRepository, Repository } from 'typeorm';
import Gain from '../entities/Spent';

@EntityRepository(Gain)
class SpentRepository extends Repository<Gain> {}

export default SpentRepository;

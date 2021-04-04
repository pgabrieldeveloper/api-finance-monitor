import { EntityRepository, Repository } from 'typeorm';
import Gain from '../entities/Splent';

@EntityRepository(Gain)
class SplentRepository extends Repository<Gain> {}

export default SplentRepository;

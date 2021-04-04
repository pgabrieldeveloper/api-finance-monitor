import { EntityRepository, Repository } from 'typeorm';
import Gain from '../entities/Gain';

@EntityRepository(Gain)
class GainRepository extends Repository<Gain> {}

export default GainRepository;

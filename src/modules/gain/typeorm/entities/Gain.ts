import Wallet from '../../../wallet/typeorm/entities/Wallet';
import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('gain')
class Gain {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  value: number;

  @ManyToOne(type => Wallet, gains => Gain)
  wallet: Wallet;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Gain;

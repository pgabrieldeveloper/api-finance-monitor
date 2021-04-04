import User from '../../../user/typeorm/entities/User';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Gain from '../../../gain/typeorm/entities/Gain';
import Spent from '../../../splent/typeorm/entities/Spent';

@Entity('wallet')
class Wallet {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  balance: number;

  @OneToOne(type => User, wallet => Wallet)
  user: User;

  @OneToMany(type => Gain, wallet => wallet.id)
  gains: Gain[];

  @OneToMany(type => Spent, wallet => wallet.id)
  splents: Spent[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Wallet;

import User from '../../../user/typeorm/entities/User';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Gain from '../../../gain/typeorm/entities/Gain';
import Spent from '../../../spent/typeorm/entities/Spent';

@Entity('wallet')
class Wallet {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  balance: number;

  @OneToOne(type => User, wallet => Wallet)
  user: User;

  @OneToMany(type => Gain, gain => gain.wallet, { eager: true })
  gains: Gain[];

  @OneToMany(type => Spent, spent => spent.wallet, { eager: true })
  splents: Spent[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Wallet;

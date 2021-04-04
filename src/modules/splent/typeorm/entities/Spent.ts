import Wallet from '../../../wallet/typeorm/entities/Wallet';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('spent')
class Spent {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  value: number;

  @ManyToOne(type => Wallet, spent => Spent)
  wallet: Wallet;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Spent;

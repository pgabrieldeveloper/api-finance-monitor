import User from '../../../user/typeorm/entities/User';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('wallet')
class Wallet {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  balance: number;

  @OneToOne(type => User, wallet => Wallet)
  user: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Wallet;

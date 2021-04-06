import Wallet from '../../../wallet/typeorm/entities/Wallet';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('gain')
class Gain {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  value: number;

  @ManyToOne(type => Wallet, gains => gains)
  @JoinColumn({ name: 'walletId' })
  wallet: Wallet;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Gain;

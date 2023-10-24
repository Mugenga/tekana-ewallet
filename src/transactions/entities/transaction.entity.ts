import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, Index } from 'typeorm';
import { Wallet } from '../../wallets/entities/wallet.entity';

@Entity()
@Entity()
@Index('idx_transaction_wallet_id', ['walletId'])// Create an index on the transaction wallet id
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  walletId: number;

  @ManyToOne(() => Wallet, (wallet) => wallet.transactions) // A Wallet can have multiple transactions
  wallet: Wallet;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @Column({ type: 'enum', enum: ['pending', 'failed', 'success'], default: 'pending' }) // Define the trans status as enum
  status: 'pending' | 'failed' | 'success';

  @Column({ type: 'enum', enum: ['RWF', 'USD'], default: 'RWF' }) // Define the currency as an enum
  currency: 'RWF' | 'USD';

  @CreateDateColumn()
  createdAt: Date;
}


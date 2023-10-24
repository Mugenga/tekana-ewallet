import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    ManyToOne, 
    OneToMany, 
    CreateDateColumn,
    UpdateDateColumn, 
    Index 
} from 'typeorm';
import { Customer } from '../../customers/entities/customer.entity';
import { Transaction } from '../../transactions/entities/transaction.entity';

@Entity()
@Index('idx_wallet_customer_id', ['customerId']) // Create an index for the wallet entity
export class Wallet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customerId: number;

  @ManyToOne(() => Customer) // A customer can have multiple wallets
  customer: Customer;

  @OneToMany(() => Transaction, (transaction) => transaction.wallet)
  transactions: Transaction[];

  @Column({ type: 'enum', enum: ['RWF', 'USD'], default: 'RWF' }) // Define the currency as an enum
  currency: 'RWF' | 'USD';

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}


  
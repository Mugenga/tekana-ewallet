import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './entities/transaction.entity';
import { TransactionDto } from './dto/transaction.dto';

/* 
    Service to handle Transaction application logic
*/

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction> // initialize transaction repository 
  ) {}

  async create(transactionDto: TransactionDto) {
    return this.transactionRepository.save(transactionDto); // Create a transaction
  }

  async getAll() {
    return this.transactionRepository.find(); // Read transactions
  }
}

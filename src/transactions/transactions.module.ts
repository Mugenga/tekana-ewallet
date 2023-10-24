import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';
import { Transaction } from './entities/transaction.entity';
import { WalletsModule } from '../wallets/wallets.module'; // Import WalletsModule

@Module({
  imports: [TypeOrmModule.forFeature([Transaction]), WalletsModule], // Include WalletsModule
  controllers: [TransactionsController],
  providers: [TransactionsService],
  exports: [TransactionsService], // Export the TransactionsService for use in other modules
})

export class TransactionsModule {}

import { Controller, Post, Get, Body, HttpStatus } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionDto } from './dto/transaction.dto';

/*  
    Controller for handling Transactions HTTP requests,
    Base Route Name /transactions,
*/

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  // Create a new Transaction with validation and error handling
  @Post()
  async createTransaction(@Body() transactionDto: TransactionDto) {
    try {
        const wallet = await this.transactionsService.create(transactionDto);
        return { statusCode: HttpStatus.CREATED, data: wallet };
      } catch (error) {
        return { statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: 'Failed to create transaction' };
      }
  }

  // Method to read transactions 
  @Get()
  getTransactions() {
    return this.transactionsService.getAll();
  }
}

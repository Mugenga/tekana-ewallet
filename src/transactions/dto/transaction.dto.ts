// Import validators to validate incoming data
import { IsNumber, IsPositive, IsEnum } from 'class-validator';

export class TransactionDto {
  @IsNumber()
  walletId: number;

  @IsNumber()
  @IsPositive()
  amount: number;

  @IsEnum(['RWF', 'USD'])
  currency: 'RWF' | 'USD' ;
}

// Import validators to validate incoming data
import { IsNumber, IsNotEmpty, IsEnum, IsOptional } from 'class-validator';

export class WalletDto {
  @IsNumber()
  @IsNotEmpty()
  customerId: number;

  @IsEnum(['RWF', 'USD'])
  @IsOptional()
  currency: 'RWF' | 'USD' ;
}

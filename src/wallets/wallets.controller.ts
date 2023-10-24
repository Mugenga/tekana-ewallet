
import { Body, Controller, Post, Get, HttpStatus, ValidationPipe } from '@nestjs/common';
import { WalletDto } from './dto/wallet.dto';
import { WalletsService } from './wallets.service';

/*  
    Controller for handling Wallet HTTP requests,
    Base Route Name /wallets,
*/

@Controller('wallets')
export class WalletsController {
  constructor(private readonly walletsService: WalletsService) {}

  // Create a new Wallet with validation and error handling

  @Post()
  async create(@Body(new ValidationPipe()) walletDto: WalletDto) {
    try {
      const wallet = await this.walletsService.create(walletDto);
      return { statusCode: HttpStatus.CREATED, data: wallet };
    } catch (error) {
      return { statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: 'Failed to create wallet' };
    }
  }

  // Method to read wallets 
  @Get()
  getWallets() {
    return this.walletsService.getAll();
  }
}


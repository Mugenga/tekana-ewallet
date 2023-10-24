import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Wallet } from './entities/wallet.entity';
import { WalletDto } from './dto/wallet.dto';

/* 
    Service to handle wallet application logic
*/

@Injectable()
export class WalletsService {
  constructor(
    @InjectRepository(Wallet)
    private readonly walletRepository: Repository<Wallet>, // initialize wallet repository 
  ) {}

  async create(walletDto: WalletDto) {
    return this.walletRepository.save(walletDto); // Create indivudual wallet
  }

  async getAll() {
    return this.walletRepository.find(); // Read All Wallets
  }
}

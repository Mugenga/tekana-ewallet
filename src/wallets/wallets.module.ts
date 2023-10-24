import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletsController } from './wallets.controller';
import { WalletsService } from './wallets.service';
import { Wallet } from './entities/wallet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Wallet])], // Define entities used in this module
  controllers: [WalletsController],
  providers: [WalletsService],
  exports: [WalletsService], // Export the WalletsService for use in other modules
})
export class WalletsModule {}

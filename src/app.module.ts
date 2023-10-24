import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import * as dotenv from 'dotenv';

// Import and configure individual modules
import { CustomersModule } from './customers/customers.module';
import { WalletsModule } from './wallets/wallets.module';
import { TransactionsModule } from './transactions/transactions.module';

dotenv.config(); // Load environment variables from .env

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST, // Read environment variables
      port: parseInt(process.env.DB_PORT, 10), // Parse the port as an integer
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    CustomersModule, 
    WalletsModule,
    TransactionsModule
  ],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}

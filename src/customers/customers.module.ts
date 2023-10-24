// Import required modules and packages

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
import { Customer } from './entities/customer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Customer])], // Define entities used in this module
  controllers: [CustomersController],
  providers: [CustomersService], 
  exports: [CustomersService],// Export the CustomerService for use in other modules
})
export class CustomersModule {}

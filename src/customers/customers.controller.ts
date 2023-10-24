import { Body, Controller, Post, Get, HttpStatus, ValidationPipe } from '@nestjs/common';
import { CustomerDto } from './dto/customer.dto';
import { CustomersService } from './customers.service';

/*  
    Controller for handling Customers API requests,
    Base Route Name /customers,
*/

@Controller('customers')
export class CustomersController {
  constructor(private readonly customerService: CustomersService) {}

  // Create a new customer with validation and error handling

  @Post()
  async create(@Body(new ValidationPipe()) createCustomerDto: CustomerDto) {
    try {
      const customer = await this.customerService.create(createCustomerDto);
      return { statusCode: HttpStatus.CREATED, data: customer };
    } catch (error) {
      return { statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: 'Failed to create customer' };
    }
  }

  // Method to read customers 
  @Get()
  async getCustomers() {
    try {
      const customers = await this.customerService.getAll();
      return { statusCode: HttpStatus.OK, data: customers } ;
    } catch (error) {
      return { statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: 'Failed to fetch customer' };
    }
    
  }
}

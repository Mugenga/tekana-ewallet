import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';
import { CustomerDto } from './dto/customer.dto';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  // Get All Customers from the database
  async getAll() {
    return this.customerRepository.find();
  }

  // Create a single customer
  async create(customerDto: CustomerDto) {
    return this.customerRepository.save(customerDto);
  }
}

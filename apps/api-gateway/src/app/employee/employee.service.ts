import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreateEmployeeDto } from './dto/create-employee.dto';

@Injectable()
export class EmployeeService implements OnModuleInit {
  constructor(
    @Inject('EMPLOYEE_SERVICE') private readonly employeeKafka: ClientKafka,
  ) {}
  async onModuleInit() {
    this.employeeKafka.subscribeToResponseOf('findAllAsyncTask');
    this.employeeKafka.subscribeToResponseOf('employee.create');
    this.employeeKafka.subscribeToResponseOf('updateAsyncTask');
    await this.employeeKafka.connect();
  }
  getById() {}
  get(data) {
    this.employeeKafka.emit('findAllAsyncTask', data);
  }
  createEmployee(data: CreateEmployeeDto) {
    this.employeeKafka.emit('updateAsyncTask', data);
    return { message: 'Employee creation event sent' };
  }
}

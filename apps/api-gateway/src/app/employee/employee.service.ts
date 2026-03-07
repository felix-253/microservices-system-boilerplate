import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class EmployeeService implements OnModuleInit {
  constructor(
    @Inject('EMPLOYEE_SERVICE') private readonly employeeKafka: ClientKafka,
  ) {}

  async onModuleInit() {
    console.log('Subscribing to reply topic...');
    this.employeeKafka.subscribeToResponseOf('findAllAsyncTask');

    console.log('Connecting Kafka...');
    await this.employeeKafka.connect();

    console.log('Kafka connected successfully');
  }
  async get(data: any): Promise<any> {
    return lastValueFrom(
      this.employeeKafka.send('findAllAsyncTask', {
        name: 'felix',
        age: 24,
      }),
    );
  }

  createEmployee(data: CreateEmployeeDto) {
    return this.employeeKafka.emit('createAsyncTask', data);
  }
}

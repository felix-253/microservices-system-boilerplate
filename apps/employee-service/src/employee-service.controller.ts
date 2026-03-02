import { Controller, Get } from '@nestjs/common';
import { EmployeeServiceService } from './employee-service.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller()
export class EmployeeServiceController {
  constructor(
    private readonly employeeServiceService: EmployeeServiceService,
  ) {}

  @MessagePattern({ cmd: 'sum' })
  accumulate(data: number[]): Observable<number> {
    return from([1, 2, 3]);
  }

  @EventPattern('user_created')
  async handleUserCreated(data: Record<string, unknown>) {
    console.log('logogg', data);
  }
}

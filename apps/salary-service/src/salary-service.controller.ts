import { Controller, Get } from '@nestjs/common';
import { SalaryServiceService } from './salary-service.service';

@Controller()
export class SalaryServiceController {
  constructor(private readonly salaryServiceService: SalaryServiceService) {}

  @Get()
  getHello(): string {
    return this.salaryServiceService.getHello();
  }
}

import { Module } from '@nestjs/common';
import { SalaryServiceController } from './salary-service.controller';
import { SalaryServiceService } from './salary-service.service';

@Module({
  imports: [],
  controllers: [SalaryServiceController],
  providers: [SalaryServiceService],
})
export class SalaryServiceModule {}

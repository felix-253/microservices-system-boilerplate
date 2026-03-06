import { Module } from '@nestjs/common';
import { AsyncTaskModule } from './app/async-task/async-task.module';

@Module({
  imports: [AsyncTaskModule],
})
export class EmployeeServiceModule {}

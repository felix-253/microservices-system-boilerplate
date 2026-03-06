import { Module } from '@nestjs/common';
import { AsyncTaskService } from './async-task.service';
import { AsyncTaskController } from './async-task.controller';

@Module({
  controllers: [AsyncTaskController],
  providers: [AsyncTaskService],
})
export class AsyncTaskModule {}

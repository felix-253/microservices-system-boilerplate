import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { AsyncTaskService } from './async-task.service';
import { CreateAsyncTaskDto } from './dto/create-async-task.dto';
import { UpdateAsyncTaskDto } from './dto/update-async-task.dto';

@Controller()
export class AsyncTaskController {
  constructor(private readonly asyncTaskService: AsyncTaskService) {}

  @MessagePattern('createAsyncTask')
  create(@Payload() createAsyncTaskDto: CreateAsyncTaskDto) {
    return this.asyncTaskService.create(createAsyncTaskDto);
  }

  @MessagePattern('findAllAsyncTask')
  findAll(@Payload() data: any) {
    return this.asyncTaskService.findAll(data);
  }

  @MessagePattern('findOneAsyncTask')
  findOne(@Payload() id: number) {
    return this.asyncTaskService.findOne(id);
  }

  @EventPattern('updateAsyncTask')
  update(@Payload() updateAsyncTaskDto: UpdateAsyncTaskDto) {
    console.log('RUN', updateAsyncTaskDto);
    return this.asyncTaskService.update(
      updateAsyncTaskDto.id,
      updateAsyncTaskDto,
    );
  }

  @MessagePattern('removeAsyncTask')
  remove(@Payload() id: number) {
    return this.asyncTaskService.remove(id);
  }
}

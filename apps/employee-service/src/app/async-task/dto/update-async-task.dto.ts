import { PartialType } from '@nestjs/mapped-types';
import { CreateAsyncTaskDto } from './create-async-task.dto';

export class UpdateAsyncTaskDto extends PartialType(CreateAsyncTaskDto) {
  id: number;
}

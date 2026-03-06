import { Injectable } from '@nestjs/common';
import { CreateAsyncTaskDto } from './dto/create-async-task.dto';
import { UpdateAsyncTaskDto } from './dto/update-async-task.dto';

@Injectable()
export class AsyncTaskService {
  create(createAsyncTaskDto: CreateAsyncTaskDto) {
    return 'This action adds a new asyncTask';
  }

  findAll() {
    console.log('FINDNNNNDNDNDN');
    return `This action returns all asyncTask`;
  }

  findOne(id: number) {
    return `This action returns a #${id} asyncTask`;
  }

  update(id: number, updateAsyncTaskDto: UpdateAsyncTaskDto) {
    console.log('RUNNN');
    return `This action updates a #${id} asyncTask`;
  }

  remove(id: number) {
    return `This action removes a #${id} asyncTask`;
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { CreateAsyncTaskDto } from './dto/create-async-task.dto';
import { UpdateAsyncTaskDto } from './dto/update-async-task.dto';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';

@Injectable()
export class AsyncTaskService {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly log: Logger,
    @InjectEntityManager() private readonly em: EntityManager,
  ) {}
  async create(createAsyncTaskDto: CreateAsyncTaskDto) {
    const query = `
    INSERT INTO employees."2019_nov"
    (event_time,event_type,product_id,category_id,category_code,brand,price,user_id,user_session)
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
  `;

    const values = [
      createAsyncTaskDto.event_time,
      createAsyncTaskDto.event_type,
      createAsyncTaskDto.product_id,
      createAsyncTaskDto.category_id,
      createAsyncTaskDto.category_code,
      createAsyncTaskDto.brand,
      createAsyncTaskDto.price,
      createAsyncTaskDto.user_id,
      createAsyncTaskDto.user_session,
    ];

    const result = await this.em.query(query, values);

    return {
      message: 'Insert success',
      data: result,
    };
  }

  async findAll(data: any) {
    try {
      this.log.info('Fetching all async tasks');

      // Add your query logic here

      return {
        data: [data],
        message: 'Fetch all async tasks success 1313',
      };
    } catch (error) {
      this.log.error('Error fetching async tasks:', error);
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      this.log.info('Fetching async task with id:', { id });

      // Add your query logic here

      return {
        data: null,
        message: `Fetch async task #${id} success`,
      };
    } catch (error) {
      this.log.error('Error fetching async task:', error);
      throw error;
    }
  }

  async update(id: number, updateAsyncTaskDto: UpdateAsyncTaskDto) {
    try {
      this.log.info('Updating async task with id:', { id, updateAsyncTaskDto });

      // Add your update logic here
      // Example: UPDATE query or service call

      this.log.info('Async task updated successfully');

      return {
        message: `Update success for id ${id}`,
        success: true,
      };
    } catch (error) {
      this.log.error('Error updating async task:', error);
      throw error;
    }
  }

  async remove(id: number) {
    try {
      this.log.info('Removing async task with id:', { id });

      // Add your delete logic here

      this.log.info('Async task removed successfully');

      return {
        message: `Remove success for id ${id}`,
        success: true,
      };
    } catch (error) {
      this.log.error('Error removing async task:', error);
      throw error;
    }
  }
}

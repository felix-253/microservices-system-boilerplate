import { Injectable } from '@nestjs/common';

@Injectable()
export class SalaryServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}

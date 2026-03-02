import { Test, TestingModule } from '@nestjs/testing';
import { SalaryServiceController } from './salary-service.controller';
import { SalaryServiceService } from './salary-service.service';

describe('SalaryServiceController', () => {
  let salaryServiceController: SalaryServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SalaryServiceController],
      providers: [SalaryServiceService],
    }).compile();

    salaryServiceController = app.get<SalaryServiceController>(SalaryServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(salaryServiceController.getHello()).toBe('Hello World!');
    });
  });
});

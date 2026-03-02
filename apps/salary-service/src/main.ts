import { NestFactory } from '@nestjs/core';
import { SalaryServiceModule } from './salary-service.module';

async function bootstrap() {
  const app = await NestFactory.create(SalaryServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();

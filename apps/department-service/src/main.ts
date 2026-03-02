import { NestFactory } from '@nestjs/core';
import { DepartmentServiceModule } from './department-service.module';

async function bootstrap() {
  const app = await NestFactory.create(DepartmentServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();

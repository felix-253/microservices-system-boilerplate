import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from 'apps/microservices/src/app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'employee-service',
        brokers: ['kafka:9092'],
      },
      consumer: {
        groupId: 'employee-consumer',
      },
    },
  });

  await app.listen();
}
bootstrap();

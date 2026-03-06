import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { EmployeeServiceModule } from './employee-service.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(EmployeeServiceModule, {
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'employee-service',
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'employee-consumer',
        allowAutoTopicCreation: true,
      },
      subscribe: {
        fromBeginning: true,
      },
    },
  });

  await app.listen();

  console.log('Employee Kafka microservice started');
}
bootstrap();

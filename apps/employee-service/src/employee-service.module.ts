import { Module } from '@nestjs/common';
import { AsyncTaskModule } from './app/async-task/async-task.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { envConfig } from './config/env/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { postgresConfig } from './config/database/postgres.config';
import { WinstonModule } from 'nest-winston';
import { winstonLogger } from './config/logger/winston.config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './config/interceptors/logger.interceptor';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: 'apps/employee-service/.env',
      validationSchema: envConfig,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => postgresConfig(config),
    }),
    AsyncTaskModule,
    WinstonModule.forRoot(winstonLogger),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class EmployeeServiceModule {}

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { envConfig } from './config/env/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { postgresConfig } from './config/database/postgres.config';
import { WinstonModule } from 'nest-winston';
import { winstonLogger } from './config/logger/winston.config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './config/interceptors/logger.interceptor';
import { EmployeeModule } from './app/employee/employee.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'apps/api-gateway/.env',
      isGlobal: true,
      validationSchema: envConfig,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => postgresConfig(config),
    }),
    WinstonModule.forRoot(winstonLogger),
    EmployeeModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class ApiGatewayModule {}

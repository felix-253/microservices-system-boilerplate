import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const postgresConfig = (config: ConfigService): TypeOrmModuleOptions => {
  return {
    type: 'postgres',
    host: config.getOrThrow<string>('DB_HOST'),
    port: config.getOrThrow<number>('DB_PORT'),
    username: config.getOrThrow<string>('DB_USER'),
    password: config.getOrThrow<string>('DB_PASS'),
    database: config.getOrThrow<string>('DB_NAME'),
    autoLoadEntities: true,
    synchronize: false,
  };
};

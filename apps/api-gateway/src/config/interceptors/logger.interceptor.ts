import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  Inject,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { Request, Response } from 'express';
import { KafkaContext } from '@nestjs/microservices';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import type { Logger } from 'winston';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER)
    private readonly logger: Logger,
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const start = Date.now();
    const type = context.getType<'http' | 'rpc'>();

    return next.handle().pipe(
      tap({
        next: () => {
          const duration = Date.now() - start;

          if (type === 'http') {
            this.logHttp(context, duration);
          } else if (type === 'rpc') {
            this.logKafka(context, duration);
          }
        },

        error: (err: unknown) => {
          const duration = Date.now() - start;

          if (err instanceof Error) {
            this.logger.error(err.message, {
              duration,
              stack: err.stack,
            });
          } else {
            this.logger.error('Unknown error', { duration });
          }
        },
      }),
    );
  }

  // ================= HTTP =================

  private logHttp(context: ExecutionContext, duration: number): void {
    const http = context.switchToHttp();

    const req = http.getRequest<Request>();
    const res = http.getResponse<Response>();

    this.logger.info('HTTP Request', {
      method: req.method,
      url: req.originalUrl,
      status: res.statusCode,
      duration: `${duration}ms`,
      ip: req.ip,
    });
  }

  // ================= Kafka =================

  private logKafka(context: ExecutionContext, duration: number): void {
    const rpc = context.switchToRpc();
    const ctx = rpc.getContext<unknown>();

    if (!(ctx instanceof KafkaContext)) return;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    const topic: string = ctx.getTopic();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    const partition: number = ctx.getPartition();

    this.logger.info('Kafka Message', {
      topic,
      partition,
      duration: `${duration}ms`,
    });
  }
}

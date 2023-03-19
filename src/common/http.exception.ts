import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  // constructor(
  // private readonly logger: ILoggerService
  // ) {}

  catch(exception, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    // const req = ctx.getRequest<Request>();

    const message = (exception as any).message;
    const status = HttpStatus.INTERNAL_SERVER_ERROR;
    // let code = 'HttpException';

    if (exception instanceof HttpException) {
      const detail = exception.getResponse();
      return res.status(exception.getStatus()).json(detail);
    }

    // Catch 3rt party exceptions and unhandled exceptions
    switch (
      exception.constructor
      // 1. typeorm exception
      // case QueryFailedError: // this is a TypeOrm error
      //   status = HttpStatus.UNPROCESSABLE_ENTITY;
      //   message = (exception as QueryFailedError).message;
      //   code = (exception as any).code;
      //   break;
    ) {
    }

    // Send alert here or in logging server
    if (status === HttpStatus.INTERNAL_SERVER_ERROR) {
      // this.logger.error(
      //   `[${new Date()}] [${req.method}] ${
      //     req.url
      //   } / code:${code}- ${exception} - ${(exception as any).stack}}`,
      // );
    }

    res.status(status).json({ message });
  }
}

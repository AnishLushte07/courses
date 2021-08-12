import { Injectable, Logger } from '@nestjs/common';
import { PinoLogger } from './shared/logger/pino.logger.service';

@Injectable()
export class AppService {
  constructor(private log: PinoLogger) {
    console.log(log);
  }

  getHello(): string {
    this.log.log('klajsdlkfj kl')
    return 'Hello World! akshkj';
  }
}

import pino from "pino";
import * as os from "os";

import { LoggerService } from "@nestjs/common";
import { Injectable } from '@nestjs/common';
import { ConfigService } from "@nestjs/config";
export interface PinoLogger {
  pino?: pino.Logger;
}

@Injectable()
export class PinoLogger implements LoggerService {
  constructor(private config: ConfigService) {
    console.log('pino initialted')
    this.pino = pino({
      useLevelLabels: true,
      prettyPrint: this.config.get("environment") === "development",
      level: this.config.get("log_level"),
      base: {
        hostName: os.hostname(),
        platform: os.platform(),
        processId: process.pid,
        timestamp: new Date(),
      },
    });
  }

  /**
   * Write a 'log' level log.
   */
  log(message: any, ...optionalParams: any[]) {
    console.log(message)
    this.pino.info(message)
  }

  /**
   * Write an 'error' level log.
   */
  error(message: any, ...optionalParams: any[]) {
    console.log(message)
    this.pino.error(message);
  }

  /**
   * Write a 'warn' level log.
   */
  warn(message: any, ...optionalParams: any[]) {
    console.log(message)
    this.pino.warn(message);
  }

  /**
   * Write a 'debug' level log.
   */
  debug?(message: any, ...optionalParams: any[]) {
    console.log(message)
    this.pino.debug(message);
  }

  /**
   * Write a 'verbose' level log.
   */
  verbose?(message: any, ...optionalParams: any[]) {
    console.log(message)

        this.pino.verbose(message);
  }
}

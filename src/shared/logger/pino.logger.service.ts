import pino from "pino";
import * as os from "os";

import { LoggerService } from "@nestjs/common";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
export interface PinoLogger {
  pino?: pino.Logger;
}

@Injectable()
export class PinoLogger implements LoggerService {
  constructor(private config: ConfigService) {
    this.pino = pino({
      useLevelLabels: true,
      prettyPrint: this.config.get("environment") === "development",
      level: this.config.get("log_level"),
      base: {
        hostName: os.hostname(),
        platform: os.platform(),
        processId: process.pid,
        timestamp: new Date(),
        app_name: this.config.get("app_name"),
      },
    });
  }

  /**
   * Write a 'log' level log.
   */
  log(message: any, ...optionalParams: any[]) {
    this.pino.info(message);
  }

  /**
   * Write an 'error' level log.
   */
  error(message: any, ...optionalParams: any[]) {
    this.pino.error(message);
  }

  /**
   * Write a 'warn' level log.
   */
  warn(message: any, ...optionalParams: any[]) {
    this.pino.warn(message);
  }

  /**
   * Write a 'debug' level log.
   */
  debug?(message: any, ...optionalParams: any[]) {
    this.pino.debug(message);
  }

  /**
   * Write a 'verbose' level log.
   */
  verbose?(message: any, ...optionalParams: any[]) {
    this.pino.verbose(message);
  }
}

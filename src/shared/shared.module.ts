import { Module } from "@nestjs/common";

import { PinoLogger } from "./logger/pino.logger.service";

@Module({
  providers: [PinoLogger],
  exports: [PinoLogger],
})
export class SharedModule {}

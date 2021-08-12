import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { ConfigModule } from "@nestjs/config";
import configuration from "./config/configuration";
import { LoggerModule } from "./shared/logger/pino.logger.module";

@Module({
  imports: [
    LoggerModule,
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [LoggerModule]
})
export class AppModule {}

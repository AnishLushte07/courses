import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { ConfigModule, ConfigService } from "@nestjs/config";
import configuration from "./config/configuration";
import { LoggerModule } from "./shared/logger/pino.logger.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CoursesModule } from "./modules/courses/courses.module";
import databaseConfig from "./config/database.config";
@Module({
  imports: [
    LoggerModule,
    ConfigModule.forRoot({
      load: [configuration, databaseConfig],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) =>
        configService.get("pgDatabase"),
      inject: [ConfigService],
    }),
    CoursesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [LoggerModule],
})
export class AppModule {}

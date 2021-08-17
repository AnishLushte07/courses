import {
  Module,
  NestModule,
  MiddlewareConsumer,
  BeforeApplicationShutdown,
} from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import configuration from "./config/configuration";
// import { LoggerModule } from "./shared/logger/pino.logger.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CoursesModule } from "./modules/courses/courses.module";
import databaseConfig from "./config/database.config";
import { SharedModule } from "./shared/shared.module";
import { StudentCoursesModule } from "./modules/student-courses/student-courses.module";
import { CourseSectionsModule } from "./modules/course-sections/course-sections.module";
import { CourseSectionResourcesModule } from "./modules/course-section-resources/course-section-resources.module";
import { StudentCourseProgressModule } from "./modules/student-course-progress/student-course-progress.module";
import { RequestLoggerMiddleware } from "./shared/middleware";
@Module({
  imports: [
    SharedModule,
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
    CourseSectionsModule,
    CourseSectionResourcesModule,
    StudentCoursesModule,
    StudentCourseProgressModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule implements NestModule, BeforeApplicationShutdown {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(RequestLoggerMiddleware).forRoutes("*");
  }

  beforeApplicationShutdown(signal: string) {
    // before shutdown processing
    console.log("Shutting down service", signal);
  }
}

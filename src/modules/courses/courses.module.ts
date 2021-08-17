import { Module } from "@nestjs/common";
import { CoursesService } from "./courses.service";
import { CoursesController } from "./courses.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Course } from "./course.entity";
import { SqsModule } from "src/aws/sqs/sqs.module";

@Module({
  imports: [TypeOrmModule.forFeature([Course]), SqsModule.register()],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}

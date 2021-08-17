import { Module } from "@nestjs/common";
import { StudentCoursesService } from "./student-courses.service";
import { StudentCoursesController } from "./student-courses.controller";
import { StudentCourse } from "./student-course.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([StudentCourse])],
  controllers: [StudentCoursesController],
  providers: [StudentCoursesService],
})
export class StudentCoursesModule {}

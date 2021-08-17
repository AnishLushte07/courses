import { Module } from "@nestjs/common";
import { StudentCourseProgressService } from "./student-course-progress.service";
import { StudentCourseProgressController } from "./student-course-progress.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StudentCourseProgress } from "./student-course-progress.entity";

@Module({
  imports: [TypeOrmModule.forFeature([StudentCourseProgress])],
  controllers: [StudentCourseProgressController],
  providers: [StudentCourseProgressService],
})
export class StudentCourseProgressModule {}

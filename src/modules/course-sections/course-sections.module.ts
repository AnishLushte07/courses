import { Module } from "@nestjs/common";
import { CourseSectionsService } from "./course-sections.service";
import { CourseSectionsController } from "./course-sections.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CourseSection } from "./course-section.entity";

@Module({
  imports: [TypeOrmModule.forFeature([CourseSection])],
  controllers: [CourseSectionsController],
  providers: [CourseSectionsService],
})
export class CourseSectionsModule {}

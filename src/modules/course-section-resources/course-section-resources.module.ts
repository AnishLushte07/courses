import { Module } from "@nestjs/common";
import { CourseSectionResourcesService } from "./course-section-resources.service";
import { CourseSectionResourcesController } from "./course-section-resources.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CourseSectionResource } from "./course-section-resource.entity";

@Module({
  imports: [TypeOrmModule.forFeature([CourseSectionResource])],
  controllers: [CourseSectionResourcesController],
  providers: [CourseSectionResourcesService],
})
export class CourseSectionResourcesModule {}

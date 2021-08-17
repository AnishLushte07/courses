import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CourseSectionResourcesService } from './course-section-resources.service';
import { CreateCourseSectionResourceDto } from './dto/create-course-section-resource.dto';
import { UpdateCourseSectionResourceDto } from './dto/update-course-section-resource.dto';

@Controller('course-section-resources')
export class CourseSectionResourcesController {
  constructor(private readonly courseSectionResourcesService: CourseSectionResourcesService) {}

  @Post()
  create(@Body() createCourseSectionResourceDto: CreateCourseSectionResourceDto) {
    return this.courseSectionResourcesService.create(createCourseSectionResourceDto);
  }

  @Get()
  findAll() {
    return this.courseSectionResourcesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseSectionResourcesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseSectionResourceDto: UpdateCourseSectionResourceDto) {
    return this.courseSectionResourcesService.update(+id, updateCourseSectionResourceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseSectionResourcesService.remove(+id);
  }
}

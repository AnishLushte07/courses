import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CourseSectionsService } from './course-sections.service';
import { CreateCourseSectionDto } from './dto/create-course-section.dto';
import { UpdateCourseSectionDto } from './dto/update-course-section.dto';

@Controller('course-sections')
export class CourseSectionsController {
  constructor(private readonly courseSectionsService: CourseSectionsService) {}

  @Post()
  create(@Body() createCourseSectionDto: CreateCourseSectionDto) {
    return this.courseSectionsService.create(createCourseSectionDto);
  }

  @Get()
  findAll() {
    return this.courseSectionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseSectionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseSectionDto: UpdateCourseSectionDto) {
    return this.courseSectionsService.update(+id, updateCourseSectionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseSectionsService.remove(+id);
  }
}

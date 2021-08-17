import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentCourseProgressService } from './student-course-progress.service';
import { CreateStudentCourseProgressDto } from './dto/create-student-course-progress.dto';
import { UpdateStudentCourseProgressDto } from './dto/update-student-course-progress.dto';

@Controller('student-course-progress')
export class StudentCourseProgressController {
  constructor(private readonly studentCourseProgressService: StudentCourseProgressService) {}

  @Post()
  create(@Body() createStudentCourseProgressDto: CreateStudentCourseProgressDto) {
    return this.studentCourseProgressService.create(createStudentCourseProgressDto);
  }

  @Get()
  findAll() {
    return this.studentCourseProgressService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentCourseProgressService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentCourseProgressDto: UpdateStudentCourseProgressDto) {
    return this.studentCourseProgressService.update(+id, updateStudentCourseProgressDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentCourseProgressService.remove(+id);
  }
}

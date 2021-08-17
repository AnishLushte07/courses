import { Injectable } from '@nestjs/common';
import { CreateStudentCourseProgressDto } from './dto/create-student-course-progress.dto';
import { UpdateStudentCourseProgressDto } from './dto/update-student-course-progress.dto';

@Injectable()
export class StudentCourseProgressService {
  create(createStudentCourseProgressDto: CreateStudentCourseProgressDto) {
    return 'This action adds a new studentCourseProgress';
  }

  findAll() {
    return `This action returns all studentCourseProgress`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studentCourseProgress`;
  }

  update(id: number, updateStudentCourseProgressDto: UpdateStudentCourseProgressDto) {
    return `This action updates a #${id} studentCourseProgress`;
  }

  remove(id: number) {
    return `This action removes a #${id} studentCourseProgress`;
  }
}

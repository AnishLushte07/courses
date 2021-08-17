import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentCourseProgressDto } from './create-student-course-progress.dto';

export class UpdateStudentCourseProgressDto extends PartialType(CreateStudentCourseProgressDto) {}

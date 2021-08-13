import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateCourseDto } from "./dto/create-course.dto";
import { Repository } from "typeorm";
import { Course } from "./course.entity";

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly coursesRepository: Repository<Course>,
  ) {}

  create(createCourseDto: CreateCourseDto) {
    const course = new Course();
    course.name = "Sample course";
    course.description = "sample description";

    return this.coursesRepository.save(course);
  }

  findAll() {
    return this.coursesRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} course`;
  }

  // update(id: number, updateCourseDto: UpdateCourseDto) {
  //   return `This action updates a #${id} course`;
  // }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}

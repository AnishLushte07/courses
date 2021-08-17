import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { StudentCourseState } from "./student-course.constant";
import { StudentCourse } from "./student-course.entity";
import { CourseState } from "../courses/course.constant";

@Injectable()
export class StudentCoursesService {
  constructor(
    @InjectRepository(StudentCourse)
    private readonly studentCoursesRepository: Repository<StudentCourse>,
  ) {}

  hasCourses(said: number) {
    return this.studentCoursesRepository.count({
      where: {
        student_admission_id: said,
        state: StudentCourseState.ACTIVE,
      },
    });
  }

  async studentCourses(said: number, data: any = {}) {
    console.log(data.asda.asd);
    return this.studentCoursesRepository
      .createQueryBuilder("student_courses")
      .innerJoinAndSelect(
        "student_courses.course",
        "courses",
        "courses.state = :state",
        { state: CourseState.ACTIVE },
      )
      .where("student_courses.student_admission_id = :said", { said })
      .andWhere("student_courses.state = :state", {
        state: StudentCourseState.ACTIVE,
      })
      .groupBy("courses.subject_id")
      .select([
        "student_courses.id",
        "student_courses.type",
        "courses.id",
        "courses.subject_id",
        "courses.subject_name",
      ])
      .getMany();
  }
}

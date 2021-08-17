import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import * as _ from "lodash";
import { StudentCoursesService } from "./student-courses.service";

@Controller("student-courses")
export class StudentCoursesController {
  constructor(private readonly studentCoursesService: StudentCoursesService) {}
  @Get(":said/hasCourses")
  hasCourses(@Param("said", ParseIntPipe) said: number) {
    return this.studentCoursesService.hasCourses(said);
  }

  @Get(":said/courses")
  async studentCourses(@Param("said", ParseIntPipe) said: number) {
    const data = await this.studentCoursesService.studentCourses(said);

    const subjectGroup = _.groupBy(data, function (v) {
      return v.course.subject_id;
    });

    return subjectGroup;
  }
}

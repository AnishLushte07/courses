import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CourseSectionResourceState } from "../course-section-resources/course-section-resource.constant";
import { CourseSectionResource } from "../course-section-resources/course-section-resource.entity";
import { CourseSection } from "../course-sections/course-section.entity";
import { Course } from "../courses/course.entity";
import { StudentCourse } from "../student-courses/student-course.entity";
import { StudentCourseProgressState } from "./student-course-progress.constant";

@Entity("courses.student_course_progress")
export class StudentCourseProgress {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  resource_id: number;

  @Column({
    type: "int2",
  })
  sequence: number;

  @Column({
    type: "enum",
    enum: StudentCourseProgressState,
    default: StudentCourseProgressState.ACTIVE,
  })
  state: StudentCourseProgressState;

  @Column({
    type: "jsonb",
  })
  metadata: any;

  @CreateDateColumn()
  created_on: Date;

  @ManyToOne(
    () => StudentCourse,
    (studentCourse) => studentCourse.studentCourseProgress,
  )
  @JoinColumn({ name: "student_course_id" })
  studentCourse: StudentCourse;

  @ManyToOne(() => Course)
  @JoinColumn({ name: "course_id" })
  course: Course;

  @ManyToOne(() => CourseSection)
  @JoinColumn({ name: "course_section_id" })
  courseSection: CourseSection;

  @ManyToOne(() => CourseSectionResource)
  @JoinColumn({ name: "course_section_resource_id" })
  courseSectionResource: CourseSectionResource;
}

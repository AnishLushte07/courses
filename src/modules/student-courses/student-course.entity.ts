import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";

import { Course } from "../courses/course.entity";
import { StudentCourseProgress } from "../student-course-progress/student-course-progress.entity";
import {
  StudentCourseState,
  StudentCourseStatus,
} from "./student-course.constant";

@Entity("courses.student_courses")
export class StudentCourse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  student_admission_id: number;

  @Column({
    type: "enum",
    enum: StudentCourseState,
    default: StudentCourseState.ACTIVE,
  })
  state: StudentCourseState;

  @Column({
    type: "enum",
    enum: StudentCourseStatus,
    default: StudentCourseStatus.PENDING,
  })
  type: StudentCourseStatus;

  @Column()
  created_by: number;

  @CreateDateColumn()
  created_on: Date;

  @ManyToOne(() => Course, (course) => course.studentCourses)
  @JoinColumn({ name: "course_id" })
  course: Course;

  @OneToMany(
    () => StudentCourseProgress,
    (studentCourseProgress) => studentCourseProgress.studentCourse,
  )
  studentCourseProgress: StudentCourseProgress[];
}

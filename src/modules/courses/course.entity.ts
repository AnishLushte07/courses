import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { CourseSection } from "../course-sections/course-section.entity";
import { StudentCourse } from "../student-courses/student-course.entity";
import { CourseType, CourseState } from "./course.constant";

@Entity("courses.courses")
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 255,
  })
  name: string;

  @Column({
    length: 500,
    nullable: true,
  })
  description: string;

  @Column({
    type: "int2",
    nullable: true,
  })
  subject_id: number;

  @Column({
    length: 30,
    nullable: true,
  })
  subject_name: string;

  @Column({
    type: "enum",
    enum: CourseType,
  })
  type: CourseType;

  @Column({
    type: "enum",
    enum: CourseState,
    default: CourseState.ACTIVE,
  })
  state: CourseState;

  @Column({
    type: "int2",
    nullable: true,
  })
  academic_year_id: number;

  @Column({
    type: "int2",
    nullable: true,
  })
  class_id: number;

  @Column({
    type: "int2",
    nullable: true,
  })
  board_id: number;

  @Column({
    length: 255,
    nullable: true,
  })
  idempotency_key: string;

  @Column({
    nullable: true,
  })
  end_date: Date;

  @Column()
  created_by: number;

  @CreateDateColumn()
  created_on: Date;

  @Column()
  updated_by: number;

  @UpdateDateColumn()
  updated_on: Date;

  @OneToMany(() => StudentCourse, (studentCourse) => studentCourse.course)
  studentCourses: StudentCourse[];

  @OneToMany(() => CourseSection, (courseSection) => courseSection.course)
  courseSections: CourseSection[];
}

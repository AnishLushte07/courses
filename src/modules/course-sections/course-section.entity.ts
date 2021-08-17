import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CourseSectionResource } from "../course-section-resources/course-section-resource.entity";
import { Course } from "../courses/course.entity";
import { CourseSectionState } from "./course-section.constant";

@Entity("courses.course_sections")
export class CourseSection {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 255,
  })
  title: string;

  @Column({
    length: 500,
    nullable: true,
  })
  description: string;

  @Column({
    type: "int2",
  })
  sequence: number;

  @Column({
    type: "int2",
  })
  resources_count: number;

  @Column({
    type: "enum",
    enum: CourseSectionState,
    default: CourseSectionState.ACTIVE,
  })
  state: CourseSectionState;

  @CreateDateColumn()
  created_on: Date;

  @ManyToOne(() => Course, (course) => course.courseSections)
  @JoinColumn({ name: "course_id" })
  course: Course;

  @OneToMany(
    () => CourseSectionResource,
    (courseSectionResource) => courseSectionResource.courseSection,
  )
  courseSectionResources: CourseSection[];
}

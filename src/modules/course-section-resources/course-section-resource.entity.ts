import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CourseSection } from "../course-sections/course-section.entity";
import { Course } from "../courses/course.entity";
import {
  CourseSectionResourceState,
  CourseSectionResourceType,
} from "./course-section-resource.constant";

@Entity("courses.course_section_resources")
export class CourseSectionResource {
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
    enum: CourseSectionResourceType,
  })
  type: CourseSectionResourceType;

  @Column({
    type: "enum",
    enum: CourseSectionResourceState,
    default: CourseSectionResourceState.ACTIVE,
  })
  state: CourseSectionResourceState;

  @Column({
    type: "jsonb",
  })
  metadata: any;

  @CreateDateColumn()
  created_on: Date;

  @ManyToOne(() => Course, (course) => course.courseSections)
  @JoinColumn({ name: "course_id" })
  course: Course;

  @ManyToOne(
    () => CourseSection,
    (courseSection) => courseSection.courseSectionResources,
  )
  @JoinColumn({ name: "course_section_id" })
  courseSection: CourseSection;
}

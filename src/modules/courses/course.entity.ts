import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("courses.course")
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;
}

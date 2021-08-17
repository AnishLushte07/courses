import {MigrationInterface, QueryRunner} from "typeorm";

export class InitSchema1629113628317 implements MigrationInterface {
    name = 'InitSchema1629113628317'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "courses"."student_course_progress_state_enum" AS ENUM('active', 'inactive')`);
        await queryRunner.query(`CREATE TABLE "courses"."student_course_progress" ("id" SERIAL NOT NULL, "resource_id" integer NOT NULL, "sequence" smallint NOT NULL, "state" "courses"."student_course_progress_state_enum" NOT NULL DEFAULT 'active', "metadata" jsonb NOT NULL, "created_on" TIMESTAMP NOT NULL DEFAULT now(), "student_course_id" integer, "course_id" integer, "course_section_id" integer, "course_section_resource_id" integer, CONSTRAINT "PK_0c61466c4c6be687e6caf5b7559" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "courses"."student_courses" ("id" SERIAL NOT NULL, "student_admission_id" integer NOT NULL, "state" "courses"."student_courses_state_enum" NOT NULL DEFAULT 'active', "type" "courses"."student_courses_type_enum" NOT NULL DEFAULT 'pending', "created_by" integer NOT NULL, "created_on" TIMESTAMP NOT NULL DEFAULT now(), "course_id" integer, CONSTRAINT "PK_6c63b56af68884a5a69dde6a32d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "courses"."courses_type_enum" AS ENUM('catch_up')`);
        await queryRunner.query(`CREATE TYPE "courses"."courses_state_enum" AS ENUM('draft', 'active', 'inactive')`);
        await queryRunner.query(`CREATE TABLE "courses"."courses" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "description" character varying(500), "subject_id" smallint, "subject_name" character varying(30), "type" "courses"."courses_type_enum" NOT NULL, "state" "courses"."courses_state_enum" NOT NULL DEFAULT 'active', "academic_year_id" smallint, "class_id" smallint, "board_id" smallint, "idempotency_key" character varying(255), "end_date" TIMESTAMP, "created_by" integer NOT NULL, "created_on" TIMESTAMP NOT NULL DEFAULT now(), "updated_by" integer NOT NULL, "updated_on" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_3f70a487cc718ad8eda4e6d58c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "courses"."course_sections_state_enum" AS ENUM('active', 'inactive')`);
        await queryRunner.query(`CREATE TABLE "courses"."course_sections" ("id" SERIAL NOT NULL, "title" character varying(255) NOT NULL, "description" character varying(500), "sequence" smallint NOT NULL, "resources_count" smallint NOT NULL, "state" "courses"."course_sections_state_enum" NOT NULL DEFAULT 'active', "created_on" TIMESTAMP NOT NULL DEFAULT now(), "course_id" integer, CONSTRAINT "PK_03086ef0602f2721612a5ce610d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "courses"."course_section_resources_type_enum" AS ENUM('lsh_video', 'lsh_quiz')`);
        await queryRunner.query(`CREATE TYPE "courses"."course_section_resources_state_enum" AS ENUM('active', 'inactive')`);
        await queryRunner.query(`CREATE TABLE "courses"."course_section_resources" ("id" SERIAL NOT NULL, "resource_id" integer NOT NULL, "sequence" smallint NOT NULL, "type" "courses"."course_section_resources_type_enum" NOT NULL, "state" "courses"."course_section_resources_state_enum" NOT NULL DEFAULT 'active', "metadata" jsonb NOT NULL, "created_on" TIMESTAMP NOT NULL DEFAULT now(), "course_id" integer, "course_section_id" integer, CONSTRAINT "PK_8c0bcb92f4adf657ea6a31b1379" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "courses"."course_section_resources"`);
        await queryRunner.query(`DROP TYPE "courses"."course_section_resources_state_enum"`);
        await queryRunner.query(`DROP TYPE "courses"."course_section_resources_type_enum"`);
        await queryRunner.query(`DROP TABLE "courses"."course_sections"`);
        await queryRunner.query(`DROP TYPE "courses"."course_sections_state_enum"`);
        await queryRunner.query(`DROP TABLE "courses"."courses"`);
        await queryRunner.query(`DROP TYPE "courses"."courses_state_enum"`);
        await queryRunner.query(`DROP TYPE "courses"."courses_type_enum"`);
        await queryRunner.query(`DROP TABLE "courses"."student_courses"`);
        await queryRunner.query(`DROP TABLE "courses"."student_course_progress"`);
        await queryRunner.query(`DROP TYPE "courses"."student_course_progress_state_enum"`);
    }

}

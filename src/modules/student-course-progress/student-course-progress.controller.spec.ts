import { Test, TestingModule } from '@nestjs/testing';
import { StudentCourseProgressController } from './student-course-progress.controller';
import { StudentCourseProgressService } from './student-course-progress.service';

describe('StudentCourseProgressController', () => {
  let controller: StudentCourseProgressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentCourseProgressController],
      providers: [StudentCourseProgressService],
    }).compile();

    controller = module.get<StudentCourseProgressController>(StudentCourseProgressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

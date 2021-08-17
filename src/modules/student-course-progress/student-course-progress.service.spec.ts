import { Test, TestingModule } from '@nestjs/testing';
import { StudentCourseProgressService } from './student-course-progress.service';

describe('StudentCourseProgressService', () => {
  let service: StudentCourseProgressService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentCourseProgressService],
    }).compile();

    service = module.get<StudentCourseProgressService>(StudentCourseProgressService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

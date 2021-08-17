import { Test, TestingModule } from '@nestjs/testing';
import { CourseSectionResourcesService } from './course-section-resources.service';

describe('CourseSectionResourcesService', () => {
  let service: CourseSectionResourcesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourseSectionResourcesService],
    }).compile();

    service = module.get<CourseSectionResourcesService>(CourseSectionResourcesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

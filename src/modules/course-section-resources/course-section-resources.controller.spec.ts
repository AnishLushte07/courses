import { Test, TestingModule } from '@nestjs/testing';
import { CourseSectionResourcesController } from './course-section-resources.controller';
import { CourseSectionResourcesService } from './course-section-resources.service';

describe('CourseSectionResourcesController', () => {
  let controller: CourseSectionResourcesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourseSectionResourcesController],
      providers: [CourseSectionResourcesService],
    }).compile();

    controller = module.get<CourseSectionResourcesController>(CourseSectionResourcesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

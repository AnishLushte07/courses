import { Injectable } from '@nestjs/common';
import { CreateCourseSectionResourceDto } from './dto/create-course-section-resource.dto';
import { UpdateCourseSectionResourceDto } from './dto/update-course-section-resource.dto';

@Injectable()
export class CourseSectionResourcesService {
  create(createCourseSectionResourceDto: CreateCourseSectionResourceDto) {
    return 'This action adds a new courseSectionResource';
  }

  findAll() {
    return `This action returns all courseSectionResources`;
  }

  findOne(id: number) {
    return `This action returns a #${id} courseSectionResource`;
  }

  update(id: number, updateCourseSectionResourceDto: UpdateCourseSectionResourceDto) {
    return `This action updates a #${id} courseSectionResource`;
  }

  remove(id: number) {
    return `This action removes a #${id} courseSectionResource`;
  }
}

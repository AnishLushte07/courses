import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseSectionResourceDto } from './create-course-section-resource.dto';

export class UpdateCourseSectionResourceDto extends PartialType(CreateCourseSectionResourceDto) {}

import { Module } from '@nestjs/common';
import { MembersCourseController } from './members-course.controller';
import { MembersCourseService } from './members-course.service';

@Module({
  controllers: [MembersCourseController],
  providers: [MembersCourseService]
})
export class MembersCourseModule {}

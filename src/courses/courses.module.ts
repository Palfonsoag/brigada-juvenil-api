import { Module } from "@nestjs/common";
import { CoursesController } from "./courses.controller";
import { CoursesService } from "./courses.service";
import { CourseRepository } from "./course.repository";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([CourseRepository])],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}

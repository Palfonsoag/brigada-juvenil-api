import {
  Controller,
  ValidationPipe,
  Query,
  Get,
  Param,
  ParseIntPipe,
  Body,
  UsePipes,
  Post,
  Delete,
  Put,
} from "@nestjs/common";
import { CoursesService } from "./courses.service";
import { GetCourseFilterDto } from "./dto/get-course-filter.dto";
import { Course } from "./course.entity";
import { UpdateCourseDto } from "./dto/update-course.dto";
import { CreateCourseDto } from "./dto/create-course.dto";

@Controller("courses")
export class CoursesController {
  constructor(private coursesService: CoursesService) {}

  @Get()
  getCourses(
    @Query(ValidationPipe) filterDto: GetCourseFilterDto
  ): Promise<Course[]> {
    return this.coursesService.getCourses(filterDto);
  }

  @Get("/:id")
  getCourseById(@Param("id", ParseIntPipe) id: number): Promise<Course> {
    return this.coursesService.getCourseById(id);
  }

  @Delete("/:id")
  deleteCourse(@Param("id", ParseIntPipe) id: number): Promise<void> {
    return this.coursesService.deleteCourse(id);
  }

  @Put("/:id/update")
  updateRank(
    @Param("id", ParseIntPipe) id: number,
    @Body(ValidationPipe) updateCourseDto: UpdateCourseDto
  ): Promise<Course> {
    return this.coursesService.updateRank(id, updateCourseDto);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createCourse(
    @Body(ValidationPipe) createCourseDto: CreateCourseDto
  ): Promise<void> {
    return this.coursesService.createCourse(createCourseDto);
  }
}

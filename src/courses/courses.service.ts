import { Injectable, NotFoundException } from "@nestjs/common";
import { CourseRepository } from "./course.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { Course } from "./course.entity";
import { GetCourseFilterDto } from "./dto/get-course-filter.dto";
import { UpdateCourseDto } from "./dto/update-course.dto";
import { CreateCourseDto } from "./dto/create-course.dto";

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(CourseRepository)
    private courseRepository: CourseRepository
  ) {}

  async getCourses(filterDto: GetCourseFilterDto): Promise<Course[]> {
    return this.courseRepository.getCourses(filterDto);
  }

  async getCourseById(id: number): Promise<Course> {
    const foundCourse = await this.courseRepository.findOne(id);
    if (!foundCourse) {
      throw new NotFoundException(`Los datos ingresados no coinciden`);
    }
    return foundCourse;
  }

  async updateCourse(
    id: number,
    updateCourseDto: UpdateCourseDto
  ): Promise<Course> {
    const course = await this.getCourseById(id);

    if (updateCourseDto.description) {
      course.description = updateCourseDto.description;
    }

    if (updateCourseDto.name) {
      course.name = updateCourseDto.name;
    }

    await course.save();

    return course;
  }

  async deleteCourse(id: number): Promise<void> {
    const result = await this.courseRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Los datos ingresados no coinciden`);
    }
  }

  async createCourse(createCourseDto: CreateCourseDto): Promise<void> {
    await this.courseRepository.createCourse(createCourseDto);
  }
}

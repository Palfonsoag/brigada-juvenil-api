import { Repository, EntityRepository } from "typeorm";
import {
  InternalServerErrorException,
  ConflictException,
  Logger,
} from "@nestjs/common";
import { Course } from "./course.entity";
import { CreateCourseDto } from "./dto/create-course.dto";
import { GetCourseFilterDto } from "./dto/get-course-filter.dto";

@EntityRepository(Course)
export class CourseRepository extends Repository<Course> {
  private logger = new Logger("CourseRepository");

  async getCourses(filterDto: GetCourseFilterDto): Promise<Course[]> {
    const { search } = filterDto;
    const query = this.createQueryBuilder("course");

    if (search) {
      query.andWhere(
        "(course.name LIKE :search OR course.description LIKE :search)",
        {
          search: `%${search}%`,
        }
      );
    }

    const courses = await query.getMany();

    return courses;
  }

  async getCourse(id: number): Promise<Course> {
    const query = this.createQueryBuilder("course").where("course.id = :id", {
      id,
    });

    const course = await query.getOne();

    return course;
  }

  async createCourse(createCourseDto: CreateCourseDto): Promise<Course> {
    const { name, description } = createCourseDto;

    const course = new Course();

    course.name = name;
    course.description = description;

    try {
      await course.save();
      return course;
    } catch (error) {
      if (error.code === "23505") {
        throw new ConflictException("El Curso ya fue creado");
      } else {
        this.logger.error(
          `Course name"${course.name}" creating it. dto: ${JSON.stringify(
            createCourseDto
          )}`,
          error.stack
        );
        throw new InternalServerErrorException();
      }
    }
  }
}

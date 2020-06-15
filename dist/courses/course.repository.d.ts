import { Repository } from "typeorm";
import { Course } from "./course.entity";
import { CreateCourseDto } from "./dto/create-course.dto";
import { GetCourseFilterDto } from "./dto/get-course-filter.dto";
export declare class CourseRepository extends Repository<Course> {
    private logger;
    getCourses(filterDto: GetCourseFilterDto): Promise<Course[]>;
    getCourse(id: number): Promise<Course>;
    createCourse(createCourseDto: CreateCourseDto): Promise<Course>;
}

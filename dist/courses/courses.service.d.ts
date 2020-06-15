import { CourseRepository } from "./course.repository";
import { Course } from "./course.entity";
import { GetCourseFilterDto } from "./dto/get-course-filter.dto";
import { UpdateCourseDto } from "./dto/update-course.dto";
import { CreateCourseDto } from "./dto/create-course.dto";
export declare class CoursesService {
    private courseRepository;
    constructor(courseRepository: CourseRepository);
    getCourses(filterDto: GetCourseFilterDto): Promise<Course[]>;
    getCourseById(id: number): Promise<Course>;
    updateCourse(id: number, updateCourseDto: UpdateCourseDto): Promise<Course>;
    deleteCourse(id: number): Promise<void>;
    createCourse(createCourseDto: CreateCourseDto): Promise<void>;
}

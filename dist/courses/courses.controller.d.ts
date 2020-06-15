import { CoursesService } from "./courses.service";
import { GetCourseFilterDto } from "./dto/get-course-filter.dto";
import { Course } from "./course.entity";
import { UpdateCourseDto } from "./dto/update-course.dto";
import { CreateCourseDto } from "./dto/create-course.dto";
export declare class CoursesController {
    private coursesService;
    constructor(coursesService: CoursesService);
    getCourses(filterDto: GetCourseFilterDto): Promise<Course[]>;
    getCourseById(id: number): Promise<Course>;
    deleteCourse(id: number): Promise<void>;
    updateCourse(id: number, updateCourseDto: UpdateCourseDto): Promise<Course>;
    createCourse(createCourseDto: CreateCourseDto): Promise<void>;
}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const course_repository_1 = require("./course.repository");
const typeorm_1 = require("@nestjs/typeorm");
let CoursesService = class CoursesService {
    constructor(courseRepository) {
        this.courseRepository = courseRepository;
    }
    async getCourses(filterDto) {
        return this.courseRepository.getCourses(filterDto);
    }
    async getCourseById(id) {
        const foundCourse = await this.courseRepository.findOne(id);
        if (!foundCourse) {
            throw new common_1.NotFoundException(`Los datos ingresados no coinciden`);
        }
        return foundCourse;
    }
    async updateCourse(id, updateCourseDto) {
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
    async deleteCourse(id) {
        const result = await this.courseRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Los datos ingresados no coinciden`);
        }
    }
    async createCourse(createCourseDto) {
        await this.courseRepository.createCourse(createCourseDto);
    }
};
CoursesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(course_repository_1.CourseRepository)),
    __metadata("design:paramtypes", [course_repository_1.CourseRepository])
], CoursesService);
exports.CoursesService = CoursesService;
//# sourceMappingURL=courses.service.js.map
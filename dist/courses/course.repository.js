"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const course_entity_1 = require("./course.entity");
let CourseRepository = class CourseRepository extends typeorm_1.Repository {
    constructor() {
        super(...arguments);
        this.logger = new common_1.Logger("CourseRepository");
    }
    async getCourses(filterDto) {
        const { search } = filterDto;
        const query = this.createQueryBuilder("course");
        if (search) {
            query.andWhere("(course.name LIKE :search OR course.description LIKE :search)", {
                search: `%${search}%`,
            });
        }
        const courses = await query.getMany();
        return courses;
    }
    async getCourse(id) {
        const query = this.createQueryBuilder("course").where("course.id = :id", {
            id,
        });
        const course = await query.getOne();
        return course;
    }
    async createCourse(createCourseDto) {
        const { name, description } = createCourseDto;
        const course = new course_entity_1.Course();
        course.name = name;
        course.description = description;
        try {
            await course.save();
            return course;
        }
        catch (error) {
            if (error.code === "23505") {
                throw new common_1.ConflictException("El Curso ya fue creado");
            }
            else {
                this.logger.error(`Course name"${course.name}" creating it. dto: ${JSON.stringify(createCourseDto)}`, error.stack);
                throw new common_1.InternalServerErrorException();
            }
        }
    }
};
CourseRepository = __decorate([
    typeorm_1.EntityRepository(course_entity_1.Course)
], CourseRepository);
exports.CourseRepository = CourseRepository;
//# sourceMappingURL=course.repository.js.map
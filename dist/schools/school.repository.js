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
const school_entity_1 = require("./school.entity");
let SchoolRepository = class SchoolRepository extends typeorm_1.Repository {
    constructor() {
        super(...arguments);
        this.logger = new common_1.Logger("SchoolRepository");
    }
    async getSchools(filterDto) {
        const { name } = filterDto;
        const query = this.createQueryBuilder("school");
        if (name) {
            query.andWhere("(school.name LIKE :name)", {
                name: `%${name}%`,
            });
        }
        const schools = await query.getMany();
        return schools;
    }
    async createSchool(createSchoolDto) {
        const { name } = createSchoolDto;
        const school = new school_entity_1.School();
        school.name = name;
        try {
            await school.save();
            return school;
        }
        catch (error) {
            if (error.code === "23505") {
                throw new common_1.ConflictException("La Escuela ya fue creada");
            }
            else {
                this.logger.error(`School name"${school.name}" creating it. dto: ${JSON.stringify(createSchoolDto)}`, error.stack);
                throw new common_1.InternalServerErrorException();
            }
        }
    }
};
SchoolRepository = __decorate([
    typeorm_1.EntityRepository(school_entity_1.School)
], SchoolRepository);
exports.SchoolRepository = SchoolRepository;
//# sourceMappingURL=school.repository.js.map
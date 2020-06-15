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
const school_repository_1 = require("./school.repository");
const typeorm_1 = require("@nestjs/typeorm");
let SchoolsService = class SchoolsService {
    constructor(schoolRepository) {
        this.schoolRepository = schoolRepository;
    }
    async getSchools(filterDto) {
        return this.schoolRepository.getSchools(filterDto);
    }
    async getSchoolById(id) {
        const foundSchool = await this.schoolRepository.findOne(id);
        if (!foundSchool) {
            throw new common_1.NotFoundException(`Los datos ingresados no coinciden`);
        }
        return foundSchool;
    }
    async updateSchool(id, updateSchoolDto) {
        const school = await this.getSchoolById(id);
        if (updateSchoolDto.name) {
            school.name = updateSchoolDto.name;
        }
        await school.save();
        return school;
    }
    async deleteSchool(id) {
        const result = await this.schoolRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Los datos ingresados no coinciden`);
        }
    }
    async createSchool(createSchoolDto) {
        await this.schoolRepository.createSchool(createSchoolDto);
    }
};
SchoolsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(school_repository_1.SchoolRepository)),
    __metadata("design:paramtypes", [school_repository_1.SchoolRepository])
], SchoolsService);
exports.SchoolsService = SchoolsService;
//# sourceMappingURL=schools.service.js.map
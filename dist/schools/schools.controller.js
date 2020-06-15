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
const schools_service_1 = require("./schools.service");
const create_school_dto_1 = require("./dto/create-school.dto");
const update_school_dto_1 = require("./dto/update-school.dto");
const get_school_filter_dto_1 = require("./dto/get-school-filter.dto");
let SchoolsController = class SchoolsController {
    constructor(schoolsService) {
        this.schoolsService = schoolsService;
    }
    getSchools(filterDto) {
        return this.schoolsService.getSchools(filterDto);
    }
    getSchoolById(id) {
        return this.schoolsService.getSchoolById(id);
    }
    deleteSchool(id) {
        return this.schoolsService.deleteSchool(id);
    }
    updateSchool(id, updateSchoolDto) {
        return this.schoolsService.updateSchool(id, updateSchoolDto);
    }
    createSchool(createSchoolDto) {
        return this.schoolsService.createSchool(createSchoolDto);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Query(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_school_filter_dto_1.GetSchoolFilterDto]),
    __metadata("design:returntype", Promise)
], SchoolsController.prototype, "getSchools", null);
__decorate([
    common_1.Get("/:id"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SchoolsController.prototype, "getSchoolById", null);
__decorate([
    common_1.Delete("/:id"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SchoolsController.prototype, "deleteSchool", null);
__decorate([
    common_1.Put("/:id/update"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe)),
    __param(1, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_school_dto_1.UpdateSchoolDto]),
    __metadata("design:returntype", Promise)
], SchoolsController.prototype, "updateSchool", null);
__decorate([
    common_1.Post(),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_school_dto_1.CreateSchoolDto]),
    __metadata("design:returntype", Promise)
], SchoolsController.prototype, "createSchool", null);
SchoolsController = __decorate([
    common_1.Controller("schools"),
    __metadata("design:paramtypes", [schools_service_1.SchoolsService])
], SchoolsController);
exports.SchoolsController = SchoolsController;
//# sourceMappingURL=schools.controller.js.map
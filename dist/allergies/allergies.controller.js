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
const allergies_service_1 = require("./allergies.service");
const create_allergy_dto_1 = require("./dto/create-allergy.dto");
const get_allergy_filter_dto_1 = require("./dto/get-allergy-filter.dto");
const update_allergy_dto_1 = require("./dto/update-allergy.dto");
let AllergiesController = class AllergiesController {
    constructor(allergiesService) {
        this.allergiesService = allergiesService;
    }
    getAllergy(filterDto) {
        return this.allergiesService.getAllergy(filterDto);
    }
    getAllergyById(id) {
        return this.allergiesService.getAllergyById(id);
    }
    deleteAllergy(id) {
        return this.allergiesService.deleteAllergy(id);
    }
    updateSchool(id, updateAllergyDto) {
        return this.allergiesService.updateSchool(id, updateAllergyDto);
    }
    createAllergy(createAllergyDto) {
        return this.allergiesService.createAllergy(createAllergyDto);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Query(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_allergy_filter_dto_1.GetAllergyFilterDto]),
    __metadata("design:returntype", Promise)
], AllergiesController.prototype, "getAllergy", null);
__decorate([
    common_1.Get("/:id"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AllergiesController.prototype, "getAllergyById", null);
__decorate([
    common_1.Delete("/:id"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AllergiesController.prototype, "deleteAllergy", null);
__decorate([
    common_1.Put("/:id/update"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe)),
    __param(1, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_allergy_dto_1.UpdateAllergyDto]),
    __metadata("design:returntype", Promise)
], AllergiesController.prototype, "updateSchool", null);
__decorate([
    common_1.Post(),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_allergy_dto_1.CreateAllergyDto]),
    __metadata("design:returntype", Promise)
], AllergiesController.prototype, "createAllergy", null);
AllergiesController = __decorate([
    common_1.Controller("allergies"),
    __metadata("design:paramtypes", [allergies_service_1.AllergiesService])
], AllergiesController);
exports.AllergiesController = AllergiesController;
//# sourceMappingURL=allergies.controller.js.map
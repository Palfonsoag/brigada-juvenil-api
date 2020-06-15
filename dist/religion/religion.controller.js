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
const religion_service_1 = require("./religion.service");
const get_religion_filter_dto_1 = require("./dto/get-religion-filter.dto");
const update_religion_dto_1 = require("./dto/update-religion.dto");
const create_religion_dto_1 = require("./dto/create-religion.dto");
let ReligionController = class ReligionController {
    constructor(religionService) {
        this.religionService = religionService;
    }
    getReligions(filterDto) {
        return this.religionService.getReligions(filterDto);
    }
    getSportById(id) {
        return this.religionService.getReligionById(id);
    }
    deleteReligion(id) {
        return this.religionService.deleteReligion(id);
    }
    updateReligion(id, updateReligionDto) {
        return this.religionService.updateReligion(id, updateReligionDto);
    }
    createSport(createReligionDto) {
        return this.religionService.createReligion(createReligionDto);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Query(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_religion_filter_dto_1.GetReligionFilterDto]),
    __metadata("design:returntype", Promise)
], ReligionController.prototype, "getReligions", null);
__decorate([
    common_1.Get("/:id"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReligionController.prototype, "getSportById", null);
__decorate([
    common_1.Delete("/:id"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReligionController.prototype, "deleteReligion", null);
__decorate([
    common_1.Put("/:id/update"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe)),
    __param(1, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_religion_dto_1.UpdateReligionDto]),
    __metadata("design:returntype", Promise)
], ReligionController.prototype, "updateReligion", null);
__decorate([
    common_1.Post(),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_religion_dto_1.CreateReligionDto]),
    __metadata("design:returntype", Promise)
], ReligionController.prototype, "createSport", null);
ReligionController = __decorate([
    common_1.Controller("religion"),
    __metadata("design:paramtypes", [religion_service_1.ReligionService])
], ReligionController);
exports.ReligionController = ReligionController;
//# sourceMappingURL=religion.controller.js.map
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
const sports_service_1 = require("./sports.service");
const create_sport_dto_1 = require("./dto/create-sport.dto");
const update_sport_dto_1 = require("./dto/update-sport.dto");
const get_sport_filter_dto_1 = require("./dto/get-sport-filter.dto");
let SportsController = class SportsController {
    constructor(sportsService) {
        this.sportsService = sportsService;
    }
    getSports(filterDto) {
        return this.sportsService.getSports(filterDto);
    }
    getSportById(id) {
        return this.sportsService.getSportById(id);
    }
    deleteSport(id) {
        return this.sportsService.deleteSport(id);
    }
    updateSport(id, updateSportDto) {
        return this.sportsService.updateSport(id, updateSportDto);
    }
    createSport(createSportDto) {
        return this.sportsService.createSport(createSportDto);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Query(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_sport_filter_dto_1.GetSportFilterDto]),
    __metadata("design:returntype", Promise)
], SportsController.prototype, "getSports", null);
__decorate([
    common_1.Get("/:id"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SportsController.prototype, "getSportById", null);
__decorate([
    common_1.Delete("/:id"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SportsController.prototype, "deleteSport", null);
__decorate([
    common_1.Put("/:id/update"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe)),
    __param(1, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_sport_dto_1.UpdateSportDto]),
    __metadata("design:returntype", Promise)
], SportsController.prototype, "updateSport", null);
__decorate([
    common_1.Post(),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sport_dto_1.CreateSportDto]),
    __metadata("design:returntype", Promise)
], SportsController.prototype, "createSport", null);
SportsController = __decorate([
    common_1.Controller("sports"),
    __metadata("design:paramtypes", [sports_service_1.SportsService])
], SportsController);
exports.SportsController = SportsController;
//# sourceMappingURL=sports.controller.js.map
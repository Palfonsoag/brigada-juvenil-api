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
const clothing_service_1 = require("./clothing.service");
const create_clothing_dto_1 = require("./dto/create-clothing.dto");
const update_course_dto_1 = require("./dto/update-course.dto");
const get_clothing_filter_dto_1 = require("./dto/get-clothing-filter.dto");
let ClothingController = class ClothingController {
    constructor(clothingService) {
        this.clothingService = clothingService;
    }
    getClothings(filterDto) {
        return this.clothingService.getClothings(filterDto);
    }
    getClothingById(id) {
        return this.clothingService.getClothingById(id);
    }
    deleteClothing(id) {
        return this.clothingService.deleteClothing(id);
    }
    updateClothing(id, updateClothingDto) {
        return this.clothingService.updateClothing(id, updateClothingDto);
    }
    createClothing(createClothingDto) {
        return this.clothingService.createClothing(createClothingDto);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Query(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_clothing_filter_dto_1.GetClothingFilterDto]),
    __metadata("design:returntype", Promise)
], ClothingController.prototype, "getClothings", null);
__decorate([
    common_1.Get("/:id"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ClothingController.prototype, "getClothingById", null);
__decorate([
    common_1.Delete("/:id"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ClothingController.prototype, "deleteClothing", null);
__decorate([
    common_1.Put("/:id/update"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe)),
    __param(1, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_course_dto_1.UpdateClothingDto]),
    __metadata("design:returntype", Promise)
], ClothingController.prototype, "updateClothing", null);
__decorate([
    common_1.Post(),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_clothing_dto_1.CreateClothingDto]),
    __metadata("design:returntype", Promise)
], ClothingController.prototype, "createClothing", null);
ClothingController = __decorate([
    common_1.Controller("clothing"),
    __metadata("design:paramtypes", [clothing_service_1.ClothingService])
], ClothingController);
exports.ClothingController = ClothingController;
//# sourceMappingURL=clothing.controller.js.map
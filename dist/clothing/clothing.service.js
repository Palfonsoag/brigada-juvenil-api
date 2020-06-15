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
const clothing_respository_1 = require("./clothing.respository");
const typeorm_1 = require("@nestjs/typeorm");
let ClothingService = class ClothingService {
    constructor(clothingRepository) {
        this.clothingRepository = clothingRepository;
    }
    async getClothings(filterDto) {
        return this.clothingRepository.getClothings(filterDto);
    }
    async getClothingById(id) {
        const foundClothing = await this.clothingRepository.findOne(id);
        if (!foundClothing) {
            throw new common_1.NotFoundException(`Los datos ingresados no coinciden`);
        }
        return foundClothing;
    }
    async updateClothing(id, updateClothingDto) {
        const clothing = await this.getClothingById(id);
        if (updateClothingDto.name) {
            clothing.name = updateClothingDto.name;
        }
        await clothing.save();
        return clothing;
    }
    async deleteClothing(id) {
        const result = await this.clothingRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Los datos ingresados no coinciden`);
        }
    }
    async createClothing(createClothingDto) {
        await this.clothingRepository.createClothing(createClothingDto);
    }
};
ClothingService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(clothing_respository_1.ClothingRepository)),
    __metadata("design:paramtypes", [clothing_respository_1.ClothingRepository])
], ClothingService);
exports.ClothingService = ClothingService;
//# sourceMappingURL=clothing.service.js.map
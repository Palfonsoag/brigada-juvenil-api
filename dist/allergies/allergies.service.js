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
const allergy_repository_1 = require("./allergy.repository");
const typeorm_1 = require("@nestjs/typeorm");
let AllergiesService = class AllergiesService {
    constructor(allergyRepository) {
        this.allergyRepository = allergyRepository;
    }
    async getAllergy(filterDto) {
        return this.allergyRepository.getAllergy(filterDto);
    }
    async getAllergyById(id) {
        const foundAllergy = await this.allergyRepository.findOne(id);
        if (!foundAllergy) {
            throw new common_1.NotFoundException(`Los datos ingresados no coinciden`);
        }
        return foundAllergy;
    }
    async updateSchool(id, updateAllergyDto) {
        const allergy = await this.getAllergyById(id);
        if (updateAllergyDto.name) {
            allergy.name = updateAllergyDto.name;
        }
        await allergy.save();
        return allergy;
    }
    async deleteAllergy(id) {
        const result = await this.allergyRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Los datos ingresados no coinciden`);
        }
    }
    async createAllergy(createAllergyDto) {
        await this.allergyRepository.createAllergy(createAllergyDto);
    }
};
AllergiesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(allergy_repository_1.AllergyRepository)),
    __metadata("design:paramtypes", [allergy_repository_1.AllergyRepository])
], AllergiesService);
exports.AllergiesService = AllergiesService;
//# sourceMappingURL=allergies.service.js.map
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
const religion_repository_1 = require("./religion.repository");
const typeorm_1 = require("@nestjs/typeorm");
let ReligionService = class ReligionService {
    constructor(religionRepository) {
        this.religionRepository = religionRepository;
    }
    async getReligions(filterDto) {
        return this.religionRepository.getReligions(filterDto);
    }
    async getReligionById(id) {
        const foundReligion = await this.religionRepository.findOne(id);
        if (!foundReligion) {
            throw new common_1.NotFoundException(`Los datos ingresados no coinciden`);
        }
        return foundReligion;
    }
    async updateReligion(id, updateReligionDto) {
        const religion = await this.getReligionById(id);
        if (updateReligionDto.name) {
            religion.name = updateReligionDto.name;
        }
        await religion.save();
        return religion;
    }
    async deleteReligion(id) {
        const result = await this.religionRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Los datos ingresados no coinciden`);
        }
    }
    async createReligion(createReligionDto) {
        await this.religionRepository.createReligion(createReligionDto);
    }
};
ReligionService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(religion_repository_1.ReligionRepository)),
    __metadata("design:paramtypes", [religion_repository_1.ReligionRepository])
], ReligionService);
exports.ReligionService = ReligionService;
//# sourceMappingURL=religion.service.js.map
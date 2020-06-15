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
const sport_repository_1 = require("./sport.repository");
const typeorm_1 = require("@nestjs/typeorm");
let SportsService = class SportsService {
    constructor(sportRepository) {
        this.sportRepository = sportRepository;
    }
    async getSports(filterDto) {
        return this.sportRepository.getSports(filterDto);
    }
    async getSportById(id) {
        const foundSport = await this.sportRepository.findOne(id);
        if (!foundSport) {
            throw new common_1.NotFoundException(`Los datos ingresados no coinciden`);
        }
        return foundSport;
    }
    async updateSport(id, updateSportDto) {
        const sport = await this.getSportById(id);
        if (updateSportDto.name) {
            sport.name = updateSportDto.name;
        }
        await sport.save();
        return sport;
    }
    async deleteSport(id) {
        const result = await this.sportRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Los datos ingresados no coinciden`);
        }
    }
    async createSport(createSportDto) {
        await this.sportRepository.createSport(createSportDto);
    }
};
SportsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(sport_repository_1.SportRepository)),
    __metadata("design:paramtypes", [sport_repository_1.SportRepository])
], SportsService);
exports.SportsService = SportsService;
//# sourceMappingURL=sports.service.js.map
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
const rank_repository_1 = require("./rank.repository");
const typeorm_1 = require("@nestjs/typeorm");
let RanksService = class RanksService {
    constructor(rankRepository) {
        this.rankRepository = rankRepository;
    }
    async getRanks(filterDto) {
        return this.rankRepository.getRanks(filterDto);
    }
    async getRankById(id) {
        const foundRank = await this.rankRepository.findOne(id);
        if (!foundRank) {
            throw new common_1.NotFoundException(`Los datos ingresados no coinciden`);
        }
        return foundRank;
    }
    async updateRank(id, updateRankDto) {
        const rank = await this.getRankById(id);
        if (updateRankDto.description) {
            rank.description = updateRankDto.description;
        }
        if (updateRankDto.name) {
            rank.name = updateRankDto.name;
        }
        await rank.save();
        return rank;
    }
    async deleteRank(id) {
        const result = await this.rankRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Los datos ingresados no coinciden`);
        }
    }
    async createRank(createRankDto) {
        await this.rankRepository.createRank(createRankDto);
    }
};
RanksService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(rank_repository_1.RankRepository)),
    __metadata("design:paramtypes", [rank_repository_1.RankRepository])
], RanksService);
exports.RanksService = RanksService;
//# sourceMappingURL=ranks.service.js.map
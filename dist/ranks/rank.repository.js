"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const rank_entity_1 = require("./rank.entity");
let RankRepository = class RankRepository extends typeorm_1.Repository {
    constructor() {
        super(...arguments);
        this.logger = new common_1.Logger("RankRepository");
    }
    async getRanks(filterDto) {
        const { search } = filterDto;
        const query = this.createQueryBuilder("rank");
        if (search) {
            query.andWhere("(rank.name LIKE :search OR rank.description LIKE :search)", {
                search: `%${search}%`,
            });
        }
        const ranks = await query.getMany();
        return ranks;
    }
    async getRank(id) {
        const query = this.createQueryBuilder("rank").where("rank.id = :id", {
            id,
        });
        const rank = await query.getOne();
        return rank;
    }
    async createRank(createRankDto) {
        const { name, description } = createRankDto;
        const rank = new rank_entity_1.Rank();
        rank.name = name;
        rank.description = description;
        try {
            await rank.save();
            return rank;
        }
        catch (error) {
            if (error.code === "23505") {
                throw new common_1.ConflictException("El Rango ya fue creado");
            }
            else {
                this.logger.error(`Rank name"${rank.name}" creating it. dto: ${JSON.stringify(createRankDto)}`, error.stack);
                throw new common_1.InternalServerErrorException();
            }
        }
    }
};
RankRepository = __decorate([
    typeorm_1.EntityRepository(rank_entity_1.Rank)
], RankRepository);
exports.RankRepository = RankRepository;
//# sourceMappingURL=rank.repository.js.map
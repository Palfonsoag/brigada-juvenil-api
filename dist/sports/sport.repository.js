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
const sport_entity_1 = require("./sport.entity");
let SportRepository = class SportRepository extends typeorm_1.Repository {
    constructor() {
        super(...arguments);
        this.logger = new common_1.Logger("SportRepository");
    }
    async getSports(filterDto) {
        const { name } = filterDto;
        const query = this.createQueryBuilder("sport");
        if (name) {
            query.andWhere("(sport.name LIKE :name)", {
                name: `%${name}%`,
            });
        }
        const sports = await query.getMany();
        return sports;
    }
    async getSport(id) {
        const query = this.createQueryBuilder("sport").where("sport.id = :id", {
            id,
        });
        const sport = await query.getOne();
        return sport;
    }
    async createSport(createSportDto) {
        const { name } = createSportDto;
        const sport = new sport_entity_1.Sport();
        sport.name = name;
        try {
            await sport.save();
            return sport;
        }
        catch (error) {
            if (error.code === "23505") {
                throw new common_1.ConflictException("La Deporte ya fue creado");
            }
            else {
                this.logger.error(`Sport name"${sport.name}" creating it. dto: ${JSON.stringify(createSportDto)}`, error.stack);
                throw new common_1.InternalServerErrorException();
            }
        }
    }
};
SportRepository = __decorate([
    typeorm_1.EntityRepository(sport_entity_1.Sport)
], SportRepository);
exports.SportRepository = SportRepository;
//# sourceMappingURL=sport.repository.js.map
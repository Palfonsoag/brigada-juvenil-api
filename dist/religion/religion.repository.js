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
const religion_entity_1 = require("./religion.entity");
let ReligionRepository = class ReligionRepository extends typeorm_1.Repository {
    constructor() {
        super(...arguments);
        this.logger = new common_1.Logger("ReligionRepository");
    }
    async getReligions(filterDto) {
        const { name } = filterDto;
        const query = this.createQueryBuilder("religion");
        if (name) {
            query.andWhere("(religion.name LIKE :name)", {
                name: `%${name}%`,
            });
        }
        const religion = await query.getMany();
        return religion;
    }
    async getReligion(id) {
        const query = this.createQueryBuilder("religion").where("religion.id = :id", {
            id,
        });
        const religion = await query.getOne();
        return religion;
    }
    async createReligion(createReligionDto) {
        const { name } = createReligionDto;
        const religion = new religion_entity_1.Religion();
        religion.name = name;
        try {
            await religion.save();
            return religion;
        }
        catch (error) {
            if (error.code === "23505") {
                throw new common_1.ConflictException("La Religion ya fue creada");
            }
            else {
                this.logger.error(`Religion name"${religion.name}" creating it. dto: ${JSON.stringify(createReligionDto)}`, error.stack);
                throw new common_1.InternalServerErrorException();
            }
        }
    }
};
ReligionRepository = __decorate([
    typeorm_1.EntityRepository(religion_entity_1.Religion)
], ReligionRepository);
exports.ReligionRepository = ReligionRepository;
//# sourceMappingURL=religion.repository.js.map
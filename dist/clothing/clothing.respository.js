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
const clothing_entity_1 = require("./clothing.entity");
let ClothingRepository = class ClothingRepository extends typeorm_1.Repository {
    constructor() {
        super(...arguments);
        this.logger = new common_1.Logger("ClothingRepository");
    }
    async getClothings(filterDto) {
        const { name } = filterDto;
        const query = this.createQueryBuilder("clothing");
        if (name) {
            query.andWhere("(clothing.name LIKE :name)", {
                name: `%${name}%`,
            });
        }
        const clothings = await query.getMany();
        return clothings;
    }
    async createClothing(createClothingDto) {
        const { name } = createClothingDto;
        const clothing = new clothing_entity_1.Clothing();
        clothing.name = name;
        try {
            await clothing.save();
            return clothing;
        }
        catch (error) {
            if (error.code === "23505") {
                throw new common_1.ConflictException("La prenda de ropa ya fue creada");
            }
            else {
                this.logger.error(`Clothing name"${clothing.name}" creating it. dto: ${JSON.stringify(createClothingDto)}`, error.stack);
                throw new common_1.InternalServerErrorException();
            }
        }
    }
};
ClothingRepository = __decorate([
    typeorm_1.EntityRepository(clothing_entity_1.Clothing)
], ClothingRepository);
exports.ClothingRepository = ClothingRepository;
//# sourceMappingURL=clothing.respository.js.map
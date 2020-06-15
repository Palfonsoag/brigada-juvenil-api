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
const allergy_entity_1 = require("./allergy.entity");
let AllergyRepository = class AllergyRepository extends typeorm_1.Repository {
    constructor() {
        super(...arguments);
        this.logger = new common_1.Logger("AllergyRepository");
    }
    async getAllergy(filterDto) {
        const { name } = filterDto;
        const query = this.createQueryBuilder("allergy");
        if (name) {
            query.andWhere("(allergy.name LIKE :name)", {
                name: `%${name}%`,
            });
        }
        const allergies = await query.getMany();
        return allergies;
    }
    async createAllergy(createAllergyDto) {
        const { name } = createAllergyDto;
        const allergy = new allergy_entity_1.Allergy();
        allergy.name = name;
        try {
            await allergy.save();
            return allergy;
        }
        catch (error) {
            if (error.code === "23505") {
                throw new common_1.ConflictException("La Alergia ya fue creada");
            }
            else {
                this.logger.error(`Allergy name"${allergy.name}" creating it. dto: ${JSON.stringify(createAllergyDto)}`, error.stack);
                throw new common_1.InternalServerErrorException();
            }
        }
    }
};
AllergyRepository = __decorate([
    typeorm_1.EntityRepository(allergy_entity_1.Allergy)
], AllergyRepository);
exports.AllergyRepository = AllergyRepository;
//# sourceMappingURL=allergy.repository.js.map
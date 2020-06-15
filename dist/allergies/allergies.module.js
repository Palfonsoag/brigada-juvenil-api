"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const allergies_service_1 = require("./allergies.service");
const allergies_controller_1 = require("./allergies.controller");
const allergy_repository_1 = require("./allergy.repository");
const typeorm_1 = require("@nestjs/typeorm");
let AllergiesModule = class AllergiesModule {
};
AllergiesModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([allergy_repository_1.AllergyRepository])],
        providers: [allergies_service_1.AllergiesService],
        controllers: [allergies_controller_1.AllergiesController],
        exports: [allergies_service_1.AllergiesService],
    })
], AllergiesModule);
exports.AllergiesModule = AllergiesModule;
//# sourceMappingURL=allergies.module.js.map
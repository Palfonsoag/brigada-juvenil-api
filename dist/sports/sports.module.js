"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const sports_service_1 = require("./sports.service");
const sports_controller_1 = require("./sports.controller");
const sport_repository_1 = require("./sport.repository");
const typeorm_1 = require("@nestjs/typeorm");
let SportsModule = class SportsModule {
};
SportsModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([sport_repository_1.SportRepository])],
        providers: [sports_service_1.SportsService],
        controllers: [sports_controller_1.SportsController],
        exports: [sports_service_1.SportsService],
    })
], SportsModule);
exports.SportsModule = SportsModule;
//# sourceMappingURL=sports.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const ranks_controller_1 = require("./ranks.controller");
const ranks_service_1 = require("./ranks.service");
const typeorm_1 = require("@nestjs/typeorm");
const rank_repository_1 = require("./rank.repository");
let RanksModule = class RanksModule {
};
RanksModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([rank_repository_1.RankRepository])],
        controllers: [ranks_controller_1.RanksController],
        providers: [ranks_service_1.RanksService],
        exports: [ranks_service_1.RanksService],
    })
], RanksModule);
exports.RanksModule = RanksModule;
//# sourceMappingURL=ranks.module.js.map
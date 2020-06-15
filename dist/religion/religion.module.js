"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const religion_service_1 = require("./religion.service");
const religion_controller_1 = require("./religion.controller");
const religion_repository_1 = require("./religion.repository");
const typeorm_1 = require("@nestjs/typeorm");
let ReligionModule = class ReligionModule {
};
ReligionModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([religion_repository_1.ReligionRepository])],
        providers: [religion_service_1.ReligionService],
        controllers: [religion_controller_1.ReligionController],
        exports: [religion_service_1.ReligionService],
    })
], ReligionModule);
exports.ReligionModule = ReligionModule;
//# sourceMappingURL=religion.module.js.map
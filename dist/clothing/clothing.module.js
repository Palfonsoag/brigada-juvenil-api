"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const clothing_service_1 = require("./clothing.service");
const clothing_controller_1 = require("./clothing.controller");
const clothing_respository_1 = require("./clothing.respository");
const typeorm_1 = require("@nestjs/typeorm");
let ClothingModule = class ClothingModule {
};
ClothingModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([clothing_respository_1.ClothingRepository])],
        providers: [clothing_service_1.ClothingService],
        controllers: [clothing_controller_1.ClothingController],
        exports: [clothing_service_1.ClothingService],
    })
], ClothingModule);
exports.ClothingModule = ClothingModule;
//# sourceMappingURL=clothing.module.js.map
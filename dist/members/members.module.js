"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const members_controller_1 = require("./members.controller");
const members_service_1 = require("./members.service");
const member_repository_1 = require("./member.repository");
const typeorm_1 = require("@nestjs/typeorm");
const ranks_module_1 = require("../ranks/ranks.module");
const sports_module_1 = require("../sports/sports.module");
const religion_module_1 = require("../religion/religion.module");
const schools_module_1 = require("../schools/schools.module");
const clothing_module_1 = require("../clothing/clothing.module");
const allergies_module_1 = require("../allergies/allergies.module");
const courses_module_1 = require("../courses/courses.module");
let MembersModule = class MembersModule {
};
MembersModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([member_repository_1.MemberRepository]),
            ranks_module_1.RanksModule,
            sports_module_1.SportsModule,
            religion_module_1.ReligionModule,
            schools_module_1.SchoolsModule,
            clothing_module_1.ClothingModule,
            allergies_module_1.AllergiesModule,
            courses_module_1.CoursesModule,
        ],
        controllers: [members_controller_1.MembersController],
        providers: [members_service_1.MembersService],
        exports: [members_service_1.MembersService],
    })
], MembersModule);
exports.MembersModule = MembersModule;
//# sourceMappingURL=members.module.js.map
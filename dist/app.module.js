"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_config_1 = require("./config/typeorm.config");
const members_module_1 = require("./members/members.module");
const users_module_1 = require("./users/users.module");
const ranks_module_1 = require("./ranks/ranks.module");
const schools_module_1 = require("./schools/schools.module");
const contacts_module_1 = require("./contacts/contacts.module");
const clothing_module_1 = require("./clothing/clothing.module");
const religion_module_1 = require("./religion/religion.module");
const courses_module_1 = require("./courses/courses.module");
const allergies_module_1 = require("./allergies/allergies.module");
const sports_module_1 = require("./sports/sports.module");
const members_contact_module_1 = require("./members-contact/members-contact.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(typeorm_config_1.typeOrmConfig),
            members_module_1.MembersModule,
            users_module_1.UsersModule,
            ranks_module_1.RanksModule,
            schools_module_1.SchoolsModule,
            contacts_module_1.ContactsModule,
            clothing_module_1.ClothingModule,
            religion_module_1.ReligionModule,
            courses_module_1.CoursesModule,
            allergies_module_1.AllergiesModule,
            sports_module_1.SportsModule,
            members_contact_module_1.MembersContactModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
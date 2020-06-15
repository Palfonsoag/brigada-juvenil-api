"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const members_contact_controller_1 = require("./members-contact.controller");
const members_contact_service_1 = require("./members-contact.service");
const typeorm_1 = require("@nestjs/typeorm");
const members_contact_repository_1 = require("./members-contact.repository");
const members_module_1 = require("../members/members.module");
const contacts_module_1 = require("../contacts/contacts.module");
let MembersContactModule = class MembersContactModule {
};
MembersContactModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([members_contact_repository_1.MembersContactRepository]),
            members_module_1.MembersModule,
            contacts_module_1.ContactsModule,
        ],
        controllers: [members_contact_controller_1.MembersContactController],
        providers: [members_contact_service_1.MembersContactService],
        exports: [members_contact_service_1.MembersContactService],
    })
], MembersContactModule);
exports.MembersContactModule = MembersContactModule;
//# sourceMappingURL=members-contact.module.js.map
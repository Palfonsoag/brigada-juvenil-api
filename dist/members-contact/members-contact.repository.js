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
const members_contact_entity_1 = require("./members-contact.entity");
const member_entity_1 = require("../members/member.entity");
const contact_entity_1 = require("../contacts/contact.entity");
let MembersContactRepository = class MembersContactRepository extends typeorm_1.Repository {
    constructor() {
        super(...arguments);
        this.logger = new common_1.Logger("MembersContactRepository");
    }
    async getMembersContact(memberId) {
        const query = this.createQueryBuilder("members_contact")
            .leftJoinAndSelect("members_contact.contact", "contact")
            .leftJoinAndSelect("members_contact.member", "member");
        query.where("members_contact.memberId = :memberId", { memberId: memberId });
        const contacts = await query.getMany();
        return contacts;
    }
    async createMembersContact(emergency, member, contact) {
        const membersContact = new members_contact_entity_1.MembersContact();
        const value = emergency === "true";
        membersContact.emergency = value;
        membersContact.member = member;
        membersContact.contact = contact;
        try {
            await membersContact.save();
            return membersContact;
        }
        catch (error) {
            if (error.code === "23505") {
                throw new common_1.ConflictException("La Alergia ya fue creada");
            }
            else {
                throw new common_1.InternalServerErrorException();
            }
        }
    }
};
MembersContactRepository = __decorate([
    typeorm_1.EntityRepository(members_contact_entity_1.MembersContact)
], MembersContactRepository);
exports.MembersContactRepository = MembersContactRepository;
//# sourceMappingURL=members-contact.repository.js.map
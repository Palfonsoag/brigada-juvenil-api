"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const members_contact_repository_1 = require("./members-contact.repository");
const members_service_1 = require("../members/members.service");
const contacts_service_1 = require("../contacts/contacts.service");
let MembersContactService = class MembersContactService {
    constructor(memberContactRepository, memberService, contactService) {
        this.memberContactRepository = memberContactRepository;
        this.memberService = memberService;
        this.contactService = contactService;
    }
    async getMembersContact(memberId) {
        const member = await this.memberService.getMemberById(memberId);
        return this.memberContactRepository.getMembersContact(member.id);
    }
    async deleteContact(id) {
        const result = await this.memberContactRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Los datos ingresados no coinciden`);
        }
    }
    async createMembersContact(emergency, memberId, contactId) {
        const member = await this.memberService.getMemberById(memberId);
        const contact = await this.contactService.getContactById(contactId);
        await this.memberContactRepository.createMembersContact(emergency, member, contact);
    }
};
MembersContactService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(members_contact_repository_1.MembersContactRepository)),
    __metadata("design:paramtypes", [members_contact_repository_1.MembersContactRepository,
        members_service_1.MembersService,
        contacts_service_1.ContactsService])
], MembersContactService);
exports.MembersContactService = MembersContactService;
//# sourceMappingURL=members-contact.service.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const member_entity_1 = require("../members/member.entity");
const contact_entity_1 = require("../contacts/contact.entity");
let MembersContact = class MembersContact extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], MembersContact.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], MembersContact.prototype, "emergency", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => member_entity_1.Member, (member) => member.contacts, { eager: false }),
    __metadata("design:type", member_entity_1.Member)
], MembersContact.prototype, "member", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], MembersContact.prototype, "memberId", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => contact_entity_1.Contact, (contact) => contact.members, { eager: false }),
    __metadata("design:type", contact_entity_1.Contact)
], MembersContact.prototype, "contact", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], MembersContact.prototype, "contactId", void 0);
MembersContact = __decorate([
    typeorm_1.Entity()
], MembersContact);
exports.MembersContact = MembersContact;
//# sourceMappingURL=members-contact.entity.js.map
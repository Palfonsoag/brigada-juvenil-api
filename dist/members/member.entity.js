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
const member_gender_enum_1 = require("./member-gender.enum");
const member_blood_type_enum_1 = require("./member-blood-type.enum");
const rank_entity_1 = require("../ranks/rank.entity");
const school_entity_1 = require("../schools/school.entity");
const religion_entity_1 = require("../religion/religion.entity");
const sport_entity_1 = require("../sports/sport.entity");
const members_contact_entity_1 = require("../members-contact/members-contact.entity");
const course_entity_1 = require("../courses/course.entity");
const clothing_entity_1 = require("../clothing/clothing.entity");
const allergy_entity_1 = require("../allergies/allergy.entity");
let Member = class Member extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Member.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Member.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Member.prototype, "document_number", void 0);
__decorate([
    typeorm_1.Column({ type: "date" }),
    __metadata("design:type", Date)
], Member.prototype, "birthday", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Member.prototype, "gender", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Member.prototype, "blood_type", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], Member.prototype, "carnet", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, type: "date" }),
    __metadata("design:type", Date)
], Member.prototype, "graduation_year", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => rank_entity_1.Rank, (rank) => rank.members, { nullable: true }),
    __metadata("design:type", rank_entity_1.Rank)
], Member.prototype, "rank", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => school_entity_1.School, (school) => school.members, { nullable: true }),
    __metadata("design:type", school_entity_1.School)
], Member.prototype, "school", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => religion_entity_1.Religion, (religion) => religion.members, { nullable: true }),
    __metadata("design:type", religion_entity_1.Religion)
], Member.prototype, "religion", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => sport_entity_1.Sport, (sport) => sport.members, { nullable: true }),
    __metadata("design:type", sport_entity_1.Sport)
], Member.prototype, "sport", void 0);
__decorate([
    typeorm_1.OneToMany((type) => members_contact_entity_1.MembersContact, (membersContact) => membersContact.member),
    __metadata("design:type", Array)
], Member.prototype, "contacts", void 0);
__decorate([
    typeorm_1.ManyToMany((type) => course_entity_1.Course, (course) => course.members),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Member.prototype, "courses", void 0);
__decorate([
    typeorm_1.ManyToMany((type) => clothing_entity_1.Clothing, (clothing) => clothing.members),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Member.prototype, "clothing", void 0);
__decorate([
    typeorm_1.ManyToMany((type) => allergy_entity_1.Allergy, (allergy) => allergy.members),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Member.prototype, "allergies", void 0);
Member = __decorate([
    typeorm_1.Entity()
], Member);
exports.Member = Member;
//# sourceMappingURL=member.entity.js.map
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
const member_entity_1 = require("./member.entity");
const rank_entity_1 = require("../ranks/rank.entity");
const school_entity_1 = require("../schools/school.entity");
const religion_entity_1 = require("../religion/religion.entity");
const sport_entity_1 = require("../sports/sport.entity");
let MemberRepository = class MemberRepository extends typeorm_1.Repository {
    async getMembers(filterDto) {
        let { search, name, document_number } = filterDto;
        name = name || '';
        document_number = document_number || '';
        search = search || '';
        return await this.find({
            where: {
                name: typeorm_1.Like(`%${name}%`),
                document_number: typeorm_1.Like(`%${document_number}%`),
                email: typeorm_1.Like(`%${search}%`)
            },
        });
    }
    async getMember(id) {
        return await this.findOne({
            relations: [
                'school',
                'rank',
                'religion',
                'sport',
                'clothing',
                'allergies',
                'courses'
            ],
            where: {
                id: id,
            }
        });
    }
    async getClothes(id) {
        const query = this.createQueryBuilder("member").leftJoinAndSelect("member.clothing", "clothing");
        query.where("member.id = :id", {
            id,
        });
        const clothes = await query.getOne();
        return clothes;
    }
    async getAllergy(id) {
        const query = this.createQueryBuilder("member").leftJoinAndSelect("member.allergies", "allergy");
        query.where("member.id = :id", {
            id,
        });
        const allergies = await query.getOne();
        return allergies;
    }
    async getCourses(id) {
        const query = this.createQueryBuilder("member").leftJoinAndSelect("member.courses", "course");
        query.where("member.id = :id", {
            id,
        });
        const courses = await query.getOne();
        return courses;
    }
    async createMember(createMemberDto) {
        const { name, gender, birthday, graduation_year, document_number, blood_type, carnet, } = createMemberDto;
        const member = new member_entity_1.Member();
        member.name = name;
        member.birthday = birthday;
        member.gender = gender;
        if (graduation_year) {
            member.graduation_year = graduation_year;
        }
        if (document_number) {
            member.document_number = document_number;
        }
        if (blood_type) {
            member.blood_type = blood_type;
        }
        if (carnet) {
            member.carnet = carnet;
        }
        try {
            await member.save();
            return member;
        }
        catch (error) {
            console.log(error);
            if (error.code === "23505") {
                throw new common_1.ConflictException("El correo ya se encuentra registrado");
            }
            else {
                throw new common_1.InternalServerErrorException();
            }
        }
    }
};
MemberRepository = __decorate([
    typeorm_1.EntityRepository(member_entity_1.Member)
], MemberRepository);
exports.MemberRepository = MemberRepository;
//# sourceMappingURL=member.repository.js.map
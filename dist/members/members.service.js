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
const member_repository_1 = require("./member.repository");
const ranks_service_1 = require("../ranks/ranks.service");
const schools_service_1 = require("../schools/schools.service");
const sports_service_1 = require("../sports/sports.service");
const religion_service_1 = require("../religion/religion.service");
const clothing_service_1 = require("../clothing/clothing.service");
const allergies_service_1 = require("../allergies/allergies.service");
const courses_service_1 = require("../courses/courses.service");
let MembersService = class MembersService {
    constructor(memberRepository, rankService, schoolService, sportService, religionService, clothingService, allergiesService, coursesService) {
        this.memberRepository = memberRepository;
        this.rankService = rankService;
        this.schoolService = schoolService;
        this.sportService = sportService;
        this.religionService = religionService;
        this.clothingService = clothingService;
        this.allergiesService = allergiesService;
        this.coursesService = coursesService;
    }
    async getMembers(filterDto) {
        return this.memberRepository.getMembers(filterDto);
    }
    async getMember(id) {
        return this.memberRepository.getMember(id);
    }
    async getMemberById(id) {
        const foundMember = await this.memberRepository.findOne(id);
        if (!foundMember) {
            throw new common_1.NotFoundException(`Los datos ingresados no coinciden`);
        }
        return foundMember;
    }
    async deleteMember(id) {
        const result = await this.memberRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Los datos ingresados no coinciden`);
        }
    }
    async createMember(createMemberDto) {
        await this.memberRepository.createMember(createMemberDto);
    }
    async updateMember(id, updateMemberDto) {
        const member = await this.getMemberById(id);
        if (updateMemberDto.name) {
            member.name = updateMemberDto.name;
        }
        if (updateMemberDto.gender) {
            member.gender = updateMemberDto.gender;
        }
        if (updateMemberDto.birthday) {
            member.birthday = updateMemberDto.birthday;
        }
        if (updateMemberDto.graduation_year) {
            member.graduation_year = updateMemberDto.graduation_year;
        }
        if (updateMemberDto.document_number) {
            member.document_number = updateMemberDto.document_number;
        }
        if (updateMemberDto.graduation_year) {
            member.graduation_year = updateMemberDto.graduation_year;
        }
        if (updateMemberDto.blood_type) {
            member.blood_type = updateMemberDto.blood_type;
        }
        if (updateMemberDto.carnet) {
            member.carnet = updateMemberDto.carnet;
        }
        await member.save();
        return member;
    }
    async updateSecondData(id, updateSecondaryDataDto) {
        const member = await this.getMemberById(id);
        if (updateSecondaryDataDto.rank) {
            const rank = await this.rankService.getRankById(updateSecondaryDataDto.rank);
            member.rank = rank;
        }
        if (updateSecondaryDataDto.school) {
            const school = await this.schoolService.getSchoolById(updateSecondaryDataDto.school);
            member.school = school;
        }
        if (updateSecondaryDataDto.religion) {
            const religion = await this.religionService.getReligionById(updateSecondaryDataDto.religion);
            member.religion = religion;
        }
        if (updateSecondaryDataDto.sport) {
            const sport = await this.sportService.getSportById(updateSecondaryDataDto.sport);
            member.sport = sport;
        }
        await member.save();
        return member;
    }
    async updateClothing(id, clothingId, action) {
        const member = await this.getMemberById(id);
        const clothing = await this.clothingService.getClothingById(clothingId);
        const memberCloth = await this.memberRepository.getClothes(member.id);
        const clothingArray = memberCloth.clothing;
        if (clothingArray) {
            if (action === 'create') {
                member.clothing = [...clothingArray, clothing];
            }
            else {
                member.clothing = clothingArray.filter((allergyInMember) => {
                    return allergyInMember.id !== clothing.id;
                });
            }
        }
        else {
            member.clothing = [clothing];
        }
        await member.save();
        return member;
    }
    async updateCourses(id, courseId, action) {
        const member = await this.getMemberById(id);
        const course = await this.coursesService.getCourseById(courseId);
        const memberCourses = await this.memberRepository.getCourses(member.id);
        const coursesArray = memberCourses.courses;
        if (coursesArray) {
            if (action === 'create') {
                member.courses = [...coursesArray, course];
            }
            else {
                member.courses = coursesArray.filter((allergyInMember) => {
                    return allergyInMember.id !== course.id;
                });
            }
        }
        else {
            action === 'create' && (member.courses = [course]);
        }
        await member.save();
        return member;
    }
    async updateAllergy(id, allergyId, action) {
        const member = await this.getMemberById(id);
        const allergy = await this.allergiesService.getAllergyById(allergyId);
        const memberAllergies = await this.memberRepository.getAllergy(member.id);
        const allergiesArray = memberAllergies.allergies;
        if (allergiesArray) {
            if (action === 'create') {
                member.allergies = [...allergiesArray, allergy];
            }
            else {
                member.allergies = allergiesArray.filter((allergyInMember) => {
                    return allergyInMember.id !== allergy.id;
                });
            }
        }
        else {
            action === 'create' && (member.allergies = [allergy]);
        }
        await member.save();
        return member;
    }
};
MembersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(member_repository_1.MemberRepository)),
    __metadata("design:paramtypes", [member_repository_1.MemberRepository,
        ranks_service_1.RanksService,
        schools_service_1.SchoolsService,
        sports_service_1.SportsService,
        religion_service_1.ReligionService,
        clothing_service_1.ClothingService,
        allergies_service_1.AllergiesService,
        courses_service_1.CoursesService])
], MembersService);
exports.MembersService = MembersService;
//# sourceMappingURL=members.service.js.map
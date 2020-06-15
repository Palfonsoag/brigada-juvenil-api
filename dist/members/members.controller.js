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
const members_service_1 = require("./members.service");
const get_members_dto_1 = require("./dto/get-members.dto");
const create_members_dto_1 = require("./dto/create-members.dto");
const update_member_dto_1 = require("./dto/update-member.dto");
const update_secondary_data_dto_1 = require("./dto/update-secondary-data.dto");
let MembersController = class MembersController {
    constructor(membersService) {
        this.membersService = membersService;
    }
    getMembers(filterDto) {
        return this.membersService.getMembers(filterDto);
    }
    getMemberById(id) {
        return this.membersService.getMemberById(id);
    }
    getMember(id) {
        return this.membersService.getMember(id);
    }
    createMember(createMemberDto) {
        return this.membersService.createMember(createMemberDto);
    }
    updateMember(id, updateMemberDto) {
        return this.membersService.updateMember(id, updateMemberDto);
    }
    updateSecondData(id, updateSecondaryDataDto) {
        return this.membersService.updateSecondData(id, updateSecondaryDataDto);
    }
    updateClothing(id, clothing) {
        return this.membersService.updateClothing(id, clothing, 'create');
    }
    removeClothing(id, clothing) {
        return this.membersService.updateClothing(id, clothing, 'remove');
    }
    updateCourses(id, course) {
        return this.membersService.updateCourses(id, course, 'create');
    }
    removeCourses(id, course) {
        return this.membersService.updateCourses(id, course, 'remove');
    }
    updateAllergy(id, allergy) {
        return this.membersService.updateAllergy(id, allergy, 'create');
    }
    removeAllergy(id, allergy) {
        return this.membersService.updateAllergy(id, allergy, 'remove');
    }
    deleteMember(id) {
        return this.membersService.deleteMember(id);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Query(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_members_dto_1.GetMemberFilterDto]),
    __metadata("design:returntype", Promise)
], MembersController.prototype, "getMembers", null);
__decorate([
    common_1.Get("/:id"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MembersController.prototype, "getMemberById", null);
__decorate([
    common_1.Get("/:id/full-data"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MembersController.prototype, "getMember", null);
__decorate([
    common_1.Post("/create"),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_members_dto_1.CreateMemberDto]),
    __metadata("design:returntype", Promise)
], MembersController.prototype, "createMember", null);
__decorate([
    common_1.Put("/:id/update"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe)),
    __param(1, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_member_dto_1.UpdateMemberDto]),
    __metadata("design:returntype", Promise)
], MembersController.prototype, "updateMember", null);
__decorate([
    common_1.Put("/:id/second-data"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe)),
    __param(1, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_secondary_data_dto_1.UpdateSecondaryDataDto]),
    __metadata("design:returntype", Promise)
], MembersController.prototype, "updateSecondData", null);
__decorate([
    common_1.Put("/:id/update-clothing"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe)),
    __param(1, common_1.Body("clothing")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], MembersController.prototype, "updateClothing", null);
__decorate([
    common_1.Put("/:id/remove-clothing"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe)),
    __param(1, common_1.Body("clothing")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], MembersController.prototype, "removeClothing", null);
__decorate([
    common_1.Put("/:id/update-course"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe)),
    __param(1, common_1.Body("course")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], MembersController.prototype, "updateCourses", null);
__decorate([
    common_1.Put("/:id/remove-course"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe)),
    __param(1, common_1.Body("course")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], MembersController.prototype, "removeCourses", null);
__decorate([
    common_1.Put("/:id/update-allergy"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe)),
    __param(1, common_1.Body("allergy")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], MembersController.prototype, "updateAllergy", null);
__decorate([
    common_1.Put("/:id/remove-allergy"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe)),
    __param(1, common_1.Body("allergy")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], MembersController.prototype, "removeAllergy", null);
__decorate([
    common_1.Delete("/:id"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MembersController.prototype, "deleteMember", null);
MembersController = __decorate([
    common_1.Controller("members"),
    __metadata("design:paramtypes", [members_service_1.MembersService])
], MembersController);
exports.MembersController = MembersController;
//# sourceMappingURL=members.controller.js.map
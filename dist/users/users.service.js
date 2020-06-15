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
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const user_repository_1 = require("./user.repository");
const members_service_1 = require("../members/members.service");
let UsersService = class UsersService {
    constructor(userRepository, jwtService, memberService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
        this.memberService = memberService;
    }
    async getUsers(filterDto) {
        return this.userRepository.getUsers(filterDto);
    }
    async getUserById(id) {
        const foundUser = await this.userRepository.getUser(id);
        if (!foundUser) {
            throw new common_1.NotFoundException(`El usuario que busca no puede ser encontrado`);
        }
        return foundUser;
    }
    async deleteUser(id) {
        const result = await this.userRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`el usuario que busca no puede ser encontrado`);
        }
    }
    async signUp(signUpDto, role, memberId) {
        const member = await this.memberService.getMemberById(memberId);
        const user = await this.userRepository.signUp(signUpDto, role, member);
    }
    async signIn(signInDto) {
        const user = await this.userRepository.validateUserPassword(signInDto);
        if (user) {
            const { email } = user;
            const payload = { email };
            const accessToken = this.jwtService.sign(payload);
            return { accessToken };
        }
        else {
            throw new common_1.UnauthorizedException("Los datos ingresados son incorrectos");
        }
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_repository_1.UserRepository)),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        jwt_1.JwtService,
        members_service_1.MembersService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map
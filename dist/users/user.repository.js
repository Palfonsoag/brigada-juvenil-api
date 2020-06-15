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
const bcrypt = require("bcryptjs");
const user_entity_1 = require("./user.entity");
let UserRepository = class UserRepository extends typeorm_1.Repository {
    async getUsers(filterDto) {
        const { search } = filterDto;
        const query = this.createQueryBuilder("user");
        if (search) {
            query.where("(user.email LIKE :search)", { search: `%${search}%` });
        }
        const users = await query.getMany();
        return users;
    }
    async getUser(id) {
        const query = this.createQueryBuilder("user").where("user.id = :id", {
            id,
        });
        const user = await query.getOne();
        return user;
    }
    async signUp(signUpDto, role, member) {
        const { email, password } = signUpDto;
        const salt = await bcrypt.genSalt();
        const user = new user_entity_1.User();
        user.email = email;
        user.password = await this.hashPassword(password, salt);
        user.salt = salt;
        user.role = role;
        user.member = member;
        try {
            await user.save();
            delete user.password;
            delete user.salt;
            return user;
        }
        catch (error) {
            if (error.code === "23505") {
                throw new common_1.ConflictException("El correo ya se encuentra registrado");
            }
            else {
                throw new common_1.InternalServerErrorException();
            }
        }
    }
    async hashPassword(password, salt) {
        return bcrypt.hash(password, salt);
    }
    async validateUserPassword(signInDto) {
        const { email, password } = signInDto;
        const user = await this.findOne({ email });
        if (user && (await user.validatePassword(password))) {
            return user;
        }
        else {
            return null;
        }
    }
};
UserRepository = __decorate([
    typeorm_1.EntityRepository(user_entity_1.User)
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map
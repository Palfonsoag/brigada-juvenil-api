import { Repository } from "typeorm";
import { User } from "./user.entity";
import { GetUserFilterDto } from "./dto/get-user-filter.dto";
import { SignUpDto } from "./dto/sign-up.dto";
import { SignInDto } from "./dto/sign-in.dto";
import { UserRole } from "./user-role.enum";
import { Member } from "../members/member.entity";
export declare class UserRepository extends Repository<User> {
    getUsers(filterDto: GetUserFilterDto): Promise<User[]>;
    getUser(id: number): Promise<User>;
    signUp(signUpDto: SignUpDto, role: UserRole, member: Member): Promise<User>;
    private hashPassword;
    validateUserPassword(signInDto: SignInDto): Promise<User>;
}

import { JwtService } from "@nestjs/jwt";
import { GetUserFilterDto } from "./dto/get-user-filter.dto";
import { UserRepository } from "./user.repository";
import { User } from "./user.entity";
import { SignUpDto } from "./dto/sign-up.dto";
import { SignInDto } from "./dto/sign-in.dto";
import { UserRole } from "./user-role.enum";
import { MembersService } from "../members/members.service";
export declare class UsersService {
    private userRepository;
    private jwtService;
    private memberService;
    constructor(userRepository: UserRepository, jwtService: JwtService, memberService: MembersService);
    getUsers(filterDto: GetUserFilterDto): Promise<User[]>;
    getUserById(id: number): Promise<User>;
    deleteUser(id: number): Promise<void>;
    signUp(signUpDto: SignUpDto, role: UserRole, memberId: number): Promise<void>;
    signIn(signInDto: SignInDto): Promise<{
        accessToken: string;
    }>;
}

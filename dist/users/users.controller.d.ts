import { UsersService } from "./users.service";
import { GetUserFilterDto } from "./dto/get-user-filter.dto";
import { User } from "./user.entity";
import { SignUpDto } from "./dto/sign-up.dto";
import { SignInDto } from "./dto/sign-in.dto";
import { UserRole } from "./user-role.enum";
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    getUsers(filterDto: GetUserFilterDto): Promise<User[]>;
    getUserById(id: number): Promise<User>;
    signUp(signUpDto: SignUpDto, role: UserRole, member: number): Promise<void>;
    signIn(signInDto: SignInDto): Promise<{
        accessToken: string;
    }>;
    deleteUser(id: number): Promise<void>;
}

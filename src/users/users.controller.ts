import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Query,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { GetUserFilterDto } from "./dto/get-user-filter.dto";
import { User } from "./user.entity";
import { SignUpDto } from "./dto/sign-up.dto";
import { SignInDto } from "./dto/sign-in.dto";
import { UserRoleValidationPipe } from "./pipes/user-role.pipe";
import { UserRole } from "./user-role.enum";

@Controller("users")
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getUsers(@Query(ValidationPipe) filterDto: GetUserFilterDto) {
    return this.userService.getUsers(filterDto);
  }

  @Get("/:id")
  getUserById(@Param("id", ParseIntPipe) id: number): Promise<User> {
    return this.userService.getUserById(id);
  }

  @Post("/signup")
  @UsePipes(ValidationPipe)
  signUp(
    @Body(ValidationPipe) signUpDto: SignUpDto,
    @Body("role", UserRoleValidationPipe) role: UserRole,
    @Body("member") member: number
  ): Promise<void> {
    return this.userService.signUp(signUpDto, role, member);
  }

  @Post("/signin")
  @UsePipes(ValidationPipe)
  signIn(
    @Body(ValidationPipe) signInDto: SignInDto
  ): Promise<{ accessToken: string }> {
    return this.userService.signIn(signInDto);
  }

  @Delete("/:id")
  deleteUser(@Param("id", ParseIntPipe) id: number): Promise<void> {
    return this.userService.deleteUser(id);
  }

  // @Post("/test")
  // @UseGuards(AuthGuard())
  // test(@GetUser() user: User) {
  //   console.log(user);
  // }
}

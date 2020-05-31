import { Repository, EntityRepository } from "typeorm";
import {
  ConflictException,
  InternalServerErrorException,
} from "@nestjs/common";
import * as bcrypt from "bcryptjs";
import { User } from "./user.entity";
import { GetUserFilterDto } from "./dto/get-user-filter.dto";
import { SignUpDto } from "./dto/sign-up.dto";
import { SignInDto } from "./dto/sign-in.dto";
import { UserRole } from "./user-role.enum";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async getUsers(filterDto: GetUserFilterDto): Promise<User[]> {
    const { search } = filterDto;
    const query = this.createQueryBuilder("user");

    if (search) {
      query.where("(user.email LIKE :search)", { search: `%${search}%` });
    }

    const users = await query.getMany();

    return users;
  }

  async getUser(id: number): Promise<User> {
    const query = this.createQueryBuilder("user").where("user.id = :id", {
      id,
    });

    const user = await query.getOne();

    return user;
  }

  async signUp(signUpDto: SignUpDto, role: UserRole): Promise<User> {
    const { email, password } = signUpDto;
    const salt = await bcrypt.genSalt();

    const user = new User();

    user.email = email;
    user.password = await this.hashPassword(password, salt);
    user.salt = salt;
    user.role = role;
    try {
      await user.save();
      delete user.password;
      delete user.salt;
      return user;
    } catch (error) {
      if (error.code === "23505") {
        throw new ConflictException("El correo ya se encuentra registrado");
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  private async hashPassword(password: string, salt: string) {
    return bcrypt.hash(password, salt);
  }

  async validateUserPassword(signInDto: SignInDto): Promise<User> {
    const { email, password } = signInDto;
    const user = await this.findOne({ email });

    if (user && (await user.validatePassword(password))) {
      return user;
    } else {
      return null;
    }
  }
}

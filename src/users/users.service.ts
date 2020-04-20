import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { GetUserFilterDto } from "./dto/get-user-filter.dto";
import { UserRepository } from "./user.repository";
import { User } from "./user.entity";
import { SignUpDto } from "./dto/sign-up.dto";
import { SignInDto } from "./dto/sign-in.dto";
import { JwtPayload } from "./jwt-payload.interface";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService
  ) {}
  async getUsers(filterDto: GetUserFilterDto): Promise<User[]> {
    return this.userRepository.getUsers(filterDto);
  }

  async getUserById(id: number): Promise<User> {
    const foundUser = await this.userRepository.getUser(id);
    if (!foundUser) {
      throw new NotFoundException(
        `El usuario que busca no puede ser encontrado`
      );
    }
    return foundUser;
  }
  async deleteUser(id: number): Promise<void> {
    const result = await this.userRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(
        `el usuario que busca no puede ser encontrado`
      );
    }
  }

  async signUp(signUpDto: SignUpDto): Promise<void> {
    const user = await this.userRepository.signUp(signUpDto);

    if (user) {
      const { email } = user;
      const subject = "¡Bienvenido a Celupagos! - Confirma tu correo";
      const text = "Confirma tu  correo";
    }
  }

  async signIn(signInDto: SignInDto): Promise<{ accessToken: string }> {
    const user = await this.userRepository.validateUserPassword(signInDto);
    if (user) {
      const { email } = user;

      const payload: JwtPayload = { email };
      const accessToken = this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException("Los datos ingresados son incorrectos");
    }
  }
}

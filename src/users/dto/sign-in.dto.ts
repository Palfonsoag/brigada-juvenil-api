import { IsString, MinLength, MaxLength, Matches } from "class-validator";

export class SignInDto {
  @IsString()
  @MinLength(3)
  @MaxLength(40)
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(8)
  @Matches(
    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[.,/*#-])[A-Za-z-0-9$*$/$.,/*#-]{8,8}$/,
    { message: "1001 credenciales no validas" }
  )
  password: string;
}

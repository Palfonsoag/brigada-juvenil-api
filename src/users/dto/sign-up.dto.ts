import { IsString, MinLength, MaxLength, Matches } from "class-validator";

export class SignUpDto {
  @IsString()
  @MinLength(3)
  @MaxLength(40)
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(8)
  @Matches(
    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[.,/*#-])[A-Za-z-0-9$*$/$.,/*#-]{8,8}$/
  )
  password: string;
}

import { IsNotEmpty } from "class-validator";

export class CreateRankDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;
}

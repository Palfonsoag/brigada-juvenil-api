import { IsNotEmpty } from "class-validator";

export class CreateReligionDto {
  @IsNotEmpty()
  name: string;
}

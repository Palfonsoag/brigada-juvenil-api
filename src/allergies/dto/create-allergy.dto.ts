import { IsNotEmpty } from "class-validator";

export class CreateAllergyDto {
  @IsNotEmpty()
  name: string;
}

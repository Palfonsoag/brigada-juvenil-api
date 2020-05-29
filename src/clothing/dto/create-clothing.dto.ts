import { IsNotEmpty } from "class-validator";

export class CreateClothingDto {
  @IsNotEmpty()
  name: string;
}

import { IsOptional } from "class-validator";

export class UpdateClothingDto {
  @IsOptional()
  name: string;
}

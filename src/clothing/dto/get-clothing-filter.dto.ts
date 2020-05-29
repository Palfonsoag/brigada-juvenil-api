import { IsNotEmpty, IsOptional } from "class-validator";

export class GetClothingFilterDto {
  @IsOptional()
  @IsNotEmpty()
  name: string;
}

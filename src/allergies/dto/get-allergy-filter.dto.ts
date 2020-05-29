import { IsNotEmpty, IsOptional } from "class-validator";

export class GetAllergyFilterDto {
  @IsOptional()
  @IsNotEmpty()
  name: string;
}

import { IsOptional } from "class-validator";

export class UpdateAllergyDto {
  @IsOptional()
  name: string;
}

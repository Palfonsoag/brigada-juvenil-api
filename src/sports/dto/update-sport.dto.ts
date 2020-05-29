import { IsOptional } from "class-validator";

export class UpdateSportDto {
  @IsOptional()
  name: string;
}

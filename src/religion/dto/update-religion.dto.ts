import { IsOptional } from "class-validator";

export class UpdateReligionDto {
  @IsOptional()
  name: string;
}

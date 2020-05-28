import { IsOptional } from "class-validator";

export class UpdateRankDto {
  @IsOptional()
  name: string;

  @IsOptional()
  description: string;
}

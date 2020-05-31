import { IsOptional, IsNotEmpty } from "class-validator";

export class UpdateSecondaryDataDto {
  @IsNotEmpty()
  @IsOptional()
  rank: number;

  @IsNotEmpty()
  @IsOptional()
  school: number;

  @IsNotEmpty()
  @IsOptional()
  religion: number;

  @IsNotEmpty()
  @IsOptional()
  sport: number;
}

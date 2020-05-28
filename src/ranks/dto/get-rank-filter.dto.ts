import { IsNotEmpty, IsOptional } from "class-validator";

export class GetRankFilterDto {
  @IsOptional()
  @IsNotEmpty()
  search: string;
}

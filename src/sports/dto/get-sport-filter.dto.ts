import { IsNotEmpty, IsOptional } from "class-validator";

export class GetSportFilterDto {
  @IsOptional()
  @IsNotEmpty()
  name: string;
}

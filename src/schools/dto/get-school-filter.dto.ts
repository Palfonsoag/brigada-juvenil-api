import { IsNotEmpty, IsOptional } from "class-validator";

export class GetSchoolFilterDto {
  @IsOptional()
  @IsNotEmpty()
  name: string;
}

import { IsNotEmpty, IsOptional } from "class-validator";

export class GetCourseFilterDto {
  @IsOptional()
  @IsNotEmpty()
  search: string;
}

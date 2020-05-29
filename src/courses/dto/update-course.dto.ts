import { IsOptional } from "class-validator";

export class UpdateCourseDto {
  @IsOptional()
  name: string;

  @IsOptional()
  description: string;
}
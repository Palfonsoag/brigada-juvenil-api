import { IsOptional } from "class-validator";
import { BloodType } from "../member-blood-type.enum";
import { Gender } from "../member-gender.enum";

export class UpdateCourseDto {
  @IsOptional()
  name: string;

  @IsOptional()
  gender: Gender;

  @IsOptional()
  birthday: Date;

  @IsOptional()
  graduation_year: Date;

  @IsOptional()
  document_number: string;

  @IsOptional()
  blood_type: BloodType;

  @IsOptional()
  carnet: number;
}

import { IsOptional, IsNotEmpty } from "class-validator";
import { BloodType } from "../member-blood-type.enum";
import { Gender } from "../member-gender.enum";

export class UpdateMemberDto {
  @IsNotEmpty()
  @IsOptional()
  name: string;

  @IsNotEmpty()
  @IsOptional()
  gender: Gender;

  @IsNotEmpty()
  @IsOptional()
  birthday: Date;

  @IsNotEmpty()
  @IsOptional()
  graduation_year: Date;

  @IsNotEmpty()
  @IsOptional()
  document_number: string;

  @IsNotEmpty()
  @IsOptional()
  blood_type: BloodType;

  @IsNotEmpty()
  @IsOptional()
  carnet: number;
}

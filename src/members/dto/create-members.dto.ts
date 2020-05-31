import { IsNotEmpty, IsOptional } from "class-validator";
import { Gender } from "../member-gender.enum";
import { BloodType } from "../member-blood-type.enum";

export class CreateMemberDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  gender: Gender;

  @IsNotEmpty()
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

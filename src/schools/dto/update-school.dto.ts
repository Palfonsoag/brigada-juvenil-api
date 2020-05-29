import { IsNotEmpty } from "class-validator";

export class UpdateSchoolDto {
  @IsNotEmpty()
  name: string;
}

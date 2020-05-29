import { IsNotEmpty } from "class-validator";

export class CreateSchoolDto {
  @IsNotEmpty()
  name: string;
}

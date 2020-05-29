import { IsNotEmpty, IsOptional } from "class-validator";

export class GetReligionFilterDto {
  @IsOptional()
  @IsNotEmpty()
  name: string;
}

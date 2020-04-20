import { IsOptional, IsIn, IsNotEmpty } from "class-validator";

export class GetUserFilterDto {
  @IsOptional()
  @IsNotEmpty()
  search: string;
}

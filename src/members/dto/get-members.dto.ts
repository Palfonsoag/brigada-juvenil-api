import { IsNotEmpty, IsOptional } from "class-validator";

export class GetMemberFilterDto {
  @IsOptional()
  @IsNotEmpty()
  search: string;

  @IsOptional()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsNotEmpty()
  document_number: string;
}

import { IsNotEmpty, IsOptional } from "class-validator";

export class GetContactFilterDto {
  @IsOptional()
  @IsNotEmpty()
  search: string;

  @IsOptional()
  @IsNotEmpty()
  documentNumber: string;
}

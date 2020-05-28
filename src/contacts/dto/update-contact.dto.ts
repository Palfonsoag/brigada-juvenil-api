import { IsOptional } from "class-validator";

export class UpdateContactDto {
  @IsOptional()
  address: string;

  @IsOptional()
  phoneNumber: string;

  @IsOptional()
  documentNumber: string;

  @IsOptional()
  name: string;
}

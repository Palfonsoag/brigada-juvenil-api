import { IsOptional } from "class-validator";

export class UpdateContactDto {
  @IsOptional()
  address: string;

  @IsOptional()
  phone_number: string;

  @IsOptional()
  document_number: string;

  @IsOptional()
  name: string;
}

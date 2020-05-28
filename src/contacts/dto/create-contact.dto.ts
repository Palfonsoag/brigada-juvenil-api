import { IsNotEmpty } from "class-validator";

export class CreateContactDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  phone_number: string;
  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  document_number: string;
}

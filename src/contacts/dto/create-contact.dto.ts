import { IsNotEmpty } from "class-validator";

export class CreateContactDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  phoneNumber: string;
  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  documentNumber: string;
}

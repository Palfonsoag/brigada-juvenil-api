import {
  Controller,
  Get,
  ValidationPipe,
  Query,
  Param,
  ParseIntPipe,
  Delete,
  Put,
  Body,
  Post,
  UsePipes,
} from "@nestjs/common";
import { ContactsService } from "./contacts.service";
import { GetContactFilterDto } from "./dto/get-contact-filter.dto";
import { Contact } from "./contact.entity";
import { UpdateContactDto } from "./dto/update-contact.dto";
import { CreateContactDto } from "./dto/create-contact.dto";

@Controller("contacts")
export class ContactsController {
  constructor(private contactService: ContactsService) {}

  @Get()
  getContacts(
    @Query(ValidationPipe) filterDto: GetContactFilterDto
  ): Promise<Contact[]> {
    return this.contactService.getContacts(filterDto);
  }

  @Get("/:id")
  getContactById(@Param("id", ParseIntPipe) id: number): Promise<Contact> {
    return this.contactService.getContactById(id);
  }

  @Delete("/:id")
  deleteContact(@Param("id", ParseIntPipe) id: number): Promise<void> {
    return this.contactService.deleteContact(id);
  }

  @Put("/:id/update")
  updateContact(
    @Param("id", ParseIntPipe) id: number,
    @Body(ValidationPipe) updateContactDto: UpdateContactDto
  ): Promise<Contact> {
    return this.contactService.updateContact(id, updateContactDto);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createContact(
    @Body(ValidationPipe) createContactDto: CreateContactDto
  ): Promise<void> {
    return this.contactService.createContact(createContactDto);
  }
}

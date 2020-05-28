import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ContactRepository } from "./contact.repository";
import { Contact } from "./contact.entity";
import { UpdateContactDto } from "./dto/update-contact.dto";
import { GetContactFilterDto } from "./dto/get-contact-filter.dto";
import { CreateContactDto } from "./dto/create-contact.dto";

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(ContactRepository)
    private contactRepository: ContactRepository
  ) {}

  async getContacts(filterDto: GetContactFilterDto): Promise<Contact[]> {
    return this.contactRepository.getContacts(filterDto);
  }

  async getContactById(id: number): Promise<Contact> {
    const foundContact = await this.contactRepository.findOne(id);
    if (!foundContact) {
      throw new NotFoundException(`Los datos ingresados no coinciden`);
    }
    return foundContact;
  }

  async updateContact(
    id: number,
    updateContactDto: UpdateContactDto
  ): Promise<Contact> {
    const contact = await this.getContactById(id);

    if (updateContactDto.address) {
      contact.address = updateContactDto.address;
    }

    if (updateContactDto.phoneNumber) {
      contact.phone_number = updateContactDto.phoneNumber;
    }

    if (updateContactDto.name) {
      contact.name = updateContactDto.name;
    }
    if (updateContactDto.documentNumber) {
      contact.document_number = updateContactDto.documentNumber;
    }

    await contact.save();

    return contact;
  }

  async deleteContact(id: number): Promise<void> {
    const result = await this.contactRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Los datos ingresados no coinciden`);
    }
  }

  async createContact(createContactDto: CreateContactDto): Promise<void> {
    await this.contactRepository.createContact(createContactDto);
  }
}

import { Repository, EntityRepository } from "typeorm";
import {
  InternalServerErrorException,
  ConflictException,
  Logger,
} from "@nestjs/common";
import { Contact } from "./contact.entity";
import { GetContactFilterDto } from "./dto/get-contact-filter.dto";
import { CreateContactDto } from "./dto/create-contact.dto";

@EntityRepository(Contact)
export class ContactRepository extends Repository<Contact> {
  private logger = new Logger("ContactRepository");

  async getContacts(filterDto: GetContactFilterDto): Promise<Contact[]> {
    const { search, documentNumber } = filterDto;
    const query = this.createQueryBuilder("contact");

    if (documentNumber) {
      query.andWhere("contact.document_number = :document_number", {
        document_number: documentNumber,
      });
    }

    if (search) {
      query.andWhere(
        "(contact.name LIKE :search OR contact.code LIKE :search)",
        {
          search: `%${search}%`,
        }
      );
    }

    const contact = await query.getMany();

    return contact;
  }

  async getContact(id: number): Promise<Contact> {
    const query = this.createQueryBuilder("contact").where("contact.id = :id", {
      id,
    });

    const contact = await query.getOne();

    return contact;
  }

  async createContact(createContactDto: CreateContactDto): Promise<Contact> {
    const { name, address, documentNumber, phoneNumber } = createContactDto;

    const contact = new Contact();

    contact.name = name;
    contact.address = address;
    contact.document_number = documentNumber;
    contact.phone_number = phoneNumber;

    try {
      await contact.save();
      return contact;
    } catch (error) {
      if (error.code === "23505") {
        throw new ConflictException("El Contacto ya fue creado");
      } else {
        this.logger.error(
          `Contact name"${contact.name}" creating it. dto: ${JSON.stringify(
            createContactDto
          )}`,
          error.stack
        );
        throw new InternalServerErrorException();
      }
    }
  }
}

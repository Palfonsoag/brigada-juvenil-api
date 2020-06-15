import { Repository } from "typeorm";
import { Contact } from "./contact.entity";
import { GetContactFilterDto } from "./dto/get-contact-filter.dto";
import { CreateContactDto } from "./dto/create-contact.dto";
export declare class ContactRepository extends Repository<Contact> {
    private logger;
    getContacts(filterDto: GetContactFilterDto): Promise<Contact[]>;
    getContact(id: number): Promise<Contact>;
    createContact(createContactDto: CreateContactDto): Promise<Contact>;
}

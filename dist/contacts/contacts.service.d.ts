import { ContactRepository } from "./contact.repository";
import { Contact } from "./contact.entity";
import { UpdateContactDto } from "./dto/update-contact.dto";
import { GetContactFilterDto } from "./dto/get-contact-filter.dto";
import { CreateContactDto } from "./dto/create-contact.dto";
export declare class ContactsService {
    private contactRepository;
    constructor(contactRepository: ContactRepository);
    getContacts(filterDto: GetContactFilterDto): Promise<Contact[]>;
    getContactById(id: number): Promise<Contact>;
    updateContact(id: number, updateContactDto: UpdateContactDto): Promise<Contact>;
    deleteContact(id: number): Promise<void>;
    createContact(createContactDto: CreateContactDto): Promise<void>;
}

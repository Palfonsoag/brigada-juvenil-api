import { ContactsService } from "./contacts.service";
import { GetContactFilterDto } from "./dto/get-contact-filter.dto";
import { Contact } from "./contact.entity";
import { UpdateContactDto } from "./dto/update-contact.dto";
import { CreateContactDto } from "./dto/create-contact.dto";
export declare class ContactsController {
    private contactService;
    constructor(contactService: ContactsService);
    getContacts(filterDto: GetContactFilterDto): Promise<Contact[]>;
    getContactById(id: number): Promise<Contact>;
    deleteContact(id: number): Promise<void>;
    updateContact(id: number, updateContactDto: UpdateContactDto): Promise<Contact>;
    createContact(createContactDto: CreateContactDto): Promise<void>;
}

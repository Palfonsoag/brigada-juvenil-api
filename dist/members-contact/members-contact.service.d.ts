import { MembersContactRepository } from "./members-contact.repository";
import { MembersService } from "../members/members.service";
import { ContactsService } from "../contacts/contacts.service";
import { MembersContact } from "./members-contact.entity";
export declare class MembersContactService {
    private memberContactRepository;
    private memberService;
    private contactService;
    constructor(memberContactRepository: MembersContactRepository, memberService: MembersService, contactService: ContactsService);
    getMembersContact(memberId: number): Promise<MembersContact[]>;
    deleteContact(id: number): Promise<void>;
    createMembersContact(emergency: string, memberId: number, contactId: number): Promise<void>;
}

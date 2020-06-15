import { MembersContactService } from "./members-contact.service";
import { MembersContact } from "./members-contact.entity";
export declare class MembersContactController {
    private membersContactService;
    constructor(membersContactService: MembersContactService);
    getMembersContact(member: number): Promise<MembersContact[]>;
    deleteContact(id: number): Promise<void>;
    createMembersContact(emergency: string, member: number, contact: number): Promise<void>;
}

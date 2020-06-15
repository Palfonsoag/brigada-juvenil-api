import { Repository } from "typeorm";
import { MembersContact } from "./members-contact.entity";
import { Member } from "src/members/member.entity";
import { Contact } from "src/contacts/contact.entity";
export declare class MembersContactRepository extends Repository<MembersContact> {
    private logger;
    getMembersContact(memberId: number): Promise<MembersContact[]>;
    createMembersContact(emergency: string, member: Member, contact: Contact): Promise<MembersContact>;
}

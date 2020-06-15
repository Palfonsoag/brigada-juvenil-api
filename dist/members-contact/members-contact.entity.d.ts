import { BaseEntity } from "typeorm";
import { Member } from "../members/member.entity";
import { Contact } from "src/contacts/contact.entity";
export declare class MembersContact extends BaseEntity {
    id: number;
    emergency: boolean;
    member: Member;
    memberId: number;
    contact: Contact;
    contactId: number;
}

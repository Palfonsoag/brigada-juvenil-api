import { BaseEntity } from "typeorm";
import { MembersContact } from "../members-contact/members-contact.entity";
export declare class Contact extends BaseEntity {
    id: number;
    name: string;
    phone_number: string;
    address: string;
    document_number: string;
    members: MembersContact[];
}

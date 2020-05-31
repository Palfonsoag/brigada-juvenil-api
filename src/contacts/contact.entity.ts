import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from "typeorm";
import { MembersContact } from "../members-contact/members-contact.entity";

@Entity()
export class Contact extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone_number: string;

  @Column()
  address: string;

  @Column()
  document_number: string;

  @OneToMany(
    (type) => MembersContact,
    (membersContact) => membersContact.member
  )
  members: MembersContact[];
}

import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { Member } from "../members/member.entity";
import { Contact } from "src/contacts/contact.entity";

@Entity()
//@Unique([])
export class MembersContact extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  emergency: boolean;

  @ManyToOne(
    (type) => Member,
    (member) => member.contacts,
    { eager: false }
  )
  member: Member;

  @Column()
  memberId: number;

  @ManyToOne(
    (type) => Contact,
    (contact) => contact.members,
    { eager: false }
  )
  contact: Contact;

  @Column()
  contactId: number;
}

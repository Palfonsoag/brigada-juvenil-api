import { Repository, EntityRepository } from "typeorm";
import {
  InternalServerErrorException,
  ConflictException,
  Logger,
} from "@nestjs/common";
import { MembersContact } from "./members-contact.entity";
import { Member } from "src/members/member.entity";
import { Contact } from "src/contacts/contact.entity";

@EntityRepository(MembersContact)
export class MembersContactRepository extends Repository<MembersContact> {
  private logger = new Logger("MembersContactRepository");

  //   async getAllergy(filterDto: GetAllergyFilterDto): Promise<MembersContact[]> {
  //     const { name } = filterDto;
  //     const query = this.createQueryBuilder("allergy");

  //     if (name) {
  //       query.andWhere("(allergy.name LIKE :name)", {
  //         name: `%${name}%`,
  //       });
  //     }

  //     const allergies = await query.getMany();

  //     return allergies;
  //   }

  async getMembersContact(memberId: number): Promise<MembersContact[]> {
    const query = this.createQueryBuilder("members_contact")
      .leftJoinAndSelect("members_contact.contact", "contact")
      .leftJoinAndSelect("members_contact.member", "member");

    query.where("members_contact.memberId = :memberId", { memberId: memberId });
    const contacts = await query.getMany();

    return contacts;
  }

  async createMembersContact(
    emergency: string,
    member: Member,
    contact: Contact
  ): Promise<MembersContact> {
    const membersContact = new MembersContact();

    const value = emergency === "true";
    membersContact.emergency = value;
    membersContact.member = member;

    membersContact.contact = contact;

    try {
      await membersContact.save();
      return membersContact;
    } catch (error) {
      if (error.code === "23505") {
        throw new ConflictException("La Alergia ya fue creada");
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}

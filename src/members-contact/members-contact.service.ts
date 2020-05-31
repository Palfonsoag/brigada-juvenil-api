import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MembersContactRepository } from "./members-contact.repository";
import { MembersService } from "../members/members.service";
import { ContactsService } from "../contacts/contacts.service";
import { MembersContact } from "./members-contact.entity";

@Injectable()
export class MembersContactService {
  constructor(
    @InjectRepository(MembersContactRepository)
    private memberContactRepository: MembersContactRepository,
    private memberService: MembersService,
    private contactService: ContactsService
  ) {}

  async getMembersContact(memberId: number): Promise<MembersContact[]> {
    const member = await this.memberService.getMemberById(memberId);
    return this.memberContactRepository.getMembersContact(member.id);
  }

  async deleteContact(id: number): Promise<void> {
    const result = await this.memberContactRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Los datos ingresados no coinciden`);
    }
  }

  async createMembersContact(
    emergency: boolean,
    memberId: number,
    contactId: number
  ): Promise<void> {
    const member = await this.memberService.getMemberById(memberId);
    const contact = await this.contactService.getContactById(contactId);
    await this.memberContactRepository.createMembersContact(
      emergency,
      member,
      contact
    );
  }
}

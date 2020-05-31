import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MemberRepository } from "./member.repository";
import { Member } from "./member.entity";
import { GetMemberFilterDto } from "./dto/get-members.dto";
import { CreateMemberDto } from "./dto/create-members.dto";

@Injectable()
export class MembersService {
  constructor(
    @InjectRepository(MemberRepository)
    private memberRepository: MemberRepository
  ) {}

  async getMembers(filterDto: GetMemberFilterDto): Promise<Member[]> {
    return this.memberRepository.getMembers(filterDto);
  }

  async getMemberById(id: number): Promise<Member> {
    const foundMember = await this.memberRepository.findOne(id);
    if (!foundMember) {
      throw new NotFoundException(`Los datos ingresados no coinciden`);
    }
    return foundMember;
  }

  async deleteMember(id: number): Promise<void> {
    const result = await this.memberRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Los datos ingresados no coinciden`);
    }
  }

  async createMember(createMemberDto: CreateMemberDto): Promise<void> {
    console.log("bbbbbbbbbbbbbbbbbb");
    await this.memberRepository.createMember(createMemberDto);
  }
}

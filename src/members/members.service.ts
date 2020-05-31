import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MemberRepository } from "./member.repository";
import { Member } from "./member.entity";
import { GetMemberFilterDto } from "./dto/get-members.dto";
import { CreateMemberDto } from "./dto/create-members.dto";
import { UpdateMemberDto } from "./dto/update-member.dto";
import { UpdateSecondaryDataDto } from "./dto/update-secondary-data.dto";
import { RanksService } from "../ranks/ranks.service";
import { SchoolsService } from "../schools/schools.service";
import { SportsService } from "../sports/sports.service";
import { ReligionService } from "../religion/religion.service";

@Injectable()
export class MembersService {
  constructor(
    @InjectRepository(MemberRepository)
    private memberRepository: MemberRepository,
    private rankService: RanksService,
    private schoolService: SchoolsService,
    private sportService: SportsService,
    private religionService: ReligionService
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
    await this.memberRepository.createMember(createMemberDto);
  }

  async updateMember(
    id: number,
    updateMemberDto: UpdateMemberDto
  ): Promise<Member> {
    const member = await this.getMemberById(id);

    if (updateMemberDto.name) {
      member.name = updateMemberDto.name;
    }

    if (updateMemberDto.gender) {
      member.gender = updateMemberDto.gender;
    }

    if (updateMemberDto.birthday) {
      member.birthday = updateMemberDto.birthday;
    }
    if (updateMemberDto.graduation_year) {
      member.graduation_year = updateMemberDto.graduation_year;
    }
    if (updateMemberDto.document_number) {
      member.document_number = updateMemberDto.document_number;
    }
    if (updateMemberDto.graduation_year) {
      member.graduation_year = updateMemberDto.graduation_year;
    }

    if (updateMemberDto.blood_type) {
      member.blood_type = updateMemberDto.blood_type;
    }

    if (updateMemberDto.carnet) {
      member.carnet = updateMemberDto.carnet;
    }

    await member.save();

    return member;
  }

  async updateSecondData(
    id: number,
    updateSecondaryDataDto: UpdateSecondaryDataDto
  ): Promise<Member> {
    const member = await this.getMemberById(id);

    if (updateSecondaryDataDto.rank) {
      const rank = await this.rankService.getRankById(
        updateSecondaryDataDto.rank
      );
      member.rank = rank;
    }
    if (updateSecondaryDataDto.school) {
      const school = await this.schoolService.getSchoolById(
        updateSecondaryDataDto.school
      );
      member.school = school;
    }
    if (updateSecondaryDataDto.religion) {
      const religion = await this.religionService.getReligionById(
        updateSecondaryDataDto.religion
      );
      member.religion = religion;
    }
    if (updateSecondaryDataDto.sport) {
      const sport = await this.sportService.getSportById(
        updateSecondaryDataDto.sport
      );
      member.sport = sport;
    }

    await member.save();

    return member;
  }
}

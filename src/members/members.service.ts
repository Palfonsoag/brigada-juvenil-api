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
import { ClothingService } from "../clothing/clothing.service";
import { AllergiesService } from "../allergies/allergies.service";
import { CoursesService } from "../courses/courses.service";

@Injectable()
export class MembersService {
  constructor(
    @InjectRepository(MemberRepository)
    private memberRepository: MemberRepository,
    private rankService: RanksService,
    private schoolService: SchoolsService,
    private sportService: SportsService,
    private religionService: ReligionService,
    private clothingService: ClothingService,
    private allergiesService: AllergiesService,
    private coursesService: CoursesService
  ) {}

  async getMembers(filterDto: GetMemberFilterDto): Promise<Member[]> {
    return this.memberRepository.getMembers(filterDto);
  }

  async getMember(id: number): Promise<Member> {
    return this.memberRepository.getMember(id);
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

  async updateClothing(id: number, clothingId: number, action: 'create' | 'remove'): Promise<Member> {
    const member = await this.getMemberById(id);
    const clothing = await this.clothingService.getClothingById(clothingId);

    const memberCloth = await this.memberRepository.getClothes(member.id);
    const clothingArray = memberCloth.clothing;

    if (clothingArray) {
      if(action === 'create') {
        member.clothing = [...clothingArray, clothing];
      } else {
        member.clothing = clothingArray.filter((allergyInMember) => {
          return allergyInMember.id !== clothing.id
        })
      }
    } else {
      member.clothing = [clothing];
    }
    await member.save();

    return member;
  }

  async updateCourses(id: number, courseId: number, action: 'create' | 'remove'): Promise<Member> {
    const member = await this.getMemberById(id);
    const course = await this.coursesService.getCourseById(courseId);

    const memberCourses = await this.memberRepository.getCourses(member.id);
    const coursesArray = memberCourses.courses;

    if (coursesArray) {
      if(action === 'create') {
        member.courses = [...coursesArray, course];      
      } else {
        member.courses = coursesArray.filter((allergyInMember) => {
          return allergyInMember.id !== course.id
        })
      }
    } else {
      action === 'create' && (member.courses = [course]);
    }
    await member.save();

    return member;
  }

  async updateAllergy(id: number, allergyId: number, action: 'create' | 'remove'): Promise<Member> {
    const member = await this.getMemberById(id);
    const allergy = await this.allergiesService.getAllergyById(allergyId);

    const memberAllergies = await this.memberRepository.getAllergy(member.id);
    const allergiesArray = memberAllergies.allergies;

    if (allergiesArray) {
      if(action === 'create') {
        member.allergies = [...allergiesArray, allergy];
      } else {
        member.allergies = allergiesArray.filter((allergyInMember) => {
          return allergyInMember.id !== allergy.id
        })
      }
    } else {
      action === 'create' && (member.allergies = [allergy]);
    }
    await member.save();

    return member;
  }
}

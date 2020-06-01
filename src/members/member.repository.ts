import { Repository, EntityRepository } from "typeorm";
import {
  ConflictException,
  InternalServerErrorException,
} from "@nestjs/common";
import * as bcrypt from "bcryptjs";
import { Member } from "./member.entity";
import { GetMemberFilterDto } from "./dto/get-members.dto";
import { CreateMemberDto } from "./dto/create-members.dto";
import { Rank } from "src/ranks/rank.entity";
import { School } from "src/schools/school.entity";
import { Religion } from "src/religion/religion.entity";
import { Sport } from "src/sports/sport.entity";

@EntityRepository(Member)
export class MemberRepository extends Repository<Member> {
  async getMembers(filterDto: GetMemberFilterDto): Promise<Member[]> {
    const { search, name, document_number } = filterDto;
    const query = this.createQueryBuilder("member");

    if (name) {
      query.andWhere("(member.name LIKE :name)", { name: `%${name}%` });
    }
    if (document_number) {
      query.andWhere("(member.document_number LIKE :document_number)", {
        document_number: `%${document_number}%`,
      });
    }

    if (search) {
      query.andWhere("(member.email LIKE :search)", { search: `%${search}%` });
    }

    const members = await query.getMany();

    return members;
  }

  async getMember(id: number) {
    const query = this.createQueryBuilder("member")
      .leftJoinAndSelect("member.clothing", "clothing")
      .leftJoinAndSelect("member.allergies", "allergy")
      .leftJoinAndSelect("member.courses", "course");

    query.where("member.id = :id", {
      id,
    });
    const clothes = await query.getOne();

    return clothes;
  }

  async getClothes(id: number) {
    const query = this.createQueryBuilder("member").leftJoinAndSelect(
      "member.clothing",
      "clothing"
    );

    query.where("member.id = :id", {
      id,
    });
    const clothes = await query.getOne();

    return clothes;
  }

  async getAllergy(id: number) {
    const query = this.createQueryBuilder("member").leftJoinAndSelect(
      "member.allergies",
      "allergy"
    );

    query.where("member.id = :id", {
      id,
    });
    const allergies = await query.getOne();

    return allergies;
  }

  async getCourses(id: number) {
    const query = this.createQueryBuilder("member").leftJoinAndSelect(
      "member.courses",
      "course"
    );

    query.where("member.id = :id", {
      id,
    });
    const courses = await query.getOne();

    return courses;
  }

  async createMember(createMemberDto: CreateMemberDto): Promise<Member> {
    const {
      name,
      gender,
      birthday,
      graduation_year,
      document_number,
      blood_type,
      carnet,
    } = createMemberDto;

    const member = new Member();

    member.name = name;
    member.birthday = birthday;
    member.gender = gender;

    if (graduation_year) {
      member.graduation_year = graduation_year;
    }

    if (document_number) {
      member.document_number = document_number;
    }

    if (blood_type) {
      member.blood_type = blood_type;
    }

    if (carnet) {
      member.carnet = carnet;
    }

    try {
      await member.save();

      return member;
    } catch (error) {
      console.log(error);
      if (error.code === "23505") {
        throw new ConflictException("El correo ya se encuentra registrado");
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}

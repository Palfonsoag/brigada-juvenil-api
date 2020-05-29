import { Injectable, NotFoundException } from "@nestjs/common";
import { SchoolRepository } from "./school.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateSchoolDto } from "./dto/create-school.dto";
import { UpdateSchoolDto } from "./dto/update-school.dto";
import { School } from "./school.entity";
import { GetSchoolFilterDto } from "./dto/get-school-filter.dto";

@Injectable()
export class SchoolsService {
  constructor(
    @InjectRepository(SchoolRepository)
    private schoolRepository: SchoolRepository
  ) {}

  async getSchools(filterDto: GetSchoolFilterDto): Promise<School[]> {
    return this.schoolRepository.getSchools(filterDto);
  }

  async getSchoolById(id: number): Promise<School> {
    const foundSchool = await this.schoolRepository.findOne(id);
    if (!foundSchool) {
      throw new NotFoundException(`Los datos ingresados no coinciden`);
    }
    return foundSchool;
  }

  async updateSchool(
    id: number,
    updateSchoolDto: UpdateSchoolDto
  ): Promise<School> {
    const school = await this.getSchoolById(id);

    if (updateSchoolDto.name) {
      school.name = updateSchoolDto.name;
    }

    await school.save();

    return school;
  }

  async deleteSchool(id: number): Promise<void> {
    const result = await this.schoolRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Los datos ingresados no coinciden`);
    }
  }

  async createSchool(createSchoolDto: CreateSchoolDto): Promise<void> {
    await this.schoolRepository.createSchool(createSchoolDto);
  }
}

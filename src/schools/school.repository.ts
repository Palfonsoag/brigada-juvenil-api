import { Repository, EntityRepository } from "typeorm";
import {
  InternalServerErrorException,
  ConflictException,
  Logger,
} from "@nestjs/common";
import { School } from "./school.entity";
import { GetSchoolFilterDto } from "./dto/get-school-filter.dto";
import { CreateSchoolDto } from "./dto/create-school.dto";

@EntityRepository(School)
export class SchoolRepository extends Repository<School> {
  private logger = new Logger("SchoolRepository");

  async getSchools(filterDto: GetSchoolFilterDto): Promise<School[]> {
    const { name } = filterDto;
    const query = this.createQueryBuilder("school");

    if (name) {
      query.andWhere("(school.name LIKE :name)", {
        name: `%${name}%`,
      });
    }

    const schools = await query.getMany();

    return schools;
  }

  async createSchool(createSchoolDto: CreateSchoolDto): Promise<School> {
    const { name } = createSchoolDto;

    const school = new School();

    school.name = name;

    try {
      await school.save();
      return school;
    } catch (error) {
      if (error.code === "23505") {
        throw new ConflictException("La Escuela ya fue creada");
      } else {
        this.logger.error(
          `School name"${school.name}" creating it. dto: ${JSON.stringify(
            createSchoolDto
          )}`,
          error.stack
        );
        throw new InternalServerErrorException();
      }
    }
  }
}

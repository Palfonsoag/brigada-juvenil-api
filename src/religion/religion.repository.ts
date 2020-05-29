import { Repository, EntityRepository } from "typeorm";
import {
  InternalServerErrorException,
  ConflictException,
  Logger,
} from "@nestjs/common";
import { Religion } from "./religion.entity";
import { CreateReligionDto } from "./dto/create-religion.dto";
import { GetReligionFilterDto } from "./dto/get-religion-filter.dto";

@EntityRepository(Religion)
export class ReligionRepository extends Repository<Religion> {
  private logger = new Logger("ReligionRepository");

  async getReligions(filterDto: GetReligionFilterDto): Promise<Religion[]> {
    const { name } = filterDto;
    const query = this.createQueryBuilder("religion");

    if (name) {
      query.andWhere("(religion.name LIKE :name)", {
        name: `%${name}%`,
      });
    }

    const religion = await query.getMany();

    return religion;
  }

  async getReligion(id: number): Promise<Religion> {
    const query = this.createQueryBuilder("religion").where(
      "religion.id = :id",
      {
        id,
      }
    );

    const religion = await query.getOne();

    return religion;
  }

  async createReligion(
    createReligionDto: CreateReligionDto
  ): Promise<Religion> {
    const { name } = createReligionDto;

    const religion = new Religion();

    religion.name = name;

    try {
      await religion.save();
      return religion;
    } catch (error) {
      if (error.code === "23505") {
        throw new ConflictException("La Religion ya fue creada");
      } else {
        this.logger.error(
          `Religion name"${religion.name}" creating it. dto: ${JSON.stringify(
            createReligionDto
          )}`,
          error.stack
        );
        throw new InternalServerErrorException();
      }
    }
  }
}

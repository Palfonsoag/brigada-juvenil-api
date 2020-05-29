import { Repository, EntityRepository } from "typeorm";
import {
  InternalServerErrorException,
  ConflictException,
  Logger,
} from "@nestjs/common";
import { Sport } from "./sport.entity";
import { GetSportFilterDto } from "./dto/get-sport-filter.dto";
import { CreateSportDto } from "./dto/create-sport.dto";

@EntityRepository(Sport)
export class SportRepository extends Repository<Sport> {
  private logger = new Logger("SportRepository");

  async getSports(filterDto: GetSportFilterDto): Promise<Sport[]> {
    const { name } = filterDto;
    const query = this.createQueryBuilder("sport");

    if (name) {
      query.andWhere("(sport.name LIKE :name)", {
        name: `%${name}%`,
      });
    }

    const sports = await query.getMany();

    return sports;
  }

  async getSport(id: number): Promise<Sport> {
    const query = this.createQueryBuilder("sport").where("sport.id = :id", {
      id,
    });

    const sport = await query.getOne();

    return sport;
  }

  async createSport(createSportDto: CreateSportDto): Promise<Sport> {
    const { name } = createSportDto;

    const sport = new Sport();

    sport.name = name;

    try {
      await sport.save();
      return sport;
    } catch (error) {
      if (error.code === "23505") {
        throw new ConflictException("La Deporte ya fue creado");
      } else {
        this.logger.error(
          `Sport name"${sport.name}" creating it. dto: ${JSON.stringify(
            createSportDto
          )}`,
          error.stack
        );
        throw new InternalServerErrorException();
      }
    }
  }
}

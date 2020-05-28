import { Repository, EntityRepository } from "typeorm";
import {
  InternalServerErrorException,
  ConflictException,
  Logger,
} from "@nestjs/common";
import { Rank } from "./rank.entity";
import { GetRankFilterDto } from "./dto/get-rank-filter.dto";
import { CreateRankDto } from "./dto/create-rank.dto";

@EntityRepository(Rank)
export class RankRepository extends Repository<Rank> {
  private logger = new Logger("RankRepository");

  async getRanks(filterDto: GetRankFilterDto): Promise<Rank[]> {
    const { search } = filterDto;
    const query = this.createQueryBuilder("rank");

    if (search) {
      query.andWhere(
        "(rank.name LIKE :search OR rank.description LIKE :search)",
        {
          search: `%${search}%`,
        }
      );
    }

    const ranks = await query.getMany();

    return ranks;
  }

  async getRank(id: number): Promise<Rank> {
    const query = this.createQueryBuilder("rank").where("rank.id = :id", {
      id,
    });

    const rank = await query.getOne();

    return rank;
  }

  async createRank(createRankDto: CreateRankDto): Promise<Rank> {
    const { name, description } = createRankDto;

    const rank = new Rank();

    rank.name = name;
    rank.description = description;

    try {
      await rank.save();
      return rank;
    } catch (error) {
      if (error.code === "23505") {
        throw new ConflictException("El Rango ya fue creado");
      } else {
        this.logger.error(
          `Rank name"${rank.name}" creating it. dto: ${JSON.stringify(
            createRankDto
          )}`,
          error.stack
        );
        throw new InternalServerErrorException();
      }
    }
  }
}

import { Repository, EntityRepository } from "typeorm";
import {
  InternalServerErrorException,
  ConflictException,
  Logger,
} from "@nestjs/common";
import { Clothing } from "./clothing.entity";
import { CreateClothingDto } from "./dto/create-clothing.dto";
import { GetClothingFilterDto } from "./dto/get-clothing-filter.dto";

@EntityRepository(Clothing)
export class ClothingRepository extends Repository<Clothing> {
  private logger = new Logger("ClothingRepository");

  async getClothings(filterDto: GetClothingFilterDto): Promise<Clothing[]> {
    const { name } = filterDto;
    const query = this.createQueryBuilder("clothing");

    if (name) {
      query.andWhere("(clothing.name LIKE :name)", {
        name: `%${name}%`,
      });
    }

    const clothings = await query.getMany();

    return clothings;
  }

  async createClothing(
    createClothingDto: CreateClothingDto
  ): Promise<Clothing> {
    const { name } = createClothingDto;

    const clothing = new Clothing();

    clothing.name = name;

    try {
      await clothing.save();
      return clothing;
    } catch (error) {
      if (error.code === "23505") {
        throw new ConflictException("La prenda de ropa ya fue creada");
      } else {
        this.logger.error(
          `Clothing name"${clothing.name}" creating it. dto: ${JSON.stringify(
            createClothingDto
          )}`,
          error.stack
        );
        throw new InternalServerErrorException();
      }
    }
  }
}

import { Repository, EntityRepository } from "typeorm";
import {
  InternalServerErrorException,
  ConflictException,
  Logger,
} from "@nestjs/common";
import { Allergy } from "./allergy.entity";
import { GetAllergyFilterDto } from "./dto/get-allergy-filter.dto";
import { CreateAllergyDto } from "./dto/create-allergy.dto";

@EntityRepository(Allergy)
export class AllergyRepository extends Repository<Allergy> {
  private logger = new Logger("AllergyRepository");

  async getAllergy(filterDto: GetAllergyFilterDto): Promise<Allergy[]> {
    const { name } = filterDto;
    const query = this.createQueryBuilder("allergy");

    if (name) {
      query.andWhere("(allergy.name LIKE :name)", {
        name: `%${name}%`,
      });
    }

    const allergies = await query.getMany();

    return allergies;
  }

  async createAllergy(createAllergyDto: CreateAllergyDto): Promise<Allergy> {
    const { name } = createAllergyDto;

    const allergy = new Allergy();

    allergy.name = name;

    try {
      await allergy.save();
      return allergy;
    } catch (error) {
      if (error.code === "23505") {
        throw new ConflictException("La Alergia ya fue creada");
      } else {
        this.logger.error(
          `Allergy name"${allergy.name}" creating it. dto: ${JSON.stringify(
            createAllergyDto
          )}`,
          error.stack
        );
        throw new InternalServerErrorException();
      }
    }
  }
}

import { Injectable, NotFoundException } from "@nestjs/common";
import { AllergyRepository } from "./allergy.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { Allergy } from "./allergy.entity";
import { UpdateAllergyDto } from "./dto/update-allergy.dto";
import { CreateAllergyDto } from "./dto/create-allergy.dto";
import { GetAllergyFilterDto } from "./dto/get-allergy-filter.dto";

@Injectable()
export class AllergiesService {
  constructor(
    @InjectRepository(AllergyRepository)
    private allergyRepository: AllergyRepository
  ) {}
  async getAllergy(filterDto: GetAllergyFilterDto): Promise<Allergy[]> {
    return this.allergyRepository.getAllergy(filterDto);
  }

  async getAllergyById(id: number): Promise<Allergy> {
    const foundAllergy = await this.allergyRepository.findOne(id);
    if (!foundAllergy) {
      throw new NotFoundException(`Los datos ingresados no coinciden`);
    }
    return foundAllergy;
  }

  async updateSchool(
    id: number,
    updateAllergyDto: UpdateAllergyDto
  ): Promise<Allergy> {
    const allergy = await this.getAllergyById(id);

    if (updateAllergyDto.name) {
      allergy.name = updateAllergyDto.name;
    }

    await allergy.save();

    return allergy;
  }

  async deleteAllergy(id: number): Promise<void> {
    const result = await this.allergyRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Los datos ingresados no coinciden`);
    }
  }

  async createAllergy(createAllergyDto: CreateAllergyDto): Promise<void> {
    await this.allergyRepository.createAllergy(createAllergyDto);
  }
}

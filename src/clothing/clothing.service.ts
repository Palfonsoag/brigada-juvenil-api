import { Injectable, NotFoundException } from "@nestjs/common";
import { ClothingRepository } from "./clothing.respository";
import { InjectRepository } from "@nestjs/typeorm";
import { Clothing } from "./clothing.entity";
import { CreateClothingDto } from "./dto/create-clothing.dto";
import { UpdateClothingDto } from "./dto/update-course.dto";
import { GetClothingFilterDto } from "./dto/get-clothing-filter.dto";

@Injectable()
export class ClothingService {
  constructor(
    @InjectRepository(ClothingRepository)
    private clothingRepository: ClothingRepository
  ) {}

  async getClothings(filterDto: GetClothingFilterDto): Promise<Clothing[]> {
    return this.clothingRepository.getClothings(filterDto);
  }

  async getClothingById(id: number): Promise<Clothing> {
    const foundClothing = await this.clothingRepository.findOne(id);
    if (!foundClothing) {
      throw new NotFoundException(`Los datos ingresados no coinciden`);
    }
    return foundClothing;
  }

  async updateClothing(
    id: number,
    updateClothingDto: UpdateClothingDto
  ): Promise<Clothing> {
    const clothing = await this.getClothingById(id);

    if (updateClothingDto.name) {
      clothing.name = updateClothingDto.name;
    }

    await clothing.save();

    return clothing;
  }

  async deleteClothing(id: number): Promise<void> {
    const result = await this.clothingRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Los datos ingresados no coinciden`);
    }
  }

  async createClothing(createClothingDto: CreateClothingDto): Promise<void> {
    await this.clothingRepository.createClothing(createClothingDto);
  }
}

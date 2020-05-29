import { Injectable, NotFoundException } from "@nestjs/common";
import { ReligionRepository } from "./religion.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateReligionDto } from "./dto/create-religion.dto";
import { Religion } from "./religion.entity";
import { UpdateReligionDto } from "./dto/update-religion.dto";
import { GetReligionFilterDto } from "./dto/get-religion-filter.dto";

@Injectable()
export class ReligionService {
  constructor(
    @InjectRepository(ReligionRepository)
    private religionRepository: ReligionRepository
  ) {}

  async getReligions(filterDto: GetReligionFilterDto): Promise<Religion[]> {
    return this.religionRepository.getReligions(filterDto);
  }

  async getReligionById(id: number): Promise<Religion> {
    const foundReligion = await this.religionRepository.findOne(id);
    if (!foundReligion) {
      throw new NotFoundException(`Los datos ingresados no coinciden`);
    }
    return foundReligion;
  }

  async updateReligion(
    id: number,
    updateReligionDto: UpdateReligionDto
  ): Promise<Religion> {
    const religion = await this.getReligionById(id);

    if (updateReligionDto.name) {
      religion.name = updateReligionDto.name;
    }

    await religion.save();

    return religion;
  }

  async deleteReligion(id: number): Promise<void> {
    const result = await this.religionRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Los datos ingresados no coinciden`);
    }
  }

  async createReligion(createReligionDto: CreateReligionDto): Promise<void> {
    await this.religionRepository.createReligion(createReligionDto);
  }
}

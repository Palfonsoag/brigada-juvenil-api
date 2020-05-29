import { Injectable, NotFoundException } from "@nestjs/common";
import { SportRepository } from "./sport.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { Sport } from "./sport.entity";
import { UpdateSportDto } from "./dto/update-sport.dto";
import { GetSportFilterDto } from "./dto/get-sport-filter.dto";
import { CreateSportDto } from "./dto/create-sport.dto";

@Injectable()
export class SportsService {
  constructor(
    @InjectRepository(SportRepository)
    private sportRepository: SportRepository
  ) {}

  async getSports(filterDto: GetSportFilterDto): Promise<Sport[]> {
    return this.sportRepository.getSports(filterDto);
  }

  async getSportById(id: number): Promise<Sport> {
    const foundSport = await this.sportRepository.findOne(id);
    if (!foundSport) {
      throw new NotFoundException(`Los datos ingresados no coinciden`);
    }
    return foundSport;
  }

  async updateSport(
    id: number,
    updateSportDto: UpdateSportDto
  ): Promise<Sport> {
    const sport = await this.getSportById(id);

    if (updateSportDto.name) {
      sport.name = updateSportDto.name;
    }

    await sport.save();

    return sport;
  }

  async deleteSport(id: number): Promise<void> {
    const result = await this.sportRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Los datos ingresados no coinciden`);
    }
  }

  async createSport(createSportDto: CreateSportDto): Promise<void> {
    await this.sportRepository.createSport(createSportDto);
  }
}

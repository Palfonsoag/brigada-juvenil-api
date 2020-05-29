import { Injectable, NotFoundException } from "@nestjs/common";
import { RankRepository } from "./rank.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { GetRankFilterDto } from "./dto/get-rank-filter.dto";
import { UpdateRankDto } from "./dto/update-rank.dto";
import { Rank } from "./rank.entity";
import { CreateRankDto } from "./dto/create-rank.dto";

@Injectable()
export class RanksService {
  constructor(
    @InjectRepository(RankRepository)
    private rankRepository: RankRepository
  ) {}

  async getRanks(filterDto: GetRankFilterDto): Promise<Rank[]> {
    return this.rankRepository.getRanks(filterDto);
  }

  async getRankById(id: number): Promise<Rank> {
    const foundRank = await this.rankRepository.findOne(id);
    if (!foundRank) {
      throw new NotFoundException(`Los datos ingresados no coinciden`);
    }
    return foundRank;
  }

  async updateRank(id: number, updateRankDto: UpdateRankDto): Promise<Rank> {
    const rank = await this.getRankById(id);

    if (updateRankDto.description) {
      rank.description = updateRankDto.description;
    }

    if (updateRankDto.name) {
      rank.name = updateRankDto.name;
    }

    await rank.save();

    return rank;
  }

  async deleteRank(id: number): Promise<void> {
    const result = await this.rankRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Los datos ingresados no coinciden`);
    }
  }

  async createRank(createRankDto: CreateRankDto): Promise<void> {
    await this.rankRepository.createRank(createRankDto);
  }
}

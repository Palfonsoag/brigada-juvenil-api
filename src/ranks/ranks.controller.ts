import {
  Controller,
  Get,
  Query,
  ValidationPipe,
  ParseIntPipe,
  Param,
  Put,
  Post,
  UsePipes,
  Body,
  Delete,
} from "@nestjs/common";
import { RanksService } from "./ranks.service";
import { Rank } from "./rank.entity";
import { GetRankFilterDto } from "./dto/get-rank-filter.dto";
import { CreateRankDto } from "./dto/create-rank.dto";
import { UpdateRankDto } from "./dto/update-rank.dto";

@Controller("ranks")
export class RanksController {
  constructor(private ranksService: RanksService) {}

  @Get()
  getStatuses(
    @Query(ValidationPipe) filterDto: GetRankFilterDto
  ): Promise<Rank[]> {
    return this.ranksService.getRanks(filterDto);
  }

  @Get("/:id")
  getStatusById(@Param("id", ParseIntPipe) id: number): Promise<Rank> {
    return this.ranksService.getRankById(id);
  }

  @Delete("/:id")
  deleteStatus(@Param("id", ParseIntPipe) id: number): Promise<void> {
    return this.ranksService.deleteRank(id);
  }

  @Put("/:id/update")
  updateStatus(
    @Param("id", ParseIntPipe) id: number,
    @Body(ValidationPipe) updateRankDto: UpdateRankDto
  ): Promise<Rank> {
    return this.ranksService.updateRank(id, updateRankDto);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createStatus(
    @Body(ValidationPipe) createRankDto: CreateRankDto
  ): Promise<void> {
    return this.ranksService.createStatus(createRankDto);
  }
}

import {
  Controller,
  Get,
  Query,
  ValidationPipe,
  UsePipes,
  Post,
  Put,
  Body,
  Param,
  Delete,
  ParseIntPipe,
} from "@nestjs/common";
import { SportsService } from "./sports.service";
import { Sport } from "./sport.entity";
import { CreateSportDto } from "./dto/create-sport.dto";
import { UpdateSportDto } from "./dto/update-sport.dto";
import { GetSportFilterDto } from "./dto/get-sport-filter.dto";

@Controller("sports")
export class SportsController {
  constructor(private sportsService: SportsService) {}
  @Get()
  getSports(
    @Query(ValidationPipe) filterDto: GetSportFilterDto
  ): Promise<Sport[]> {
    return this.sportsService.getSports(filterDto);
  }

  @Get("/:id")
  getSportById(@Param("id", ParseIntPipe) id: number): Promise<Sport> {
    return this.sportsService.getSportById(id);
  }

  @Delete("/:id")
  deleteSport(@Param("id", ParseIntPipe) id: number): Promise<void> {
    return this.sportsService.deleteSport(id);
  }

  @Put("/:id/update")
  updateSport(
    @Param("id", ParseIntPipe) id: number,
    @Body(ValidationPipe) updateSportDto: UpdateSportDto
  ): Promise<Sport> {
    return this.sportsService.updateSport(id, updateSportDto);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createSport(
    @Body(ValidationPipe) createSportDto: CreateSportDto
  ): Promise<void> {
    return this.sportsService.createSport(createSportDto);
  }
}

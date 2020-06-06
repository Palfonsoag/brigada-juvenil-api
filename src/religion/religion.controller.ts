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
import { ReligionService } from "./religion.service";
import { Religion } from "./religion.entity";
import { GetReligionFilterDto } from "./dto/get-religion-filter.dto";
import { UpdateReligionDto } from "./dto/update-religion.dto";
import { CreateReligionDto } from "./dto/create-religion.dto";

@Controller("religion")
export class ReligionController {
  constructor(private religionService: ReligionService) {}

  @Get()
  getReligions(
    @Query(ValidationPipe) filterDto: GetReligionFilterDto
  ): Promise<Religion[]> {
    return this.religionService.getReligions(filterDto);
  }

  @Get("/:id")
  getSportById(@Param("id", ParseIntPipe) id: number): Promise<Religion> {
    return this.religionService.getReligionById(id);
  }

  @Delete("/:id")
  deleteReligion(@Param("id", ParseIntPipe) id: number): Promise<void> {
    return this.religionService.deleteReligion(id);
  }

  @Put("/:id/update")
  updateReligion(
    @Param("id", ParseIntPipe) id: number,
    @Body(ValidationPipe) updateReligionDto: UpdateReligionDto
  ): Promise<Religion> {
    return this.religionService.updateReligion(id, updateReligionDto);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createSport(
    @Body(ValidationPipe) createReligionDto: CreateReligionDto
  ): Promise<void> {
    return this.religionService.createReligion(createReligionDto);
  }
}

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
import { SchoolsService } from "./schools.service";
import { School } from "./school.entity";
import { CreateSchoolDto } from "./dto/create-school.dto";
import { UpdateSchoolDto } from "./dto/update-school.dto";
import { GetSchoolFilterDto } from "./dto/get-school-filter.dto";

@Controller("schools")
export class SchoolsController {
  constructor(private schoolsService: SchoolsService) {}

  @Get()
  getSchools(
    @Query(ValidationPipe) filterDto: GetSchoolFilterDto
  ): Promise<School[]> {
    return this.schoolsService.getSchools(filterDto);
  }

  @Get("/:id")
  getSchoolById(@Param("id", ParseIntPipe) id: number): Promise<School> {
    return this.schoolsService.getSchoolById(id);
  }

  @Delete("/:id")
  deleteSchool(@Param("id", ParseIntPipe) id: number): Promise<void> {
    return this.schoolsService.deleteSchool(id);
  }

  @Put("/:id/update")
  updateSchool(
    @Param("id", ParseIntPipe) id: number,
    @Body(ValidationPipe) updateSchoolDto: UpdateSchoolDto
  ): Promise<School> {
    return this.schoolsService.updateSchool(id, updateSchoolDto);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createSchool(
    @Body(ValidationPipe) createSchoolDto: CreateSchoolDto
  ): Promise<void> {
    return this.schoolsService.createSchool(createSchoolDto);
  }
}

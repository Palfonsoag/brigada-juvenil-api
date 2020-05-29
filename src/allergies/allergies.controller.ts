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
import { AllergiesService } from "./allergies.service";
import { CreateAllergyDto } from "./dto/create-allergy.dto";
import { GetAllergyFilterDto } from "./dto/get-allergy-filter.dto";
import { UpdateAllergyDto } from "./dto/update-allergy.dto";
import { Allergy } from "./allergy.entity";

@Controller("allergies")
export class AllergiesController {
  constructor(private allergiesService: AllergiesService) {}

  @Get()
  getAllergy(
    @Query(ValidationPipe) filterDto: GetAllergyFilterDto
  ): Promise<Allergy[]> {
    return this.allergiesService.getAllergy(filterDto);
  }

  @Get("/:id")
  getAllergyById(@Param("id", ParseIntPipe) id: number): Promise<Allergy> {
    return this.allergiesService.getAllergyById(id);
  }

  @Delete("/:id")
  deleteAllergy(@Param("id", ParseIntPipe) id: number): Promise<void> {
    return this.allergiesService.deleteAllergy(id);
  }

  @Put("/:id/update")
  updateSchool(
    @Param("id", ParseIntPipe) id: number,
    @Body(ValidationPipe) updateAllergyDto: UpdateAllergyDto
  ): Promise<Allergy> {
    return this.allergiesService.updateSchool(id, updateAllergyDto);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createAllergy(
    @Body(ValidationPipe) createAllergyDto: CreateAllergyDto
  ): Promise<void> {
    return this.allergiesService.createAllergy(createAllergyDto);
  }
}

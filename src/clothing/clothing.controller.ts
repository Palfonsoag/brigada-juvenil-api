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
import { ClothingService } from "./clothing.service";
import { CreateClothingDto } from "./dto/create-clothing.dto";
import { Clothing } from "./clothing.entity";
import { UpdateClothingDto } from "./dto/update-course.dto";
import { GetClothingFilterDto } from "./dto/get-clothing-filter.dto";
@Controller("clothing")
export class ClothingController {
  constructor(private clothingService: ClothingService) {}

  @Get()
  getClothings(
    @Query(ValidationPipe) filterDto: GetClothingFilterDto
  ): Promise<Clothing[]> {
    return this.clothingService.getClothings(filterDto);
  }

  @Get("/:id")
  getClothingById(@Param("id", ParseIntPipe) id: number): Promise<Clothing> {
    return this.clothingService.getClothingById(id);
  }

  @Delete("/:id")
  deleteClothing(@Param("id", ParseIntPipe) id: number): Promise<void> {
    return this.clothingService.deleteClothing(id);
  }

  @Put("/:id/update")
  updateClothing(
    @Param("id", ParseIntPipe) id: number,
    @Body(ValidationPipe) updateClothingDto: UpdateClothingDto
  ): Promise<Clothing> {
    return this.clothingService.updateClothing(id, updateClothingDto);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createClothing(
    @Body(ValidationPipe) createClothingDto: CreateClothingDto
  ): Promise<void> {
    return this.clothingService.createClothing(createClothingDto);
  }
}

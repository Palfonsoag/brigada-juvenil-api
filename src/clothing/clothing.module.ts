import { Module } from "@nestjs/common";
import { ClothingService } from "./clothing.service";
import { ClothingController } from "./clothing.controller";
import { ClothingRepository } from "./clothing.respository";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([ClothingRepository])],
  providers: [ClothingService],
  controllers: [ClothingController],
})
export class ClothingModule {}

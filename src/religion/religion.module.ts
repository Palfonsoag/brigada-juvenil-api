import { Module } from "@nestjs/common";
import { ReligionService } from "./religion.service";
import { ReligionController } from "./religion.controller";
import { ReligionRepository } from "./religion.repository";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([ReligionRepository])],

  providers: [ReligionService],
  controllers: [ReligionController],
  exports: [ReligionService],
})
export class ReligionModule {}

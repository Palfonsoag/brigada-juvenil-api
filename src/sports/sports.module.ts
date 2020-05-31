import { Module } from "@nestjs/common";
import { SportsService } from "./sports.service";
import { SportsController } from "./sports.controller";
import { SportRepository } from "./sport.repository";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([SportRepository])],

  providers: [SportsService],
  controllers: [SportsController],
  exports: [SportsService],
})
export class SportsModule {}

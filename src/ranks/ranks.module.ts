import { Module } from "@nestjs/common";
import { RanksController } from "./ranks.controller";
import { RanksService } from "./ranks.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RankRepository } from "./rank.repository";

@Module({
  imports: [TypeOrmModule.forFeature([RankRepository])],
  controllers: [RanksController],
  providers: [RanksService],
})
export class RanksModule {}

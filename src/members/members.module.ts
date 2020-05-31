import { Module } from "@nestjs/common";
import { MembersController } from "./members.controller";
import { MembersService } from "./members.service";
import { MemberRepository } from "./member.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RanksModule } from "../ranks/ranks.module";
import { SportsModule } from "../sports/sports.module";
import { ReligionModule } from "../religion/religion.module";
import { SchoolsModule } from "../schools/schools.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([MemberRepository]),
    RanksModule,
    SportsModule,
    ReligionModule,
    SchoolsModule,
  ],
  controllers: [MembersController],
  providers: [MembersService],
  exports: [MembersService],
})
export class MembersModule {}

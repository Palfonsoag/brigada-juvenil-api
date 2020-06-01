import { Module } from "@nestjs/common";
import { MembersController } from "./members.controller";
import { MembersService } from "./members.service";
import { MemberRepository } from "./member.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RanksModule } from "../ranks/ranks.module";
import { SportsModule } from "../sports/sports.module";
import { ReligionModule } from "../religion/religion.module";
import { SchoolsModule } from "../schools/schools.module";
import { ClothingModule } from "../clothing/clothing.module";
import { AllergiesModule } from "../allergies/allergies.module";
import { CoursesModule } from "../courses/courses.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([MemberRepository]),
    RanksModule,
    SportsModule,
    ReligionModule,
    SchoolsModule,
    ClothingModule,
    AllergiesModule,
    CoursesModule,
  ],
  controllers: [MembersController],
  providers: [MembersService],
  exports: [MembersService],
})
export class MembersModule {}

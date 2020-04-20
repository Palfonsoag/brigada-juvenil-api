import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeOrmConfig } from "./config/typeorm.config";
import { MembersModule } from "./members/members.module";
import { UsersModule } from "./users/users.module";
import { RanksModule } from "./ranks/ranks.module";
import { SchoolsModule } from "./schools/schools.module";
import { ContactsModule } from "./contacts/contacts.module";
import { ClouthingModule } from "./clouthing/clouthing.module";
import { ReligionModule } from "./religion/religion.module";
import { CoursesModule } from "./courses/courses.module";
import { AllergiesModule } from "./allergies/allergies.module";
import { SportsModule } from "./sports/sports.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    MembersModule,
    UsersModule,
    RanksModule,
    SchoolsModule,
    ContactsModule,
    ClouthingModule,
    ReligionModule,
    CoursesModule,
    AllergiesModule,
    SportsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

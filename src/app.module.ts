import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeOrmConfig } from "./config/typeorm.config";
import { MembersModule } from "./members/members.module";
import { UsersModule } from "./users/users.module";
import { RanksModule } from "./ranks/ranks.module";
import { SchoolsModule } from "./schools/schools.module";
import { ContactsModule } from "./contacts/contacts.module";
import { ClothingModule } from "./clothing/clothing.module";
import { ReligionModule } from "./religion/religion.module";
import { CoursesModule } from "./courses/courses.module";
import { AllergiesModule } from "./allergies/allergies.module";
import { SportsModule } from "./sports/sports.module";
import { MembersContactModule } from './members-contact/members-contact.module';
import { MembersCourseModule } from './members-course/members-course.module';
import { MembersAllergyModule } from './members-allergy/members-allergy.module';
import { MembersClothingModule } from './members-clothing/members-clothing.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    MembersModule,
    UsersModule,
    RanksModule,
    SchoolsModule,
    ContactsModule,
    ClothingModule,
    ReligionModule,
    CoursesModule,
    AllergiesModule,
    SportsModule,
    MembersContactModule,
    MembersCourseModule,
    MembersAllergyModule,
    MembersClothingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

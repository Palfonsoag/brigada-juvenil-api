import { BaseEntity } from "typeorm";
import { Gender } from "./member-gender.enum";
import { BloodType } from "./member-blood-type.enum";
import { Rank } from "../ranks/rank.entity";
import { School } from "../schools/school.entity";
import { Religion } from "../religion/religion.entity";
import { Sport } from "../sports/sport.entity";
import { MembersContact } from "../members-contact/members-contact.entity";
import { Course } from "src/courses/course.entity";
import { Clothing } from "src/clothing/clothing.entity";
import { Allergy } from "src/allergies/allergy.entity";
export declare class Member extends BaseEntity {
    id: number;
    name: string;
    document_number: string;
    birthday: Date;
    gender: Gender;
    blood_type: BloodType;
    carnet: number;
    graduation_year: Date;
    rank: Rank;
    school: School;
    religion: Religion;
    sport: Sport;
    contacts: MembersContact[];
    courses: Course[];
    clothing: Clothing[];
    allergies: Allergy[];
}

import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  ManyToOne,
  OneToOne,
  OneToMany,
  JoinTable,
  ManyToMany,
} from "typeorm";
import { Gender } from "./member-gender.enum";
import { BloodType } from "./member-blood-type.enum";
import { User } from "../users/user.entity";
import { Rank } from "../ranks/rank.entity";
import { School } from "../schools/school.entity";
import { Religion } from "../religion/religion.entity";
import { Sport } from "../sports/sport.entity";
import { MembersContact } from "../members-contact/members-contact.entity";
import { Course } from "src/courses/course.entity";
import { Clothing } from "src/clothing/clothing.entity";
import { Allergy } from "src/allergies/allergy.entity";

@Entity()
//@Unique(["document_number"])
export class Member extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  document_number: string;

  @Column({ type: "date" })
  birthday: Date;

  @Column()
  gender: Gender;

  @Column({ nullable: true })
  blood_type: BloodType;

  @Column({ nullable: true })
  carnet: number;

  @Column({ nullable: true, type: "date" })
  graduation_year: Date;

  @ManyToOne(
    (type) => Rank,
    (rank) => rank.members,
    { nullable: true }
  )
  rank: Rank;

  // @Column()
  // rankId: number;

  @ManyToOne(
    (type) => School,
    (school) => school.members,
    { nullable: true }
  )
  school: School;

  // @Column()
  // schoolId: number;

  @ManyToOne(
    (type) => Religion,
    (religion) => religion.members,
    { nullable: true }
  )
  religion: Religion;

  // @Column()
  // religionId: number;

  @ManyToOne(
    (type) => Sport,
    (sport) => sport.members,
    { nullable: true }
  )
  sport: Sport;

  // @Column()
  // sportId: number;

  @OneToMany(
    (type) => MembersContact,
    (membersContact) => membersContact.member
  )
  contacts: MembersContact[];

  @ManyToMany(
    (type) => Course,
    (course) => course.members
  )
  @JoinTable()
  courses: Course[];

  @ManyToMany(
    (type) => Clothing,
    (clothing) => clothing.members
  )
  @JoinTable()
  clothing: Clothing[];

  @ManyToMany(
    (type) => Allergy,
    (allergy) => allergy.members
  )
  @JoinTable()
  allergies: Allergy[];
}

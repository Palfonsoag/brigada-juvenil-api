import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  ManyToOne,
  OneToOne,
} from "typeorm";
import { Gender } from "./member-gender.enum";
import { BloodType } from "./member-blood-type.enum";
import { User } from "../users/user.entity";
import { Rank } from "../ranks/rank.entity";
import { School } from "src/schools/school.entity";
import { Religion } from "src/religion/religion.entity";
import { Sport } from "src/sports/sport.entity";

@Entity()
@Unique(["document_number"])
export class Member extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  document_number: string;

  @Column({ type: "date" })
  birthday: Date;

  @Column()
  gender: Gender;

  @Column()
  blood_type: BloodType;

  @Column()
  carnet: number;

  @Column({ type: "date" })
  graduation_year: Date;

  @OneToOne(
    (type) => User,
    (user) => user.member
  )
  user: User;

  @Column()
  userId: number;

  @ManyToOne(
    (type) => Rank,
    (rank) => rank.members,
    { eager: true }
  )
  rank: Rank;

  @Column()
  rankId: number;

  @ManyToOne(
    (type) => School,
    (school) => school.members,
    { eager: true }
  )
  school: School;

  @Column()
  schoolId: number;

  @ManyToOne(
    (type) => Religion,
    (religion) => religion.members,
    { eager: true }
  )
  religion: Religion;

  @Column()
  religionId: number;

  @ManyToOne(
    (type) => Sport,
    (sport) => sport.members,
    { eager: true }
  )
  sport: Sport;

  @Column()
  sportId: number;
}

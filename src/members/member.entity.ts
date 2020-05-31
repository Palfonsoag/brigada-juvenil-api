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
}

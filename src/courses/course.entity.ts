import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToMany,
  ManyToMany,
} from "typeorm";
import { Member } from "../members/member.entity";

@Entity()
@Unique(["name"])
export class Course extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToMany(
    (type) => Member,
    (member) => member.courses
  )
  members: Member[];
}

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
export class Allergy extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(
    (type) => Member,
    (member) => member.allergies
  )
  members: Member[];
}

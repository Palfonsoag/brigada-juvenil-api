import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToMany,
} from "typeorm";
import { Member } from "../members/member.entity";

@Entity()
@Unique(["name"])
export class Sport extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(
    (type) => Member,
    (member) => member.sport
  )
  members: Member[];
}

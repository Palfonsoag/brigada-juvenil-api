import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToMany,
} from "typeorm";

@Entity()
@Unique(["name"])
export class Course extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;

  @Column()
  description: string;
}

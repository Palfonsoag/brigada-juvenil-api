import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from "typeorm";
import * as bcrypt from "bcryptjs";
import { UserRole } from "./user-role.enum";
import { Member } from "../members/member.entity";

@Entity()
@Unique(["email"])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @Column()
  role: UserRole;

  @OneToOne(
    (type) => Member,
    (member) => member.user
  )
  @JoinColumn()
  member: Member;

  @Column()
  memberId: number;

  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }
}

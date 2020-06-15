import { BaseEntity } from "typeorm";
import { UserRole } from "./user-role.enum";
import { Member } from "../members/member.entity";
export declare class User extends BaseEntity {
    id: number;
    email: string;
    password: string;
    salt: string;
    role: UserRole;
    member: Member;
    memberId: number;
    validatePassword(password: string): Promise<boolean>;
}

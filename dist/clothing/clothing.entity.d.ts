import { BaseEntity } from "typeorm";
import { Member } from "../members/member.entity";
export declare class Clothing extends BaseEntity {
    id: number;
    name: string;
    members: Member[];
}

import { BaseEntity } from "typeorm";
import { Member } from "../members/member.entity";
export declare class Rank extends BaseEntity {
    id: number;
    name: string;
    description: string;
    members: Member[];
}

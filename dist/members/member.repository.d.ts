import { Repository } from "typeorm";
import { Member } from "./member.entity";
import { GetMemberFilterDto } from "./dto/get-members.dto";
import { CreateMemberDto } from "./dto/create-members.dto";
export declare class MemberRepository extends Repository<Member> {
    getMembers(filterDto: GetMemberFilterDto): Promise<Member[]>;
    getMember(id: number): Promise<Member>;
    getClothes(id: number): Promise<Member>;
    getAllergy(id: number): Promise<Member>;
    getCourses(id: number): Promise<Member>;
    createMember(createMemberDto: CreateMemberDto): Promise<Member>;
}

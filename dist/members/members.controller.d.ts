import { MembersService } from "./members.service";
import { GetMemberFilterDto } from "./dto/get-members.dto";
import { Member } from "./member.entity";
import { CreateMemberDto } from "./dto/create-members.dto";
import { UpdateMemberDto } from "./dto/update-member.dto";
import { UpdateSecondaryDataDto } from "./dto/update-secondary-data.dto";
export declare class MembersController {
    private membersService;
    constructor(membersService: MembersService);
    getMembers(filterDto: GetMemberFilterDto): Promise<Member[]>;
    getMemberById(id: number): Promise<Member>;
    getMember(id: number): Promise<Member>;
    createMember(createMemberDto: CreateMemberDto): Promise<void>;
    updateMember(id: number, updateMemberDto: UpdateMemberDto): Promise<Member>;
    updateSecondData(id: number, updateSecondaryDataDto: UpdateSecondaryDataDto): Promise<Member>;
    updateClothing(id: number, clothing: number): Promise<Member>;
    removeClothing(id: number, clothing: number): Promise<Member>;
    updateCourses(id: number, course: number): Promise<Member>;
    removeCourses(id: number, course: number): Promise<Member>;
    updateAllergy(id: number, allergy: number): Promise<Member>;
    removeAllergy(id: number, allergy: number): Promise<Member>;
    deleteMember(id: number): Promise<void>;
}

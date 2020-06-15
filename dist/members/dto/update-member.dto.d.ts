import { BloodType } from "../member-blood-type.enum";
import { Gender } from "../member-gender.enum";
export declare class UpdateMemberDto {
    name: string;
    gender: Gender;
    birthday: Date;
    graduation_year: Date;
    document_number: string;
    blood_type: BloodType;
    carnet: number;
}

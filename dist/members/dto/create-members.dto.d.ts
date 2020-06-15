import { Gender } from "../member-gender.enum";
import { BloodType } from "../member-blood-type.enum";
export declare class CreateMemberDto {
    name: string;
    gender: Gender;
    birthday: Date;
    graduation_year: Date;
    document_number: string;
    blood_type: BloodType;
    carnet: number;
}

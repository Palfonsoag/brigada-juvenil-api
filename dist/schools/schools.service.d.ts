import { SchoolRepository } from "./school.repository";
import { CreateSchoolDto } from "./dto/create-school.dto";
import { UpdateSchoolDto } from "./dto/update-school.dto";
import { School } from "./school.entity";
import { GetSchoolFilterDto } from "./dto/get-school-filter.dto";
export declare class SchoolsService {
    private schoolRepository;
    constructor(schoolRepository: SchoolRepository);
    getSchools(filterDto: GetSchoolFilterDto): Promise<School[]>;
    getSchoolById(id: number): Promise<School>;
    updateSchool(id: number, updateSchoolDto: UpdateSchoolDto): Promise<School>;
    deleteSchool(id: number): Promise<void>;
    createSchool(createSchoolDto: CreateSchoolDto): Promise<void>;
}

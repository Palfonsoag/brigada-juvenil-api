import { SchoolsService } from "./schools.service";
import { School } from "./school.entity";
import { CreateSchoolDto } from "./dto/create-school.dto";
import { UpdateSchoolDto } from "./dto/update-school.dto";
import { GetSchoolFilterDto } from "./dto/get-school-filter.dto";
export declare class SchoolsController {
    private schoolsService;
    constructor(schoolsService: SchoolsService);
    getSchools(filterDto: GetSchoolFilterDto): Promise<School[]>;
    getSchoolById(id: number): Promise<School>;
    deleteSchool(id: number): Promise<void>;
    updateSchool(id: number, updateSchoolDto: UpdateSchoolDto): Promise<School>;
    createSchool(createSchoolDto: CreateSchoolDto): Promise<void>;
}

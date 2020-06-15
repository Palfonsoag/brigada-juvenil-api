import { Repository } from "typeorm";
import { School } from "./school.entity";
import { GetSchoolFilterDto } from "./dto/get-school-filter.dto";
import { CreateSchoolDto } from "./dto/create-school.dto";
export declare class SchoolRepository extends Repository<School> {
    private logger;
    getSchools(filterDto: GetSchoolFilterDto): Promise<School[]>;
    createSchool(createSchoolDto: CreateSchoolDto): Promise<School>;
}

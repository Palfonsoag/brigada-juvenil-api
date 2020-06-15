import { Repository } from "typeorm";
import { Religion } from "./religion.entity";
import { CreateReligionDto } from "./dto/create-religion.dto";
import { GetReligionFilterDto } from "./dto/get-religion-filter.dto";
export declare class ReligionRepository extends Repository<Religion> {
    private logger;
    getReligions(filterDto: GetReligionFilterDto): Promise<Religion[]>;
    getReligion(id: number): Promise<Religion>;
    createReligion(createReligionDto: CreateReligionDto): Promise<Religion>;
}

import { ReligionRepository } from "./religion.repository";
import { CreateReligionDto } from "./dto/create-religion.dto";
import { Religion } from "./religion.entity";
import { UpdateReligionDto } from "./dto/update-religion.dto";
import { GetReligionFilterDto } from "./dto/get-religion-filter.dto";
export declare class ReligionService {
    private religionRepository;
    constructor(religionRepository: ReligionRepository);
    getReligions(filterDto: GetReligionFilterDto): Promise<Religion[]>;
    getReligionById(id: number): Promise<Religion>;
    updateReligion(id: number, updateReligionDto: UpdateReligionDto): Promise<Religion>;
    deleteReligion(id: number): Promise<void>;
    createReligion(createReligionDto: CreateReligionDto): Promise<void>;
}

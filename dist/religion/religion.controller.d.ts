import { ReligionService } from "./religion.service";
import { Religion } from "./religion.entity";
import { GetReligionFilterDto } from "./dto/get-religion-filter.dto";
import { UpdateReligionDto } from "./dto/update-religion.dto";
import { CreateReligionDto } from "./dto/create-religion.dto";
export declare class ReligionController {
    private religionService;
    constructor(religionService: ReligionService);
    getReligions(filterDto: GetReligionFilterDto): Promise<Religion[]>;
    getSportById(id: number): Promise<Religion>;
    deleteReligion(id: number): Promise<void>;
    updateReligion(id: number, updateReligionDto: UpdateReligionDto): Promise<Religion>;
    createSport(createReligionDto: CreateReligionDto): Promise<void>;
}

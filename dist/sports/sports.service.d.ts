import { SportRepository } from "./sport.repository";
import { Sport } from "./sport.entity";
import { UpdateSportDto } from "./dto/update-sport.dto";
import { GetSportFilterDto } from "./dto/get-sport-filter.dto";
import { CreateSportDto } from "./dto/create-sport.dto";
export declare class SportsService {
    private sportRepository;
    constructor(sportRepository: SportRepository);
    getSports(filterDto: GetSportFilterDto): Promise<Sport[]>;
    getSportById(id: number): Promise<Sport>;
    updateSport(id: number, updateSportDto: UpdateSportDto): Promise<Sport>;
    deleteSport(id: number): Promise<void>;
    createSport(createSportDto: CreateSportDto): Promise<void>;
}

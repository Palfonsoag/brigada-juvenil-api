import { SportsService } from "./sports.service";
import { Sport } from "./sport.entity";
import { CreateSportDto } from "./dto/create-sport.dto";
import { UpdateSportDto } from "./dto/update-sport.dto";
import { GetSportFilterDto } from "./dto/get-sport-filter.dto";
export declare class SportsController {
    private sportsService;
    constructor(sportsService: SportsService);
    getSports(filterDto: GetSportFilterDto): Promise<Sport[]>;
    getSportById(id: number): Promise<Sport>;
    deleteSport(id: number): Promise<void>;
    updateSport(id: number, updateSportDto: UpdateSportDto): Promise<Sport>;
    createSport(createSportDto: CreateSportDto): Promise<void>;
}

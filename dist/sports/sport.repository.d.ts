import { Repository } from "typeorm";
import { Sport } from "./sport.entity";
import { GetSportFilterDto } from "./dto/get-sport-filter.dto";
import { CreateSportDto } from "./dto/create-sport.dto";
export declare class SportRepository extends Repository<Sport> {
    private logger;
    getSports(filterDto: GetSportFilterDto): Promise<Sport[]>;
    getSport(id: number): Promise<Sport>;
    createSport(createSportDto: CreateSportDto): Promise<Sport>;
}

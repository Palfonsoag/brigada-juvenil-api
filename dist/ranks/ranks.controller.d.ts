import { RanksService } from "./ranks.service";
import { Rank } from "./rank.entity";
import { GetRankFilterDto } from "./dto/get-rank-filter.dto";
import { CreateRankDto } from "./dto/create-rank.dto";
import { UpdateRankDto } from "./dto/update-rank.dto";
export declare class RanksController {
    private ranksService;
    constructor(ranksService: RanksService);
    getRanks(filterDto: GetRankFilterDto): Promise<Rank[]>;
    getRankById(id: number): Promise<Rank>;
    deleteRank(id: number): Promise<void>;
    updateRank(id: number, updateRankDto: UpdateRankDto): Promise<Rank>;
    createRank(createRankDto: CreateRankDto): Promise<void>;
}

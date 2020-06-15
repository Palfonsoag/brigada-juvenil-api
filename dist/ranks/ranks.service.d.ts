import { RankRepository } from "./rank.repository";
import { GetRankFilterDto } from "./dto/get-rank-filter.dto";
import { UpdateRankDto } from "./dto/update-rank.dto";
import { Rank } from "./rank.entity";
import { CreateRankDto } from "./dto/create-rank.dto";
export declare class RanksService {
    private rankRepository;
    constructor(rankRepository: RankRepository);
    getRanks(filterDto: GetRankFilterDto): Promise<Rank[]>;
    getRankById(id: number): Promise<Rank>;
    updateRank(id: number, updateRankDto: UpdateRankDto): Promise<Rank>;
    deleteRank(id: number): Promise<void>;
    createRank(createRankDto: CreateRankDto): Promise<void>;
}

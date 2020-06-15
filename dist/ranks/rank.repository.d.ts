import { Repository } from "typeorm";
import { Rank } from "./rank.entity";
import { GetRankFilterDto } from "./dto/get-rank-filter.dto";
import { CreateRankDto } from "./dto/create-rank.dto";
export declare class RankRepository extends Repository<Rank> {
    private logger;
    getRanks(filterDto: GetRankFilterDto): Promise<Rank[]>;
    getRank(id: number): Promise<Rank>;
    createRank(createRankDto: CreateRankDto): Promise<Rank>;
}

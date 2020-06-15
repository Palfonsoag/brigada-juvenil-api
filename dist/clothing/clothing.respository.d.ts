import { Repository } from "typeorm";
import { Clothing } from "./clothing.entity";
import { CreateClothingDto } from "./dto/create-clothing.dto";
import { GetClothingFilterDto } from "./dto/get-clothing-filter.dto";
export declare class ClothingRepository extends Repository<Clothing> {
    private logger;
    getClothings(filterDto: GetClothingFilterDto): Promise<Clothing[]>;
    createClothing(createClothingDto: CreateClothingDto): Promise<Clothing>;
}

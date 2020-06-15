import { ClothingRepository } from "./clothing.respository";
import { Clothing } from "./clothing.entity";
import { CreateClothingDto } from "./dto/create-clothing.dto";
import { UpdateClothingDto } from "./dto/update-course.dto";
import { GetClothingFilterDto } from "./dto/get-clothing-filter.dto";
export declare class ClothingService {
    private clothingRepository;
    constructor(clothingRepository: ClothingRepository);
    getClothings(filterDto: GetClothingFilterDto): Promise<Clothing[]>;
    getClothingById(id: number): Promise<Clothing>;
    updateClothing(id: number, updateClothingDto: UpdateClothingDto): Promise<Clothing>;
    deleteClothing(id: number): Promise<void>;
    createClothing(createClothingDto: CreateClothingDto): Promise<void>;
}

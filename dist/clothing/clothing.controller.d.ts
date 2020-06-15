import { ClothingService } from "./clothing.service";
import { CreateClothingDto } from "./dto/create-clothing.dto";
import { Clothing } from "./clothing.entity";
import { UpdateClothingDto } from "./dto/update-course.dto";
import { GetClothingFilterDto } from "./dto/get-clothing-filter.dto";
export declare class ClothingController {
    private clothingService;
    constructor(clothingService: ClothingService);
    getClothings(filterDto: GetClothingFilterDto): Promise<Clothing[]>;
    getClothingById(id: number): Promise<Clothing>;
    deleteClothing(id: number): Promise<void>;
    updateClothing(id: number, updateClothingDto: UpdateClothingDto): Promise<Clothing>;
    createClothing(createClothingDto: CreateClothingDto): Promise<void>;
}

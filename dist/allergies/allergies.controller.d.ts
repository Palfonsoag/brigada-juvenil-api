import { AllergiesService } from "./allergies.service";
import { CreateAllergyDto } from "./dto/create-allergy.dto";
import { GetAllergyFilterDto } from "./dto/get-allergy-filter.dto";
import { UpdateAllergyDto } from "./dto/update-allergy.dto";
import { Allergy } from "./allergy.entity";
export declare class AllergiesController {
    private allergiesService;
    constructor(allergiesService: AllergiesService);
    getAllergy(filterDto: GetAllergyFilterDto): Promise<Allergy[]>;
    getAllergyById(id: number): Promise<Allergy>;
    deleteAllergy(id: number): Promise<void>;
    updateSchool(id: number, updateAllergyDto: UpdateAllergyDto): Promise<Allergy>;
    createAllergy(createAllergyDto: CreateAllergyDto): Promise<void>;
}

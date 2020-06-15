import { AllergyRepository } from "./allergy.repository";
import { Allergy } from "./allergy.entity";
import { UpdateAllergyDto } from "./dto/update-allergy.dto";
import { CreateAllergyDto } from "./dto/create-allergy.dto";
import { GetAllergyFilterDto } from "./dto/get-allergy-filter.dto";
export declare class AllergiesService {
    private allergyRepository;
    constructor(allergyRepository: AllergyRepository);
    getAllergy(filterDto: GetAllergyFilterDto): Promise<Allergy[]>;
    getAllergyById(id: number): Promise<Allergy>;
    updateSchool(id: number, updateAllergyDto: UpdateAllergyDto): Promise<Allergy>;
    deleteAllergy(id: number): Promise<void>;
    createAllergy(createAllergyDto: CreateAllergyDto): Promise<void>;
}

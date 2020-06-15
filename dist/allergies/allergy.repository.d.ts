import { Repository } from "typeorm";
import { Allergy } from "./allergy.entity";
import { GetAllergyFilterDto } from "./dto/get-allergy-filter.dto";
import { CreateAllergyDto } from "./dto/create-allergy.dto";
export declare class AllergyRepository extends Repository<Allergy> {
    private logger;
    getAllergy(filterDto: GetAllergyFilterDto): Promise<Allergy[]>;
    createAllergy(createAllergyDto: CreateAllergyDto): Promise<Allergy>;
}

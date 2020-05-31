import { Module } from "@nestjs/common";
import { AllergiesService } from "./allergies.service";
import { AllergiesController } from "./allergies.controller";
import { AllergyRepository } from "./allergy.repository";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([AllergyRepository])],
  providers: [AllergiesService],
  controllers: [AllergiesController],
  exports: [AllergiesService],
})
export class AllergiesModule {}

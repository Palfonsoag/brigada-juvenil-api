import { Module } from '@nestjs/common';
import { MembersAllergyController } from './members-allergy.controller';
import { MembersAllergyService } from './members-allergy.service';

@Module({
  controllers: [MembersAllergyController],
  providers: [MembersAllergyService]
})
export class MembersAllergyModule {}

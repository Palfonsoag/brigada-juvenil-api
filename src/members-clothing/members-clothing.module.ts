import { Module } from '@nestjs/common';
import { MembersClothingController } from './members-clothing.controller';
import { MembersClothingService } from './members-clothing.service';

@Module({
  controllers: [MembersClothingController],
  providers: [MembersClothingService]
})
export class MembersClothingModule {}

import { Module } from '@nestjs/common';
import { ReligionService } from './religion.service';
import { ReligionController } from './religion.controller';

@Module({
  providers: [ReligionService],
  controllers: [ReligionController]
})
export class ReligionModule {}

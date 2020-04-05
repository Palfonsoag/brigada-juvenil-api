import { Module } from '@nestjs/common';
import { ClouthingService } from './clouthing.service';
import { ClouthingController } from './clouthing.controller';

@Module({
  providers: [ClouthingService],
  controllers: [ClouthingController]
})
export class ClouthingModule {}

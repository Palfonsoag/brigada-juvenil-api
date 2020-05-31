import { Module } from '@nestjs/common';
import { MembersContactController } from './members-contact.controller';
import { MembersContactService } from './members-contact.service';

@Module({
  controllers: [MembersContactController],
  providers: [MembersContactService]
})
export class MembersContactModule {}

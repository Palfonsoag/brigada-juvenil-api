import { Module } from "@nestjs/common";
import { MembersContactController } from "./members-contact.controller";
import { MembersContactService } from "./members-contact.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MembersContactRepository } from "./members-contact.repository";
import { MembersModule } from "../members/members.module";
import { ContactsModule } from "../contacts/contacts.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([MembersContactRepository]),
    MembersModule,
    ContactsModule,
  ],
  controllers: [MembersContactController],
  providers: [MembersContactService],
  exports: [MembersContactService],
})
export class MembersContactModule {}

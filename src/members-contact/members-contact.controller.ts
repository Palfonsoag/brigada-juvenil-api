import {
  Controller,
  Get,
  ValidationPipe,
  Query,
  Param,
  ParseIntPipe,
  Delete,
  Put,
  Body,
  Post,
  UsePipes,
} from "@nestjs/common";
import { MembersContactService } from "./members-contact.service";
import { MembersContact } from "./members-contact.entity";

@Controller("members-contact")
export class MembersContactController {
  constructor(private membersContactService: MembersContactService) {}

  @Get()
  getMembersContact(
    @Query("member") member: number
  ): Promise<MembersContact[]> {
    return this.membersContactService.getMembersContact(member);
  }

  @Delete("/:id")
  deleteContact(@Param("id", ParseIntPipe) id: number): Promise<void> {
    return this.membersContactService.deleteContact(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createMembersContact(
    @Body("emergency") emergency: boolean,
    @Body("member") member: number,
    @Body("contact") contact: number
  ): Promise<void> {
    return this.membersContactService.createMembersContact(
      emergency,
      member,
      contact
    );
  }
}

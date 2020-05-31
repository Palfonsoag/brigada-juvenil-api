import {
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
  Body,
  Delete,
  Param,
  ParseIntPipe,
  Query,
} from "@nestjs/common";
import { MembersService } from "./members.service";
import { GetMemberFilterDto } from "./dto/get-members.dto";
import { Member } from "./member.entity";
import { CreateMemberDto } from "./dto/create-members.dto";

@Controller("members")
export class MembersController {
  constructor(private membersService: MembersService) {}

  @Get()
  getMembers(
    @Query(ValidationPipe) filterDto: GetMemberFilterDto
  ): Promise<Member[]> {
    return this.membersService.getMembers(filterDto);
  }

  @Get("/:id")
  getMemberById(@Param("id", ParseIntPipe) id: number): Promise<Member> {
    return this.membersService.getMemberById(id);
  }

  @Post("/create")
  @UsePipes(ValidationPipe)
  createMember(
    @Body(ValidationPipe) createMemberDto: CreateMemberDto
  ): Promise<void> {
    console.log("aaaaaaaaaaaaa");
    return this.membersService.createMember(createMemberDto);
  }

  @Delete("/:id")
  deleteMember(@Param("id", ParseIntPipe) id: number): Promise<void> {
    return this.membersService.deleteMember(id);
  }
}

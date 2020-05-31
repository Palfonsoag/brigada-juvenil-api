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
  Put,
} from "@nestjs/common";
import { MembersService } from "./members.service";
import { GetMemberFilterDto } from "./dto/get-members.dto";
import { Member } from "./member.entity";
import { CreateMemberDto } from "./dto/create-members.dto";
import { UpdateMemberDto } from "./dto/update-member.dto";
import { UpdateSecondaryDataDto } from "./dto/update-secondary-data.dto";

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
    return this.membersService.createMember(createMemberDto);
  }

  @Put("/:id/update")
  updateMember(
    @Param("id", ParseIntPipe) id: number,
    @Body(ValidationPipe) updateMemberDto: UpdateMemberDto
  ): Promise<Member> {
    return this.membersService.updateMember(id, updateMemberDto);
  }

  @Put("/:id/second-data")
  updateSecondData(
    @Param("id", ParseIntPipe) id: number,
    @Body(ValidationPipe) updateSecondaryDataDto: UpdateSecondaryDataDto
  ): Promise<Member> {
    return this.membersService.updateSecondData(id, updateSecondaryDataDto);
  }

  @Delete("/:id")
  deleteMember(@Param("id", ParseIntPipe) id: number): Promise<void> {
    return this.membersService.deleteMember(id);
  }
}

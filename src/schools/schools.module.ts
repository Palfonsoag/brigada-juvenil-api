import { Module } from "@nestjs/common";
import { SchoolsController } from "./schools.controller";
import { SchoolsService } from "./schools.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SchoolRepository } from "./school.repository";

@Module({
  imports: [TypeOrmModule.forFeature([SchoolRepository])],
  controllers: [SchoolsController],
  providers: [SchoolsService],
})
export class SchoolsModule {}

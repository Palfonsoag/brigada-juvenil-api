"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const ranks_service_1 = require("./ranks.service");
const get_rank_filter_dto_1 = require("./dto/get-rank-filter.dto");
const create_rank_dto_1 = require("./dto/create-rank.dto");
const update_rank_dto_1 = require("./dto/update-rank.dto");
let RanksController = class RanksController {
    constructor(ranksService) {
        this.ranksService = ranksService;
    }
    getRanks(filterDto) {
        return this.ranksService.getRanks(filterDto);
    }
    getRankById(id) {
        return this.ranksService.getRankById(id);
    }
    deleteRank(id) {
        return this.ranksService.deleteRank(id);
    }
    updateRank(id, updateRankDto) {
        return this.ranksService.updateRank(id, updateRankDto);
    }
    createRank(createRankDto) {
        return this.ranksService.createRank(createRankDto);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Query(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_rank_filter_dto_1.GetRankFilterDto]),
    __metadata("design:returntype", Promise)
], RanksController.prototype, "getRanks", null);
__decorate([
    common_1.Get("/:id"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RanksController.prototype, "getRankById", null);
__decorate([
    common_1.Delete("/:id"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RanksController.prototype, "deleteRank", null);
__decorate([
    common_1.Put("/:id/update"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe)),
    __param(1, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_rank_dto_1.UpdateRankDto]),
    __metadata("design:returntype", Promise)
], RanksController.prototype, "updateRank", null);
__decorate([
    common_1.Post(),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_rank_dto_1.CreateRankDto]),
    __metadata("design:returntype", Promise)
], RanksController.prototype, "createRank", null);
RanksController = __decorate([
    common_1.Controller("ranks"),
    __metadata("design:paramtypes", [ranks_service_1.RanksService])
], RanksController);
exports.RanksController = RanksController;
//# sourceMappingURL=ranks.controller.js.map
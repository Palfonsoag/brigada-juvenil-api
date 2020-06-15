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
const contacts_service_1 = require("./contacts.service");
const get_contact_filter_dto_1 = require("./dto/get-contact-filter.dto");
const update_contact_dto_1 = require("./dto/update-contact.dto");
const create_contact_dto_1 = require("./dto/create-contact.dto");
let ContactsController = class ContactsController {
    constructor(contactService) {
        this.contactService = contactService;
    }
    getContacts(filterDto) {
        return this.contactService.getContacts(filterDto);
    }
    getContactById(id) {
        return this.contactService.getContactById(id);
    }
    deleteContact(id) {
        return this.contactService.deleteContact(id);
    }
    updateContact(id, updateContactDto) {
        return this.contactService.updateContact(id, updateContactDto);
    }
    createContact(createContactDto) {
        return this.contactService.createContact(createContactDto);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Query(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_contact_filter_dto_1.GetContactFilterDto]),
    __metadata("design:returntype", Promise)
], ContactsController.prototype, "getContacts", null);
__decorate([
    common_1.Get("/:id"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ContactsController.prototype, "getContactById", null);
__decorate([
    common_1.Delete("/:id"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ContactsController.prototype, "deleteContact", null);
__decorate([
    common_1.Put("/:id/update"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe)),
    __param(1, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_contact_dto_1.UpdateContactDto]),
    __metadata("design:returntype", Promise)
], ContactsController.prototype, "updateContact", null);
__decorate([
    common_1.Post(),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_contact_dto_1.CreateContactDto]),
    __metadata("design:returntype", Promise)
], ContactsController.prototype, "createContact", null);
ContactsController = __decorate([
    common_1.Controller("contacts"),
    __metadata("design:paramtypes", [contacts_service_1.ContactsService])
], ContactsController);
exports.ContactsController = ContactsController;
//# sourceMappingURL=contacts.controller.js.map
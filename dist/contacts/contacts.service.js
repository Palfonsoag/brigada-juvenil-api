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
const typeorm_1 = require("@nestjs/typeorm");
const contact_repository_1 = require("./contact.repository");
let ContactsService = class ContactsService {
    constructor(contactRepository) {
        this.contactRepository = contactRepository;
    }
    async getContacts(filterDto) {
        return this.contactRepository.getContacts(filterDto);
    }
    async getContactById(id) {
        const foundContact = await this.contactRepository.findOne(id);
        if (!foundContact) {
            throw new common_1.NotFoundException(`Los datos ingresados no coinciden`);
        }
        return foundContact;
    }
    async updateContact(id, updateContactDto) {
        const contact = await this.getContactById(id);
        if (updateContactDto.address) {
            contact.address = updateContactDto.address;
        }
        if (updateContactDto.phoneNumber) {
            contact.phone_number = updateContactDto.phoneNumber;
        }
        if (updateContactDto.name) {
            contact.name = updateContactDto.name;
        }
        if (updateContactDto.documentNumber) {
            contact.document_number = updateContactDto.documentNumber;
        }
        await contact.save();
        return contact;
    }
    async deleteContact(id) {
        const result = await this.contactRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Los datos ingresados no coinciden`);
        }
    }
    async createContact(createContactDto) {
        await this.contactRepository.createContact(createContactDto);
    }
};
ContactsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(contact_repository_1.ContactRepository)),
    __metadata("design:paramtypes", [contact_repository_1.ContactRepository])
], ContactsService);
exports.ContactsService = ContactsService;
//# sourceMappingURL=contacts.service.js.map
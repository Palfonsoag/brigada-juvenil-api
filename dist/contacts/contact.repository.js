"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const contact_entity_1 = require("./contact.entity");
let ContactRepository = class ContactRepository extends typeorm_1.Repository {
    constructor() {
        super(...arguments);
        this.logger = new common_1.Logger("ContactRepository");
    }
    async getContacts(filterDto) {
        const { search, documentNumber } = filterDto;
        const query = this.createQueryBuilder("contact");
        if (documentNumber) {
            query.andWhere("contact.document_number = :document_number", {
                document_number: documentNumber,
            });
        }
        if (search) {
            query.andWhere("(contact.name LIKE :search OR contact.code LIKE :search)", {
                search: `%${search}%`,
            });
        }
        const contact = await query.getMany();
        return contact;
    }
    async getContact(id) {
        const query = this.createQueryBuilder("contact").where("contact.id = :id", {
            id,
        });
        const contact = await query.getOne();
        return contact;
    }
    async createContact(createContactDto) {
        const { name, address, documentNumber, phoneNumber } = createContactDto;
        const contact = new contact_entity_1.Contact();
        contact.name = name;
        contact.address = address;
        contact.document_number = documentNumber;
        contact.phone_number = phoneNumber;
        try {
            await contact.save();
            return contact;
        }
        catch (error) {
            if (error.code === "23505") {
                throw new common_1.ConflictException("El Contacto ya fue creado");
            }
            else {
                this.logger.error(`Contact name"${contact.name}" creating it. dto: ${JSON.stringify(createContactDto)}`, error.stack);
                throw new common_1.InternalServerErrorException();
            }
        }
    }
};
ContactRepository = __decorate([
    typeorm_1.EntityRepository(contact_entity_1.Contact)
], ContactRepository);
exports.ContactRepository = ContactRepository;
//# sourceMappingURL=contact.repository.js.map
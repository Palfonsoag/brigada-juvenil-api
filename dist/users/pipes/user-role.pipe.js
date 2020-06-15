"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const user_role_enum_1 = require("../user-role.enum");
class UserRoleValidationPipe {
    constructor() {
        this.allowedRoles = [user_role_enum_1.UserRole.ADMIN, user_role_enum_1.UserRole.SUPERUSER];
    }
    transform(value) {
        value = value.toUpperCase();
        if (!this.isRoleValid(value)) {
            throw new common_1.BadRequestException(`"${value}" es un role inválido`);
        }
        return value;
    }
    isRoleValid(role) {
        const idx = this.allowedRoles.indexOf(role);
        return idx !== -1;
    }
}
exports.UserRoleValidationPipe = UserRoleValidationPipe;
//# sourceMappingURL=user-role.pipe.js.map
import { PipeTransform, BadRequestException } from "@nestjs/common";
import { UserRole } from "../user-role.enum";

export class UserRoleValidationPipe implements PipeTransform {
  readonly allowedRoles = [UserRole.ADMIN, UserRole.SUPERUSER];

  transform(value: any) {
    value = value.toUpperCase();
    if (!this.isRoleValid(value)) {
      throw new BadRequestException(`"${value}" es un role inválido`);
    }
    return value;
  }

  private isRoleValid(role: any) {
    const idx = this.allowedRoles.indexOf(role);
    return idx !== -1;
  }
}

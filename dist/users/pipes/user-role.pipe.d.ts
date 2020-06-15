import { PipeTransform } from "@nestjs/common";
import { UserRole } from "../user-role.enum";
export declare class UserRoleValidationPipe implements PipeTransform {
    readonly allowedRoles: UserRole[];
    transform(value: any): any;
    private isRoleValid;
}

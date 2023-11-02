import {PickType} from "@nestjs/mapped-types";
import {CreateUserManagementDto} from "./create-user-management.dto";

export class UserLoginCredentialDto extends PickType(CreateUserManagementDto,['email','password']){}
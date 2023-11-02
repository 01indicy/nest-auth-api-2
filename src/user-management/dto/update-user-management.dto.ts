import {OmitType, PartialType} from '@nestjs/mapped-types';
import { CreateUserManagementDto } from './create-user-management.dto';

export class UpdateUserManagementDto extends OmitType(CreateUserManagementDto, ['password'] as const) {}

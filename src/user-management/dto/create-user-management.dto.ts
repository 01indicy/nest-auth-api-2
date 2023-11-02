import {IsBoolean, IsNotEmpty, IsString} from "class-validator";

export class CreateUserManagementDto {
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsBoolean()
    admin: boolean;
}

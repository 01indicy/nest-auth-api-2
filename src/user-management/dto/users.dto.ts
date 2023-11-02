import {Injectable} from "@nestjs/common";
import {Expose} from "class-transformer";

@Injectable()
export class UsersDto {
    @Expose()
    username: string;

    @Expose()
    email: string;

    @Expose()
    admin: boolean;
}
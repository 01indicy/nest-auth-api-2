import {Body, Controller, Post} from '@nestjs/common';
import {UserLoginCredentialDto} from "../dto/user.login.credential.dto";
import {UserManagementService} from "../user-management.service";

@Controller('auth')
export class AuthenticationController {
    constructor(private readonly userManagementService: UserManagementService) {}

    @Post('signIn')
    singIn(@Body() loginCredentials: UserLoginCredentialDto){
        return this.userManagementService.signIn(loginCredentials);
    }

    @Post('signOut')
    signOut(){
        return this.userManagementService.signOut("")
    }
}

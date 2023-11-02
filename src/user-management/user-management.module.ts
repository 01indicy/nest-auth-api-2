import { Module } from '@nestjs/common';
import { UserManagementService } from './user-management.service';
import { UserManagementController } from './user/user-management.controller';
import { AuthenticationController } from './authentication/authentication.controller';
import { PrismaModule } from "../prisma/prisma.module";
import {JwtModule} from "@nestjs/jwt";

@Module({
  controllers: [UserManagementController, AuthenticationController],
  imports: [PrismaModule, JwtModule.register({
    secretOrPrivateKey: '10', signOptions: {expiresIn: '10m'}
  })],
  providers: [UserManagementService],
})
export class UserManagementModule {}

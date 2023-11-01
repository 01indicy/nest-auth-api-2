import { Module } from '@nestjs/common';
import { UserManagementService } from './user-management.service';
import { UserManagementController } from './user/user-management.controller';
import { AuthenticationController } from './authentication/authentication.controller';

@Module({
  controllers: [UserManagementController, AuthenticationController],
  providers: [UserManagementService],
})
export class UserManagementModule {}

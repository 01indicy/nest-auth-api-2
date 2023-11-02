import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { CreateUserManagementDto } from './dto/create-user-management.dto';
import { UpdateUserManagementDto } from './dto/update-user-management.dto';
import { PrismaService } from "../prisma/prisma.service";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserManagementService {
  private saltRound = 10;
  constructor(private prisma: PrismaService, private jwt: JwtService) {}
  async create(createUserManagementDto: CreateUserManagementDto) {
    const is_email_inuse = await this.prisma.user.findFirst({where: {email: createUserManagementDto.email}});
    if(is_email_inuse) throw new HttpException(`Email provided (${createUserManagementDto.email}) is already in use, Please try another one.`,HttpStatus.BAD_REQUEST)

    createUserManagementDto.password = await bcrypt.hash(createUserManagementDto.password,this.saltRound);
    return this.prisma.user.create({ data: createUserManagementDto });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: number) {
    const user_details = await this.prisma.user.findUnique({where: { id }});
    if(!user_details) throw new HttpException(`User with id ${id} no found`,HttpStatus.NOT_FOUND)

    return user_details;
  }

  update(id: number, updateUserManagementDto: UpdateUserManagementDto) {
    return `This action updates a #${id} userManagement`;
  }

  remove(id: number) {
    return `This action removes a #${id} userManagement`;
  }
}

import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { UsersModule } from '../users/users.module';
import { PrismaService } from '@/database/prisma.service';

@Module({
  imports: [UsersModule],
  providers: [
    AddressService,
    PrismaService
  ],
  controllers: [AddressController]
})
export class AddressModule { }

import { PrismaService } from '@/database/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class AddressService {

    constructor(private prisma: PrismaService) { }

    async findByIdOrFail(addressId: number) {
        const address = await this.prisma.address.findUnique({
            where: { id: Number(addressId) }
        });

        if (!address) {
            throw new NotFoundException('Endereço não encontrado');
        }

        return address;
    }
}

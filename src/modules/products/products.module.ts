import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { PrismaService } from '@/database/prisma.service';
import { ProductsRepository } from './products.repository';
import { CategoriesModule } from '../categories/categories.module';

@Module({
  imports: [CategoriesModule],
  controllers: [ProductsController],
  providers: [
    ProductsService,
    ProductsRepository,
    PrismaService
  ]
})
export class ProductsModule { }
  
import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";

import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Product } from './models/product.model';
import { Settings } from './models/settings.model';

@Module({
  imports: [
     SequelizeModule.forFeature([
      Product, Settings
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}

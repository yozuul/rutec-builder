import { Module, forwardRef } from '@nestjs/common'
import { SequelizeModule } from "@nestjs/sequelize"

import { ProductsController } from './products.controller'
import { ProductsService } from './products.service'
import { Product } from './models/product.model'
import { AuthModule } from 'src/auth/auth.module'
import { ProductOld } from './models/product_old.model'

@Module({
   imports: [
      forwardRef(() => AuthModule),
      SequelizeModule.forFeature([
         Product, ProductOld
      ]),
   ],
   controllers: [ProductsController],
   providers: [ProductsService]
})
export class ProductsModule {}

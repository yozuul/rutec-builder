import { Injectable } from '@nestjs/common';
import { InjectModel} from '@nestjs/sequelize';

import { Product } from './models/product.model';
import { AddProductDto } from './models/add-product.dto';

@Injectable()
export class ProductsService {
   constructor(
      @InjectModel(Product)
      private productRepository: typeof Product
   ) {}

   async addProduct(dto: AddProductDto) {
      console.log('ProductsService addProduct', dto)
      return this.productRepository.create(dto)
   }
   async getAllProducts() {
      console.log('ProductsService getAllProducts')
      return this.productRepository.findAll()
   }
   async getProductById(id) {
      console.log('ProductsService getProductById', id)
      return this.productRepository.findOne({
         where: { id: id }
      })
   }
   async deleteProduct(id) {
      console.log('ProductsService deleteProduct', id)
      return this.productRepository.destroy({
         where: { id: id }
      })
   }
   async updateProduct(id, data) {
      console.log('ProductsService updateProduct', id, data)
      const product = await this.productRepository.findOne({
         where: { id: id }
      })
      product.name = data.name
      product.url = data.url
      await product.save()
      return product
   }
}

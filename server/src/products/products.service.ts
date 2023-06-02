import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel} from '@nestjs/sequelize';

import { Product } from './models/product.model';
import { ProductOld } from './models/product_old.model';
import { AddProductDto } from './models/add-product.dto';
import {defaultProductsData} from './products.data';

@Injectable()
export class ProductsService implements OnModuleInit {
   constructor(
      @InjectModel(Product)
      private productRepository: typeof Product,
      // @InjectModel(ProductOld)
      // private productOldRepository: typeof ProductOld,
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

   async onModuleInit() {
      // await this.checkDefaultProducts()
   }
   async checkDefaultProducts() {
      const currentProducts = await this.productRepository.findAll()
      // console.log(defaultProductsData)
      if(currentProducts.length === 0) {
         const preparedData = defaultProductsData.map(item => ({
            ...item,
            fields: item.fields ? JSON.stringify(item.fields) : null,
            notFields: item.notFields ? JSON.stringify(item.notFields) : null,
            orFields: item.orFields ? JSON.stringify(item.orFields) : null,
            notOrFields: item.notOrFields ? JSON.stringify(item.notOrFields) : null,
            prioriteFields: item.prioriteFields ? JSON.stringify(item.prioriteFields) : null,
            prioriteOrFields: item.prioriteOrFields ? JSON.stringify(item.prioriteOrFields) : null
          }))
          await this.productRepository.bulkCreate(preparedData)
      }
   }
   stringifyField(data) {
      return JSON.stringify(data)
   }
}

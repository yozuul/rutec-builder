import { Injectable } from '@nestjs/common';
import { InjectModel} from '@nestjs/sequelize';
import { Product } from './models/product.model';
import { Settings } from './models/settings.model';
import { AddProductDto } from './models/add-product.dto';

@Injectable()
export class ProductsService {
   constructor(
      @InjectModel(Product)
      private productRepository: typeof Product,
      @InjectModel(Settings)
      private settingsRepository: typeof Settings
   ) {}

   async addProduct(dto: AddProductDto) {
      return this.productRepository.create(dto)
   }
   async getAllProducts() {
      return this.productRepository.findAll()
   }
   async getProductById(id) {
      return this.productRepository.findOne({
         where: { id: id }
      })
   }
   async deleteProduct(id) {
      return this.productRepository.destroy({
         where: { id: id }
      })
   }
   async updateProduct(id, data) {
      const product = await this.productRepository.findOne({
         where: { id: id }
      })
      product.name = data.name
      product.url = data.url
      await product.save()
      return product
   }
   async getSettings() {
      const settings = await this.settingsRepository.findOne({})
      if(!settings) {
         await this.settingsRepository.create({
            promocode: 'ABCD-EFGH-IGKL-LMNO', email: 'ru-tec@yandex.ru'
         })
      }
      return settings
   }
   async updateSettings({ promocode, email }) {
      const settings = await this.settingsRepository.findOne({})
      settings.promocode = promocode
      settings.email = email
      await settings.save()
   }
}

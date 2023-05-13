import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
   constructor(
      private productService: ProductsService
   ) {}

   @Get('all')
   async getAllProducts() {
      console.log('ddd')
      return this.productService.getAllProducts()
   }
   @Get('byId/:id')
   async getProductById(@Param() {id}: any) {
      return this.productService.getProductById(id)
   }
   @Post('add')
   async addProduct(@Body() body: any, @Req() req: any) {
      return this.productService.addProduct(body)
   }
   @Delete('/delete/:id')
   async deleteProduct(@Param() {id}: any) {
      return this.productService.deleteProduct(id)
   }
   @Put('/update/:id')
   async updateProduct(@Param() {id}: any, @Body() data: any) {
      return this.productService.updateProduct(id, data)
   }
   @Get('settings')
   async getSettings() {
      return this.productService.getSettings()
   }
   @Put('/settings/update')
   async updateSettings(@Body() data: any) {
      return this.productService.updateSettings(data)
   }
}
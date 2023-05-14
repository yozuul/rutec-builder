import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';

import { ProductsService } from './products.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('products')
export class ProductsController {
   constructor(
      private productService: ProductsService
   ) {}

   @Get('all')
   async getAllProducts() {
      return this.productService.getAllProducts()
   }
   @Get('byId/:id')
   async getProductById(@Param() {id}: any) {
      return this.productService.getProductById(id)
   }
   @UseGuards(JwtAuthGuard)
   @Post('add')
   async addProduct(@Body() body: any, @Req() req: any) {
      return this.productService.addProduct(body)
   }
   @UseGuards(JwtAuthGuard)
   @Delete('/delete/:id')
   async deleteProduct(@Param() {id}: any) {
      return this.productService.deleteProduct(id)
   }
   @UseGuards(JwtAuthGuard)
   @Put('/update/:id')
   async updateProduct(@Param() {id}: any, @Body() data: any) {
      return this.productService.updateProduct(id, data)
   }
}
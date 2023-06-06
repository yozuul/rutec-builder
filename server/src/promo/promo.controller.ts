import {
   Controller, Get, Put, Body, UseGuards, Post, Delete, Param, UseInterceptors, UploadedFile
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express'

import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { PromoService } from './promo.service';

@Controller('promo')
export class PromoController {
   constructor(
      private promoService: PromoService
   ) {}

   @UseGuards(JwtAuthGuard)
   @Get()
   async getAllPartners() {
      return this.promoService.getAllPromo()
   }
   @UseGuards(JwtAuthGuard)
   @Get('/id/:id')
   async getPromoById(@Param() { id }: any) {
      return this.promoService.getPromoById(id)
   }
   @Get('/random')
   async getRandom() {
      return this.promoService.getRandom()
   }
   @UseGuards(JwtAuthGuard)
   @Post('/add')
   @UseInterceptors(FileInterceptor('file'))
   async addPromo(@Body() data: any, @UploadedFile() file: any) {
      console.log('file', file)
      return this.promoService.addPromo(data, file)
   }
   @UseGuards(JwtAuthGuard)
   @Delete('/delete/:id')
   async deletePartner(@Param() { id }: any) {
      return this.promoService.deletePromo(id)
   }
   @UseGuards(JwtAuthGuard)
   @Put('/update/:id')
   @UseInterceptors(FileInterceptor('file'))
   async editPartner(@Param() { id }: any, @Body() body: any, @UploadedFile() file: any) {
      return this.promoService.updatePromo(id, body, file)
   }

}

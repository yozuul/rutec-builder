import { Controller, Get, Put, Body, UseGuards, Post, Delete, Param } from '@nestjs/common';

import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { PartnersService } from './partners.service';

@Controller('partners')
export class PartnersController {
   constructor(
      private partnerService: PartnersService
   ) {}
   @UseGuards(JwtAuthGuard)
   @Get()
   async getAllPartners() {
      return this.partnerService.getAllPartners()
   }
   @UseGuards(JwtAuthGuard)
   @Get('/id/:id')
   async getPartnerById(@Param() { id }: any) {
      return this.partnerService.getPartnerById(id)
   }
   // @UseGuards(JwtAuthGuard)
   @Post('/add')
   async addPartner(@Body() data: any) {
      return this.partnerService.addPartner(data)
   }
   @UseGuards(JwtAuthGuard)
   @Delete('/delete/:id')
   async deletePartner(@Param() { id }: any) {
      return this.partnerService.deletePartner(id)
   }
   @UseGuards(JwtAuthGuard)
   @Put('/update/:id')
   async editPartner(@Param() { id }: any, @Body() data: any) {
      return this.partnerService.editPartner(id, data)
   }
   // @UseGuards(JwtAuthGuard)
   @Get('/city')
   async getAllCity() {
      return this.partnerService.getAllCity()
   }
   @Get('/getCityForUser')
   async getCityForUser() {
      return this.partnerService.getCityForUser()
   }
   @Get('/findByCity/:name')
   async findByCity(@Param() { name }: any) {
      return this.partnerService.findByCity(name)
   }
   @UseGuards(JwtAuthGuard)
   @Post('/city/add')
   async addCity(@Body() data: any) {
      return this.partnerService.addCity(data)
   }
}

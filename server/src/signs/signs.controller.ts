import { Controller, Get, Put, Body, UseGuards, Post, Req, Delete, Param } from '@nestjs/common';

import { SignsService } from './signs.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('signs')
export class SignsController {
   constructor(
      private signService: SignsService
   ) {}

   @UseGuards(JwtAuthGuard)
   @Post('add')
   async addSignsGroup(@Body() body: any, @Req() req: any) {
      return this.signService.addSignsGroup(body)
   }

   @Get('all')
   async getAllSignsGroup(): Promise<any> {
      return this.signService.getAllSignsGroup()
   }

   @UseGuards(JwtAuthGuard)
   @Get('/byId/:id')
   async getSignGroupById(@Param() { id }: any) {
      return this.signService.getSignGroupById(id)
   }

   @UseGuards(JwtAuthGuard)
   @Delete('/delete/:id')
   async deleteProduct(@Param() { id }: any) {
      return this.signService.deleteSign(id)
   }

   @UseGuards(JwtAuthGuard)
   @Put('/update/:id')
   async updateProduct(@Param() { id }: any, @Body() data: any) {
      return this.signService.updateSignGroup(id, data)
   }
}

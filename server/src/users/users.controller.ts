import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
   constructor(
      private userService: UsersService
   ) {}

   @UseGuards(JwtAuthGuard)
   @Get('all')
   async allUsers() {
      return this.userService.allUsers()
   }
   @Post('addNew')
   async addUser(@Body() data: any) {
      return this.userService.addUser(data)
   }
}

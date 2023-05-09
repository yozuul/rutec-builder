import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
   constructor(
      private userService: UsersService
   ) {}

   @Get('all')
   async allUsers() {
      return this.userService.allUsers()
   }
   @Post('login')
   async login(@Body() data: any) {
      return this.userService.login(data)
   }
   @Post('addNew')
   async addUser(@Body() data: any) {
      return this.userService.addUser(data)
   }
}

import { Body, Controller, Post, UseGuards } from "@nestjs/common";

import { AuthService } from "./auth.service";
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('auth')
export class AuthController {
   constructor(
      private authService: AuthService
   ) {}

   @Post('login')
   login(@Body() authData) {
      console.log('AuthController Login authData', authData)
      return this.authService.login(authData)
   }

   @UseGuards(JwtAuthGuard)
   @Post('validateUser')
   validateUser(@Body() token) {
      console.log('AuthController ValidateUser', token)
      return true
   }

   @Post('sendPromo')
   registration(@Body() email) {
      console.log(email)
      return this.authService.sendPromo(email)
   }

   // @Post('registration')
   // registration(@Body() userDto: CreateUserDto) {
   //    return this.authService.registration(userDto)
   // }
   // @Post('registration')
   // registration(@Body() userDto: CreateUserDto) {
   //    return this.authService.registration(userDto)
   // }
}
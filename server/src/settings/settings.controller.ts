import { Controller, Get, Put, Body, UseGuards } from '@nestjs/common';

import { SettingsService } from './settings.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('settings')
export class SettingsController {
   constructor(
      private settingsService: SettingsService
   ) {}

   @UseGuards(JwtAuthGuard)
   @Get('get')
   async getSettings() {
      return this.settingsService.getSettings()
   }
   @UseGuards(JwtAuthGuard)
   @Put('/update')
   async updateSettings(@Body() data: any) {
      return this.settingsService.updateSettings(data)
   }
}
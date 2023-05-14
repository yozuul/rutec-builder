import { Module, forwardRef } from '@nestjs/common'
import { SequelizeModule } from "@nestjs/sequelize"

import { SettingsController } from './settings.controller'
import { SettingsService } from './settings.service'
import { Settings } from './models/settings.model'
import { AuthModule } from 'src/auth/auth.module'

@Module({
   imports: [
      forwardRef(() => AuthModule),
      SequelizeModule.forFeature([
         Settings
      ]),
   ],
   controllers: [SettingsController],
   providers: [SettingsService],
   exports: [SettingsService]
})
export class SettingsModule {}

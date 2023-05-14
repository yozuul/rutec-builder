import { Module, forwardRef } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'

import { UsersController } from './users.controller'
import { UsersService } from './users.service'
import { Users } from './models/users.model'
import { AuthModule } from 'src/auth/auth.module'
import { SettingsModule } from 'src/settings/settings.module'

@Module({
   imports: [
      forwardRef(() => AuthModule),
      forwardRef(() => SettingsModule),
      SequelizeModule.forFeature([
         Users
      ]),
   ],
   controllers: [UsersController],
   providers: [UsersService],
   exports: [UsersService]
})
export class UsersModule {}
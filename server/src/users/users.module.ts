import { Module, forwardRef } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'

import { UsersController } from './users.controller'
import { UsersService } from './users.service'
import { Users } from './models/users.model'
import { Settings } from 'src/products/models/settings.model'
import { AuthModule } from 'src/auth/auth.module'

@Module({
  imports: [
    forwardRef(() => AuthModule),
    SequelizeModule.forFeature([
      Users, Settings
    ])
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
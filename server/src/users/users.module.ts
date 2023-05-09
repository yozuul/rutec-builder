import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Users } from './models/users.model';
import { Settings } from 'src/products/models/settings.model';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Users, Settings
    ])
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}

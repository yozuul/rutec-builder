import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize"

import { SignsService } from './signs.service';
import { SignsController } from './signs.controller';
import { Signs, SignsGroups } from './model';
import { AuthModule } from 'src/auth/auth.module';

@Module({
   imports: [
      forwardRef(() => AuthModule),
      SequelizeModule.forFeature([
         Signs, SignsGroups
      ]),
   ],
   providers: [SignsService],
   controllers: [SignsController]
})
export class SignsModule {}

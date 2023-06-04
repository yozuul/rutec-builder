import { Module, forwardRef } from '@nestjs/common'
import { SequelizeModule } from "@nestjs/sequelize"

import { PartnersController } from './partners.controller';
import { PartnersService } from './partners.service';
import { AuthModule } from 'src/auth/auth.module'
import { Partners, PartnersCity } from './models';

@Module({
   imports: [
      forwardRef(() => AuthModule),
      SequelizeModule.forFeature([
         Partners, PartnersCity
      ]),
   ],
   controllers: [PartnersController],
   providers: [PartnersService]
})
export class PartnersModule {}

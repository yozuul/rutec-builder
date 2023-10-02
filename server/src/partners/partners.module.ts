import { Module, forwardRef } from '@nestjs/common'
import { SequelizeModule } from "@nestjs/sequelize"

import { PartnersController } from './partners.controller';
import { PartnersService } from './partners.service';
import { AuthModule } from 'src/auth/auth.module'
import { CityToCountry, Partners, PartnersCity, PartnersCountry } from './models';
import { Users } from 'src/users/models/users.model';

@Module({
   imports: [
      forwardRef(() => AuthModule),
      SequelizeModule.forFeature([
         Partners, PartnersCity, PartnersCountry, CityToCountry, Users
      ]),
   ],
   controllers: [PartnersController],
   providers: [PartnersService],
})
export class PartnersModule {}


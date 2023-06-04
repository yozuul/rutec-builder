import { Module, forwardRef } from '@nestjs/common'
import { SequelizeModule } from "@nestjs/sequelize"

import { AuthModule } from 'src/auth/auth.module'
import { PromoController } from './promo.controller';
import { PromoService } from './promo.service';
import { Promo } from './models/promo.model';

@Module({
  imports: [
     forwardRef(() => AuthModule),
     SequelizeModule.forFeature([
        Promo
     ]),
  ],
  controllers: [PromoController],
  providers: [PromoService]
})
export class PromoModule {}

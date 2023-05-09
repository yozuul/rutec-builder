import { resolve } from 'node:path';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { TelegrafModule } from 'nestjs-telegraf';
import * as LocalSession from 'telegraf-session-local';

import { ProductsModule } from './products/products.module';
import { Product } from './products/models/product.model';
import { Settings } from './products/models/settings.model';
import { UsersModule } from './users/users.module';
import { Users } from './users/models/users.model';

const sessions = new LocalSession({ database: 'session_db.json' });

@Module({
   imports: [
      ConfigModule.forRoot({
         isGlobal: true,
         envFilePath: '.env',
      }),
      SequelizeModule.forRoot({
         dialect: 'sqlite',
         storage: resolve('rutec-builder.db'),
         models: [Product, Settings, Users],
         autoLoadModels: true,
         logging: false
      }),
      TelegrafModule.forRoot({
         middlewares: [sessions.middleware()],
         token: process.env.BOT_TOKEN,
      }),
      ProductsModule,
      UsersModule,
   ],
   controllers: [],
   providers: [],
})
export class AppModule {}
import { resolve } from 'node:path';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { TelegrafModule } from 'nestjs-telegraf';
import { ProductsModule } from './products/products.module';
import * as LocalSession from 'telegraf-session-local';

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
         models: [],
         autoLoadModels: true,
         logging: false
      }),
      TelegrafModule.forRoot({
         middlewares: [sessions.middleware()],
         token: process.env.BOT_TOKEN,
      }),
      ProductsModule,
   ],
   controllers: [],
   providers: [],
})
export class AppModule {}
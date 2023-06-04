import { resolve } from 'node:path'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { SequelizeModule } from '@nestjs/sequelize'
import { TelegrafModule } from 'nestjs-telegraf'
import * as LocalSession from 'telegraf-session-local'
import { MailerModule } from '@nestjs-modules/mailer'

import { ProductsModule } from './products/products.module'
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'
import { SettingsModule } from './settings/settings.module'
import { SignsModule } from './signs/signs.module'

import { Product } from './products/models/product.model'
import { Users } from './users/models/users.model'
import { Settings } from './settings/models/settings.model'
import { SignsGroups, Signs } from './signs/model'
import { PartnersModule } from './partners/partners.module';
import { PromoModule } from './promo/promo.module';

const sessions = new LocalSession({ database: 'session_db.json' })

@Module({
   imports: [
      ConfigModule.forRoot({
         isGlobal: true,
         envFilePath: '.env',
      }),
      SequelizeModule.forRoot({
         dialect: 'sqlite',
         storage: resolve('rutec-builder.db'),
         // models: [Product, Settings, Users, SignsGroups, Signs],
         autoLoadModels: true,
         logging: false
      }),
      // TelegrafModule.forRoot({
      //    middlewares: [sessions.middleware()],
      //    token: process.env.BOT_TOKEN,
      // }),
      MailerModule.forRootAsync({
         useFactory: async () => {
            const setting = await Settings.findOne({})
            const users = setting.email.split('@')[0]
            console.log('users', users)
            console.log('setting.password', setting.password)
            return {
               transport: {
                  host: 'smtp.yandex.ru', port: 465,
                  secure: true,
                  auth: {
                     user: users,
                     pass: setting.password,
                  },
               }
            }
         }
      }),
      ProductsModule, UsersModule, AuthModule, SettingsModule, SignsModule, PartnersModule, PromoModule
   ],
   controllers: [],
   providers: [],
})
export class AppModule {}
import { Module, forwardRef } from '@nestjs/common'
import { JwtModule } from "@nestjs/jwt"
import { ConfigModule } from '@nestjs/config'

import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { UsersModule } from 'src/users/users.module'
import { SettingsModule } from 'src/settings/settings.module'

@Module({
   imports: [
      forwardRef(() => UsersModule),
      forwardRef(() => SettingsModule),
      ConfigModule.forRoot({
         envFilePath: ['.env'],
      }),
      JwtModule.register({
         secret: process.env.SECRET,
         signOptions: { expiresIn: '24h' }
      }),
   ],
   controllers: [AuthController],
   providers: [AuthService],
   exports: [JwtModule, AuthService]
})
export class AuthModule {}

import { Module, forwardRef } from '@nestjs/common'
import { JwtModule } from "@nestjs/jwt"
import { ConfigModule } from '@nestjs/config'

import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { UsersModule } from 'src/users/users.module'

@Module({
   imports: [
      forwardRef(() => UsersModule),
      ConfigModule.forRoot({
         envFilePath: ['.env'],
      }),
      JwtModule.register({
         secret: process.env.SECRET,
         signOptions: { expiresIn: '24h' }
      })
   ],
   controllers: [AuthController],
   providers: [AuthService],
   exports: [JwtModule]
})
export class AuthModule {}

import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'

import { Users } from './models/users.model'
import { SettingsService } from 'src/settings/settings.service'

@Injectable()
export class UsersService {
   constructor(
      @InjectModel(Users)
      private userRepository: typeof Users,
      private settingService: SettingsService
   ) {}
   async allUsers() {
      return this.userRepository.findAll()
   }
   async addUser(data) {
      const { promocode } = await this.settingService.getSettings()
      return this.userRepository.create({
         name: data.name,
         password: data.password,
         email: data.email,
         promocode: promocode
      })
   }
   async getUserByEmail(email) {
      return this.userRepository.findOne({
         where: { email: email }
      })
   }
   async defaulUser() {
      const allUsers = await this.allUsers()
      if(allUsers.length === 0) {
         await this.addUser({
            name: 'Денис', email: 'yozuul@yandex.ru', password: '123', role: 'admin'
         })
      }
   }
}

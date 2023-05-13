import { Injectable } from '@nestjs/common';
import { Users } from './models/users.model';
import { Op } from 'sequelize';
import { InjectModel } from '@nestjs/sequelize';
import {Settings} from 'src/products/models/settings.model';

@Injectable()
export class UsersService {
   constructor(
      @InjectModel(Users)
      private userRepository: typeof Users,
      @InjectModel(Settings)
      private settingsRepository: typeof Settings,
   ) {}
   async allUsers() {
      return this.userRepository.findAll()
   }
   async addUser(data) {
      const setting = await this.settingsRepository.findAll()
      const { promocode } = setting[0]
      return this.userRepository.create({
         email: data.email,
         promocode: promocode
      })
   }
   async findByLogin(userLogin) {
      return this.userRepository.findOne({
         where: { email: userLogin }
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

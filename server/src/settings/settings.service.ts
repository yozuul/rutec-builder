import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'

import { Settings } from './models/settings.model'

@Injectable()
export class SettingsService {
   constructor(
      @InjectModel(Settings)
      private settingsRepository: typeof Settings,
   ) {}

   async getSettings() {
      const settings = await this.settingsRepository.findOne({})
      console.log('SettingsService getSettings', settings)
      if(!settings) {
         await this.settingsRepository.create({
            promocode: 'ABCD-EFGH-IGKL-LMNO', email: 'ru-tec@yandex.ru', password: null,
            tgToken: null
         })
      }
      return settings
   }
   async updateSettings({ promocode, email, password }) {
      console.log('SettingsService updateSettings', promocode, email, password)
      const settings = await this.settingsRepository.findOne({})
      settings.promocode = promocode
      settings.email = email
      settings.password = password
      await settings.save()
      return true
   }
}

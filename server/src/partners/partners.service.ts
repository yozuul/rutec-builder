import { Injectable, OnModuleInit } from '@nestjs/common';
import { Op } from 'sequelize';
import { InjectModel } from '@nestjs/sequelize';
import { Partners, PartnersCity } from './models';
import {AuthService} from 'src/auth/auth.service';

@Injectable()
export class PartnersService implements OnModuleInit {
   constructor(
      @InjectModel(Partners)
      private readonly partnerRepo: typeof Partners,
      @InjectModel(PartnersCity)
      private readonly cityRepo: typeof PartnersCity,
      private authService: AuthService
   ) {}

   async getAllPartners() {
      return this.partnerRepo.findAll({
         include: [PartnersCity]
      })
   }
   async getPartnerById(id) {
      const data = await this.partnerRepo.findOne({
         where: { id: id },
         include: [PartnersCity]
      })
      return data
   }
   async addPartner(data) {
      const formatedData = await this.formatData(data)
      try {
         console.log('Добавлен новый представитель', data.companyName)
         const newPartner = await this.partnerRepo.create(formatedData)
         if(data.offer) {
            this.authService.sendNewPartnerNotify({
               ...data, ...{ url: `https://dvaresursa.ru/admin/partners/${newPartner.id}` }
            })
         }
      } catch (error) {
         console.log(error)
         return error
      }
   }
   async deletePartner(id) {
      const partner = await this.partnerRepo.findOne({
         where: { id: id }
      })
      const checkCity = await this.findCityById(partner.cityId)
      try {
         const deleteCity = await this.partnerRepo.destroy({
            where: { id: id }
         })
         if(checkCity.length === 1) {
            console.log('Город удалён')
            const deleteCity = await this.cityRepo.destroy({
               where: { id: checkCity[0].id }
            })
            console.log(deleteCity)
         }
         return deleteCity
      } catch (error) {
         console.log(error)
         return error
      }
   }
   async editPartner(id, data) {
      const formatedData = await this.formatData(data)
      console.log('Представитель', data.companyName, 'обновлён')
      await this.partnerRepo.update(formatedData, {
          where: { id: id }
      })
      return this.partnerRepo.findOne({
         where: { id: id },
         include: [PartnersCity]
      })
   }
   async findCityById(id) {
      return this.cityRepo.findAll({
         where: { id: id }
      })
   }
   async findCity(name) {
      return this.cityRepo.findOne({
         where: { name: name }
      })
   }
   async findByCity(name) {
      const city = await this.findCity(name)
      return this.partnerRepo.findAll({
         where: {
            [Op.and]:[
               { cityId: city.id },
               { status: 'Одобрен' }
            ]
         }
      })
   }
   async getCityForUser() {
      const filtred = []
      const allCity = await this.cityRepo.findAll({
         raw: true
      }) as any
      for (let city of allCity) {
         const checkParter = await this.partnerRepo.findOne({
            where: {
               [Op.and]: [
                  { status: 'Одобрен' },
                  { cityId: city.id },
               ]
            }
         })
         if(checkParter) {
            filtred.push(city)
         }
      }
      console.log(filtred)
      return filtred
   }

   async getAllCity() {
      const allCity = await this.cityRepo.findAll({
         raw: true
      }) as any
      allCity.unshift({ id: 0, name: 'Новый город' })
      return allCity
   }
   async addCity(cityName) {
      console.log('Добавлен новый город', cityName)
      return this.cityRepo.create({
         name: cityName
      })
   }
   async formatData(data) {
      // companySpec - массив чекбоксов - переводим в строку
      data.companySpec = JSON.stringify(data.companySpec)
      let existCity = null
      // Если поле newCityData заполнено, проверяем что этого города уже нет, и если нет, то добавляем
      if(data.newCityData) {
         existCity = await this.findCity(data.newCityData)
         if(!existCity) {
            existCity = await this.addCity(data.newCityData)
         }
      }
      // Если не заполнено, то ищем существующий город
      if(!data.newCityData) {
         existCity = await this.findCity(data.city)
      }
      // В объект с карточкой нам нужно добавить id города
      return { ...data, ...{ cityId: existCity.id } }
   }
   async onModuleInit() {
      // await this.addDefaultData()
   }
   async addDefaultData() {
      const isCityExist = await this.cityRepo.findAll()
      if(isCityExist.length === 0) {
         await this.cityRepo.bulkCreate(this.defaultCity)
      }
      const isPartnersExist = await this.partnerRepo.findAll()
      if(isPartnersExist.length === 0) {
         try {
            await this.partnerRepo.bulkCreate(this.defaultPartners)
         } catch (error) {
            console.log(error)
         }
      }
   }
   get defaultCity() {
      return [
         { name: 'Москва'}, { name: 'Санкт-Петербург'}, { name: 'Новосибирск'}, { name: 'Екатеринбург'}, { name: 'Казань'}, { name: 'Нижний Новгород'}, { name: 'Красноярск'}, { name: 'Челябинск'}, { name: 'Самара'},
      ]
   }
   get defaultPartners() {
      return [
         {
            companyName: 'Бамперок63',
            cityId: 9,
            adress: '6-я просека, 146',
            companyType: 'Автосервис',
            companySpec: '["Легковой", "Грузовой"]',
            experience: 5,
            email: 'bamperok63@gmail.com',
            phone: '+7‒927‒207‒28‒41',
            status: 'Одобрен',
         },
         {
            companyName: 'Навигатор',
            cityId: 1,
            adress: 'ул. Борковская, 65',
            companyType: 'Магазин',
            companySpec: '["Все виды транспорта"]',
            experience: 1,
            email: 'reklama@navigator-63.ru',
            phone: '+7 (495) 250‒54‒54',
            status: 'Отклонён',
         },
         {
            companyName: 'ООО "АВТОЛИДЕР"',
            cityId: 7,
            adress: 'ш Московское, д. 3, офис 408',
            companyType: 'Автосервис',
            companySpec: '["Коммерческий транспорт", "Специальная техника"]',
            experience: 2,
            email: 'diller@diller.ru',
            phone: '+7 (846) 211‒56‒90',
            status: 'Одобрен',
         },
         {
            companyName: 'Сто "Техсервис Ангар"',
            cityId: 1,
            adress: 'Промзона 1',
            companyType: 'Автосервис',
            companySpec: '["Легковой", "Грузовой"]',
            experience: 4,
            email: 'roga@gmail.com',
            phone: '+7-901-555-66-88',
            status: 'Одобрен',
         },
         {
            companyName: 'Автосервис №1',
            cityId: 5,
            adress: 'ул. Аминева, 18А',
            companyType: 'Автосервис',
            companySpec: '["Легковой", "Грузовой"]',
            experience: 2,
            email: 'pmc163@bk.ru',
            phone: '+7‒987‒955‒57‒05',
            status: 'Одобрен',
         },
         {
            companyName: 'Панорама',
            cityId: 3,
            adress: 'Красноглинское ш., 17',
            companyType: 'Предприятие',
            companySpec: '["Все виды транспорта"]',
            experience: 6,
            companyAreas: 'То тем то этим',
            companyEmployee: 'Иванов Иван',
            employeePosition: 'Технолог',
            email: 'info@panorama163.ru',
            phone: '+7 (812) 244‒94‒44',
            status: 'Отклонён',
         },
         {
            companyName: 'МАРС-АВТОЗАПЧАСТИ',
            cityId: 5,
            adress: 'ул. Промышленности, 269А',
            companyType: 'Магазин',
            companySpec: '["Все виды транспорта"]',
            experience: 3,
            email: 'mars754@yandex.ru',
            phone: '+7 (360) 203‒77‒03',
            status: 'Одобрен',
         },
         {
            companyName: 'PARTS63.RU',
            cityId: 9,
            adress: 'ул. Ново-Садовая, 265А',
            companyType: 'Магазин',
            companySpec: '["Легковой", "Грузовой"]',
            experience: 6,
            email: 'parts63@gmail.com',
            phone: '+7 (846) 243‒45‒93',
            status: 'Одобрен',
         },
         {
            companyName: 'Шамир-Русь',
            cityId: 2,
            adress: 'ул. Энтузиастов 1-Я, д. 3 этаж 2 пом. III ком. 1',
            companyType: 'Предприятие',
            companySpec: '["Все виды транспорта"]',
            experience: 7,
            companyAreas: 'То тем то другим',
            companyEmployee: 'Васильев Василий',
            employeePosition: 'Менеджер',
            email: 'mail@shamir.ru',
            phone: '+7 (812) 374‒07‒06',
            status: 'Одобрен',
         },
         {
            companyName: 'наЯпонца наКорейца',
            cityId: 7,
            adress: 'пр. Кирова, 314',
            companyType: 'Магазин',
            companySpec: '["Коммерческий транспорт", "Специальная техника"]',
            experience: 15,
            email: 'zakaz@nainomarku.ru',
            phone: '+7‒908‒367‒63‒63',
            status: 'Одобрен',
         },
         {
            companyName: 'Флагман',
            cityId: 6,
            adress: 'ул. Ближняя, д. 3 офис 5',
            companyType: 'Предприятие',
            companySpec: '["Все виды транспорта"]',
            companyAreas: 'Разным всяким',
            companyEmployee: 'Иванов Иван',
            employeePosition: 'Технолог',
            experience: 4,
            email: 'proflagman@mail.ru',
            phone: '+7‒927‒297‒90‒90',
            status: 'Отклонён',
         },
         {
            companyName: 'Запсчастье.рф',
            cityId: 1,
            adress: 'ул. Мечникова, 3',
            companyType: 'Магазин',
            companySpec: '["Все виды транспорта"]',
            experience: 9,
            email: 'vopros@zap-mag.ru',
            phone: '+7 (495) 212‒52‒83',
            status: 'Одобрен',
         },
         {
            companyName: 'Росско',
            cityId: 8,
            adress: 'ул. Кабельная, 5а, Офис 219',
            companyType: 'Магазин',
            companySpec: '["Коммерческий транспорт"]',
            experience: 11,
            email: 'firuz.sirozhidinov@rossko.ru',
            phone: '+7‒903‒301‒05‒95',
            status: 'Одобрен',
         },
         {
            companyName: 'Затура',
            cityId: 2,
            adress: 'ш. Зубчаниновское, 179-в',
            companyType: 'Предприятие',
            companySpec: '["Коммерческий транспорт", "Специальная техника"]',
            experience: 25,
            companyAreas: 'То тем то другим',
            companyEmployee: 'Васильев Василий',
            employeePosition: 'Менеджер',
            email: 'zatura@mail.ru',
            phone: '+7‒952‒524-48-96',
            status: 'Ожидает',
         },
      ]
   }
}

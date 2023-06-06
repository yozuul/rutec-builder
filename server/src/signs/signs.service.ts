import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { SignsGroups, Signs } from './model';
import {Op} from 'sequelize';

@Injectable()
export class SignsService implements OnModuleInit {
   constructor(
      @InjectModel(SignsGroups)
      private signsGroupRepo: typeof SignsGroups,
      @InjectModel(Signs)
      private signsRepo: typeof Signs,
   ) {}


   async getClearSign() {
   }

   async getAllSignsGroup() {
      const signsGroup = await this.signsGroupRepo.findAll({
         order: [
            ['orderPosition', 'ASC'],
         ],
         attributes: [
            'id',  'orderPosition', 'name', 'part', 'fieldsType', 'trouble', 'function'
         ],
         include: [
            {
               model: Signs,
               attributes: [
                  'id', 'name', 'placeholder', 'trouble', 'alert', 'blockRecomendation', 'special', 'numbersOnly', 'required'
               ],
            },
         ],
      })
      signsGroup.forEach(group => {
         group.signs.sort((a, b) => a.id - b.id);
      })
      return signsGroup
   }

   async addSignsGroup(signGroupData) {
      const group = await this.signsGroupRepo.create(signGroupData)
      const addedGroupId = group.id
      const signData = signGroupData.signs.map((sign) => {
         return {
            ...sign, signGroupId: addedGroupId
         }
      })
      await this.signsRepo.bulkCreate(signData)
   }

   async getSignGroupById(id) {
      return this.signsGroupRepo.findOne({
         where: { id: id },
         include: [Signs]
      })
   }

   async updateSignGroup(groupId, SignGroupData) {
      console.log('SignsService updateSignGroup', groupId, SignGroupData)
      const signGroup = await this.signsGroupRepo.update(SignGroupData, {
         where: { id: groupId }
      })
      for (let sign of SignGroupData.signs) {
         const existSign = await this.signsRepo.findOne({
            where: {
               [Op.and]: [
                  { signGroupId: groupId },
                  { name: sign.name },
               ]
            }
         })
         if(existSign) {
            await this.signsRepo.update(sign, {
               where: { id: existSign.id }
            })
         } else {
            console.log(sign)
            await this.signsRepo.create({
               ...sign, ...{ signGroupId: groupId }
            })
         }
      }
      return signGroup
   }

   async deleteSign(id) {
      console.log('SignsService deleteSign', id)
      await this.signsRepo.destroy({
         where: { signGroupId: id }
      })
      return this.signsGroupRepo.destroy({
         where: { id: id }
      })
   }

   async checkDefault() {
      const existSigns = await this.getAllSignsGroup()
      if(existSigns.length === 0) {
         for (let signGroupData of this.defaultGroupsData) {
            await this.addSignsGroup(signGroupData)
         }
      }
   }

   onModuleInit() {
      this.checkDefault()
   }

   get defaultGroupsData() {
      return [
         {
            name: 'Данные на автомобиль', part: 'car',
            fieldsType: 'input', orderPosition: 1,
            signs: [
               { name: 'Объем двигателя', placeholder: '1,7' },
               { name: 'Марка', placeholder: 'Лада' },
               { name: 'Модель', placeholder: 'Гранта' },
               { name: 'Год выпуска', placeholder: '2020', numbersOnly: true },
            ]
         },
         {
            name: 'Пробег', part: 'engine',
            fieldsType: 'radio', orderPosition: 2,
            signs: [
               { name: 'До 100 000 км' },
               { name: 'От 100 000 км',},
            ]
         },
         {
            name: 'Неполадки', part: 'other', function: 'cleaner',
            fieldsType: 'checkbox', orderPosition: 3,
            signs: [{
               name: 'Работа двигателя не сопровождается никаким из ниже перечисленных признаков:'
            }]
         },
         {
            name: 'Повышенный расход масла', part: 'engine',
            fieldsType: 'radio', trouble: true, orderPosition: 4,
            signs: [
               { name: 'Расход масла до 100 мл на 1000 км', trouble: true, special: true },
               { name: 'Расход масла до 500 мл на 1000 км', trouble: true, special: true },
               { name: 'Расход масла более 500 мл на 1000 км', trouble: true, special: true }
            ]
         },
         {
            name: 'Дымление', part: 'engine',
            fieldsType: 'checkbox', trouble: true, orderPosition: 5,
            signs: [
               { name: 'Cизый дым при запуске', trouble: true },
               { name: 'Дымление во время движения', trouble: true },
            ]
         },
         {
            name: 'Прочие признак',part: 'engine',
            fieldsType: 'checkbox', trouble: true, orderPosition: 6,
            signs: [
               { name: 'Повышенная вибрация', trouble: true },
               { name: 'Троение', trouble: true, alert: true },
               { name: 'Стучат гидрокомпенсаторы', trouble: true, special: true },
               { name: 'Пониженная компрессия', trouble: true, special: true },
               {
                  name: 'Посторонние звуки/стуки (не гидрокомпенсаторы)',
                  trouble: true, alert: true, blockRecomendation: true
               }
            ]
         },
         {
            name: 'Когда появились признаки неисправной работы', part: 'other',
            fieldsType: 'radio', trouble: true, function: 'block', orderPosition: 7,
            signs: [
               { name: 'После последнего ТО', special: true },
               { name: 'Давно' },]
         },
         {
            name: 'Условия эксплуатации и обслуживания', part: 'service',
            fieldsType: 'checkbox', orderPosition: 8,
            signs: [
               { name: 'Агрессивный стиль езды, резкое переключение скоростей' },
               { name: 'Редкое использование, раз-два раза в неделю' },
               { name: 'Ежедневное использование по городу на малые расстояния' },
               { name: 'Большая часть в пробках' },
               { name: 'Регулярное использование, большие пробеги' },
               { name: 'Работа в городском режиме, частые пробки' },
               { name: 'Автопутешествия в периоды каникул' },
               { name: 'Спокойный характер езды (до 3000 об/мин)' },
               { name: 'Участвую в соревнованиях (трофи, автокросс, ралли, дрифт и т.п.)' },
               { name: 'Сам провожу ТО' },
               {
                  name: 'Периодические или разовые долгие простои от 1 месяца и более',
                  alert: true
               }
            ]
         },
         {
            name: 'Цель применения', part: 'service',
            fieldsType: 'radio', orderPosition: 9,
            signs: [
               {  name: 'Продлить безремонтный срок эксплуатации (профилактика)' },
               {  name: 'Снизить расход топлива' },
               {  name: 'Повысить надежность' },
               {  name: 'Повысить компрессию, мощность' },
               {  name: 'Заменить ремонт' },
               {  name: 'Подготовить к дальней поездке, сезону повышенной эксплуатации' }
            ]
         },
         {
            name: 'Состояние АКПП', part: 'unit',
            fieldsType: 'radio', orderPosition: 10,
            signs: [
               { name: 'работает ровно и без шума' },
               { name: 'Рывки при переключении, шум, вибрация', trouble: true },
            ]
         },
         {
            name: 'Состояние МКПП', part: 'unit',
            fieldsType: 'radio', orderPosition: 11,
            signs: [
               { name: 'Работает ровно и без шума, переключение без усилий' },
               { name: 'Трудности при переключении, шум, гул', trouble: true },
            ]
         },
         {
            name: 'Состояние ГУР', part: 'unit',
            fieldsType: 'radio', orderPosition: 12,
            signs: [
               { name: 'Работает ровно и без шума' },
               {
                  name: 'Трудно вращать, в движении ухудшается управление («отдает» на неровностях), шум/вой при работе',
                  trouble: true
               },
            ]
         },
         {
            name: 'Состояние редукторов мостов', part: 'unit',
            fieldsType: 'radio', orderPosition: 13,
            signs: [
               { name: 'Работает ровно и без шума' },
               { name: 'Шум, гул в движении', trouble: true },
            ]
         },
         {
            name: 'Состояние раздаточной коробки', part: 'unit',
            fieldsType: 'radio', orderPosition: 14,
            signs: [
               { name: 'Работает ровно и без шума' },
               { name: 'Шум, повышенная вибрация, гул в движении', trouble: true },
            ]
         },
      ]
   }
}

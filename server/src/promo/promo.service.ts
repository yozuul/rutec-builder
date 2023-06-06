import { resolve } from 'node:path'
import { writeFile } from 'node:fs/promises'
import { randomUUID, randomInt } from 'node:crypto'
import { Injectable, OnModuleInit } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'

import { Promo } from './models/promo.model'

@Injectable()
export class PromoService implements OnModuleInit {
   constructor(
      @InjectModel(Promo)
      private readonly promoRepo: typeof Promo
   ) {}

   async getAllPromo() {
      return this.promoRepo.findAll()
   }
   async getPromoById(id) {
      console.log(id)
      return this.promoRepo.findOne({
         where: { id: id }
      })
   }
   async getRandom() {
      console.log('PromoService getRandom')
      const facts = await this.promoRepo.findAll({
         where: { type: 'Факт' }, raw: true
      })
      const videos = await this.promoRepo.findAll({
         where: { type: 'Видео' }, raw: true
      })
      const res = {
         fact: facts[randomInt(0, facts.length)],
         video: videos[randomInt(0, videos.length)],
      }
      res.fact.text = res.fact.text.replace(/\n/g, '<br>');
      return res
   }
   async addPromo(data, file) {
      let imageName = null
      if(data.type === 'Видео') {
         const imageId = randomUUID()
         const imageExt = file.mimetype.split('image/')[1]
         imageName = `${imageId}.${imageExt}`
         const imageBuffer = file.buffer
         await this.writeImage(imageName, imageBuffer)
      }
      return this.promoRepo.create({
         name: data.name,
         type: data.type,
         text: data.text,
         videoUrl: data.videoUrl,
         videoPreview: imageName,
      })
   }
   async deletePromo(id) {
      return this.promoRepo.destroy({
         where: { id: id }
      })
   }
   async updatePromo(id, data, file) {
      const existPromo = await this.promoRepo.findOne({
         where: { id: id }
      })
      let imageName = null
      if(data.type === 'Видео') {
         let imageId = randomUUID()
         if(existPromo.videoPreview) {
            imageId = existPromo.videoPreview
         }
         const imageExt = file.mimetype.split('image/')[1]
         imageName = `${imageId}.${imageExt}`
         const imageBuffer = file.buffer
         await this.writeImage(imageName, imageBuffer)
      }
      return this.promoRepo.update(
         {...data, ...{ videoPreview: imageName }},
         { where: { id: id }}
      )
   }

   async writeImage(imageName, imageBuffer) {
      let filePath = resolve(`/var/www/dvaresursa/html/video/${imageName}`)
      if(process.env.NODE_ENV === 'dev') {
         filePath = resolve(`../client/src/public/video/${imageName}`)
      }
      try {
         const promise = writeFile(filePath, imageBuffer);
         await promise;
       } catch (err) {
         console.error(err);
       }
   }

   async onModuleInit() {
      console.log(process.env.NODE_ENV)
      console.log(resolve(`/var/www/dvaresursa/html/video`))
      // await this.promoRepo.bulkCreate(this.mockPromo)
   }

   get mockPromo() {
      return [
         {
            type: 'Факт', name: 'Моторное масло изобрели через 13 лет после двигателя внутреннего сгорания.', text: 'А запатентовал его доктор - Джон Эллис. В 1873 году он изучал лечебные свойства сырой нефти, в ходе исследований он обнаружил, что эта нефть обладает отличными смазочными характеристиками. '
         },
         {
            type: 'Факт', name: 'Valvoline – первый бренд моторных масел в мире!', text: 'Сразу после своего эксперимента Джон Эллис зарегистрировал Valvoline (от Valve — «клапан» и Oil — «масло», то есть «клапанное масло»).\n Это была первая торговая марка моторного масла в молодой нефтяной промышленности.'
         },
         {
            type: 'Факт', name: 'Как производят и испытывают присадки для масел', text: 'Интересный факт, практически ни один производитель масла не выпускает присадки и добавки самостоятельно. Все дело в том, что мало только произвести присадки, основная задача производителя – провести испытания. '
         },
         {
            type: 'Факт', name: 'На растительном масле можно не только готовить, но и ездить', text: 'Не удивляйтесь, в первой половине двадцатого века машины действительно ездили на растительном масле. Правда, это были паровые машины, но масло работало прекрасно – настолько плотно приставало к агрегатам и узлам, что его невозможно было смыть ни водой, ни горячим паром.'
         },
         {
            type: 'Факт', name: 'Почти ни один производитель не выпускает присадки и добавки сам', text: 'Почему так? Недостаточно просто создать присадки – для них требуются длительные и довольно сложные испытания, и не только лабораторные, но и ресурсные и стендовые'
         },
         {
            type: 'Видео', name: '1 Как повысить ресурс двигателя KIA SPORTAGE', videoUrl: 'https://www.youtube.com/watch?v=qrIY_nLHLIk', videoPrevie: 'image_1.jpg'
         },
         {
            type: 'Видео', name: '2 Как повысить ресурс двигателя KIA SPORTAGE', videoUrl: 'https://www.youtube.com/watch?v=qrIY_nLHLIk', videoPrevie: 'image_2.jpg'
         },
         {
            type: 'Видео', name: '3 Как повысить ресурс двигателя KIA SPORTAGE', videoUrl: 'https://www.youtube.com/watch?v=qrIY_nLHLIk', videoPrevie: 'image_3.jpg'
         },
         {
            type: 'Видео', name: '4 Как повысить ресурс двигателя KIA SPORTAGE', videoUrl: 'https://www.youtube.com/watch?v=qrIY_nLHLIk', videoPrevie: 'image_4.jpg'
         },
         {
            type: 'Видео', name: '4 Как повысить ресурс двигателя KIA SPORTAGE', videoUrl: 'https://www.youtube.com/watch?v=qrIY_nLHLIk', videoPrevie: 'image_4.jpg'
         },
         {
            type: 'Видео', name: '4 Как повысить ресурс двигателя KIA SPORTAGE', videoUrl: 'https://www.youtube.com/watch?v=qrIY_nLHLIk', videoPrevie: 'image_4.jpg'
         },
      ]
   }
}

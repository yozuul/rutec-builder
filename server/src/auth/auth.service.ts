import { resolve } from 'path'
import {
   Injectable, UnauthorizedException, HttpException, HttpStatus
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs'
import { randomUUID } from 'crypto'
import { MailerService } from '@nestjs-modules/mailer'

import { UsersService } from '../users/users.service'
import { CreateUserDto } from '../users/models/dto/create-user.dto'
import { SettingsService } from 'src/settings/settings.service'

@Injectable()
export class AuthService {
   constructor(
      private usersService: UsersService,
      private jwtService: JwtService,
      private settingsService: SettingsService,
      private readonly mailerService: MailerService
   ) {}

   async login(userDto: CreateUserDto) {
      const user = await this.validateUser(userDto)
      console.log('AuthService Login User', user)
      return this.generateToken(user)
   }

   private async validateUser(userDto: CreateUserDto) {
      const user = await this.usersService.getUserByEmail(userDto.email)
      if(!user) {
         throw new UnauthorizedException({ message: 'Неверно указан email или пароль' })
      }
      const passwordEquals = await bcrypt.compare(userDto.password, user.password)
      if(user && passwordEquals) return user
      throw new UnauthorizedException({ message: 'Неверно указан email или пароль' })
   }

   private async generateToken(user) {
      return {
         token: this.jwtService.sign({
            email: user.email, id: user.id, roles: user.roles
         })
      }
   }

   async sendPromo({ email }) {
      console.log('AuthService SendPromo')
      if(!email) {
         throw new HttpException('Email не указан', HttpStatus.BAD_REQUEST)
      }
      const isNewUser = await this.usersService.getUserByEmail(email)
      if(!isNewUser) {
         const hashPassword = await bcrypt.hash(randomUUID(), 5)
         await this.usersService.addUser({
            email: email, password: hashPassword
         })
      }
      const { promocode } = await this.settingsService.getSettings()
      this.sendMail(email, promocode)
      return true
   }


   async sendPartnersFile(data) {
      console.log(data.email)
      const { companyType } = data
      let filePath = ''
      let messageText = '<p>Доброго дня.</p>'
      messageText += '<p>В приложении к данному письму вы найдете условия сотрудничества с ООО "РУТЕК" и контактные данные сотрудника, ответственного за работу по вашему направлению, а так же актуальные цены на нашу продукцию.</p>'
      messageText += '<p>С уважением, Лисенков Д.В., Директор ООО "РУТЕК".</p>'
      if(companyType === 'Магазин') {
         filePath = resolve('./data/KP_magaziny.pdf')
      }
      if(companyType === 'Автосервис') {
         filePath = resolve('./data/KP_servisy.pdf')
      }
      this.mailerService.sendMail({
         to: data.email,
         // to: 'ru-tec@yandex.ru',
         from: 'ru-tec@yandex.ru',
         subject: `Коммерческое предложение от "РУТЕК"`,
         html: messageText,
         attachments: [
            {
               filename: 'Коммерческое предложение.pdf',
               path: filePath
           },
         ]
       })
       .then((success) => {
         console.log(success)
       })
       .catch((err) => {
         console.log(err)
       })
   }

   async sendNewPartnerNotify(data) {
      this.mailerService.sendMail({
         // to: 'den@pi-art.ru',
         to: 'ru-tec@yandex.ru',
         from: 'ru-tec@yandex.ru',
         subject: `Заявка от партнёра ${data.companyType}`,
         html: `Получена новая заявка\n<a href="${data.url}">${data.url}</a>\n${data.companyName}`
       })
       .then((success) => {
         console.log(success)
       })
       .catch((err) => {
         console.log(err)
       })
   }

   public sendMail(email, promocode): void {
      this.mailerService.sendMail({
         to: email,
         from: 'ru-tec@yandex.ru',
         subject: '✔ Промокод на скидку от RUTEC',
         text: '✔ Вы запросили промокод на скидку RUTEC',
         html: `Ваш промокод на скидку 15% при покупке в интернет-магазине <a href="https://rutec-shop.ru/">https://rutec-shop.ru/</a> <b>${promocode}</b>`
      })
      .then((success) => {
      console.log(success)
      })
      .catch((err) => {
      console.log(err)
      })
    }

//     public example2(): void {
//       this
//         .mailerService
//         .sendMail({
//           to: 'test@nestjs.com',
//           from: 'noreply@nestjs.com',
//           subject: 'Testing Nest Mailermodule with template ✔',
//           template: 'index', // The `.pug` or `.hbs` extension is appended automatically.
//           context: {  // Data to be sent to template engine.
//             code: 'cf1a3f828287',
//             username: 'john doe',
//           },
//         })
//          .then((success) => {
//           console.log(success)
//         })
//         .catch((err) => {
//           console.log(err)
//         });
//     }
//
//     public example3(): void {
//       this
//         .mailerService
//         .sendMail({
//           to: 'test@nestjs.com',
//           from: 'noreply@nestjs.com',
//           subject: 'Testing Nest Mailermodule with template ✔',
//           template: '/index', // The `.pug` or `.hbs` extension is appended automatically.
//           context: {  // Data to be sent to template engine.
//             code: 'cf1a3f828287',
//             username: 'john doe',
//           },
//         })
//         .then((success) => {
//           console.log(success)
//         })
//         .catch((err) => {
//           console.log(err)
//         });
//     }
}
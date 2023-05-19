import { resolve } from 'path'
export default defineNuxtConfig({
   // ssr: false,
   routeRules: {
     '/': { static: true },
     '/admin/**': { ssr: false },
   },
   srcDir: './src',
   alias: {
      styles: resolve('./src/assets/styles/'),
      utils:  resolve('./src/utils'),
      data:   resolve('./src/assets/data')
   },
   modules: [
      '@pinia/nuxt', '@element-plus/nuxt'
   ],
   pinia: {
      autoImports: [
         'defineStore',
         ['defineStore', 'definePiniaStore'],
      ],
   },
   css: [
      '~/assets/styles/reset.css'
   ],
   app: {
      head: {
         title: 'Подборка добавок РУТЕК',
         meta: [
            {
               name: 'viewport',
               content: 'width=device-width, initial-scale=1, maximum-scale=1'
            },
            {
               hid: 'description',
               name: 'description',
               content: 'Подборка добавок РУТЕК',
            },
         ],
         link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
         ],
      }
   },
})

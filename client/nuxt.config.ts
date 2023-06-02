import { resolve } from 'path'
export default defineNuxtConfig({
   // ssr: false,
   routeRules: {
   //   '/': { static: true },
     '/admin/**': { ssr: false },
   },
   srcDir: './src',
   alias: {
      styles: resolve(__dirname, './src/assets/styles/'),
      utils:  resolve(__dirname, './src/utils'),
      data:   resolve(__dirname, './src/assets/data')
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
      '~/assets/styles/reset.css',
      '~/assets/styles/main.scss',
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

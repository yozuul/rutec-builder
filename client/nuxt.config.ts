export default defineNuxtConfig({
  ssr: false,
  // typescript: { shim: false },
  modules: [
     '@pinia/nuxt', '@element-plus/nuxt'
   ],
   buildModules: [
      [ '@pinia/nuxt',
      { autoImports: [
         'defineStore',  ['defineStore', 'definePiniaStore'],
      ]}],
   ],
   css: [
      '~/assets/styles/reset.css'
   ],
   app: {
      head: {
         title: 'Подборка добавок РУТЕК',
         meta: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
               hid: 'description',
               name: 'description',
               content: 'ElementPlus + Nuxt3',
            },
         ],
         link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      }
   },
})

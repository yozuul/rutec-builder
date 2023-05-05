export default defineNuxtRouteMiddleware(async (to, from) => {
   console.log('ddd')
   const useToken = useCookie('token')
//    const useToggler = useToggleMenuStore()
//    const useUser  = useUserStore()
//    const useAuth  = useAuthStore()
//
//    useToggler.hideDashboardMenu()

   if(!useToken.value) {
      // useAuth.logoutUser()
      // return navigateTo('/')
   }

   // const useShops = useShopsStore()
   // if(to.name !== 'shops-first-step-one' && !useShops.addNewShop.name) {
      // return navigateTo('/shops/first-step-one')
   // }
})
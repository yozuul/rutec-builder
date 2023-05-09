import nuxtStorage from 'nuxt-storage';
export default defineNuxtRouteMiddleware(async (to, from) => {
   const router = useRouter()
   console.log('auth middleware')
   const useToken = useCookie('token')
   const isLogin = nuxtStorage.localStorage.getData('login');
   // nuxtStorage.localStorage.removeItem('login');
   console.log(isLogin)
   if(!isLogin) {
      router.push('/admin/login')
   } else {
      console.log('logon')
      // router.push('/admin/constructor')
   }
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
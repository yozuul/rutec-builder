import { validateUser } from '../utils/fetch-data'
export default defineNuxtRouteMiddleware(async (to, from) => {
   const router = useRouter()
   const useToken = useCookie('accessToken')
   if(!useToken.value) {
      router.push({ path: "/" })
   }
   try {
      const validator = await validateUser(useToken.value)
      console.log('validator', validator)
      if(!validator) {
         router.push({ path: "/" })
      }
   } catch (error) {
      console.log(error)
   }
})
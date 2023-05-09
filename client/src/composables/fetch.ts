import { acceptHMRUpdate } from 'pinia'

export const useFetchData = defineStore('fetchData', () => {
   const baseUrl = {
      dev: 'http://localhost:4444', prod: 'http://localhost:7000'
   }
//    const useToken = useCookie('token')
//
//    async function get(endpoint: string, params?: object) {
//       return $fetch(endpoint, {
//          baseURL: baseUrl.dev,
//          method: 'GET',
//          params: params,
//          headers: {
//             ...useRequestHeaders(['cookie']),
//             authentication: `Bearer ${useToken.value}`
//          },
//          mode: 'cors',
//          credentials: 'include'
//       })
//    }
   async function post(endpoint: string, data: any) {
      return $fetch(endpoint, {
         baseURL: baseUrl.dev,
         method: 'POST',
         body: data,
         headers: {
            ...useRequestHeaders(['cookie']),
            secret: 'asdasdsad'
         },
         mode: 'cors',
         credentials: 'include'
      })
   }

   // function auth(endpoint, data) {
   //    console.log(useRequestHeaders(['cookie']))
   //    return $fetch(endpoint, {
   //       baseURL: baseUrl.dev,
   //       method: 'POST',
   //       body: data,
   //       headers: useRequestHeaders(['cookie']),
   //       mode: 'cors',
   //       credentials: 'include'
   //    })
   // }

   return post
   // return {
   //    get, post, auth
   // }
})
if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useFetchData, import.meta.hot))
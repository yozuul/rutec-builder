import { apiConfig } from './api.config'

const baseUrl = `${apiConfig.baseURL}/partners`

export async function getAllPartners () {
   return $fetch(`/`, {
      baseURL: baseUrl,
      method: 'GET',
      headers: apiConfig.authHeader
   })
}
export async function getPartner(id: string) {
   return $fetch(`/id/${id}`, {
      baseURL: baseUrl,
      method: 'GET',
      headers: apiConfig.authHeader
   })
}
export async function addPartner(data: any) {
   return $fetch(`/add`, {
      baseURL: baseUrl,
      method: 'POST',
      headers: apiConfig.authHeader,
      body: data,
   })
}
export async function deletePartner(id: string) {
   return $fetch(`/delete/${id}`, {
      baseURL: baseUrl,
      method: 'DELETE',
      headers: apiConfig.authHeader,
   })
}
export async function updatePartner(id: string, data: any) {
   return $fetch(`/update/${id}`, {
      baseURL: baseUrl,
      method: 'PUT',
      headers: apiConfig.authHeader,
      body: data,
   })
}
export async function getAllCity() {
   console.log(baseUrl)
   try {
      const res = await $fetch(`/city`, {
         baseURL: baseUrl,
         method: 'GET',
         headers: apiConfig.authHeader
      })
      console.log('res', res)
      return res
   } catch (error) {
      console.log(error)
   }
}
export async function addCity(data: any) {
   return $fetch(`/city/add`, {
      baseURL: baseUrl,
      method: 'POST',
      headers: apiConfig.authHeader,
      body: data
   })
}


import { apiConfig } from './api.config'

const baseUrl = `${apiConfig.baseURL}/promo`

export async function getAllPromo () {
   return $fetch(`/`, {
      baseURL: baseUrl,
      method: 'GET',
      headers: apiConfig.authHeader
   })
}
export async function getPromo(id: string) {
   return $fetch(`/id/${id}`, {
      baseURL: baseUrl,
      method: 'GET',
      headers: apiConfig.authHeader
   })
}
export async function getRandomPromo() {
   return $fetch(`/random`, {
      baseURL: baseUrl,
      method: 'GET',
   })
}
export async function addPromo(data: any) {
   return $fetch(`/add`, {
      baseURL: baseUrl,
      method: 'POST',
      headers: apiConfig.authHeader,
      body: data,
   })
}
export async function deletePromo(id: string) {
   return $fetch(`/delete/${id}`, {
      baseURL: baseUrl,
      method: 'DELETE',
      headers: apiConfig.authHeader,
   })
}
export async function updatePromo(id: string, data: any) {
   return $fetch(`/update/${id}`, {
      baseURL: baseUrl,
      method: 'PUT',
      headers: apiConfig.authHeader,
      body: data,
   })
}


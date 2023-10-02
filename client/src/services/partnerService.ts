import { apiConfig } from './api.config'

const baseUrl = `${apiConfig.baseURL}/partners`

export async function getAllPartners () {
   return $fetch(`/`, {
      baseURL: baseUrl,
      method: 'GET',
      headers: apiConfig.authHeader
   })
}
export async function getAllSignsGroup () {
   return $fetch(`/signs/all`, {
      baseURL: `${apiConfig.baseURL}`,
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
export async function deleteUser(id: string) {
   return $fetch(`/user/delete/${id}`, {
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
export async function getCityForUser() {
   try {
      return $fetch(`/getCityForUser`, {
         baseURL: baseUrl,
         method: 'GET',
      })
   } catch (error) {
      console.log(error)
   }
}
export async function getAllCountry() {
   try {
      return $fetch(`/country`, {
         baseURL: baseUrl,
         method: 'GET',
         headers: apiConfig.authHeader
      })
   } catch (error) {
      console.log(error)
   }
}
export async function findCityByCountry(countryId: number) {
   try {
      return $fetch(`/city/country/${countryId}`, {
         baseURL: baseUrl,
         method: 'GET',
         headers: apiConfig.authHeader
      })
   } catch (error) {
      console.log(error)
   }
}
export async function findPartnerByType(type: any) {
   try {
      return $fetch(`/partner/type/${type}`, {
         baseURL: baseUrl,
         method: 'GET',
         headers: apiConfig.authHeader
      })
   } catch (error) {
      console.log(error)
   }
}
export async function getAllCity() {
   try {
      return $fetch(`/city`, {
         baseURL: baseUrl,
         method: 'GET',
         headers: apiConfig.authHeader
      })
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
export async function findByCityByData(data: any) {
   return $fetch(`/findByCity/data`, {
      baseURL: baseUrl,
      method: 'POST',
      headers: apiConfig.authHeader,
      body: data
   })
}
export async function findByCity(name: any) {
   return $fetch(`/findByCity/${name}`, {
      baseURL: baseUrl,
      method: 'GET',
      headers: apiConfig.authHeader,
   })
}


const secrePass = { secret: 'sadfs8787sdfsjkksd' }
const dev = true
const apiURL = {
   dev: 'http://localhost:4444/', prod: '/api/'
}
const baseURL = dev ? apiURL.dev : apiURL.prod
export const addProduct = async (data: any, token: any) => {
   return $fetch('/products/add', {
      baseURL: baseURL,
      method: 'POST',
      body: data,
      headers: authHeaders(token)
   })
}
export const getAllProducts = async (token: any) => {
   return $fetch('/products/all', {
      baseURL: baseURL,
      method: 'GET',
      headers: authHeaders(token)
   })
}
export const getProductById = async (id: any, token: any) => {
   return $fetch(`/products/byId/${id}`, {
      baseURL: baseURL,
      method: 'GET',
      headers: authHeaders(token)
   })
}
export const deleteProduct = async (id: any, token: any) => {
   return $fetch(`/products/delete/${id}`, {
      baseURL: baseURL,
      method: 'DELETE',
      headers: authHeaders(token)
   })
}
export const updateProduct = async (id: any, data: any, token: any) => {
   return $fetch(`/products/update/${id}`, {
      baseURL: baseURL,
      method: 'PUT',
      body: data,
      headers: authHeaders(token)
   })
}
export const validateUser = async (token: string | null | undefined) => {
   let isLogin = null
   try {
      const response = await $fetch(`/auth/validateUser`, {
         baseURL: baseURL,
         method: 'POST',
         headers: {
            authorization : 'Bearer ' + token
         }
      })
      isLogin = response
   } catch (error) {
      console.log(error, 'ОШИБКА')
   }
   return isLogin
}
export const loginDasboard = async (data: any) => {
   let isLogin = null
   try {
      const response = await $fetch(`/auth/login`, {
         baseURL: baseURL,
         method: 'POST',
         body: data,
         headers: secrePass
      })
      isLogin = response
   } catch (error) {
      console.log('Ошибка авторизации')
   }
   return isLogin
}
export const sendPromo = async (data: any) => {
   let promo = null
   try {
      promo = await $fetch(`/auth/sendPromo`, {
         baseURL: baseURL,
         method: 'POST',
         body: data,
      })
   } catch (error) {
      console.log('Ошибка отправки промокода')
   }
   return promo
}
export const getAllUsers = async (token: string | null | undefined) => {
   const data = { users: null, error: '' }
   try {
      data.users = await $fetch(`/users/all`, {
         baseURL: baseURL,
         method: 'GET',
         headers: authHeaders(token)
      })
   } catch (error) {
      data.error = 'Не удалось полученить список пользователей'
      console.log(data.error)
   }
   return data
}
export const getSettings = async (token: string | null | undefined) => {
   return $fetch(`/settings/get`, {
      baseURL: baseURL,
      method: 'GET',
      headers: authHeaders(token)
   })
}
export const updateSettings = async (data: any, token: string | null | undefined) => {
   return $fetch(`/settings/update`, {
      baseURL: baseURL,
      method: 'PUT',
      body: data,
      headers: authHeaders(token)
   })
}

async function fetchData(method: any, data: any, token: any) {
   const response = { data: null, error: false }
   try {
      response.data = await $fetch(method.path, {
         baseURL: baseURL,
         method: method.type,
         headers: authHeaders(token),
         body: data ? data : ''
      })
   } catch (error) {
      data.error = true
      console.log(data.error)
   }
   return data
}

function authHeaders(token: string | null | undefined) {
   if(token) {
      return { authorization : 'Bearer ' + token }
   } else {
      return { authorization : 'NoToken' }
   }
}
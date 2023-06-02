import { acceptHMRUpdate, defineStore } from 'pinia'

export const useFetchData = defineStore('useFetchData', () => {
   const apiURL = {
      dev: 'http://localhost:4444/', prod: '/api/'
   }
   const baseURL = process.env.NODE_ENV === 'development' ? apiURL.dev : apiURL.prod
   const useToken = useCookie('accessToken')

   // ПРИЗНАКИ
   const getAllSignGroup = async () => {
      return $fetch('/signs/all', {
         baseURL: baseURL,
         method: 'GET',
      })
   }
   const addSignGroup = async (data: any) => {
      return $fetch('/signs/add', {
         baseURL: baseURL,
         method: 'POST',
         body: data,
         headers: authHeaders()
      })
   }
   const deleteSignGroup = async (id: any) => {
      return $fetch(`/signs/delete/${id}`, {
         baseURL: baseURL,
         method: 'DELETE',
         headers: authHeaders()
      })
   }
   const getSignGroupById = async (id: any) => {
      return $fetch(`/signs/byId/${id}`, {
         baseURL: baseURL,
         method: 'GET',
         headers: authHeaders()
      })
   }
   const updateSignGroup = async (id: any, data: any) => {
      return $fetch(`/signs/update/${id}`, {
         baseURL: baseURL,
         method: 'PUT',
         body: data,
         headers: authHeaders()
      })
   }
   // ТОВАРЫ
   const getAllProducts = async () => {
      return $fetch('/products/all', {
         baseURL: baseURL,
         method: 'GET',
      })
   }
   const addProduct = async (data: any) => {
      return $fetch('/products/add', {
         baseURL: baseURL,
         method: 'POST',
         body: data,
         headers: authHeaders()
      })
   }
   const getProductById = async (id: any) => {
      return $fetch(`/products/byId/${id}`, {
         baseURL: baseURL,
         method: 'GET',
         headers: authHeaders()
      })
   }
   const deleteProduct = async (id: any) => {
      return $fetch(`/products/delete/${id}`, {
         baseURL: baseURL,
         method: 'DELETE',
         headers: authHeaders()
      })
   }
   const updateProduct = async (id: any, data: any) => {
      return $fetch(`/products/update/${id}`, {
         baseURL: baseURL,
         method: 'PUT',
         body: data,
         headers: authHeaders()
      })
   }
   // ПРОЧЕЕ
   const validateUser = async () => {
      let isLogin = null
      try {
         const response = await $fetch(`/auth/validateUser`, {
            baseURL: baseURL,
            method: 'POST',
            headers: authHeaders()
         })
         isLogin = response
      } catch (error) {
         console.log(error, 'ОШИБКА')
      }
      return isLogin
   }
   const loginDasboard = async (data: any) => {
      let isLogin = null
      try {
         const response = await $fetch(`/auth/login`, {
            baseURL: baseURL,
            method: 'POST',
            body: data,
         })
         isLogin = response
      } catch (error) {
         console.log('Ошибка авторизации')
      }
      return isLogin
   }
   const sendPromo = async (data: any) => {
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
   const getAllUsers = async () => {
      const data = { users: null, error: '' }
      try {
         data.users = await $fetch(`/users/all`, {
            baseURL: baseURL,
            method: 'GET',
            headers: authHeaders()
         })
      } catch (error) {
         data.error = 'Не удалось полученить список пользователей'
         console.log(data.error)
      }
      return data
   }
   const getSettings = async () => {
      return $fetch(`/settings/get`, {
         baseURL: baseURL,
         method: 'GET',
         headers: authHeaders()
      })
   }
   const updateSettings = async (data: any) => {
      return $fetch(`/settings/update`, {
         baseURL: baseURL,
         method: 'PUT',
         body: data,
         headers: authHeaders()
      })
   }

   function authHeaders() {
      if(useToken.value) {
         return { authorization : 'Bearer ' + useToken.value }
      } else {
         return { authorization : 'NoToken' }
      }
   }
   return {
      loginDasboard,
      getAllProducts, getProductById, addProduct, updateProduct, deleteProduct,
      getAllSignGroup, getSignGroupById, addSignGroup, updateSignGroup, deleteSignGroup,
      validateUser, getAllUsers, getSettings, updateSettings,
      sendPromo,
   }
})
if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useFetchData, import.meta.hot))
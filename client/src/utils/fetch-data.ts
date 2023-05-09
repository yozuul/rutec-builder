const secrePass = { secret: 'sadfs8787sdfsjkksd' }
export const addProduct = async (data: any) => {
   return $fetch('/products/add', {
      baseURL: 'http://localhost:4444/',
      method: 'POST',
      body: data,
      headers: secrePass
   })
}
export const getAllProducts = async () => {
   return $fetch('/products/all', {
      baseURL: 'http://localhost:4444/',
      method: 'GET',
      headers: secrePass
   })
}
export const getProductById = async (id: any) => {
   return $fetch(`/products/byId/${id}`, {
      baseURL: 'http://localhost:4444/',
      method: 'GET',
      headers: secrePass
   })
}
export const deleteProduct = async (id: any) => {
   return $fetch(`/products/delete/${id}`, {
      baseURL: 'http://localhost:4444/',
      method: 'DELETE',
      headers: secrePass
   })
}
export const updateProduct = async (id: any, data: any) => {
   return $fetch(`/products/update/${id}`, {
      baseURL: 'http://localhost:4444/',
      method: 'PUT',
      body: data,
      headers: secrePass
   })
}
export const getSettings = async () => {
   return $fetch(`/products/settings`, {
      baseURL: 'http://localhost:4444/',
      method: 'GET',
      headers: secrePass
   })
}
export const updateSettings = async (data: any) => {
   return $fetch(`/products/settings/update`, {
      baseURL: 'http://localhost:4444/',
      method: 'PUT',
      body: data,
      headers: secrePass
   })
}
export const loginDasboard = async (data: any) => {
   return $fetch(`/users/login`, {
      baseURL: 'http://localhost:4444/',
      method: 'POST',
      body: data,
      headers: secrePass
   })
}
export const addUsers = async (data: any) => {
   return $fetch(`/users/addNew`, {
      baseURL: 'http://localhost:4444/',
      method: 'POST',
      body: data,
      headers: secrePass
   })
}
export const getAllUsers = async () => {
   return $fetch(`/users/all`, {
      baseURL: 'http://localhost:4444/',
      method: 'GET',
      headers: secrePass
   })
}
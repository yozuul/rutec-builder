const apiURL = {
  dev: 'http://localhost:4444', prod: '/api'
}
export const apiConfig = {
   get baseURL() {
      return process.env.NODE_ENV === 'development' ? apiURL.dev : apiURL.prod;
   },
   get userToken() {
      const token = useCookie('accessToken')
      return token.value
   },
   get authHeader() {
      if(this.userToken) {
         return { authorization : 'Bearer ' + this.userToken }
      } else {
         return { authorization : 'NoToken' }
      }
   }
}
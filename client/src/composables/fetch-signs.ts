const apiURL = {
   dev: 'http://localhost:4444/', prod: '/api/'
}
const baseURL = process.env.NODE_ENV === 'development' ? apiURL.dev : apiURL.prod

export const useFetchSigns = () => {
   const checkClearSelector = () => {
      return $fetch('/signs/cleaner', {
         baseURL: baseURL,
         method: 'GET'
      })
   }

   return { checkClearSelector }
}
import { products } from '../assets/data'
import { addProduct } from './fetch-data'

export const addStartedProducts = async () => {
   for (let item of products) {
      await addProduct({
         name: item.name, url: item.url,
         recText: item.recText || null,
         fields: item.fields ? str(item.fields) : null,
         orFields: item.orFields ? str(item.orFields) : null,
         notFields: item.notFields ? str(item.notFields) : null,
         notOrFields: item.notOrFields ? str(item.notOrFields) : null,
         prioriteFields: item.prioriteFields ? str(item.prioriteFields) : null,
         prioriteOrFields: item.prioriteOrFields ? str(item.prioriteOrFields) : null,
         exception: item.exception || null,
      })
   }
}
function str(el: any) { return JSON.stringify(el) }
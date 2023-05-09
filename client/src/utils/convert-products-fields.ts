export const convertProductsFields = (product: any) => {
   const fieldsToParse = [
      'fields', 'orFields', 'notFields', 'notOrFields', 'prioriteFields', 'prioriteOrFields'
   ]
   for (let field of fieldsToParse) {
      if(product[field]) {
         product[field] = JSON.parse(product[field])
      }
   }
   return product
}
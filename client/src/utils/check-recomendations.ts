import { getFieldsId } from './field-id-sorter'
import { getAllProducts } from './fetch-data'
import { convertProductsFields } from './convert-products-fields'

export const handleCheckRecomendation = async (inputs: any, selectors: any) => {
   const recomendedProducts = []
   const existProducts = await getAllProducts()
   const fieldsData = getFieldsId(inputs, selectors)
  //  console.log(selectors)
  //  console.log('fieldsData', fieldsData)
  //  console.log('\n-----\n')
   for (let existProduct of existProducts as Array<[]>) {
      const parsedProductData = convertProductsFields(existProduct)
      const checked = checkProduct(parsedProductData, fieldsData)
      // console.log(checked, existProduct)
      if(checked) recomendedProducts.push(existProduct)

   }
   return {
    recomended: recomendedProducts,
    fields: fieldsData
  }
   function checkProduct(product: any, fieldsData: any) {
      // Проверка обязательных полей
      // if(product.id !== 1) return
      if (product.fields && product.fields.length > 0) {
        for (let field of product.fields) {
          // Проверка, что все обязательные поля из товара присутствуют в анкете
          const fieldData = fieldsData.find(data => data.fieldId === field.id);
          if (!fieldData) {
            return false;
          }
          // Проверка, что значения полей совпадают
          if (field.value && fieldData.fieldValue) {
            // console.log('field.value', field.value)
            const [min, max] = field.value.split('<x<');
            const floatFieldVal = parseFloat(fieldData.fieldValue)
            if (!(parseFloat(min) <= floatFieldVal) || !(floatFieldVal <= parseFloat(max))) {
              return false;
            }
          }
        }
      }
      // Проверка поля "хотябы одно из"
      if (product.orFields && product.orFields.length > 0) {
        if (!product.orFields.some(id => fieldsData.some(data => data.fieldId === id))) {
          return false;
        }
      }
      // Проверка поля "ни одного из"
      if (product.notFields && product.notFields.length > 0) {
        if (product.notFields.some(id => fieldsData.some(data => data.fieldId === id))) {
          return false;
        }
      }
      // Проверка поля "ни одного из группы"
      if (product.notOrFields && product.notOrFields.length > 0) {
        if (product.notOrFields.some(id => fieldsData.some(data => data.fieldId === id))) {
          return false;
        }
      }
      // Проверка поля "все из приоритетных"
      if (product.prioriteFields && product.prioriteFields.length > 0) {
        if (!product.prioriteFields.every(id => fieldsData.some(data => data.fieldId === id))) {
          return false;
        }
      }
      // Проверка поля "одно из приоритетных"
      if (product.prioriteOrFields && product.prioriteOrFields.length > 0) {
        if (!product.prioriteOrFields.some(id => fieldsData.some(data => data.fieldId === id))) {
          return false;
        }
      }
      // Если все проверки пройдены успешно, товар подходит
      return true;
    }
}

import { getFieldsId } from './field-id-sorter'

export const collectConstructor = (signs: any, inputs: any, selectors: any, conditions: any) => {
   const ids = getFieldsId(signs, inputs, selectors)
   const productFIeld = {
      fields: [], orFields: []
   }
   for (let field of ids) {
      const fieldId = field.fieldId
      const fieldCondition = conditions[fieldId]
      console.log(field)
      // if(fieldCondition === 'И') {
      //    productFIeld.fields.push({
      //       id: fieldId
      //    })
      // }
      // console.log(fieldCondition)
   }
}
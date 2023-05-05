import { getFieldsId } from './field-id-sorter'

export const handleCheckRecomendation = (signs: any, data: any) => {
   // console.log(data.selectors)
   const recomendedProducts = []
   // Получаем заполненные поля inputs (с каким-то value) и selectors (checkbox/radio)
   const { inputs, selectors } = getTestData()
   // Получаем список товаров и правил по которым они рекомендуются
   const existProducts = getProductsData()
   // Получаем ID заполненных полей
   const fieldsIds = getFieldsId(signs, inputs, selectors)
   // console.log(fieldsIds)
   // Перебираем имеющиеся в БД товары
   for (let product of existProducts) {
      // Проверяем в каких товарах пристуствуют обязательные поля. Которые И/И
      const isRequiredFieldOk = checkFields(product.fields)
      if(isRequiredFieldOk) {
         const isOrFieldOk = checkOrFields(product.orFields)
         if(isOrFieldOk) recomendedProducts.push(product)
      }
   }
   // Проверяем поля ИЛИ/ИЛИ
   function checkOrFields(productFields: any) {
       // Перебираем обязательные поля товаров
      for (let field of productFields) {
         // Если какое-либо поле есть в выбранном списке, ставим отметку true
         const isExist = fieldsIds.some(userField => userField.fieldId === field)
         if(isExist) return true
      }
      return false
   }
   // Проверяем обязательные поля
   function checkFields(productFields: any) {
      let ok = true
      // Если товар не пройдёт проверку по наличию поля, или значения, то возвратим false
      let min; let max;
      // Перебираем обязательные поля товаров
      for (let field of productFields) {
         // Если какого-либо поля в выбранном списке нет, ставим отметку false
         const isExist = fieldsIds.filter(userField => userField.fieldId === field.id)
         // Товар проверку не прошёл
         if(isExist.length === 0) ok = false
         // Проверяем, есть ли в указанных полях какие-то вводимые вручную значения
         const devider = '<x<' // Значения записываюся в таком формате '1.51<x<2.0'
         if(field?.value?.includes(devider)) {
            // Если да, делим значение на минимальное и максимальное
            min = parseFloat(field.value.split(devider)[0])
            max = parseFloat(field.value.split(devider)[1])
            // Получаем значение поля и сравниваем
            const value = fieldsIds.find((userField) => userField.fieldId === field.id)
            if(value?.fieldValue) {
               const fieldValue = parseFloat(value.fieldValue)
               if(!(min < fieldValue && fieldValue < max)) {
                  // Если значения не подошли, товар проверку не прошёл
                  ok = false
               }
            } else { ok = false }
         }
      }
      return ok
   }
   // console.log(recomendedProducts)
   // const { inputs, selectors } = data
   // console.log('inputs', inputs)
   // console.log('selectors', selectors)

   // Если среди ответов есть  9.11. Периодические или разовые долгие простои от 1 месяца и более. — то Рекомендация позвонить по номеру 8 800 101 90 07 для консультации.
}
function getProductsData() {
   return [
      {
         id: 1,
         name: 'Доп.Ресурс для двигателей с пробегом до 100 000 км и объемом до 1,5 л',
         fields: [
            { id: 4, value: '1.0<x<1.5' },
            { id: 5 },
         ]
      },
      {
         id: 2,
         name: 'Доп.Ресурс для двигателей с пробегом до 100 000 км и объемом до 2,0 л',
         fields: [
            { id: 4, value: '1.51<x<2.0' },
            { id: 5 },
         ],
         orFields: [7,8,9]
      },
      {
         id: 3,
         name: 'Доп.Ресурс для двигателей с пробегом до 100 000 км и объемом до 2,5 л',
         fields: [
            { id: 4, value: '2.01<x<2.5' },
            { id: 5 },
         ],
         orFields: [7,8,9]
      },
      {
         id: 4,
         name: 'СПУТНИК АВТОТУРИСТА для двигателей объемом до 2,5л',
         fields: [
            { id: 4, value: '1.0<x<2.5' },
            { id: 5 },
         ],
         orFields: [7,8,9]
      },
      {
         id: 5,
         name: 'СПУТНИК АВТОТУРИСТА для двигателей объемом до 2,5л',
         fields: [
            { id: 4, value: '1.0<x<2.5' },
            { id: 5 },
         ],
         orFields: [7,8,9],
      },
      {
         id: 6,
         name: 'БроВолк "Последний шанс обойтись без капиталки" для двигателей легковых автомобилей.',
         fields: [],
         orFields: [],
         orFieldsPriorite: [13,14],
      },
   ]
}
function getTestData() {
   return {
     inputs: [
         null,
         "bmw",
         "x7",
         "2020",
         "1.7"
      ],
      selectors: [
     ],
   }
}
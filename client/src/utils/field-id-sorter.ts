export const getFieldsId = (inputs: any, selectors: any, signs: any) => {
   const ids = []
   // В полях типа input, значения помещаются в массив под индексом соотвествующим ID этого поля
   for (let [index, inputField] of inputs.entries()) {
      if(inputField) {
         if(index === 4) {
            inputField = parseFloat(inputField.replace(/,/g, '.'))
         }
         ids.push({
            fieldId: index, fieldValue: inputField
         })
      }
   }
   // console.log(...ids)
   // В остальных полях, значения помещаются под индексом группы, к которой относится это поле
   // Для получения ID поля, нужно найти по индексу его группу, а потом и сам ID по его значению
   selectors.map((selectorFields: any, signGroupIndex:number, ) => {
      console.log(selectorFields)
      if(selectorFields) {
         const foundedSignGroup = signs.find((signGroup: any) => signGroup.id === signGroupIndex)
         console.log('foundedSignGroup', foundedSignGroup)
         if(!foundedSignGroup) return
         for (let signField of foundedSignGroup.signs) {
            const arrItem = {
               signPart: foundedSignGroup.part,
               fieldId: signField.id, fieldName: signField.name,
               prioret: signField?.prorite ? true : false
            }
            if(typeof selectorFields === 'object') {
               for (let selectorField of selectorFields) {
                  // Сравниваем значение полей группы с тем, что указал пользователь
                  if(selectorField === signField.name) {
                     // Если сходятся, пушим
                     ids.push(arrItem)
                  }
               }
            } else {
               // Если это radio селектор, то значение будет string и перебирать ничего не надо
               if(selectorFields === signField.name) {
                  ids.push(arrItem)
               }
            }
         }
      }
   })
   return ids
}
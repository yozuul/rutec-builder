import { signs } from '../assets/data'
export const getFieldsId = (inputs: any, selectors: any) => {
   const ids = []
   // В полях типа input, значения помещаются в массив под индексом соотвествующим ID этого поля
   for (let inputField of inputs) {
      if(inputField) {
         ids.push({
            fieldId: inputs.indexOf(inputField), fieldValue: inputField
         })
      }
   }
   // В остальных полях, значения помещаются под индексом группы, к которой относится это поле
   // Для получения ID поля, нужно найти по индексу его группу, а потом и сам ID по его значению
   selectors.map((selectorFields: any, signGroupIndex:number, ) => {
      if(selectorFields) {
         const foundedSignGroup = signs.find((signGroup) => signGroup.id === signGroupIndex)
         if(!foundedSignGroup) return
         for (let signField of foundedSignGroup.fields) {
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
   // for (let selectorFields of selectors) {
   //    // console.log(index)
   //    // При добавлении в пустой массив рандомного индекса, получаем пустые значения, отсеиваем их
   //    if(selectorFields) {
   //       // console.log('selectorFields', selectorFields)
   //       // Получаем индекс текущего значения массива (то, что заполнил пользователь)
   //       const signIndex = selectors.indexOf(selectorFields)
   //       // console.log('signIndex', signIndex, typeof signIndex)
   //       // Этот индекс будет соотвествовать индексу в массиве всех имеющихся признаков
   //       const fieldGroup = signs.find(group => group.id === signIndex)
   //       // console.log('fieldGroup', fieldGroup)
   //       // console.log(fieldGroup)
   //       // Перебираем внутри группы имеющиеся поля
   //       for (let existField of fieldGroup.fields) {
   //          // Если тип группы чекбокс, то в значении может быть массив, перебираем его тоже
   //          const arrItem = {
   //             fieldGroup: fieldGroup.part,
   //             fieldId: existField.id, fieldName: existField.name,
   //             prioret: existField.prorite ? true : false
   //          }
   //          if(typeof selectorFields === 'object') {
   //             for (let selectorField of selectorFields) {
   //                // Сравниваем значение полей группы с тем, что указал пользователь
   //                if(selectorField === existField.name) {
   //                   // Если сходятся, пушим
   //                   ids.push(arrItem)
   //                }
   //             }
   //          } else {
   //             // Если это radio селектор, то значение будет string и перебирать ничего не надо
   //             if(selectorFields === existField.name) {
   //                ids.push(arrItem)
   //             }
   //          }
   //       }
   //    }
   // }
   return ids
}
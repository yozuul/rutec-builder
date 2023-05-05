export const getFieldsId = (signs: any, inputs: any, selectors: any) => {
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
   for (let selectorFields of selectors) {
      // При добавлении в пустой массив рандомного индекса, получаем пустые значения, отсеиваем их
      if(selectorFields) {
         // Получаем индекс текущего значения массива (то, что заполнил пользователь)
         const signIndex = selectors.indexOf(selectorFields)
         // Этот индекс будет соотвествовать индексу в массиве всех имеющихся признаков
         const fieldGroup = signs[signIndex]
         // Перебираем внутри группы имеющиеся поля
         for (let existField of fieldGroup.fields) {
            // Если тип группы чекбокс, то в значении может быть массив, перебираем его тоже
            const arrItem = {
               fieldGroup: fieldGroup.part,
               fieldId: existField.id, fieldName: existField.name,
               prioret: existField.prorite ? true : false
            }
            if(typeof selectorFields === 'object') {
               for (let selectorField of selectorFields) {
                  // Сравниваем значение полей группы с тем, что указал пользователь
                  if(selectorField === existField.name) {
                     // Если сходятся, пушим
                     ids.push(arrItem)
                  }
               }
            } else {
               // Если это radio селектор, то значение будет string и перебирать ничего не надо
               if(selectorFields === existField.name) {
                  ids.push(arrItem)
               }
            }
         }
      }
   }
   return ids
}
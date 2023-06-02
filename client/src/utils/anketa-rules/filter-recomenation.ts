export function filterRecomendation(args: any) {
   const [
      recomended, exceptions, fields,
      btnRecomendationActive, recomendationBtnDanger,
      urlToGo, productToGo
   ] = args
   if(recomended.length === 0) {
      cleanSelectedProduct(productToGo, urlToGo)
   }
   // Проверяем, выбран ли пункт "Посторонние звуки/стуки (не гидрокомпенсаторы)"
   const isException = checkExceptions(fields, btnRecomendationActive, recomendationBtnDanger)
   if(isException) return
   // Проверяем прочие рекомендации
   checkAllRecomendations(recomended, fields, productToGo, urlToGo)
   // Проверяем отмеченные признаки неисправностей
   checkBadSigns(exceptions, fields, productToGo, urlToGo)
   // Проверяем, нужно ли активировать кнопку с рекомендацией позвонить по тел.
   checkDangerBtn(fields, recomendationBtnDanger)
   console.log('Отфильтрованный товар:', productToGo.value)
   if(productToGo.value) {
      btnRecomendationActive.value = true
   } else {
      btnRecomendationActive.value = false
   }
}

function checkAllRecomendations(recomended: any, fields: any, productToGo: any, urlToGo: any) {
   if(recomended.length === 1) {
      productToGo.value = recomended[0]
      urlToGo.value = recomended[0].url
   }
   if(recomended.length > 1) {
      console.log('КОНФЛИКТ ТОВАРОВ!')
      console.log(...recomended)
      const prioritets = []
      for (let product of recomended) {
         console.log('Проверяем у которого из товаров есть приоритетные поля')
         if(product.prioriteFields || product.prioriteOrFields) {
            prioritets.push(product)
         }
      }
      if(prioritets.length == 0) {
         console.log('Приоритетных товаров не найдено. Невозможно разрешить конфликт')
      }
      if(prioritets.length > 1) {
         console.log('В рекомендациях оказалось более одного товара с приоритетными полями')
         console.log(...prioritets)
      }
      if(prioritets.length === 1) {
         console.log('Товар с приоритетными отфильтрован')
         productToGo.value = prioritets[0]
         urlToGo.value = prioritets[0].url
      }
   }
}

function checkBadSigns(exceptions: any, fields: any, productToGo: any, urlToGo: any) {
   // Проверяем признаки неисправностей
   const badSigns = [7,8,9,10,11,12,13,14,15]
   // Если в рекомендациях есть товар-исключения ПроВолк
   console.log('exceptions', ...exceptions)
   // Пhоверяем что не выбран "После последнего ТО"
   for (let field of fields) {
      if(field.fieldId === 17) return
   }
   if(exceptions.length >= 1) {
      const selectedBadSigns = []
      // Проверяем сколько неисправностей выбрано
      for (let field of fields) {
         if(badSigns.includes(field.fieldId)) {
            selectedBadSigns.push(field.fieldId)
         }
      }
      console.log('Отмечено признаков неисправностей:', selectedBadSigns.length)
      // Если больше двух, то добавляем ПроВолк в рекомендации
      if(selectedBadSigns.length > 1) {
         console.log('selectedBadSigns.length', selectedBadSigns.length)
         addExceptionToRecomendation()
      }
      // Если выбран один признак, проверяем, что там нет:
      // -  { id: 7-8-9, name: 'Расход масла ' }
      // -  { id: 14, name: 'Стучат гидрокомпенсаторы' }
      // -  { id: 15, name: 'Пониженная компрессия' }
      if(selectedBadSigns.length === 1) {
         let exception = true
         const specialSigns = [7,8,9,14,15,17]
         for (let special of specialSigns) {
            if(selectedBadSigns.includes(special)) {
               exception = false
            }
         }
         console.log(exception)
         if(exception) {
            addExceptionToRecomendation()
         } else {
            removeExceptionToRecomendation()
         }
      }
   } else {
      removeExceptionToRecomendation()
   }

   function addExceptionToRecomendation() {
      productToGo.value = exceptions[0]
      urlToGo.value = exceptions[0].url
   }
   function removeExceptionToRecomendation() {
      if(productToGo.value && productToGo.value.exception) {
         cleanSelectedProduct(productToGo, urlToGo)
      }
   }
}

function checkExceptions(fields: any, btnRecomendationActive: any, recomendationBtnDanger: any) {
   // Проверяем, выбран ли пункт "Посторонние звуки/стуки (не гидрокомпенсаторы)"
   const isException = fields.find((field: any) => field.fieldId === 16)
   if(isException) {
      // Если выбран, деактивируем кнопку рекомендаций и показываем кнопку позвонить
      btnRecomendationActive.value = false
      recomendationBtnDanger.value = true
   } else {
      recomendationBtnDanger.value = false
   }
   return isException
}

function checkDangerBtn(fields: any, recomendationBtnDanger: any) {
   // Проверяем, выбран ли "Периодические или разовые долгие простои от 1 месяца и более"
   for (let field of fields) {
      if(field.fieldId === 39) {
         recomendationBtnDanger.value = true
         return
      }
   }
   // Проверяем, выбран ли только "Троение"
   if(fields.length === 1 && fields[0].fieldId === 13) {
      recomendationBtnDanger.value = true
      return
   }
   // Если ничего не выбрано, убеждаемся, что кнопка отключена
   recomendationBtnDanger.value = false
}
function cleanSelectedProduct(productToGo: any, urlToGo: any) {
   productToGo.value = undefined
   urlToGo.value = undefined
}
// Очистка всех селекторов с неисправностью, при выборе чекбокса "Работа двигателя не сопровождается никаким из ниже перечисленных признаков:"
export function clearAutoFailureSelectors(
      selectors: any, block_WHEN_TROUBLE_group: any, signs: any
   ) {
   // Ищем группу с типом cleaner, очищающуу и блокирующую группы неполадок
   const cleanerGroup = signs.find((sign: any) => sign.function === 'cleaner')
   const cleanerGroupId = cleanerGroup.id
   if(!cleanerGroupId) {
      console.log('Кнопка очистки неполадок не найдена "Работа двигателя не сопровождается никаким из ниже перечисленных признаков"')
      return
   }
   const troubleGroupsId = []
   for (let group of signs) {
      if(group.trouble) {
         troubleGroupsId.push(group.id)
      }
   }
   // console.log(troubleGroupsId)
   if(selectors.value[cleanerGroupId]) { // Проверяем, отмечен ли чекбокс по id/индексу
      if(selectors.value[cleanerGroupId]?.length === 1) {
         troubleGroupActivator()
         for (let troubleId of troubleGroupsId) {
            selectors.value[troubleId] = undefined
         }
         block_WHEN_TROUBLE_group.value = true
      } else {
         troubleGroupActivator()
         selectors.value.splice(cleanerGroupId, 1)
         block_WHEN_TROUBLE_group.value = true
      }
   }

   function troubleGroupActivator() {
      const existGroup = document.querySelectorAll('.trouble')
      for (let item of existGroup) {
         if(item.classList.contains('disable')) {
            item.classList.remove('disable')
         } else {
            item.classList.add('disable')
         }
      }
   }
   // if(selectors.value[111]) { // Проверяем, отмечен ли чекбокс по id/индексу
   //    if(JSON.stringify(selectors.value[111]).length !== 2) {
   //       selectorsNotActive.value = true
   //       const errorGroup = [2,3,4,5]
   //       for (let badId of errorGroup) {
   //          selectors.value[badId] = undefined
   //       }
   //       blockWhen.value = true
   //    } else {
   //       selectors.value.splice(111, 1)
   //       selectorsNotActive.value = false
   //       blockWhen.value = true
   //    }
   // }
}

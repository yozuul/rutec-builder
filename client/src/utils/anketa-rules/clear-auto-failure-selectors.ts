// Очистка всех селекторов с неисправностью, при выборе чекбокса "Работа двигателя не сопровождается никаким из ниже перечисленных признаков:"
export function clearAutoFailureSelectors(selectors: any, selectorsNotActive: any, blockWhen: any) {
   if(selectors.value[111]) { // Проверяем, отмечен ли чекбокс по id/индексу
      if(JSON.stringify(selectors.value[111]).length !== 2) {
         selectorsNotActive.value = true
         const errorGroup = [2,3,4,5]
         for (let badId of errorGroup) {
            selectors.value[badId] = undefined
         }
         blockWhen.value = true
      } else {
         selectors.value.splice(111, 1)
         selectorsNotActive.value = false
         blockWhen.value = true
      }
   }
}
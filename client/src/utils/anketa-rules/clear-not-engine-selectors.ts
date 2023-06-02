// Очистка селекторов механизмов не относящихся к двигателю
export function clearNotEnginePartSelectors(selectors: any, groupId: any, signs: any) {
   // ID групп АКПП / МКПП / ГУР ..., выбранные значения которых записываются в селектор под индексом ID этой группы (определено в sign.ts)
   const onlyOneFrom: any = []
   for (let sign of signs) {
      if(sign.part === 'unit') {
         onlyOneFrom.push(sign.id)
      }
   }
   if(onlyOneFrom.length === 0) return
   const onlyOneFromNumbers = []
   selectors.value.forEach((value: number, index: number) => {
      if(onlyOneFrom.includes(index) && value !== undefined) {
         onlyOneFromNumbers.push(value)
      }
   })
   selectors.value.forEach((value: number, index: number) => {
      if (onlyOneFrom.includes(index) && (onlyOneFromNumbers.length > 1) && (index !== groupId)) {
         selectors.value[index] = undefined;
      }
   });
}
// Если в массиве selectors есть элементы под одним из индексов onlyOneFrom, и элементов под индексами onlyOneFrom больше одного, и индекс элемента не равен groupId, необходимо этому элементу присвоить undefined (очистка)
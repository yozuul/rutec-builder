// Блокировка группы "Когда появились признаки...", пока не выбрана неисправность
export function block_WHEN_TROUBLE_sign_group(selectors: any, block: any, signs: any) {
   // Ищем вме неисправности кроме кнопки очистки
   const onlyOneFrom: any = []; let cleanerId = null
   for (let sign of signs) {
      if(sign.function !== 'cleaner' && sign.trouble) {
         onlyOneFrom.push(sign.id)
      }
      if(sign.function == 'cleaner') {
         cleanerId = sign.id
      }
   }
   if(onlyOneFrom.length === 0) return
   let blockBLock = false
   selectors.value.forEach((selector: any, index: number) => {
      if(onlyOneFrom.includes(index)) {
         if(selector) {
            console.log('selector.length', selector.length)
            if(selector?.length > 0) {
               blockBLock = false
            }
         }
      }
   })
   if(blockBLock) {
      block.value = true
      selectors.value[cleanerId] = undefined
   } else {
      block.value = false
   }

   // const onlyOneFrom = [2,3,4]
   // let blockBLock = true
   // selectors.value.forEach((selector: any, index: number) => {
   //    if(onlyOneFrom.includes(index)) {
   //       if(selector) {
   //          console.log('selector.length', selector.length)
   //          if(selector?.length > 0) {
   //             blockBLock = false
   //          }
   //       }
   //    }
   // })
   // if(blockBLock) {
   //    block.value = true
   //    selectors.value[5] = undefined
   // } else {
   //    block.value = false
   // }
}
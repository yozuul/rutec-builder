// Блокировка группы "Когда появились признаки...", пока не выбрана неисправность
export function blockWhenErrorSignsAppeared(selectors: any, block: any) {
   const onlyOneFrom = [2,3,4]
   let blockBLock = true
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
      selectors.value[5] = undefined
   } else {
      block.value = false
   }
}
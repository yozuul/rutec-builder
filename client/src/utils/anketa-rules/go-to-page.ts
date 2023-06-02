export function goToPage(btnRecomendationActive: any, urlToGo: any, productToGo: any) {
   if(btnRecomendationActive.value) {
      if(urlToGo.value) {
         window.open(urlToGo.value, '_blank')
         if(productToGo.value?.recText) {
            ElMessage({
               showClose: true,
               dangerouslyUseHTMLString: true,
               message: productToGo.value.recText,
               type: 'success',
               duration: 0
            })
         }
      } else {
         notifyError({
            title: 'Ошибка',
            message: 'Указанных параметров не достаточно для рекомендации',
         })
      }
   }
}
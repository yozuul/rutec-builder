export function goToPage(
   btnRecomendationActive: any, urlToGo: any, productToGo: any, text: any, openHTML: any
) {
   if(btnRecomendationActive.value) {
      if(urlToGo.value) {
         if(productToGo.value?.recText) {
            text.value = productToGo.value.recText
            openHTML()
            setTimeout(() => {
               window.open(urlToGo.value, '_blank')
            }, 3000);
         } else {
            window.open(urlToGo.value, '_blank');
         }
      } else {
         notifyError({
            title: 'Ошибка',
            message: 'Указанных параметров не достаточно для рекомендации',
         })
      }
   }
}
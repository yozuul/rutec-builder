
export const deleteConfirm = async (id: number, method: any, text: any) => {
   try {
      await ElMessageBox.confirm(
         text.warning, 'Внимание!',
         {
            cancelButtonText: 'Отмена',
            confirmButtonText: 'OK',
            type: 'warning',
         }
      )
      try {
         await method(id)
         currentPageData.value = currentPageData.value.filter((company: any) => company.id !== id)
         ElMessage({
            type: 'success',
            message: `Партнёр с ID ${id} удалён`,
         })
      } catch (error) {
         ElMessage({
            type: 'error',
            message: `При удалении партнёра с ID ${id}  возникла ошибка`,
         })
      }
   } catch (error) {
      console.log('Удаление отменено')
   }
}
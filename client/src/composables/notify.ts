interface notyfyData {
   title?: string
   message?: string
}
export const notifySuccsess = (data: notyfyData) => {
   ElNotification({
     title: data?.title || 'Готово',
     message: data?.message || 'Товар успешно добавлен',
     type: 'success',
   })
 }
 export const notifyError = (data: notyfyData) => {
   ElNotification({
     title: data?.title || 'Ошибка',
     message: data?.message || 'Заполните обязательные поля',
     type: 'warning',
   })
 }
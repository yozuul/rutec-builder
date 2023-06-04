<template>
<NuxtLayout>
   <Card
      title="Группы признаков"
      buttonText="Добавить группу"
      buttonRoute="/admin/signs/add"
   >
      <el-table :data="signsGroupData" style="width: 100%">
         <el-table-column label="Наименование">
            <template #default="scope">
               <div>
                  {{ scope.row.name }}
               </div>
            </template>
         </el-table-column>
         <el-table-column label="Тип группы" width="150">
            <template #default="scope">
               <div>
                  {{ scope.row.part }}
               </div>
            </template>
         </el-table-column>
         <el-table-column label="Тип полей" width="150">
            <template #default="scope">
               <div>
                  {{ scope.row.fieldsType }}
               </div>
            </template>
         </el-table-column>
         <el-table-column label="Признаков" width="150">
            <template #default="scope">
               <div>
                  {{ scope.row.signs.length }}
               </div>
            </template>
         </el-table-column>
         <el-table-column label="Неисправность" width="150">
            <template #default="scope">
               <div v-if="!scope.row.trouble">Нет</div>
               <div v-else>Да</div>
            </template>
         </el-table-column>
         <el-table-column width="130">
            <template #default="scope">
               <nuxt-link :to="`/admin/signs/${scope.row.id}`">
                  <el-button size="small">
                     <el-icon><edit /></el-icon>
                  </el-button>
               </nuxt-link>

               <el-button class="deleteProductBtn"
                  size="small" type="danger"
                  @click="deleteConfirm(scope.row.id, scope.row.name)"
               >
                  <el-icon><delete /></el-icon>
               </el-button>
            </template>
         </el-table-column>
      </el-table>
   </Card>
</NuxtLayout>
</template>

<script lang='ts' setup>
const useFetch = useFetchData()
const allSigns = await useFetch.getAllSignGroup()
const signsGroupData: any = ref(allSigns)

const deleteConfirm = async (id: number, groupName: string) => {
   try {
      await ElMessageBox.confirm(
         'Это приведёт к удалению всех связанных признаков и товаров. Продолжить?',
         'Внимание!',
         {
            cancelButtonText: 'Отмена',
            confirmButtonText: 'OK',
            type: 'warning',
         }
      )
      try {
         await useFetch.deleteSignGroup(id)
         signsGroupData.value = signsGroupData.value.filter((sign: any) => sign.id !== id)
         ElMessage({
            type: 'success',
            message: `Группа признаков "${groupName}" удалена`,
         })
      } catch (error) {
         ElMessage({
            type: 'error',
            message: `При удалении признака "${groupName}" возникла ошибка`,
         })
      }
   } catch (error) {
      console.log('Удаление отменено')
   }
}

</script>

<style>
</style>

<script lang='ts'>
import { Delete, Edit, InfoFilled } from '@element-plus/icons-vue'
definePageMeta({
   layout: 'dashboard',
   middleware: 'auth'
})
</script>
<template>
<NuxtLayout>
   <Card
      title="Промо материалы"
      buttonText="Добавить материал"
      buttonRoute="/admin/promo/add"
   >
      <el-table ref="tableRef" row-key="id" :data="currentPageData" style="width: 100%">

         <el-table-column prop="name" label="Название" sortable />
         <el-table-column
            prop="type"
            label="Тип"
            sortable
            width="180"
            column-key="type"
            :filters="[
               { text: 'Факт', value: 'Факт' },
               { text: 'Видео', value: 'Видео' },
            ]"
            :filter-method="filterType"
         />

         <el-table-column width="160" align="right">
            <template #header>
               <el-button size="small" @click="clearFilter">Очистить фильтры</el-button>
            </template>
            <template #default="scope">
               <nuxt-link :to="`/admin/promo/${scope.row.id}`">
                  <el-button size="small">
                     <el-icon><edit /></el-icon>
                  </el-button>
               </nuxt-link>

               <el-button class="deleteProductBtn"
                  size="small" type="danger"
                  @click="deleteConfirm(scope.row.id)"
               >
                  <el-icon><delete /></el-icon>
               </el-button>
            </template>
         </el-table-column>
      </el-table>

      <el-pagination
         @size-change="handleSizeChange"
         @current-change="handleCurrentChange"
         :current-page="currentPage"
         :page-size="pageSize"
         layout="prev, pager, next"
         :total="promoData.length"
      />
   </Card>
</NuxtLayout>
</template>

<script lang='ts' setup>
import type { TableInstance } from 'element-plus'
import { usePromoStore } from '~/store/promoStore'

const promoStore = usePromoStore()
await promoStore.fetchAllPromo()

interface Promo {
   name: string
   type: 'Факт' | 'Видео'
   text: string | null
   videoUrl: string | null
   videoPreview: string | null
}

let promoData: Promo[] = promoStore.allPromo
const tableRef = ref<TableInstance>()
const clearFilter = () => {
  // @ts-expect-error
  tableRef.value!.clearFilter()
}
const filterType = (value: string, row: Promo) => {
  return row.type === value
}
// Пагинация
const pageSize = ref(50)
const currentPage = ref(1)
let currentPageData = ref<Promo[]>([])
   watchEffect(() => {
   currentPageData.value = promoData.slice((currentPage.value - 1) * pageSize.value, currentPage.value * pageSize.value)
})
// Обновляет текущую страницу
const handleSizeChange = (val: number) => {
   pageSize.value = val
   currentPageData.value = promoData.slice((currentPage.value - 1) * pageSize.value, currentPage.value * pageSize.value)
}
const handleCurrentChange = (val: number) => {
   currentPage.value = val
   currentPageData.value = promoData.slice((currentPage.value - 1) * pageSize.value, currentPage.value * pageSize.value)
}
// Удаление
const deleteConfirm = async (id: number) => {
   try {
      await ElMessageBox.confirm(
         'Уверены, что хотите удалить материал?', 'Внимание!',
         {
            cancelButtonText: 'Отмена',
            confirmButtonText: 'OK',
            type: 'warning',
         }
      )
      try {
         await promoStore.deletePromo(id)
         currentPageData.value = currentPageData.value.filter((promo: any) => promo.id !== id)
         ElMessage({
            type: 'success',
            message: `Материал удалён`,
         })
      } catch (error) {
         ElMessage({
            type: 'error',
            message: `При удалении материала возникла ошибка`,
         })
      }
   } catch (error) {
      console.log('Удаление отменено')
   }
}
</script>

<script lang='ts'>
import { Delete, Edit } from '@element-plus/icons-vue'
definePageMeta({
   layout: 'dashboard',
   middleware: 'auth'
})
</script>
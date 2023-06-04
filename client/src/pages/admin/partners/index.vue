<template>
<NuxtLayout>
   <Card
      title="Партнёры"
      buttonText="Добавить партнёра"
      buttonRoute="/admin/partners/add"
   >
      <el-button size="small" @click="clearFilter">Очистить фильтры</el-button>
      <el-table ref="tableRef" row-key="companyName" :data="currentPageData" style="width: 100%">
         <el-table-column
            prop="companyName"
            label="Название"
            sortable
            column-key="companyName"
         />
         <el-table-column
            width="180"
            prop="city"
            label="Город"
            sortable
            column-key="city"
            :filters="cityFilterData"
            :filter-method="filterCity"
         />
         <el-table-column
            width="160"
            prop="companyType"
            label="Тип"
            sortable
            column-key="companyType"
            :filters="[
               { text: 'Автосервис', value: 'Автосервис' },
               { text: 'Магазин', value: 'Магазин' },
               { text: 'Предприятие', value: 'Предприятие' },
            ]"
            :filter-method="filterTypes"
         />
         <el-table-column prop="email" label="Email" width="250" />
         <el-table-column
            prop="status"
            label="Статус"
            width="130"
            sortable
            column-key="status"
            :filters="[
               { text: 'Одобрен', value: 'Одобрен' },
               { text: 'Ожидает', value: 'Ожидает' },
               { text: 'Отклонён', value: 'Отклонён' },
            ]"
            :filter-method="filterStatus"
            filter-placement="bottom-end"
         >
            <template #default="scope">
               <el-tag
                  :type="scope.row.status === 'Одобрен' ? 'success' : scope.row.status === 'Отклонён' ? 'danger' : ''"
                  disable-transitions
                  >{{ scope.row.status }}</el-tag
               >
            </template>
         </el-table-column>

         <el-table-column width="130">
            <template #default="scope">
               <nuxt-link :to="`/admin/partners/${scope.row.id}`">
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
      <el-pagination
         @size-change="handleSizeChange"
         @current-change="handleCurrentChange"
         :current-page="currentPage"
         :page-size="pageSize"
         layout="prev, pager, next"
         :total="companyData.length"
      />
   </Card>
</NuxtLayout>
</template>

<script lang='ts' setup>
import type { TableInstance } from 'element-plus'
const partnerStore = usePartnerStore()
await partnerStore.fetchAllPartners()
await partnerStore.fetchCity()

const cityFilterData: any = ref([])
let citySet = new Set()
partnerStore.partners.map((partner: any) => {
   citySet.add(partner.city.name);
})
cityFilterData.value = Array.from(citySet).map(city => ({
    text: city, value: city
}))

interface Partners {
   id: number
   companyName: string
   companyType: string
   city: string
   type: string
   phone?: string
   email: string
   status: string
}

const tableRef = ref<TableInstance>()
const clearFilter = () => {
  // @ts-expect-error
  tableRef.value!.clearFilter()
}

const filterCity = (value: string, row: Partners) => {
  return row.city === value
}
const filterTypes = (value: string, row: Partners) => {
   return row.companyType === value
}
const filterStatus = (value: string, row: Partners) => {
   return row.status === value
}
let companyData: Partners[] = partnerStore.partners.map((partner: any) => {
   return {...partner, ...{ city: partner.city.name }}
})
// Пагинация
const pageSize = ref(50) // Значение по умолчанию для количества элементов на странице
const currentPage = ref(1) // Начальная страница
let currentPageData = ref<Partners[]>([])

watchEffect(() => {
   currentPageData.value = companyData.slice((currentPage.value - 1) * pageSize.value, currentPage.value * pageSize.value)
})
// Обновляет текущую страницу
const handleSizeChange = (val: number) => {
   pageSize.value = val
   currentPageData.value = companyData.slice((currentPage.value - 1) * pageSize.value, currentPage.value * pageSize.value)
}
const handleCurrentChange = (val: number) => {
   currentPage.value = val
   currentPageData.value = companyData.slice((currentPage.value - 1) * pageSize.value, currentPage.value * pageSize.value)
}
// Удаление
const deleteConfirm = async (id: number) => {
   try {
      await ElMessageBox.confirm(
         'Уверены, что хотите удалить партнёра?', 'Внимание!',
         {
            cancelButtonText: 'Отмена',
            confirmButtonText: 'OK',
            type: 'warning',
         }
      )
      try {
         await partnerStore.deletePartner(id)
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

</script>

<script lang='ts'>
import { Delete, Edit } from '@element-plus/icons-vue'
import { usePartnerStore } from '~/store/partnerStore'
definePageMeta({
   layout: 'dashboard',
   middleware: 'auth'
})
</script>
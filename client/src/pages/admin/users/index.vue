<template>
<NuxtLayout>
   <Card title="Пользователи">
      <el-table :data="usersData" style="width: 100%">
         <el-table-column label="Имя" width="300">
            <template #default="scope">
               <div style="display: flex; align-items: center">
                  {{ scope.row.name }}
               </div>
            </template>
         </el-table-column>
         <el-table-column label="Email" width="250">
            <template #default="scope">
               <div style="display: flex; align-items: center">
                  {{ scope.row.email }}
               </div>
            </template>
         </el-table-column>
         <el-table-column label="Роль" width="100">
            <template #default="scope">
               <div style="display: flex; align-items: center">
                  {{ scope.row.role }}
               </div>
            </template>
         </el-table-column>
         <el-table-column label="Промокод">
            <template #default="scope">
               <div style="display: flex; align-items: center">
                  {{ scope.row.promocode }}
               </div>
            </template>
         </el-table-column>
         <el-table-column label="Управление" width="130">
            <template #default="scope">


               <nuxt-link :to="`/admin/users/${scope.row.id}`">
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
   </Card>
</NuxtLayout>
</template>

<script lang='ts' setup>
import { getAllUsers } from 'utils'
import { usePartnerStore } from '~/store/partnerStore'
import { Delete, Edit } from '@element-plus/icons-vue'
const usersData = ref([])
const useToken = useCookie('accessToken')
const data = await getAllUsers(useToken.value)
const partnerStore = usePartnerStore()
if(!data.users) {
   notifyError({ message: data.error })
} else {
   usersData.value = data.users
}

const deleteConfirm = async (id: number) => {
   try {
      await ElMessageBox.confirm(
         'Уверены, что хотите удалить пользователя?', 'Внимание!',
         {
            cancelButtonText: 'Отмена',
            confirmButtonText: 'OK',
            type: 'warning',
         }
      )
      try {
         await partnerStore.deleteUser(id)
         usersData.value = usersData.value.filter((user: any) => user.id !== id)
         ElMessage({
            type: 'success',
            message: `Пользователь с ID ${id} удалён`,
         })
      } catch (error) {
         ElMessage({
            type: 'error',
            message: `При удалении пользователя с ID ${id}  возникла ошибка`,
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
definePageMeta({
   layout: 'dashboard',
   middleware: 'auth'
})
</script>
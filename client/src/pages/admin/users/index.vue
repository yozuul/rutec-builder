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
               <DeleteWithConfirm @click="handleDelete(scope.row.id)" />
            </template>
         </el-table-column>
      </el-table>
   </Card>
</NuxtLayout>
</template>

<script lang='ts' setup>
import { getAllUsers } from 'utils'
import { Delete, Edit } from '@element-plus/icons-vue'
const usersData = ref([])
const useToken = useCookie('accessToken')
const data = await getAllUsers(useToken.value)
if(!data.users) {
   notifyError({ message: data.error })
} else {
   usersData.value = data.users
}
async function handleDelete(id: number) {
   // productData.value = productData.value.filter((product: any) => product.id !== id)
   // await deleteProduct(id)
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
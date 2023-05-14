<template>
<NuxtLayout>
   <Card title="Товары">
      <el-table :data="productData" style="width: 100%">
         <el-table-column label="Наименование">
            <template #default="scope">
               <div style="display: flex; align-items: center">
                  {{ scope.row.name }}
               </div>
            </template>
         </el-table-column>
         <el-table-column label="Управление" width="130">
            <template #default="scope">
               <nuxt-link :to="`/admin/products/${scope.row.id}`">
                  <el-button size="small">
                     <el-icon><edit /></el-icon>
                  </el-button>
               </nuxt-link>
               <el-button class="deleteProductBtn"
                  size="small" type="danger"
                  @click="handleDelete(scope.row.id)"
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
import { getAllProducts, deleteProduct } from 'utils'
import { Delete, Edit } from '@element-plus/icons-vue'
const useToken = useCookie('accessToken')
const productData = ref<Array<object>>([])
try {
   productData.value = await getAllProducts(useToken?.value) as Array<object>
} catch (error) {
   notifyError({ message: 'Ошибка получения товаров' })
}
async function handleDelete(id: number) {
   productData.value = productData.value.filter((product: any) => product.id !== id)
   await deleteProduct(id, useToken?.value)
}
// if(productData.value.length === 0) {
//    await addStartedProducts()
// }
</script>

<style>
</style>

<script lang='ts'>
definePageMeta({
   layout: 'dashboard',
   middleware: 'auth'
});
</script>
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
               <el-button
                  size="small"
                  @click="handleEdit(scope.$index, scope.row)"
               >
                  <el-icon><edit /></el-icon>
               </el-button>
               <el-button
                  size="small"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
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
import { Delete, Edit } from '@element-plus/icons-vue'

interface Product {
   name: string
   id: number
}

const handleEdit = (index: number, row: Product) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: Product) => {
   deleteProduct(row.id)
   console.log(index, row)
}
function deleteProduct(id: number) {
   productData = productData.filter((row => row.id !== id))
   console.log(productData)
}
let productData: Product[] = [
   {
      name: 'Доп.Ресурс для двигателей с пробегом до 100 000 км и объемом до 1,5 л',
      id: 1
   },
   {
      name: 'Доп.Ресурс для двигателей с пробегом до 100 000 км и объемом до 2,0 л',
      id: 2
   },
   {
      name: 'Доп.Ресурс для двигателей с пробегом до 100 000 км и объемом до 2,5 л',
      id: 3
   },
   {
      name: 'Доп.Ресурс для двигателей с пробегом до 100 000 км и объемом до 3,0 л',
      id: 4
   },
   {
      name: 'Доп.Ресурс для двигателей с пробегом до 100 000 км и объемом до 3,5 л',
      id: 5
   },
   {
      name: 'KoxBusters "Быстрая ликвидация нагаров в поршневой" до 1,3 л. (раскоксовка)',
      id: 6
   },
   {
      name: 'Добавка для увеличения ресурса двигателя с пробегом от 100 000 км и объемом до 1,8 л RENOVATOR',
      id: 7
   },
   {
      name: 'СПУТНИК АВТОТУРИСТА для двигателей объемом до 2,5л',
      id: 8
   },
]
</script>
<style>
</style>

<script lang='ts'>
definePageMeta({
   layout: 'dashboard',
   middleware: 'auth'
});
</script>
<template>
   <el-popover :visible="visible" placement="top" :width="160">
     <p>Уверены?</p>
     <div style="text-align: right; margin: 0">
       <el-button size="small" text @click="visible = false">Отмена</el-button>
       <el-button size="small" type="primary" @click="visible = false"
         >Да</el-button
       >
     </div>
     <template #reference>
      <el-button class="deleteProductBtn"
         size="small" type="danger"
         @click="visible = true"
      >
         <el-icon><delete /></el-icon>
      </el-button>

     </template>
   </el-popover>
 </template>

 <script lang="ts" setup>
 import { ref } from 'vue'

 const visible = ref(false)
 </script>
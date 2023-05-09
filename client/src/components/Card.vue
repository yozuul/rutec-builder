<template>
   <el-card class="box-card signsList">
      <template #header>
         <h1>{{ title }}</h1>
         <div class="card-header">
         </div>
      </template>
      <div> <slot /></div>
   </el-card>
</template>

<script setup lang='ts'>
const props = defineProps({
    title: {
      type: String,
      default: 'Признаки',
    },
  });
</script>
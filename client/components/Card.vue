<template>
   <el-card class="box-card signsList">
      <template #header>
         <div class="card-header">
            <el-text class="mx-1" size="large"><strong>{{ title }}</strong></el-text>
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
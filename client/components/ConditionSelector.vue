<template>
   <el-select
      placeholder="Условие"
      style="width: 125px;"
   >
      <el-option
         v-for="item in selectorConditios"
         :key="item.name"
         :value="item.name"
      />
   </el-select>
</template>

<script setup>
const props = defineProps({
    selectorConditios: {
      type: []
    }
});
</script>
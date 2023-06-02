<template>
<el-tooltip
   class="box-item"
   effect="dark"
   :content="title"
   placement="right"
   >
   <slot />
</el-tooltip>
</template>

<script setup lang='ts'>
const props = defineProps({
   title: {
      type: String,
   }
})
</script>
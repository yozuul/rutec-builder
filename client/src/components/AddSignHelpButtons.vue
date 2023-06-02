<template>
<el-tooltip
   class="box-item"
   effect="dark"
   :content="tooltip"
   placement="top"
   >
   <el-button size="small" type="info" plain>{{ btnText }}</el-button>
</el-tooltip>
</template>

<script setup lang='ts'>
defineProps({
   tooltip: {
      type: String,
   },
   btnText: {
      type: String,
   },
})
</script>
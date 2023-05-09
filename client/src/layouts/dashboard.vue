<template>
<div class="common-layout">
   <el-container>
      <Navbar />
      <el-main><slot /></el-main>
   </el-container>
</div>
</template>

<script setup lang='ts'>
onMounted(() => {
   const url = new URL(window.location.href)
   if(document.querySelector(`li[url="${url.pathname}"]`)) {
      (document.querySelector(`li[url="${url.pathname}"]`) as HTMLElement).click()
   }
})
</script>

<style>
.el-main {
   /* background-color: #F5F7F9; */
}
</style>
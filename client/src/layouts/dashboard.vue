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
   const menuItems = document.querySelectorAll(`[role="menuitem"]`)
   for (let menuLink of menuItems) {
      menuLink.classList.remove('is-active')
      if(menuLink.getAttribute('url') === url.pathname) {
         menuLink.classList.add('is-active')
      }
   }
})
</script>

<style>
.el-main {
   /* background-color: #F5F7F9; */
}
</style>
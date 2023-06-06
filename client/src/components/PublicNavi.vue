<template>
<header class="headerMenu">
   <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
   >
   <el-menu-item index="0" @click="navigateTo('/')">
      Подбор добавок
   </el-menu-item>
   <el-menu-item index="1" @click="navigateTo('/partners')">
      Стать партнёром
   </el-menu-item>
   <div class="flex-grow" />
   <el-menu-item index="2" class="headerLogo">
      <img src="/rutec-logo.png" alt="">
   </el-menu-item>
</el-menu>
</header>
</template>

<script lang="ts" setup>
const handleSelect = (key: string, keyPath: string[]) => {
   console.log(key, keyPath)
}

const route = useRoute()
const activeIndex = ref('0')
watchEffect(() => {
   switch(route.path) {
      case '/':
         activeIndex.value = '0'
         break
      case '/partners':
         activeIndex.value = '1'
         break
   }
})
</script>

<style>
.flex-grow {
   flex-grow: 1;
}
.headerLogo img {
   height: 100px;
   position: absolute;
   bottom: -200px;
   right: 30px;
}
</style>
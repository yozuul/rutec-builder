<template>
<el-aside width="220px">
   <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
   >
      <el-menu-item index="0" @click="navigateTo('/admin/products')">
         <el-icon><ShoppingCart /></el-icon>
         <template #title>Товары</template>
      </el-menu-item>
      <el-menu-item index="1" @click="navigateTo('/admin/signs')">
         <el-icon><Odometer /></el-icon>
         <template #title>Признаки</template>
      </el-menu-item>
      <el-menu-item index="2" @click="navigateTo('/admin/partners')">
         <el-icon><Location /></el-icon>
         <template #title>Партнёры</template>
      </el-menu-item>
      <!-- <el-sub-menu index="3">
         <template #title>
            <el-icon><Location /></el-icon>
            <span>Партнёры</span>
         </template>
         <el-menu-item index="3-1"
            url='/admin/partners' @click="navigateTo('/admin/partners')"
         >
         Одобренные
      </el-menu-item>
         <el-menu-item index="3-2"
            url='/admin/partners/tickets' @click="navigateTo('/admin/partners/tickets')"
         >
            Заявки
         </el-menu-item>
      </el-sub-menu> -->
      <!-- <el-sub-menu index="5">
         <template #title>
            <el-icon><Files /></el-icon>
            <span>Материалы</span>
         </template>
         <el-menu-item index="5-1">Факты</el-menu-item>
         <el-menu-item index="5-2">Видео</el-menu-item>
      </el-sub-menu> -->
      <el-menu-item index="3" @click="navigateTo('/admin/promo')">
         <el-icon><Files /></el-icon>
         <template #title>Промо</template>
      </el-menu-item>
      <el-menu-item index="4" @click="navigateTo('/admin/users')">
         <el-icon><User /></el-icon>
         <template #title>Пользователи</template>
      </el-menu-item>
      <el-menu-item index="5" @click="navigateTo('/admin/settings')">
         <el-icon><setting /></el-icon>
         <template #title>Настройки</template>
      </el-menu-item>
   </el-menu>
</el-aside>
</template>

<script setup lang='ts'>
const route = useRoute()
const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
//   console.log('key', key)
//   console.log('keyPath', keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
}

const activeIndex = ref('0')
watchEffect(() => {
   switch(route.path) {
      case '/admin/products':
         activeIndex.value = '0'
         break
      case '/admin/signs':
         activeIndex.value = '1'
         break
      case '/admin/partners':
         activeIndex.value = '2'
         break
      case '/admin/promo':
         activeIndex.value = '3'
         break
      case '/admin/users':
         activeIndex.value = '4'
         break
      case '/admin/settings':
         activeIndex.value = '5'
         break
   }
})
const url = [
   {
      id: 1,
      name: 'Конструктор',
      href: '/admin/constructor',
      icon: 'icon-menu',
   },
   {
      id: 2,
      name: 'Товары',
      href: '/admin/products',
      icon: 'document',
   },
   {
      id: 3,
      name: 'Признаки',
      href: '/admin/signs',
      icon: 'odometer',
   },
   {
      id: 4,
      name: 'Пользователи',
      href: '/admin/users',
      icon: 'user',
   },
   {
      id: 5,
      name: 'Настройки',
      href: '/admin/settings',
      icon: 'setting',
   },
]
</script>

<style>
.el-aside {
   min-height: 100vh;
   border-right: solid 1px var(--el-menu-border-color);
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 219px;
  min-height: 400px;
  border-right: none;
}
</style>
<script lang='ts'>
import {
  Document, User, Files, ShoppingCart,
  Menu as IconMenu, Location,
  Setting, Odometer
} from '@element-plus/icons-vue'
</script>

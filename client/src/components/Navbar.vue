<template>
   <el-aside width="250px">
      <el-menu
         class="el-menu-vertical"
      >
        <el-menu-item index="0" :url="url[0].href" @click="$router.push(url[0].href)">
          <el-icon><icon-menu /></el-icon>
          <span>Конструктор</span>
        </el-menu-item>
        <el-menu-item index="1" :url="url[1].href" @click="$router.push(url[1].href)">
          <el-icon><document /></el-icon>
          <span>Товары</span>
        </el-menu-item>
        <el-menu-item index="2" :url="url[2].href" @click="$router.push(url[2].href)">
          <el-icon><odometer /></el-icon>
          <span>Признаки</span>
        </el-menu-item>
        <el-menu-item index="3" :url="url[3].href" @click="$router.push(url[3].href)">
         <el-icon><User /></el-icon>
          <span>Пользователи</span>
        </el-menu-item>
        <el-menu-item index="4" :url="url[3].href" @click="$router.push(url[4].href)">
          <el-icon><setting /></el-icon>
          <span>Настройки</span>
        </el-menu-item>
      </el-menu>
   </el-aside>
</template>

<script setup lang='ts'>
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
.el-menu {
   min-height: 100vh;
}
</style>
<script lang='ts'>
import {
  Document, User,
  Menu as IconMenu,
  Setting, Odometer
} from '@element-plus/icons-vue'
</script>

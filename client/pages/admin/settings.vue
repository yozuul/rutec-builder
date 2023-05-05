<template>
  <NuxtLayout>
    <el-text class="mx-1" size="large">Конструктор</el-text>
  </NuxtLayout>
</template>

<script setup lang='ts'>
definePageMeta({
   layout: 'dashboard',
   middleware: 'auth'
})
</script>

<style>
</style>
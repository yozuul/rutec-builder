<template>
   <NuxtLayout>
      <el-text class="mx-1" size="large">Редактирование товара</el-text>
   </NuxtLayout>
 </template>

 <script setup lang='ts'>

 </script>

 <script lang='ts'>
 definePageMeta({
    layout: 'dashboard',
    middleware: 'auth'
 });
 </script>

 <style>
 </style>
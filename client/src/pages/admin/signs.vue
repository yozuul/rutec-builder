<template>
<NuxtLayout>
   <Card title="Признаки">
      <pre>{{ formattedJson }}</pre>
   </Card>
</NuxtLayout>
 </template>

<script setup lang='ts'>
import { signs } from 'data'
const formattedJson = JSON.stringify(signs, null, 2)
</script>

<style lang="scss">
.signsList  {
   li {
      list-style: none;
   }
}
</style>

<script lang='ts'>
definePageMeta({
   layout: 'dashboard',
   middleware: 'auth'
})
</script>
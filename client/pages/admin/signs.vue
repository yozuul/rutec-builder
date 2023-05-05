<template>
<NuxtLayout>
   <Card title="Признаки">
      <template v-for="i, signGroup in signs">
         <h2>{{ signGroup }}</h2>
         <template v-for="signType in signs[signGroup]">
            <h3>&nbsp;- {{ signType.name }}</h3>
            <template v-for="sign in signType.option">
               <li>&nbsp;&nbsp;&nbsp;&nbsp;{{ sign.name }}</li>
            </template>
         </template>
      </template>
   </Card>
</NuxtLayout>
 </template>

<script setup lang='ts'>
import { signs } from '@/assets/js/signs'
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
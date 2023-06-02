<template>
<NuxtLayout>
   <PagesProductsAddEdit
      title="Конструктор товара"
   />
</NuxtLayout>
</template>

<script setup>
</script>

<script>
definePageMeta({
   layout: 'dashboard',
   middleware: 'auth'
})
</script>

<style lang="scss">
</style>
<template>
<NuxtLayout>
   <PagesProductsAddEdit
      title="Редактирование товара"
      :existProduct="foundedProduct"
   />
</NuxtLayout>
</template>

<script lang="ts" setup>
const useFetch = useFetchData()
const productId = useRoute().params.id
const foundedProduct = await useFetch.getProductById(productId)
</script>

<script lang="ts">
definePageMeta({
   layout: 'dashboard',
   middleware: 'auth'
})
</script>

<style lang="scss">
</style>
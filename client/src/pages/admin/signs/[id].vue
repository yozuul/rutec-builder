<template>
<NuxtLayout>
   <PagesSignsAddEdit
      cardTitle="Редактирование признака"
      :existSign="foundedSign"
   />
</NuxtLayout>
</template>

<script lang="ts" setup>
const useFetch = useFetchData()
const signGroupId = useRoute().params.id
const foundedSign = await useFetch.getSignGroupById(signGroupId)
</script>

<style lang="scss">
@import '@/assets/styles/add-edit-cards.scss';
</style>

<script lang="ts">
definePageMeta({
   layout: 'dashboard',
   middleware: 'auth'
})
</script>
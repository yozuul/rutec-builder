<template>
<NuxtLayout>
   <PagesPartnerAddEdit
      title="Новый партнёр"
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
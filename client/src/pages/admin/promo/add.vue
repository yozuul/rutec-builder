<template>
<NuxtLayout>
   <PagesPromoAddEdit
      title="Новый промо материал"
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
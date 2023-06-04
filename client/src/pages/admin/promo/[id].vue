<template>
<NuxtLayout>
   <PagesPromoAddEdit
      title="Редактирование материала"
      :promoData="promoStore.currentPromo"
   />
</NuxtLayout>
</template>

<script lang="ts" setup>
import { usePromoStore } from '~/store/promoStore'
const promoId = useRoute().params.id
console.log(promoId)
const promoStore = usePromoStore()
await promoStore.fetchPromo(promoId)
</script>

<script lang="ts">
definePageMeta({
   layout: 'dashboard',
   middleware: 'auth'
})
</script>

<style lang="scss">
</style>

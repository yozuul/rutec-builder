<template>
<NuxtLayout>
   <PagesPartnerAddEdit
      title="Карточка партнёра"
      :partnerData="(partnerStore.currentPartner as any)"
   />
</NuxtLayout>
</template>

<script lang="ts" setup>
import { usePartnerStore } from '~/store/partnerStore'
const productId = useRoute().params.id
const partnerStore = usePartnerStore()
await partnerStore.fetchPartner(productId)
</script>

<script lang="ts">
definePageMeta({
   layout: 'dashboard',
   middleware: 'auth'
})
</script>

<style lang="scss">
</style>
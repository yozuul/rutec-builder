<template>
<NuxtLayout>
   <PagesPartnerAddEdit
      title="Карточка партнёра"
      :partnerData="partnerStore.currentPartner"
   />
</NuxtLayout>
</template>

<script lang="ts" setup>
import { usePartnerStore } from '~/store/partnerStore'
const partnerStore = usePartnerStore()
const productId = useRoute().params.id
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

{
   "id": 1,
   "companyName": "Бамперок63",
   "companyType": "Автосервис",
   "cityId": 9,
   "companySpec": "[\"Легковой\", \"Грузовой\"]",
   "companyAreas": null,
   "experience": 5,
   "email": "bamperok63@gmail.com",
   "phone": "+7‒927‒207‒28‒41",
   "companyEmployee": null,
   "employeePosition": null,
   "status": "Одобрен",
   "createdAt": "2023-06-03T08:46:57.080Z",
   "updatedAt": "2023-06-03T08:46:57.080Z",
   "city": {
       "id": 9,
       "name": "Самара"
   }
}
<template>
  <div class="citySelector">
     <el-select
         v-model="selectedCity"
         filterable
         placeholder="Выбор города"
         @change="findByCity"
      >
       <el-option
         v-for="city in cities"
         :key="city.id"
         :label="city.name"
         :value="city.name"
       />
     </el-select>
   <div class="partnerRec" v-if="partnerStore.usersPartners.length > 0">
      <el-card class="box-card">
         <!-- <template #header>
            <div class="card-header">
               <span>Рекомендация</span>
            </div>
         </template> -->
         <div v-for="company in partnerStore.usersPartners">
            <div><b>{{ company.companyName }}</b></div>
            <div>{{ company.adress }} <span v-if="company.phone">. Тел.: {{ company.phone }}</span> </div>
         </div>
   </el-card>
   </div>
  </div>
</template>

<script lang="ts" setup>
import { usePartnerStore } from '~/store/partnerStore'
const partnerStore = usePartnerStore()
try {
   await partnerStore.getCityForUser()
} catch (error) {
   console.log(error)
}
const selectedCity = ref('')
const cityData = partnerStore.usersCity
const cities = ref(cityData)

async function findByCity() {
   await partnerStore.findByCity(selectedCity.value)
   console.log('partnerStore.usersCity', partnerStore.usersPartners)
}

</script>

<style lang="scss">
.citySelector {
   margin-bottom: 15px;
}
.partnerRec {
   margin-top: 15px;
}
</style>
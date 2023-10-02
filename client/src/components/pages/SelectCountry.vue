<template>
   <div class="selectCountry">
     <el-select
         v-model="selectedCountry"
         filterable
         placeholder="Выбор страны"
         @change="findCityByCountry"
      >
       <el-option
         v-for="country in countries"
         :key="country.id"
         :label="country.name"
         :value="country.id"
       />
     </el-select>
   </div>
</template>

<script lang="ts" setup>
import { usePartnerStore } from '~/store/partnerStore'
const partnerStore = usePartnerStore()
try {
   await partnerStore.fetchCountry()
} catch (error) {
   console.log(error)
}
const selectedCountry = ref('')
const countryData = partnerStore.country.filter(item => item.id !== 0);
const countries = ref(countryData)
// console.log(countries.value);
async function findCityByCountry() {
   await partnerStore.findCityByCountry(selectedCountry.value)
   console.log(partnerStore.cities);
}
async function findByCity() {
   // await partnerStore.findByCity(selectedCountry.value)
   // console.log('partnerStore.usersCity', partnerStore.usersPartners)
}
</script>

<style lang="scss">
.citySelector {
   margin-bottom: 15px;
}
.partnerRec {
   margin-top: 15px;
}
.selectCountry {
   padding: 0 15px 10px 0;
}
</style>
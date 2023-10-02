<template>
   <div class="citySelector">
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
     <div class="selectCity">
        <el-select
            v-model="selectedCity"
            filterable
            placeholder="Выбор города"
            @change="findByCity"
         >
          <el-option
            v-for="cityData in cities"
            :key="cityData.city.id"
            :label="cityData.city.name"
            :value="cityData.city.id"
          />
        </el-select>
     </div>

   <div class="selectType">
     <el-select
         v-model="companyTypesModel"
         filterable
         placeholder="Вид деятельности"
         @change="findPartnerByType"
      >
       <el-option
         v-for="companyType in companyTypes"
         :key="companyType"
         :label="companyType"
         :value="companyType"
       />
     </el-select>
   </div>
  </div>
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
</template>

<script lang="ts" setup>
import { usePartnerStore } from '~/store/partnerStore'
const partnerStore = usePartnerStore()
try {
   await partnerStore.findCityByCountry(1)
   await partnerStore.fetchCountry()
} catch (error) {
   console.log(error)
}
const companyTypes = ['Любая деятельность', 'Магазин', 'Автосервис', 'Предприятия']
const companyTypesModel = ref(companyTypes[0])

const countryData = partnerStore.country.filter(item => item.id !== 0);
const countries = ref(countryData)

const selectedCountry = ref(countries.value.length > 0 ? countries.value[0].id : '')
const selectedCity = ref('')

const cities = ref(partnerStore.cities)

async function findCityByCountry() {
   await partnerStore.findCityByCountry(selectedCountry.value)
   cities.value = partnerStore.cities
   await partnerStore.findByCityByData({
      country: selectedCountry.value,
      city: selectedCity.value,
      type: companyTypesModel.value
   })
}
async function findByCity() {
   await partnerStore.findByCityByData({
      country: selectedCountry.value,
      city: selectedCity.value,
      type: companyTypesModel.value
   })
}
async function findPartnerByType() {
   await partnerStore.findByCityByData({
      country: selectedCountry.value,
      city: selectedCity.value,
      type: companyTypesModel.value
   })
}

// findByCity()
</script>

<style lang="scss">
.citySelector {
   width: 100%;
   @media (min-width: 850px) {
      display: flex;
   }
}
.partnerRec {
   margin-bottom: 15px;
}
.selectCountry, .selectCity {
   padding: 0 15px 10px 0;
}
.selectType {
   margin-bottom: 10px;
}
</style>
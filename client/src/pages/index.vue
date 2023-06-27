<template>
<PublicNavi />
<main class="anketa_wrapper">
   <div class="anketa">
      <PagesSelectCity />
      <div v-for="(fieldGroup, index) in newSigns" :key="index"
         :class="['optionsGroup',
            {
               inputs: fieldGroup.fieldsType === 'input',
               trouble: fieldGroup.trouble,
            },
            'groupId_' + fieldGroup.id,
         ]"
      >
         <h3>{{ fieldGroup.name }}</h3>
         <template v-if="fieldGroup.fieldsType == 'input'">
            <div v-for="field in fieldGroup.signs" class="inputGroup">
               {{ field.name }} <sup v-if="field.required"> * </sup>
               <template v-if="field.type == 'number'">
                  <el-input
                     v-model="inputs[field.id]"
                     :placeholder="field.placeholder"
                     :key="field.id"
                     :formatter="(value) => value.replace(/[^0-9\,]/g, '')"
                     @change="selectorsChangedHandler"
                  />
               </template>
               <template v-else>
                  <el-input
                     v-model="inputs[field.id]"
                     :placeholder="field.placeholder"
                     :key="field.id"
                     @change="selectorsChangedHandler"
                  />
               </template>
            </div>
         </template>
         <template v-if="fieldGroup.fieldsType == 'radio'">
            <el-radio-group v-model="selectors[fieldGroup.id]">
               <el-radio
                  v-for="field in fieldGroup.signs"
                  :label="field.name"
                  :key="fieldGroup.id"
                  @change="selectorsChangedHandler(fieldGroup.id)"
               >
                  {{ field.name }}
               </el-radio>
            </el-radio-group>
         </template>
         <template v-if="fieldGroup.fieldsType == 'checkbox'">
            <el-checkbox-group v-model="selectors[fieldGroup.id]">
               <el-checkbox
                  v-for="field in fieldGroup.signs"
                  :label="field.name"
                  :key="fieldGroup.id"
                  @change="selectorsChangedHandler"
               />
            </el-checkbox-group>
         </template>
      </div>
   </div>
   <div class="anketaText">
      <PagesAnketaText />
      <PagesPromoMaterial />
      <PagesAdminRecomendation :recomendation="adminRec" />
   </div>
   <div
      :class="['recomendationBtnDanger', { active: recomendationBtnDanger }]"
   >
      Рекомендация позвонить по номеру 8 800 101 90 07 для консультации.
   </div>
   <div
      :class="['recomendationBtn', { active: btnRecomendationActive }]"
      @click="goToPageHandler"
   > РЕКОМЕНДАЦИИ
   </div>
   <div :class="['clear_selections', {
      recActive: btnRecomendationActive,
      noSelectors: selectors.length === 0,
   }]">
      <el-button
         class="deleteProductBtn"
         size="large" type="primary"
         @click="clearSelectors"
      >  <b>Очистить выбранное</b>
         <el-icon><Refresh /></el-icon>
      </el-button>
   </div>
</main>
</template>
<script setup>
import { Refresh } from '@element-plus/icons-vue'
import { handleCheckRecomendation } from 'utils'
import {
   goToPage,
   clearAutoFailureSelectors, block_WHEN_TROUBLE_sign_group,
   clearNotEnginePartSelectors, filterRecomendation,
} from 'utils/anketa-rules'

const useFetch = useFetchData()
let newSigns = ref([])
// ----
const selectors = ref([]); const inputs = ref([])
// РЕКОМЕНДАЦИИ
const btnRecomendationActive = ref(false)
const recomendationBtnDanger = ref(false)
// БЛОКИРОВКИ
const block_WHEN_TROUBLE_group = ref(true)
const WHEN_TROUBLE_block_id = ref('')
//
const urlToGo = ref(null)
const productToGo = ref(null)
const adminRec = ref(null)

// Обработчики события при изменении селекторов
async function selectorsChangedHandler(fieldGroupId) {
   console.log('---\n');
   // При выборе "Работа двигателя не сопровождается никаким...", очищаем ранее выбранное
   clearAutoFailureSelectors(selectors, block_WHEN_TROUBLE_group, newSigns.value)
   // Блокировка выбора "Когда появились признаки", если не выбрана неисправность
   block_WHEN_TROUBLE_sign_group(selectors, block_WHEN_TROUBLE_group, newSigns.value)
   // // Очистка селекторов механизмов не относящихся к двигателю (выбор чего-то одного)
   clearNotEnginePartSelectors(selectors, fieldGroupId, newSigns.value)
   // // Проверяем рекомендации на основе выбранных параметров
   const { recomended, exceptions, fields } = await handleCheckRecomendation(
      inputs, selectors, newSigns.value
   )
   // console.log('RECOMENDED:', ...recomended)
   // console.log('EXCEPTIONS:', ...exceptions)
   // // Проверка на исключения и отображение найденных рекомендаций
   filterRecomendation([
      recomended, exceptions, fields,
      btnRecomendationActive, recomendationBtnDanger,
      urlToGo, productToGo
   ])
   adminRec.value = recomended
   toggleErrorSigns()
}

function toggleErrorSigns() {
   // console.log('block_WHEN_TROUBLE_group.value', block_WHEN_TROUBLE_group.value)
   if(block_WHEN_TROUBLE_group.value) {
      document.querySelector(WHEN_TROUBLE_block_id.value).classList.add('disable')
   } else {
      document.querySelector(WHEN_TROUBLE_block_id.value).classList.remove('disable')
   }
}

// Очистка всех селекторов
function clearSelectors() {
   selectors.value = []
   btnRecomendationActive.value = false
   recomendationBtnDanger.value = false
   block_WHEN_TROUBLE_group.value = true
   toggleErrorSigns()
}
// Переход на страницу товара
function goToPageHandler() {
   goToPage(btnRecomendationActive, urlToGo, productToGo)
}
onMounted(async () => {
   newSigns.value = await useFetch.getAllSignGroup()
   const blockGroup = newSigns.value.find(signGroup => signGroup.function === 'block')
   WHEN_TROUBLE_block_id.value = `.groupId_${blockGroup.id}`
   const element = document.querySelector(WHEN_TROUBLE_block_id.value)
   if(element) {
      element.classList.add('disable')
   }
})
</script>

<style lang="scss">
@import 'styles/main.scss';
@import 'styles/anketa.scss';
</style>
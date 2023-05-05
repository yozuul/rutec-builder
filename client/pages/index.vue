<template>
<main class="anketa_wrapper">
   <div class="anketa">
      <div v-for="(fieldGroup, index) in signs" :key="index"
         :class="['optionsGroup', {'inputs': fieldGroup.type === 'input'}]"
      >
         <h3>{{ fieldGroup.name }}</h3>
         <!-- <h3>{{ fieldGroup.name }}<sup v-if="fieldGroup.required"> * </sup></h3> -->
         <template v-if="fieldGroup.type == 'input'">
            <div v-for="field in fieldGroup.fields" class="inputGroup">
               {{ field.name }} <sup v-if="field.required"> * </sup>
               <template v-if="field.type == 'number'">
                  <el-input
                     v-model="inputs[field.id]"
                     :placeholder="field.placeholder"
                     :key="field.id"
                     @change="handleBtnProductCheck"
                     :formatter="(value: any) => value.replace(/[^0-9\.]/g, '')"
                     :parser="(value: any) => value.replace(/\$\s?|(,*)/g, '')"
                  />
               </template>
               <template v-else>
                  <el-input
                     v-model="inputs[field.id]"
                     @change="handleBtnProductCheck"
                     :placeholder="field.placeholder"
                     :key="field.id"
                  />
               </template>
            </div>
         </template>
         <template v-if="fieldGroup.type == 'radio'">
            <el-radio-group v-model="selectors[fieldGroup.id]">
               <el-radio
                  v-for="field in fieldGroup.fields"
                  :label="field.name"
                  :key="fieldGroup.id"
                  @change="handleBtnProductCheck"
               >
                  {{ field.name }}
               </el-radio>
            </el-radio-group>
         </template>
         <template v-if="fieldGroup.type == 'checkbox'">
            <el-checkbox-group v-model="selectors[fieldGroup.id]">
               <el-checkbox
                  v-for="field in fieldGroup.fields"
                  :label="field.name"
                  :key="fieldGroup.id"
                  @change="handleBtnProductCheck"
               />
            </el-checkbox-group>
         </template>
      </div>
      <div
         :class="['recomendationBtnDanger', { active: recomendationBtnDanger }]"
      >
         Рекомендация позвонить по номеру 8 800 101 90 07 для консультации.
      </div>
      <div
         :class="['recomendationBtn', { active: btnRecomendationActive }]"
         @click="handleCheckRecomendation(signs, data)"
      >
         РЕКОМЕНДАЦИИ
      </div>
   </div>
</main>
</template>

<script setup lang='ts'>
import { handleCheckRecomendation } from '@/assets/js/check-recomendations'
import { signs } from '@/assets/js/signs'
const btnRecomendationActive = ref(false)
const recomendationBtnDanger = ref(false)
function handleBtnProductCheck() {
   const activate = {
      required: 1, any: [1,2,3,4,5,10,11,12], danger: [16,17]
   }
   const selectorField = selectors.value
   let selectorFIeldOk = false
   for (let fieldName of selectorField) {
      if(fieldName) {
         const index = selectorField.indexOf(fieldName)
         const isActive = activate.any.find((any) => any === index)
         console.log(isActive)
         if(isActive) selectorFIeldOk = true
         const isDanger = checkDanger(fieldName, activate.danger)
         if(isDanger) break
      }
   }
   console.log(selectorFIeldOk)
   let inputFieldOk = false
   const inputField = inputs.value
   if(inputField.length === 0) btnRecomendationActive.value = false
   for (let input of inputField) {
      if(input && inputField.indexOf(input) == activate.required) inputFieldOk = true
   }
   if(!inputFieldOk) btnRecomendationActive.value = false
   if(inputFieldOk && selectorFIeldOk) {
      btnRecomendationActive.value = true
   }
}
function checkDanger(fieldName: any, dnagerIds: any) {
   let danger = false
   signs.map((group) =>  {
      for (let field of group.fields) {
         if(typeof fieldName === 'string') {
            if(field.name === fieldName) {
               console.log(field)
               danger = dnagerIds.some((dangerId: any) => dangerId === field.id)
            }
         }
         if(typeof fieldName === 'object') {
            for (let fieldNameFromArray of fieldName) {
               if(field.name === fieldNameFromArray) {
                  danger = dnagerIds.some((dangerId: any) => dangerId === field.id)
               }
            }
         }
      }
   })
   if(danger) {
      recomendationBtnDanger.value = true
   } else {
      recomendationBtnDanger.value = false
   }
   return danger
}

const selectors = ref([])
const inputs = ref([])
const data = {
   inputs: inputs,
   selectors: selectors,
}

onMounted(() => {
   handleCheckRecomendation(signs, data)
})
</script>

<style lang="scss">
@import '../assets/styles/main.scss'
</style>

<script lang='ts'>
</script>
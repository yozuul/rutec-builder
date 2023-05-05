<template>
<NuxtLayout>
   <Card title="Конструктор">
      <div class="constructPrevCard">
         <h3>Название товара</h3>
         <el-input
            v-model="productName"
            placeholder="Наименование"
         />
         <h3>Ссылка</h3>
         <el-input
            v-model="productUrl"
            placeholder="https://"
         />
      </div>
      Отметьте необходимые признаки
      <el-select
         v-model="selectedSigns"
         multiple
         filterable
         allow-create
         default-first-option
         :reserve-keyword="false"
         placeholder="Выберите признак" size="large"
         style="width: 100%;"
      >
         <el-option
            v-for="item in signs"
            :key="item.id"
            :label="item.name"
            :value="item.name"
         />
      </el-select>
      <br>
      <div v-for="group in selectedGroupFields" :key="group.id" class="constructorBlock">
         <h3>{{ group.name }}</h3>
         <div v-for="field in group.fields" :key="field.id">
            <div v-if="group.type == 'input'" class="constructorInputGroup">
               <label>{{ field.name }}</label>
               <div class="iputData">
                  <el-select
                     v-model="conditions[field.id]"
                     placeholder="Условие" style="width: 125px;"
                  >
                     <el-option
                        v-for="item in selectorConditios"
                        :key="item.name"
                        :value="item.name"
                     />
                  </el-select>
                  <el-input
                     v-model="inputs[field.id]"
                     :placeholder="field.placeholder"
                  />
               </div>
            </div>
            <div v-if="group.type == 'radio'" class="constructorInputGroup">
               <el-select
                  v-model="conditions[field.id]"
                  placeholder="Условие" style="width: 110px;"
               >
                  <el-option
                     v-for="item in selectorConditios"
                     :key="item.name"
                     :value="item.name"
                  />
               </el-select>
               <el-radio-group v-model="selectors[group.id]">
                  <el-radio
                     :label="field.name"
                     :key="field.name"
                  >
                     {{ field.name }}
                  </el-radio>
               </el-radio-group>
            </div>
            <div v-if="group.type == 'checkbox'" class="constructorInputGroup">
               <el-select
                  v-model="conditions[field.id]"
                  placeholder="Условие" style="width: 110px;"
               >
                  <el-option
                     v-for="item in selectorConditios"
                     :key="item.name"
                     :value="item.name"
                  />
               </el-select>
               <el-checkbox-group v-model="selectors[group.id]">
                  <el-checkbox
                     :label="field.name"
                     :key="field.name"
                  >
                     {{ field.name }}
                  </el-checkbox>
               </el-checkbox-group>
            </div>
         </div>
      </div>
   <div class="btnsControlConstructor">
      <el-button
         size="large"
         type="primary"
         @click="handleSave"
      >
         СОХРАНИТЬ
      </el-button>
   </div>
   </Card>
</NuxtLayout>
</template>

<script setup>
import { collectConstructor } from '@/assets/js/collect-constructor'
import { signs } from '@/assets/js/signs'
const productName = ref(null)
const productUrl = ref(null)
const selectedSigns = ref([])
const selectedGroup = ref([])
const inputs = ref([])
const selectors = ref([])
const conditions = ref([])
watch(selectedSigns, (newValue, oldValue) => {
   for (let signName of newValue) {
      selectedGroup.value = signs.filter((group) => newValue.includes(group.name));
   }
})
// selectedSigns.value = 'Пробег'
const selectedGroupFields = computed(() => {
  return selectedGroup.value.flatMap((group) => group);
})
function handleSave() {
   console.log(inputs)
   console.log(selectors)
   console.log(conditions)
}
onMounted(() => {
   collectConstructor(signs, data.inputs, data.selectors, data.conditions)
})
const data = {
   inputs: [
      null,
      "1.5<x<2.5",
      "Toyota"
   ],
   selectors: [
      null,
      "До 100 000 км",
      null,
      [
         "Cизый дым при запуске",
         "Дымление во время движения"
      ],
      [
         "Повышенная вибрация"
      ]
   ],
   conditions: [
      null,
      "И",
      "И",
      null,
      null,
      "И",
      null,
      null,
      null,
      null,
      "ИЛИ",
      "ИЛИ",
      "И"
   ]
}
const selectorConditios = [
   { name: 'И' }, { name: 'ИЛИ' },
]
</script>

<script>
definePageMeta({
   layout: 'dashboard',
   middleware: 'auth'
})
</script>

<style lang="scss">
@import '../../assets/styles/main.scss';

</style>
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
         <h3>Рекомендательный текст</h3>
         <el-input
            v-model="recUrl"
            placeholder="Через 500 км после применения рекомендуется дополнить эффект"
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
            <!-- <div v-if="group.type == 'radio'" class="constructorInputGroup">
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
            </div> -->
            <div v-if="group.type != 'input'" class="constructorInputGroup">
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
import { signs } from 'data'
import { getFieldsId, addProduct } from 'utils'
const productName = ref(null)
const productUrl = ref(null)
const recUrl = ref(null)
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
const selectedGroupFields = computed(() => {
  return selectedGroup.value.flatMap((group) => group);
})
async function handleSave() {
   if(!productName.value || !productUrl.value) {
      console.log('dd')
      notifyError()
      return
   }
   const ids = getFieldsId(inputs.value, selectors.value)
   const productTemplate = {
      name: productName.value,
      url: productUrl.value,
      fields: [], orFields: [],
      notFields: [], notOrFields: [],
      prioriteFields: [], prioriteOrFields: [],
   }
   for (let field of ids) {
      const fieldId = field.fieldId
      const fieldVal = field.fieldValue
      const fieldCondition = conditions.value[fieldId]
      if(fieldCondition === 'И') {
         productTemplate.fields.push({
            id: fieldId, value: fieldVal || null
         })
      }
      if(fieldCondition === 'ИЛИ') {
         productTemplate.orFields.push(fieldId)
      }
      if(fieldCondition === '!И') {
         productTemplate.notFields.push(fieldId)
      }
      if(fieldCondition === '!ИЛИ') {
         productTemplate.notOrFields.push(fieldId)
      }
      if(fieldCondition === '=И') {
         productTemplate.prioriteFields.push(fieldId)
      }
      if(fieldCondition === '=ИЛИ') {
         productTemplate.prioriteOrFields.push(fieldId)
      }
   }
   for (let checkField in productTemplate) {
      if(productTemplate[checkField]?.length === 0) {
         productTemplate[checkField] = null
      } else {
         if(typeof productTemplate[checkField] === 'object') {
            productTemplate[checkField] = JSON.stringify(productTemplate[checkField])
         }
      }
   }
   await addProduct(productTemplate)
   notifySuccsess()
}

const selectorConditios = [
   { name: 'И' }, { name: 'ИЛИ' }, { name: '!И' }, { name: '!ИЛИ' }, { name: '=И' }, { name: '=ИЛИ' }
]
onMounted(() => {
   // testProduct()
})
async function testProduct() {
   const ids = getFieldsId(data.inputs, data.selectors)
   const productFIeld = {
      name: 'Доп.Ресурс для двигателей с пробегом до 100 000 км и объемом до 1,5 л',
      url: 'https://rutec-shop.ru/products/dop-resurs-do-1-5-l',
      fields: [], orFields: []
   }
   for (let field of ids) {
      const fieldId = field.fieldId
      const fieldVal = field.fieldValue
      const fieldCondition = data.conditions[fieldId]
      if(fieldCondition === 'И') {
         productFIeld.fields.push({
            id: fieldId, value: fieldVal ? fieldVal : null
         })
      }
      if(fieldCondition === 'ИЛИ') {
         productFIeld.orFields.push(fieldId)
      }
   }
   // await addProduct(productFIeld)
   console.log(productFIeld)
}
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
</script>

<script>
definePageMeta({
   layout: 'dashboard',
   middleware: 'auth'
})
</script>

<style lang="scss">
@import 'styles/main.scss';
</style>
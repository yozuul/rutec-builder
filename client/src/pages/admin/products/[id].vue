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
      <!-- Отметьте необходимые признаки
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
      </el-select> -->
      <br>
      <!-- <div v-for="group in selectedGroupFields" :key="group.id" class="constructorBlock">
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
      </div> -->
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
import { getProductById, updateProduct } from 'utils'
const productName = ref(null)
const productUrl = ref(null)
const route = useRoute()
const productId = route.params.id
findProductAndConver(productId)
async function handleSave() {
   await updateProduct(productId, {
      name: productName.value, url: productUrl.value
   })
   notifySuccsess({
      message: 'Данные успещно сохранены'
   })
}
async function findProductAndConver(id) {
   const fieldsToParse = [
      'fields', 'orFields', 'notFields', 'notOrFields', 'prioriteFields', 'prioriteOrFields'
   ]
   let founded = await getProductById(id)
   if(founded) {
      for (let field of fieldsToParse) {
         if(founded[field]) {
            founded[field] = JSON.parse(founded[field])
         }
      }
      console.log( founded.url)
      productName.value = founded.name
      productUrl.value = founded.url
   }
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
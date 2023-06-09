<template>
<Card :title="cardTitle">
   <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="140px"
      class="demo-ruleForm"
      size="default"
      status-icon
   >
   <el-form-item label="Наименование" prop="name">
      <el-input v-model="ruleForm.name" />
   </el-form-item>
   <el-form-item label="Ссылка" prop="url">
      <el-input v-model="ruleForm.url" />
   </el-form-item>
   <el-form-item label="Рекомендации" prop="recText">
      <el-input v-model="ruleForm.recText" type="textarea" />
   </el-form-item>

    <el-form-item label="Признаки" prop="signs">
      <el-select
         v-model="ruleForm.signsName"
         multiple
         collapse-tags
         collapse-tags-tooltip
         :max-collapse-tags="2"
         placeholder="Выберите признаки"
         style="width: 100%"
         @change="pushSignsData"
      >
         <el-option v-for="item in (signsGroup as any)"
            :key="item.id"
            :label="item.name"
            :value="item.name"
         />
      </el-select>

    </el-form-item>

   <div v-for="group in (ruleForm.signsData as any)" :key="group.id" class="constructorBlock">
      <h3>{{ group.name }}</h3>
      <div v-for="field in group.signs" :key="field.id">
         <div v-if="group.fieldsType == 'input'" class="constructorInputGroup">
            <label>{{ field.name }}</label>
            <div class="iputData">
               <el-select
                  v-model="ruleForm.conditions[field.id]"
                  placeholder="Условие" style="width: 140px;"
               >
                  <el-option
                     v-for="item in selectorConditios"
                     :key="item.name"
                     :value="item.name"
                  />
               </el-select>
               <el-input
                  v-model="ruleForm.inputs[field.id]"
                  :placeholder="field.placeholder"
               />
            </div>
         </div>
         <div v-if="group.fieldsType != 'input'" class="constructorInputGroup">
            <el-select
               v-model="ruleForm.conditions[field.id]"
               placeholder="Условие" style="width: 120px;"
            >
               <el-option
                  v-for="item in selectorConditios"
                  :key="item.name"
                  :value="item.name"
               />
            </el-select>
            <el-checkbox-group v-model="ruleForm.selectors[group.id]">
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


   <el-form-item style="margin-top: 30px;">
      <el-button type="primary" @click="submitForm(ruleFormRef)">
        Сохранить товар
      </el-button>
      <el-button @click="resetForm(ruleFormRef)">Очистить</el-button>
    </el-form-item>

  </el-form>
</Card>
</template>

<script lang="ts" setup>
import { getFieldsId } from 'utils'
import type { FormInstance, FormRules } from 'element-plus'
const props = defineProps({
   cardTitle: { type: String },
   existProduct: { type: Object }
})
const useFetch = useFetchData()
const signsGroup = await useFetch.getAllSignGroup() as any

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
   name: '', url: '', recText: '',
   signsName: [] as any,
   conditions: [] as any,
   inputs: [] as any,  selectors: [] as any,
   signsData: [] as any,
})
// Если через пропс передали товар
if(props.existProduct) {
   const existGroups = new Set()
   const existGroupSign: any = []
   const product = props.existProduct
   ruleForm.name = product.name
   ruleForm.url = product.url
   ruleForm.recText = product.recText !== 'null' ? product.recText : ''
   // Сначала конвертим признаки из строки в объект
   convertProductsFields(product)
   // Далее, нам нужно пройтись по всем полям признаков, сделать выборку из групп которые там представлены, для формирования основной структуры имеющихся признаков, а также сформировать сами признаки с привязкой к группам и условиям.
   const fieldsToParse = [
      'fields', 'orFields', 'notFields', 'notOrFields', 'prioriteFields', 'prioriteOrFields'
   ]
   for (let fieldName of fieldsToParse) {
      if(product[fieldName]) {
         findSignGroup(product[fieldName], fieldName)
      }
   }
   // Все данные обработаны, теперь раскладываем по нужным переменным
   // Формируем структуру имеющихся признаков
   ruleForm.signsData = [...ruleForm.signsData, ...Array.from(existGroups)]
   // Добавляем названия выбранных признаков для отображения в выпадающем списке всех признаков
   for (let sign of ruleForm.signsData) {
      ruleForm.signsName.push(sign.name)
   }
   // Добавляем данные об отмеченных полях, значениях и условиях
   for (let sign of existGroupSign) {
      if(sign.fieldsType === 'input') {
         ruleForm.inputs[sign.id] = sign.value
      }
      if((sign.fieldsType === 'radio') || (sign.fieldsType === 'checkbox')) {
         if(!ruleForm.selectors[sign.groupId]) {
            ruleForm.selectors[sign.groupId] = []
         }
         ruleForm.selectors[sign.groupId].push(sign.name)
      }
      const conditionsSchema = {
         fields: 'И', orFields: 'ИЛИ', notFields: '!И', notOrFields: '!ИЛИ', prioriteFields: '=И', prioriteOrFields: '=ИЛИ'
      }
      ruleForm.conditions[sign.id] = conditionsSchema[sign.condition]
   }
   function findSignGroup(signData: any, condition: any) {
      for (let sign of signData) {
         for (let group of signsGroup) {
            const founded = group.signs.find((groupSign: any) => groupSign.id === sign.id)
            if(founded) {
               // Поскольку в каждой группе несколько признаков, добавляем группы в сет, чтобы отсеить дубли
               existGroups.add(group)
               // В сам признак, помимо данных о нём, добавляем ID его группы, тип полей, и условие, к которому он добавлен (fields / orFields / notFields и тд)
               existGroupSign.push({
                  ...sign, ...founded,
                  ...{ groupId: group.id },
                  ...{ fieldsType: group.fieldsType },
                  ...{ condition: condition }
               })
            }
         }
      }
   }
}

function pushSignsData() {
   if(ruleForm.signsName.length === 0) {
      ruleForm.signsData = []
      return
   }
   for (let signName of ruleForm.signsName) {
      const signsGroupData = signsGroup.find((sign: any) => sign.name === signName)
      const findData = ruleForm.signsData.find((sign: any) => sign.name === signName) as any
      if(!findData) {
         ruleForm.signsData.push(signsGroupData)
      }
   }
}

const rules = reactive<FormRules>({
   name: [
      { required: true, message: 'Укажите название товара', trigger: 'blur' },
   ],
   url: [
      { required: true, message: 'Укажите ссылку на товар', trigger: 'blur' },
   ],
   signsName: [
      { required: true, message: 'Выберите признак', trigger: 'change' },
   ]
})

const submitForm = async (formEl: FormInstance | undefined) => {
   if (!formEl) return
   await formEl.validate(async (valid, fields) => {
      if (valid) {
         const preparedData = prepareDataForSave()
         if(!props.existProduct) {
            try {
               await useFetch.addProduct(preparedData)
               ElNotification({
                  title: 'Готово',
                  message: 'Товар успешно добавлен',
                  type: 'success',
               })
            } catch (error) {
               ElNotification({
                  title: 'Ошибка',
                  message: 'Не могли добавить товар :(',
                  type: 'error',
               })
            }
         }
         if(props.existProduct) {
            try {
               await useFetch.updateProduct(props.existProduct.id, preparedData)
               ElNotification({
                  title: 'Готово',
                  message: 'Товар успешно обнволён',
                  type: 'success',
               })
            } catch (error) {
               ElNotification({
                  title: 'Ошибка',
                  message: 'Не могли обновить товар :(',
                  type: 'error',
               })
            }
         }
      } else {
         console.log('error submit!', fields)
      }
   })
}

function prepareDataForSave() {
   const ids = getFieldsId(ruleForm.inputs, ruleForm.selectors, signsGroup)
   const productTemplate: any = {
      name: ruleForm.name, url: ruleForm.url, recText: ruleForm.recText,
      fields: [], orFields: [],
      notFields: [], notOrFields: [],
      prioriteFields: [], prioriteOrFields: [],
   }
   for (let field of ids) {
      const fieldId = field.fieldId
      const fieldVal = field.fieldValue
      const fieldCondition = ruleForm.conditions[fieldId]
      if(fieldCondition === 'И') {
         productTemplate.fields.push({
            id: fieldId, value: fieldVal || null
         })
      }
      if(fieldCondition === 'ИЛИ') {
         productTemplate.orFields.push({ id: fieldId })
      }
      if(fieldCondition === '!И') {
         productTemplate.notFields.push({ id: fieldId })
      }
      if(fieldCondition === '!ИЛИ') {
         productTemplate.notOrFields.push({ id: fieldId })
      }
      if(fieldCondition === '=И') {
         productTemplate.prioriteFields.push({ id: fieldId })
      }
      if(fieldCondition === '=ИЛИ') {
         productTemplate.prioriteOrFields.push({ id: fieldId })
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
   return productTemplate
}

const resetForm = (formEl: FormInstance | undefined) => {
   if (!formEl) return
   formEl.resetFields()
   ruleForm.signsName = []
   ruleForm.signsData = []
}

const selectorConditios = [
   { name: 'И' }, { name: 'ИЛИ' }, { name: '!И' }, { name: '!ИЛИ' }, { name: '=И' }, { name: '=ИЛИ' }
]

</script>


<style lang="scss">
@import '@/assets/styles/add-edit-cards.scss';
</style>
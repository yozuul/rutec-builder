<template>
<Card :title="cardTitle">
   <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="130px"
      class="add-signs-form"
      size="default"
      status-icon
   >
      <el-form-item label="Позиция" prop="orderPosition" class="signGroupOrderNum">
         <el-input v-model.number="ruleForm.orderPosition" placeholder="0" />
      </el-form-item>
      <el-form-item label="Название" prop="name">
         <el-input v-model="ruleForm.name" placeholder="Как называется группа признаков" />
      </el-form-item>
      <el-form-item label="Тип группы" prop="part">
         <el-select v-model="ruleForm.part" placeholder="Выберите тип">
         <el-option label="Авто" value="car" />
         <el-option label="Двигатель" value="engine" />
         <option-with-tooltip title="Объединяются в общуюю группу, внутри которой можно выбрать вариант только одной группы">
            <el-option label="Прочие узлы" value="unit" />
         </option-with-tooltip>
         <el-option label="Сервис" value="service" />
         <el-option label="Другое" value="other" />
         </el-select>
      </el-form-item>
      <el-form-item label="Тип полей" prop="fieldsType">
         <el-select v-model="ruleForm.fieldsType" placeholder="Выберите тип">
         <el-option label="Поле ввода" value="input" />
         <el-option label="Выбор нескольких" value="checkbox" />
         <el-option label="Выбор одного" value="radio" />
         </el-select>
      </el-form-item>

      <el-form-item label="Функция" prop="function" class="spesialFunctionWrapper">
         <el-tooltip
            class="box-item"
            effect="dark"
            content="Привязка доп. функционала, например очистка полей, блокировка групп и тд"
            placement="right"
         >
            <el-input v-model="ruleForm.function" placeholder="Идентификатор" />
         </el-tooltip>
      </el-form-item>

      <el-form-item label="Неисправность" prop="trouble">
         <el-tooltip
            class="box-item"
            effect="dark"
            content="В полям группы будут применяться общие правила признаков неисправностей"
            placement="right"
         >
            <el-switch v-model="ruleForm.trouble" />
         </el-tooltip>
      </el-form-item>

      <template v-if="signsForms.length > 0">
      <div class="border signsHelp">
         <add-sign-help-buttons
            btnText="Неисправность"
            tooltip="Если признак относится к неисправностям"
         />
         <add-sign-help-buttons
            btnText="Предупреждение"
            tooltip="Выводить предупреждение позвонить по телефону"
         />
         <add-sign-help-buttons
            btnText="Блокировать рекомендации"
            tooltip="Если в рекомендациях есть товар, кнопка перехода будет заблокирована"
         />
         <add-sign-help-buttons
            btnText="Особое"
            tooltip="Применяется к неполадкам, если привязан специализированный товар, например СтукаСтой, Экспресс-раскоксовка и тд"
         />
         <add-sign-help-buttons
            btnText="Обязательное"
            tooltip="Кнопка рекомендаций будет неактивна, если данное поле будет пустое"
         />
      </div>

      <template v-for="sign in signsForms" :key="sign.id">
         <div class="border"></div>
         <div class="inline_form">
            <el-form-item label="Название">
               <el-input v-model="sign.name" placeholder="Название признака" />
               <el-button type="danger" @click="handleDeleteSign(sign.id)">
                  <el-icon><delete /></el-icon>
               </el-button>
            </el-form-item>
         </div>
         <div v-if="inputTypeInput" class="inline_form">
            <el-form-item label="Плейсхолдер">
               <el-input v-model="sign.placeholder" placeholder="Текст в пустом поле" />
            </el-form-item>
            <el-form-item label="Только числа" prop="numbersOnly">
               <el-switch v-model="sign.numbersOnly" />
            </el-form-item>
         </div>

         <el-form-item label="Свойства">
            <el-checkbox-group v-model="sign.props">
               <el-checkbox label="Неисправность" name="type" />
               <el-checkbox label="Предупреждение" name="type" />
               <el-checkbox label="Блокировать рекомендации" name="type" />
               <el-checkbox label="Особое" name="type" />
               <el-checkbox label="Обязательное" name="type" />
            </el-checkbox-group>
         </el-form-item>
      </template>
      </template>

      <el-form-item>
         <el-button type="success"
            @click="addSign"
         >
            Добавить признак
         </el-button>
      </el-form-item>
      <el-form-item>
         <el-button type="primary" @click="submitForm(ruleFormRef)">
         Сохранить группу&nbsp;
         </el-button>
         <el-button @click="resetForm(ruleFormRef)">Очистить</el-button>
      </el-form-item>
   </el-form>
</Card>
</template>

<script lang="ts" setup>
import type { FormInstance, FormRules } from 'element-plus'
import { Delete } from '@element-plus/icons-vue'
const useFetch = useFetchData()
const props = defineProps({
   cardTitle: {
      type: String,
   },
   existSign: {
      type: Object,
   },
})
const existSignGroupData = props.existSign
const ruleFormRef = ref<FormInstance>()
const signsForms :any = ref([])
const inputTypeInput = ref(false)

const ruleForm = reactive({
   orderPosition: 0,
   name: '',
   part: '',
   fieldsType: '',
   trouble: false,
   function: '',
   signs: []
})

function addSign(data?: any) {
   if(ruleForm.fieldsType === 'input') {
      inputTypeInput.value = true
   } else {
      inputTypeInput.value = false
   }
   const index = signsForms.value.length
   const signsElements: any = {
      required: data ? data.requred : false,
      id: data ? data.id : index,
      name: data ? data.name : '',
      props: [],
      placeholder: data ? data.placeholder : '',
      numbersOnly: data ? data.numbersOnly : false
   }
   signsForms.value.push(
      reactive(signsElements)
   )
}

if(existSignGroupData) {
   ruleForm.orderPosition = existSignGroupData.orderPosition
   ruleForm.name = existSignGroupData.name
   ruleForm.part = existSignGroupData.part
   ruleForm.fieldsType = existSignGroupData.fieldsType
   ruleForm.trouble = existSignGroupData.trouble
   ruleForm.function = existSignGroupData.function
   if(existSignGroupData.signs.length > 0) {
      for (let sign of existSignGroupData.signs) {
         addSign(sign)
      }
   }
}

const rules = reactive<FormRules>({
   orderPosition: [
      { required: true, message: 'Укажите порядковый номер в анкете', trigger: 'blur' },
      { type: 'number', message: 'Должно быть число' },
   ],
   name: [
      { required: true, message: 'Укажите название группы признаков', trigger: 'blur' }
   ],
   part: [
      {
         required: true,
         message: 'Укажите принадлежность к типу группы',
         trigger: 'change',
      },
   ],
   fieldsType: [
      {
         required: true,
         message: 'Укажите тип полей',
         trigger: 'change',
      },
   ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
   if (!formEl) return
   await formEl.validate(async (valid, fields) => {
      if (valid) {
         const data: any = ruleForm
         data.signs = []
         for (let sign of (signsForms.value as any)) {
            data.signs.push({
               name: sign.name,
               placeholder: sign.placeholder ? sign.placeholder : null,
               trouble: sign.props.includes('Неисправность') ? true : false,
               alert: sign.props.includes('Предупреждение') ? true : false,
               blockRecomendation: sign.props.includes('Блокировать рекомендации') ? true : false,
               special: sign.props.includes('Особое') ? true : false,
               required: sign.props.includes('Обязательное') ? true : false,
               numbersOnly: sign.numbersOnly,
            })
         }
         await fetchSigns(data)
      } else {
         console.log('error submit!', fields)
      }
   })
}

async function fetchSigns(data: any) {
   if(!existSignGroupData) {
      try {
         await useFetch.addSignGroup(data)
         ElNotification({
            title: 'Готово',
            message: 'Группа признаков успешно добавлена',
            type: 'success',
         })
         // useRouter().push('/admin/signs')
      } catch (error) {
         console.log(error)
         ElNotification({
            title: 'Ошибка',
            message: 'Не могли добавить группу признаков :(',
            type: 'error',
         })
      }
   }
   if(existSignGroupData) {
      try {
         await useFetch.updateSignGroup(existSignGroupData.id, data)
         ElNotification({
            title: 'Готово',
            message: 'Группа успешно обновлена',
            type: 'success',
         })
         // useRouter().push('/admin/signs')
      } catch (error) {
         console.log(error)
         ElNotification({
            title: 'Ошибка',
            message: 'Не могли обновить группу признаков :(',
            type: 'error',
         })
      }
   }
}

const handleDeleteSign = (id: any) => {
   signsForms.value = signsForms.value.filter((value: any, index: any) => {
      return id !== index
   })
}

const resetForm = (formEl: FormInstance | undefined) => {
if (!formEl) return
   formEl.resetFields()
   signsForms.value = []
   ruleForm.trouble = false
}
</script>

<style lang="scss">
.signGroupOrderNum .el-input__wrapper {
   max-width: 60px !important;
   input {
      text-align: center;
   }
}
.spesialFunctionWrapper {
   .el-input {
      max-width: 600px;
   }
}
</style>
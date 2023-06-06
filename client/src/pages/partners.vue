<template>
<PublicNavi />
<main class="anketa_wrapper partnersPage">
   <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="170px"
      size="default"
      class="partnersForm"
      status-icon
   >
      <el-form-item label="Наименование" prop="companyName">
         <el-input v-model="ruleForm.companyName" placeholder="Название компании" />
      </el-form-item>

      <el-form-item label="Деятельноcть" prop="companyType">
         <el-select
            v-model="ruleForm.companyType"
            @change="checkVisiblity"
            :placeholder="ruleForm.companyType ? ruleForm.companyType : 'Сфера дейятельности'"
         >
            <el-option label="Магазин" value="Магазин" />
            <el-option label="Автосервис" value="Автосервис" />
            <el-option label="Предприятие" value="Предприятие" />
         </el-select>
      </el-form-item>

      <el-form-item label="Город" prop="city">
         <el-select
            v-model="ruleForm.city"
            :placeholder="ruleForm.city ? ruleForm.city : 'Выберите город'"
            @change="checkVisiblity"
            filterable
         >
            <el-option v-for="city in allCities"
               :key="city.id"
               :label="city.name"
               :value="city.name"
            />
         </el-select>
      </el-form-item>

      <el-form-item
         v-if="fieldVisibility.newCityData"
         @change="checkVisiblity" label="Новый город" prop="newCityData"
      >
         <el-input v-model="ruleForm.newCityData" placeholder="Город" />
      </el-form-item>

      <el-form-item label="Адрес" prop="adress">
         <el-input v-model="ruleForm.adress" placeholder="Адрес компании" />
      </el-form-item>

      <el-form-item v-if="fieldVisibility.companyAreas"
         label="Вид деятельности" prop="companyAreas"
      >
         <el-input v-model="ruleForm.companyAreas" placeholder="Вид деятельности предприятия" />
      </el-form-item>

      <el-form-item label="Опыт работы" prop="experience">
         <el-input
            v-model="ruleForm.experience" placeholder="0"
            :formatter="(value: any) => value.replace(/\D/g, '')"
         />
      </el-form-item>

      <el-form-item label="Вид транспорта" prop="companySpec">
         <el-checkbox-group v-model="ruleForm.companySpec">
            <el-checkbox label="Легковой" name="type" />
            <el-checkbox label="Грузовой" name="type" />
            <el-checkbox label="Коммерческий транспорт" name="type" />
            <el-checkbox label="Специальная техника" name="type" />
            <el-checkbox label="Все виды транспорта" name="type" />
         </el-checkbox-group>
      </el-form-item>

      <el-form-item v-if="fieldVisibility.companyEmployee"
         label="Представитель" prop="companyEmployee"
      >
         <el-input v-model="ruleForm.companyEmployee" placeholder="Ф.И.О. представителя компании" />
      </el-form-item>

      <el-form-item v-if="fieldVisibility.employeePosition"
         label="Должность" prop="employeePosition"
      >
         <el-input v-model="ruleForm.employeePosition" placeholder="Занимаемая должность" />
      </el-form-item>

      <el-form-item label="Email" prop="email">
         <el-input v-model="ruleForm.email" placeholder="info@company.ru" />
      </el-form-item>

      <el-form-item label="Телефон" prop="phone" class="phoneMask">
         <el-input
            v-model="ruleForm.phone" placeholder="+7-495-555-66-77"
         />
      </el-form-item>

      <!-- <el-form-item prop="offer">
         <el-checkbox
            v-model="ruleForm.offer"
            label="Получить коммерческое предложение" name="offer"
         />
      </el-form-item> -->

      <el-form-item>
         <el-button
            type="primary"
            @click="submitForm(ruleFormRef)"
         >
            Получить коммерческое предложение
         </el-button>
         <el-button @click="resetForm(ruleFormRef)">Очистить</el-button>
      </el-form-item>

      <el-form-item prop="accept">
         <el-checkbox
            v-model="ruleForm.accept"
            label="Согласие на обработку персональных данных" name="accept"
         />
      </el-form-item>
   </el-form>
</main>
</template>

<script setup lang="ts">

import IMask from 'imask';
import type { FormInstance, FormRules } from 'element-plus'
const partnerStore = usePartnerStore()
await partnerStore.fetchCity()
const allCities: any = partnerStore.cities

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
   companyName: '',
   companyType: '',
   city: '',
   adress: '',
   newCityData: '',
   companyAreas: '',
   experience: 0,
   companySpec: [],
   email: '',
   phone: '',
   companyEmployee: '',
   employeePosition: '',
   status: 'Ожидает',
   accept: '',
   offer: true,
})

const fieldVisibility = reactive({
   newCityData: false,
   companyAreas: false,
   companyEmployee: false,
   employeePosition: false,
})

function checkVisiblity() {
   fieldVisibility.newCityData = false
   fieldVisibility.companyAreas = false
   fieldVisibility.companyEmployee = false
   fieldVisibility.employeePosition = false
   if(ruleForm.city === 'Новый город') {
      fieldVisibility.newCityData = true
   }
   showHiddenCompanyFields()
}
onMounted(() => {
   showHiddenCompanyFields()
   const inputElement = document.querySelector('.phoneMask .el-input__inner') as HTMLElement
   const maskOptions = {
      mask: '+{7} (000) 000-00-00'
   }
   if(inputElement) {
      IMask(inputElement, maskOptions);
   }
})
function showHiddenCompanyFields() {
   if(ruleForm.companyType === 'Предприятие') {
      fieldVisibility.companyAreas = true
      fieldVisibility.companyEmployee = true
      fieldVisibility.employeePosition = true
   }
}

const rules = reactive<FormRules>({
   companyName: [
      { required: true, message: 'Название обязательно', trigger: 'blur' },
   ],
   companyType: [
      { required: true, message: 'Тип обязателен', trigger: 'blur' },
   ],
   city: [
      { required: true, message: 'Город обязателен', trigger: 'change' },
   ],
   adress: [
      { required: true, message: 'Адрес обязателен', trigger: 'change' },
   ],
   newCityData: [
      { required: true, message: 'Укажите название города', trigger: 'change' },
   ],
   companySpec: [
      { required: true, message: 'Укажите тип обслуживаемых авто', trigger: 'change' },
   ],
   companyEmployee: [
      { required: true, message: 'Укажите свое Ф.И.О.', trigger: 'change' },
   ],
   employeePosition: [
      { required: true, message: 'Укажите свою должность', trigger: 'change' },
   ],
   email: [
      { required: true, message: 'Email обязателен', trigger: 'blur' },
      { type: 'email', message: 'Укажите корректный email', trigger: ['blur', 'change'] },
   ],
   accept: [
      { required: true, trigger: 'change', message: 'Необходимо ваше согласие' }
   ]
})

const submitForm = async (formEl: FormInstance | undefined) => {
   if (!formEl) return
   await formEl.validate(async (valid, fields) => {
      if (valid) {
         try {
            await partnerStore.addPartner(ruleForm)
            ElNotification({
               title: 'Готово',
               message: 'Заявка успешно отправлена',
               type: 'success',
            })
            resetForm(formEl)
         } catch (error) {
            ElNotification({
               title: 'Ошибка',
               message: 'Не могли отправить заявку :(',
               type: 'error',
            })
         }
      } else {
         console.log('error submit!', fields)
      }
   })
}

const resetForm = (formEl: FormInstance | undefined) => {
   if (!formEl) return
   formEl.resetFields()
   ruleForm.city = ''
}
</script>

<style lang="scss">
@import '@/assets/styles/add-edit-cards.scss';
</style>

<script lang="ts">
import { usePartnerStore } from '~/store/partnerStore'
</script>
<template>
<Card :title="cardTitle">
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

      <el-form-item label="Тип" prop="companyType">
         <el-select
            v-model="ruleForm.companyType"
            @change="checkVisiblity"
            :placeholder="ruleForm.companyType ? ruleForm.companyType : 'Тип компании'"
         >
            <el-option label="Магазин" value="Магазин" />
            <el-option label="Автосервис" value="Автосервис" />
            <el-option label="Предприятие" value="Предприятие" />
         </el-select>
      </el-form-item>

      <el-form-item label="Страна" prop="country">
         <el-select
            v-model="ruleForm.country"
            :placeholder="ruleForm.country ? ruleForm.country : 'Выберите страну'"
            @change="checkVisiblity"
            filterable
         >
            <el-option v-for="country in allCountries"
               :key="country.id"
               :label="country.name"
               :value="country.name"
            />
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
         <el-input v-model="ruleForm.companyAreas" placeholder="Сфера деятельности предприятия" />
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

      <el-form-item label="Количество авто" prop="companyAreas">
         <el-input v-model="ruleForm.companyAreas" placeholder="шт" />
      </el-form-item>

      <el-form-item label="Email" prop="email">
         <el-input v-model="ruleForm.email" placeholder="Электронная почта" />
      </el-form-item>

      <el-form-item label="Телефон" prop="phone" class="phoneMask">
         <el-input
            v-model="ruleForm.phone" placeholder="Телефон"
         />
      </el-form-item>

      <el-form-item label="Статус" prop="status">
         <el-select
            v-model="ruleForm.status"
            placeholder="Статус"
         >
            <el-option label="Ожидает" value="Ожидает" />
            <el-option label="Одобрен" value="Одобрен" />
            <el-option label="Отклонён" value="Отклонён" />
         </el-select>
      </el-form-item>

      <el-form-item>
         <el-button type="primary" @click="submitForm(ruleFormRef)">Сохранить</el-button>
         <el-button @click="resetForm(ruleFormRef)">Очистить</el-button>
      </el-form-item>
   </el-form>
</Card>
</template>

<script lang="ts" setup>
import IMask from 'imask';
import type { FormInstance, FormRules } from 'element-plus'
const partnerStore = usePartnerStore()
await partnerStore.fetchCountry()
await partnerStore.fetchCity()
const allCities: any = partnerStore.cities
const allCountries: any = partnerStore.country

const props = defineProps({
   cardTitle: { type: String },
   partnerData: { type: Object }
})
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
   companyName: '',
   companyType: '',
   country: '',
   city: '',
   adress: '',
   newCityData: '',
   companyAreas: 10,
   experience: 0,
   companySpec: [],
   email: '',
   phone: '',
   companyEmployee: '',
   employeePosition: '',
   status: 'Одобрен',
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
   if(props.partnerData) {
      const partner = props.partnerData
      console.log('partner', partner);
      // console.log(ruleForm.country);
      ruleForm.companyName = partner.companyName
      ruleForm.companyType = partner.companyType
      ruleForm.country = partner.country.name
      ruleForm.city = partner.city.name
      ruleForm.adress = partner.adress
      ruleForm.companySpec = partner.companySpec
      ruleForm.companyAreas = partner.companyAreas
      ruleForm.experience = partner.experience
      ruleForm.email = partner.email
      ruleForm.phone = partner.phone
      ruleForm.companyEmployee = partner.companyEmployee
      ruleForm.employeePosition = partner.employeePosition
      ruleForm.status = partner.status
      showHiddenCompanyFields()
      console.log(partner);
   }

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
})

const submitForm = async (formEl: FormInstance | undefined) => {
   if (!formEl) return
   await formEl.validate(async (valid, fields) => {
      if (valid) {
         if(!props.partnerData) {
            try {
               await partnerStore.addPartner(ruleForm)
               ElNotification({
                  title: 'Готово',
                  message: 'Партнёр успешно добавлен',
                  type: 'success',
               })
            } catch (error) {
               ElNotification({
                  title: 'Ошибка',
                  message: 'Не могли добавить партнёра :(',
                  type: 'error',
               })
            }
         }
         if(props.partnerData) {
            try {
               await partnerStore.updatePartner(props.partnerData.id, ruleForm)
               ElNotification({
                  title: 'Готово',
                  message: 'Партнёр успешно обновлён',
                  type: 'success',
               })
            } catch (error) {
               ElNotification({
                  title: 'Ошибка',
                  message: 'Не могли обновить партнёра :(',
                  type: 'error',
               })
            }
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

<script lang="ts">
import { usePartnerStore } from '~/store/partnerStore'
</script>

<style lang="scss">
@import '@/assets/styles/add-edit-cards.scss';
</style>
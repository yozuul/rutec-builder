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
                     :formatter="(value) => value.replace(/[^0-9\.]/g, '')"
                     :parser="(value) => value.replace(/\$\s?|(,*)/g, '')"
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
         v-html="recomendationText"
         :class="['recomendationBtn', { active: btnRecomendationActive }]"
         @click="goToPage"
      >

      </div>
   </div>
   <div class="anketaText">
      <h1>Автохимия <br>для человека</h1>
         <p>Теперь вы можете сами улучшить работу двигателя и узлов трансмиссии своего автомобиля: увеличить срок эксплуатации, повысить надежность и экономичность.<br />Для этого достаточно внимательно прочитать и заполнить необходимые поля и отметить характеристики  в различных категориях.<br />В результате вам будет рекомендован один из продуктов компании «РУТЕК», который позволит улучшить работу двигателя, узлов трансмиссии указанного автомобиля.</p>
         <p>Применять добавки RUTEC просто и быстро. В этом убедились десятки тысяч автовладельцев.<br /> Это подтверждают отзывы на маркетплейсах (только на OZON отзывов около 4000).</p>
         <p>Купить рекомендованный товар можно как на маркетппейсах, так и в интернет-магазине <a href="https://rutec-shop.ru/" target="_blank">rutec-shop.ru</a>.</p>
         <p>Если вы хотите получить скидку в 15% на покупку в интернет-магазине производителя добавок RUTEC, то введите в поле ниже адрес вашей электронной почты, на который мы отправим купон на скидку. </p>
         <p>Просто и быстро. И в любом месте. <br/>И не надо ездить по сервисам.</p>
         <div class="promoBlock">
            <div class="rutecLogo">
               <img src="~/assets/images/rutec-logo.png" width="100" alt="">
            </div>
            <h3>Email для получения скидки:</h3>
            <el-input
               v-model="promoEmail"
               size="large" placeholder="mail@mail.ru"
               class="getPromoInput"
            />
            <el-button
               type="success"
               size="large" placeholder="mail@mail.ru"
               class="getPromoBtn"
               :disabled="isDisabled"
               @click="getPromo"
            >ХОЧУ СКИДКУ!</el-button>
         </div>
   </div>
</main>
</template>
<script setup>
import { handleCheckRecomendation, addUsers } from 'utils'
import { ElMessage } from 'element-plus'
import { signs } from 'data'
const selectors = ref([])
const inputs = ref([])
const btnRecomendationActive = ref(false)
const recomendationBtnDanger = ref(false)
const promoEmail = ref(null)
const isDisabled = computed(() => !promoEmail.value)
const recomendationText = ref('РЕКОМЕНДАЦИИ')
const urlToGo = ref(null)
const productToGo = ref(null)
const text = ref('')
function goToPage() {
   if(btnRecomendationActive.value) {
      if(urlToGo.value) {
         if(productToGo.value?.recText) {
            text.value = productToGo.value.recText
            openHTML()
            setTimeout(() => {
               window.open(urlToGo.value, '_blank')
            }, 3000);
         } else {
            window.open(urlToGo.value, '_blank');
         }
      } else {
         notifyError({
            title: 'Ошибка',
            message: 'Указанных параметров не достаточно для рекомендации',
         })
      }
   }
}
function seeRecomendation(recomended, fields) {
   const badSigns = [7,8,9,10,11,12,13,14,15]
   // console.log(recomended)
   if(recomended.length > 0) {
      let allRecomended = ''
      let prioriteRecomended = ''
      recomendationText.value = ''
      for (let product of recomended) {
         if(product.prioriteFields || product.prioriteOrFields) {
            prioriteRecomended += product.name
            urlToGo.value = product.url
         }
         if(!product.exception) {
            allRecomended += product.name
            urlToGo.value = product.url
            productToGo.value = product
         }
         if(product.exception) {
            const checkNumber = fields.filter((userField) => badSigns.includes(userField.fieldId))
            if(checkNumber.length > 1) {
               prioriteRecomended = product.name
               urlToGo.value = product.url
            } else {
               recomendationText.value = 'РЕКОМЕНДАЦИИ'
            }
         }
      }
      if(prioriteRecomended) {
         recomendationText.value = prioriteRecomended
      } else {
         recomendationText.value = allRecomended ? allRecomended : 'РЕКОМЕНДАЦИИ'
         console.log(prioriteRecomended)
         if(!allRecomended) {
            btnRecomendationActive.value = false
         }
         // productToGo.value = product
      }
      // console.log('allRecomended:', allRecomended)
      // console.log('prioriteRecomended:', prioriteRecomended)
   }
   else {
      recomendationText.value = 'РЕКОМЕНДАЦИИ'
   }
}
async function handleBtnProductCheck() {
   console.log('\n---\n')
   // console.log('USERS INPUTS:', inputs.value)
   // console.log('USERS SELECTORS:', selectors.value)
   const activate = {
      required: 1, any: [1,2,3,4,5,10,11,12], danger: [16,17]
   }
   const selectorField = selectors.value
   let selectorFIeldOk = false
   for (let fieldName of selectorField) {
      if(fieldName) {
         const index = selectorField.indexOf(fieldName)
         const isActive = activate.any.find((any) => any === index)
         // console.log(isActive)
         if(isActive) selectorFIeldOk = true
         const isDanger = checkDanger(fieldName, activate.danger)
         if(isDanger) break
      }
   }
   // console.log(selectorFIeldOk)
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
   if(recomendationText.value && recomendationText.value !== 'РЕКОМЕНДАЦИИ') {
      btnRecomendationActive.value = true
   }

   const { recomended, fields } = await handleCheckRecomendation(inputs.value, selectors.value)
   console.log('recomended', recomended)
   seeRecomendation(recomended, fields)
}
function checkDanger(fieldName, dnagerIds) {
   let danger = false
   signs.map((group) =>  {
      for (let field of group.fields) {
         if(typeof fieldName === 'string') {
            if(field.name === fieldName) {
               // console.log(field)
               danger = dnagerIds.some((dangerId) => dangerId === field.id)
            }
         }
         if(typeof fieldName === 'object') {
            for (let fieldNameFromArray of fieldName) {
               if(field.name === fieldNameFromArray) {
                  danger = dnagerIds.some((dangerId) => dangerId === field.id)
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
const openHTML = () => {
  ElMessage({
    dangerouslyUseHTMLString: true,
    message: text.value,
    type: 'success',
    duration: 5000
  })
}
async function getPromo() {
   const addUser = await addUsers({
      email: promoEmail.value
   })
   if(addUser) {
      notifySuccsess({
         message: 'Отправили вам промокод на скидку'
      })
   }
}
onMounted(() => {
   // handleCheckRecomendation(signs, data)
})
</script>

<style lang="scss">
@import 'styles/main.scss';
#message_3 {
   max-width: 300px;
}
</style>
<template>
   <main class="anketa_wrapper">
      <div class="anketa">
         <div v-for="(fieldGroup, index) in signs" :key="index"
            :class="['optionsGroup',
               {
                  inputs: fieldGroup.type === 'input',
                  disable: selectorsNotActive,
               },
               'groupId_' + fieldGroup.id,
            ]"
         >
            <h3>{{ fieldGroup.name }} </h3>
            <template v-if="fieldGroup.type == 'input'">
               <div v-for="field in fieldGroup.fields" class="inputGroup">
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
            <template v-if="fieldGroup.type == 'radio'">
               <el-radio-group v-model="selectors[fieldGroup.id]">
                  <el-radio
                     v-for="field in fieldGroup.fields"
                     :label="field.name"
                     :key="fieldGroup.id"
                     @change="selectorsChangedHandler(fieldGroup.id)"
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
                     @change="selectorsChangedHandler"
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
            @click="goToPageHandler"
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
   import { ElMessage } from 'element-plus'
   import { Refresh } from '@element-plus/icons-vue'
   import { signs } from 'data'
   import { handleCheckRecomendation } from 'utils'
   import {
      goToPage, clearAutoFailureSelectors, clearNotEnginePartSelectors, filterRecomendation, blockWhenErrorSignsAppeared
   } from 'utils/anketa-rules'
   const selectors = ref([]); const inputs = ref([]);
   const btnRecomendationActive = ref(false)
   const recomendationBtnDanger = ref(false)
   const selectorsNotActive = ref(false)
   const blockWhenErrorSignsAppearedGroup = ref(true)
   const promoEmail = ref(null)
   const isDisabled = computed(() => !promoEmail.value)
   const recomendationText = ref('РЕКОМЕНДАЦИИ')
   const urlToGo = ref(null)
   const productToGo = ref(null)
   const text = ref('')
   // Обработчики события при изменении селекторов
   async function selectorsChangedHandler(fieldGroupId) {
      selectorsNotActive.value = false; console.log('---\n');
      // При выборе "Работа двигателя не сопровождается никаким...", очищаем ранее выбранное
      clearAutoFailureSelectors(selectors, selectorsNotActive, blockWhenErrorSignsAppearedGroup)
      // Очистка селекторов механизмов не относящихся к двигателю (выбор чего-то одного)
      clearNotEnginePartSelectors(selectors, fieldGroupId)
      // Блокировка выбора "Когда появились признаки", если не выбрана неисправность
      blockWhenErrorSignsAppeared(selectors, blockWhenErrorSignsAppearedGroup)
      // Проверяем рекомендации на основе выбранных параметров
      const { recomended, exceptions, fields } = await handleCheckRecomendation(inputs, selectors)
      console.log('RECOMENDED:', ...recomended)
      // console.log('EXCEPTIONS:', ...exceptions)
      // Проверка на исключения и отображение найденных рекомендаций
      filterRecomendation([
         recomended, exceptions, fields,
         btnRecomendationActive, recomendationBtnDanger,
         urlToGo, productToGo
      ])
      toggleErrorSigns()
   }
   function toggleErrorSigns() {
      if(blockWhenErrorSignsAppearedGroup.value) {
         document.querySelector('.groupId_5').classList.add('disable')
      } else {
         document.querySelector('.groupId_5').classList.remove('disable')
      }
   }
   // Очистка всех селекторов
   function clearSelectors() {
      selectors.value = []
      btnRecomendationActive.value = false
      recomendationBtnDanger.value = false
      blockWhenErrorSignsAppearedGroup.value = true
      toggleErrorSigns()
   }
   // Переход на страницу товара
   function goToPageHandler() {
      goToPage(btnRecomendationActive, urlToGo, productToGo, text, openHTML)
   }
   const openHTML = () => {
     ElMessage({
       showClose: true,
       dangerouslyUseHTMLString: true,
       message: text.value,
       type: 'success',
       duration: 0
     })
   }
   async function getPromo() {
      const addUser = await sendPromo({
         email: promoEmail.value
      })
      if(addUser) {
         notifySuccsess({ message: 'Отправили вам промокод на скидку' })
      }
   }
   onMounted(() => {
      document.querySelector('.groupId_5').classList.add('disable')
   })
   </script>

   <style lang="scss">
   @import 'styles/main.scss';
   #message_3 {
      max-width: 300px;
   }
   .groupId_2, .groupId_3, .groupId_4, .groupId_5 {
      &.disable {
         opacity: .5;
         pointer-events: none;
         * {
            cursor: default;
         }
      }
   }
   .clear_selections {
      position: fixed;
      bottom: 10px;
      z-index: 99;
      b {
         display: none;
         font-weight: normal;
         padding-right: 10px;
      }
      .el-button--large {
         --el-button-size: 30px
      }
      @media (min-width: 1400px) {
         b {
            display: block;
         }
         .el-button--large {
            --el-button-size: 40px
         }
      }
      button {
         border: 1px solid #fff !important;
      }
      &.noSelectors {
         button {
            background-color: transparent !important;
            pointer-events: none;
            opacity: .7;
         }
      }
   }
   .optionsGroup.groupId_1 {
      h3 {
         position: relative;
         &::after {
            display: block;
            content: '*';
            color: red;
            position: absolute;
            top: -7px;
            left: 60px;
            font-size: 9px;
         }
         @media (min-width: 1400px) {
            &::after {
               left: 70px;
            }
         }
      }
   }
   .anketa sup {
      position: absolute;
      margin: -5px 0 0 4px;
   }
   </style>
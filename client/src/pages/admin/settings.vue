<template>
  <NuxtLayout>
    <Card title="Настройки">
      <div class="constructPrevCard">
         <h3>Промокод</h3>
         <el-input
            v-model="promo"
            placeholder="ABCD-EFGH-IGKL-LMNO"
         />
         <h3>Email рассылка</h3>
         <div class="wrappFlex">
            <el-input
               v-model="email"
               placeholder="mail@mail.ru"
            />
            <el-input
               v-model="password"
               placeholder="Пароль приложения для выполнения рассылки"
               type="password"
            />
         </div>
         <h3>Telegram Bot Token</h3>
         <el-input
            v-model="tgToken"
            placeholder="6225550594:AAG7_yPZvW2ynjuNm6KhVNGvHWvssWhd73Q"
         />
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

<script setup lang='ts'>
import { getSettings, updateSettings } from 'utils'
const promo = ref(null)
const email = ref(null)
const password = ref(null)
const tgToken = ref(null)
const useToken = useCookie('accessToken')
async function fetchData() {
   const settings = await getSettings(useToken?.value)
   if(settings) {
      promo.value = settings.promocode
      email.value = settings.email
      password.value = settings.password
      tgToken.value = settings.tgToken
   }
}
async function handleSave() {
   const res = await updateSettings({
      promocode: promo.value, email: email.value, password: password.value, tgToken: tgToken.value
   }, useToken.value)
   if(res) {
      notifySuccsess({ message: 'Данные успешно сохранены' })
   }
}
fetchData()
</script>
<script lang='ts'>
definePageMeta({
   layout: 'dashboard',
   middleware: 'auth'
})
</script>

<style lang="scss">
@import 'styles/main.scss';
.wrappFlex {
   display: flex;
   margin-bottom: 15px;
   justify-content: flex-start;
   .el-input__wrapper {
      &:first-child {
         margin-right: 15px;
      }
   }
}
</style>
<template>
  <NuxtLayout>
    <Card title="Настройки">
      <div class="constructPrevCard">
         <h3>Промокод</h3>
         <el-input
            v-model="promo"
            placeholder="ABCD-EFGH-IGKL-LMNO"
         />
         <h3>Email рассылки</h3>
         <el-input
            v-model="email"
            placeholder="mail@mail.ru"
         />
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
const tgToken = ref(null)
async function fetchData() {
   const settings = await getSettings()
   if(settings) {
      promo.value = settings.promocode
      email.value = settings.email
      tgToken.value = settings.tgToken
   }
}
async function handleSave() {
   await updateSettings({
      promocode: promo.value, email: email.value
   })
   notifySuccsess({
      message: 'Данные успещно сохранены'
   })
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
</style>
<template>
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
         >
            ХОЧУ СКИДКУ!
         </el-button>
      </div>
</div>
</template>

<script setup lang="ts">
const promoEmail = ref(null)
const isDisabled = computed(() => !promoEmail.value)
async function getPromo() {
   const addUser = await sendPromo({
      email: promoEmail.value
   })
   if(addUser) {
      notifySuccsess({ message: 'Отправили вам промокод на скидку' })
   }
}
</script>
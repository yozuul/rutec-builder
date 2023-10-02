<template>
<h1>Автохимия <br>для человека</h1>
<p>Теперь вы можете сами улучшить работу двигателя и узлов трансмиссии своего автомобиля: увеличить срок эксплуатации, повысить надежность и экономичность.<br />Для этого достаточно внимательно прочитать и заполнить необходимые поля и отметить характеристики  в различных категориях.<br />В результате вам будет рекомендован один из продуктов компании «РУТЕК», который позволит улучшить работу двигателя, узлов трансмиссии указанного автомобиля.</p>
<p>Применять добавки RUTEC просто и быстро. В этом убедились десятки тысяч автовладельцев.<br /> Мы перешагнули отметку в 4000 отзывов. Это подтверждают отзывы на маркетплейсах (только на OZON отзывов более
4000).</p>
<!-- <p>Купить рекомендованный товар можно как на маркетппейсах, так и в интернет-магазине <a href="https://rutec-shop.ru/" target="_blank">rutec-shop.ru</a>.</p>
<p>Если вы хотите получить скидку в 15% на покупку в интернет-магазине производителя добавок RUTEC, то введите в поле ниже адрес вашей электронной почты, на который мы отправим купон на скидку. </p>
<p>Просто и быстро. И в любом месте. И не надо ездить по сервисам.</p> -->
<p>Купить рекомендованный товар можно как на маркетплейсах и в интернет- магазине <a href="https://rutec-shop.ru/">rutec-shop.ru</a>, так и в ближайшем к вам магазине из нашего списка.</p>
<p>Если вы хотите получить скидку в 15% на покупку в интернет-магазине производителя добавок RUTEC, то введите в поле ниже адрес вашей электронной почты, на который мы отправим купон на скидку.</p>
<p>Просто и быстро. И в любом месте. И не надо ездить по сервисам <sup style="color: red">*</sup></p>
<p style="color: #777; text-align: right; font-size: 12px;"><sup>*</sup> Если, конечно, они не в списке автосервисов, применяющих добавки RUTEC.</p>
<div class="promoBlock">
   <h3>Email для получения скидки:</h3>
   <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      class="demo-ruleForm"
   >
      <el-form-item prop="email">
         <el-input v-model="ruleForm.email" placeholder="mail@mail.ru" />
      </el-form-item>
      <el-form-item>
         <el-button
            @click="submitForm(ruleFormRef)"
            type="success"
            size="large"
            class="getPromoBtn"
            :disabled="!ruleForm.email && !ruleForm.accept"
         >
            ХОЧУ СКИДКУ!
         </el-button>
      </el-form-item>
      <el-form-item prop="accept" class="acceptCheckbox">
         <el-checkbox
            v-model="ruleForm.accept"
            label="Согласие на обработку персональных данных" name="accept"
         />
      </el-form-item>
   </el-form>
</div>
</template>

<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  email: '',  accept: '',
})
const rules = reactive<FormRules>({
   email: [
      { required: true, message: 'Email обязателен', trigger: 'blur' },
      { type: 'email', message: 'Укажите корректный email', trigger: ['blur', 'change'] },
   ],
   accept: [
      { required: true, trigger: 'change', message: 'Необходимо ваше согласие' }
   ]
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate(async (valid) => {
    if (valid) {
      const addUser = await sendPromo({
         email: ruleForm.email
      })
      if(addUser) {
         notifySuccsess({ message: 'Отправили вам промокод на скидку' })
      }
    } else {
      console.log('error submit!')
      return false
    }
  })
}
</script>

<style lang="scss">
.promoBlock {
   .acceptCheckbox {
      margin-top: -10px;
   }
}
</style>
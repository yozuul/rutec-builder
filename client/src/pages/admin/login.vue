<template>
   <div class="loginFormWrapper">
      <h2>Авторизация</h2>
      <el-form
        ref="formRef"
        :model="loginForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item
          label="Email"
          prop="email"
          :rules="[
            { required: true, message: 'Email обязателен' },
          ]"
        >
          <el-input
            v-model="loginForm.email"
            type="text"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item
          label="Пароль"
          prop="password"
          :rules="[
            { required: true, message: 'Пароль обязателен' },
          ]"
        >
          <el-input
            v-model="loginForm.password"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(formRef)">Логин</el-button>
        </el-form-item>
      </el-form>
   </div>
 </template>

<script lang="ts" setup>
const useFetch = useFetchData()
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'

const router = useRouter()
const formRef = ref<FormInstance>()
const accessToken = useCookie('accessToken')
if(accessToken.value) {
   const validator = await useFetch.validateUser()
   if(validator) {
      router.push('/admin/constructor')
   }
}
const loginForm = reactive({
  email: '', password: ''
})
const submitForm = async (formEl: FormInstance | undefined) => {
   if (!formEl) return
   formEl.validate((valid) => {
      if (valid) {
         console.log('submit!')
      } else {
         console.log('error submit!')
         return false
      }
   })
   const isLogin = await useFetch.loginDasboard(loginForm)
   if(!isLogin) {
      notifyError({ message: 'Неверный логин или пароль' })
   }
   if(isLogin && isLogin.token) {
      accessToken.value = isLogin.token
      router.push('/admin/constructor')
   }
}

 </script>
<style lang="scss">
.loginFormWrapper {
   width: 450px;
   width: 250px;
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   align-items: flex-start;
   margin: auto;
   margin-top: 200px;
   position: relative;
   left: -100px;;
   h2 {
      width: 100%;
      font-size: 34px;
      margin-bottom: 20px;
   }
   .el-input__wrapper {
      background-color: #E8F0FE;
   }
}

</style>
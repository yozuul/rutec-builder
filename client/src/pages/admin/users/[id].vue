<template>
<NuxtLayout>
   <Card title="Редактирование пользователя">
      <div class="constructPrevCard">
         <h3>Пользователь</h3>
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

<script setup>
async function handleSave() {
}

</script>

<script>
definePageMeta({
   layout: 'dashboard',
   middleware: 'auth'
})
</script>

<style lang="scss">
@import 'styles/main.scss';
</style>
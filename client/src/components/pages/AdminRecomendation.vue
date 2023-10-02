<template>
<div class="adminsRec" v-if="recomendation && isValid">
   <el-card class="box-card">
      <template #header>
         <div class="card-header">
            <span>Рекомендация</span>
         </div>
      </template>
      <div v-for="rec in recomendation">
         <div>{{ rec.name }}</div>
      </div>
  </el-card>
</div>
</template>
<script lang="ts" setup>
const useFecth = useFetchData()
const showRec = ref(false)
const props = defineProps({
   recomendation: {
      type: Object
   }
})
const isValid = await useFecth.validateUser()
if(props.recomendation) {
   showRec.value = true
}
// console.log(props.recomendation)
</script>

<style lang="scss">
.adminsRec {
   position: fixed;
   z-index: 99;
   bottom: 65px;
}
</style>
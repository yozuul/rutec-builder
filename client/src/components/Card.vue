<template>
   <div class="cardTitle">
      <h1>{{ title }}</h1>
      <el-button v-if="buttonText"
         type="primary" size="default"
         @click="navigateTo(buttonRoute)"
      >
         {{ buttonText }}
      </el-button>
   </div>
   <el-card class="box-card signsList">
      <!-- <template #header>
         <div class="card-header"></div>
      </template> -->
      <div> <slot /></div>
   </el-card>
</template>

<script setup lang='ts'>
const props = defineProps({
   title: {
      type: String,
      default: 'Признаки',
   },
   buttonText: {
      type: String,
   },
   buttonRoute: {
      type: String,
   },
})
</script>
<style lang="scss">
.cardTitle {
   max-width: 1400px;
   display: flex;
   justify-content: space-between;
   button {
      position: relative;
      bottom: -10px;
   }
}
</style>
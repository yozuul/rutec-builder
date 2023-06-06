<template>
<div class="promoFact" v-if="fact">
   <el-card class="box-card">
      <template #header>
         <div class="card-header">
         <span>Факты о РУТЕК</span>
         <span><h4>{{ fact.name }}</h4></span>
         </div>
      </template>
      <div>
         <p v-html="fact.text"></p>
      </div>
  </el-card>
</div>
<div class="promoVideo" v-if="video">
   <el-card class="box-card">
      <template #header>
         <div class="card-header">
         <span><h4>{{ video.name }}</h4></span>
         </div>
      </template>
      <div>
         <a :href="video.videoUrl" target="_blank">
            {{ video.videoUrl }}
         </a>
         <a :href="video.videoUrl" target="_blank">
            <img :src="'/video/' + video.videoPreview" :alt="video?.name">
         </a>
      </div>
  </el-card>
</div>
</template>

<script lang="ts" setup>
import { usePromoStore} from '~/store'
const fact = ref(null) as any
const video = ref(null) as any
onBeforeMount(async () => {
   const promoStore = usePromoStore()
   await promoStore.getRandomPromo()
   fact.value = promoStore.randomPromo.fact
   video.value = promoStore.randomPromo.video
})

</script>

<style lang="scss">
.promoFact {
   margin-bottom: 30px;
}
.promoVideo {
   margin-bottom: 30px;
   img {
      width: 100%;
      height: auto;
      margin-top: 10px;
   }
}
</style>
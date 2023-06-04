<template>
<Card :title="cardTitle">
   <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="150px"
      size="default"
      status-icon
   >
      <el-form-item label="Название" prop="name">
         <el-input v-model="ruleForm.name" placeholder="Заголовок" />
      </el-form-item>

      <el-form-item label="Тип" prop="type">
         <el-select
            v-model="ruleForm.type"
            @change="checkVisiblity"
            placeholder="Тип материала"
         >
            <el-option label="Факт" value="Факт" />
            <el-option label="Видео" value="Видео" />
         </el-select>
      </el-form-item>

      <el-form-item
         v-if="fieldVisibility.text"
         label="Описание" prop="text"
      >
         <el-input v-model="ruleForm.text" type="textarea" rows="5"  />
      </el-form-item>

      <el-form-item
         v-if="fieldVisibility.videoUrl"
         label="Ссылка на видео"
         prop="videoUrl">
         <el-input
            v-model="ruleForm.videoUrl" placeholder="https://www.youtube.com/watch?v=qrIY_nLHLIk"
         />
      </el-form-item>


      <el-form-item label="Превью" v-if="fieldVisibility.uploadedPreview">
      <div class="uploaded_image">
         <img :src='ruleForm.videoPreview'>
      </div>
      </el-form-item>

      <el-form-item
         v-if="fieldVisibility.videoUrl"
         prop="videoPreview"
      >
         <el-upload
            v-model:file-list="fileList"
            class="upload-demo"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            list-type="picture"
         >
            <el-button type="primary">Нажмите для загрузки нового изображения</el-button>
            <template #tip>
               <div class="el-upload__tip">
               jpg/png файлы не больше 500kb
               </div>
            </template>
         </el-upload>
      </el-form-item>

      <el-form-item>
         <el-button type="primary" @click="submitForm(ruleFormRef)">Сохранить</el-button>
         <el-button @click="resetForm(ruleFormRef)">Очистить</el-button>
      </el-form-item>
   </el-form>
</Card>
</template>

<script lang="ts" setup>
import type { FormInstance, FormRules } from 'element-plus'
import type { UploadProps, UploadUserFile } from 'element-plus'
const promoStore = usePromoStore()

const props = defineProps({
   cardTitle: { type: String },
   promoData: { type: Object }
})
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
   name: '',
   type: '',
   text: '',
   videoUrl: '',
   videoPreview: ''
})

const fileList = ref<UploadUserFile[]>([])
const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
   console.log(uploadFile, uploadFiles)
}
const handlePreview: UploadProps['onPreview'] = (file) => {
   console.log(file)
}

const fieldVisibility = reactive({
   text: false,
   videoUrl: false,
   videoPreview: false,
   uploadedPreview: false,
})

function checkVisiblity() {
   fieldVisibility.text = false
   fieldVisibility.videoUrl = false
   fieldVisibility.videoPreview = false
   fieldVisibility.uploadedPreview = false
   if(ruleForm.type === 'Факт') {
      fieldVisibility.text = true
   }
   if(ruleForm.type === 'Видео') {
      fieldVisibility.videoUrl = true
      if(props?.promoData?.videoPreview) {
         fieldVisibility.uploadedPreview = true
      }
   }
}
onMounted(() => {
   if(props.promoData) {
      console.log(props.promoData)
      const promo = props.promoData
      ruleForm.name = promo.name
      ruleForm.type = promo.type
      ruleForm.text = promo.text
      ruleForm.videoUrl = promo.videoUrl
      ruleForm.videoPreview = promo.videoPreview ? `/video/${promo.videoPreview}` : ''
   }
   checkVisiblity()
})

const rules = reactive<FormRules>({
   name: [
      { required: true, message: 'Название обязательно', trigger: 'blur' },
   ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
   if (!formEl) return
   await formEl.validate(async (valid, fields) => {
      if (valid) {
         const formData = new FormData()
         formData.append('name', ruleForm.name)
         formData.append('type', ruleForm.type)
         if(ruleForm.type === 'Факт') {
            formData.append('text', ruleForm.text)
         }
         if(ruleForm.type === 'Видео') {
            formData.append('videoUrl', ruleForm.videoUrl)
            formData.append('file', fileList.value[0].raw as any)
         }
         if(!props.promoData) {
            try {
               await promoStore.addPromo(formData)
               ElNotification({
                  title: 'Готово',
                  message: 'Материал успешно добавлен',
                  type: 'success',
               })
            } catch (error) {
               ElNotification({
                  title: 'Ошибка',
                  message: 'Не могли добавить материал :(',
                  type: 'error',
               })
            }
         }
         if(props.promoData) {
            try {
               await promoStore.updatePromo(props.promoData.id, formData)
               ElNotification({
                  title: 'Готово',
                  message: 'Материал успешно обновлён',
                  type: 'success',
               })
            } catch (error) {
               ElNotification({
                  title: 'Ошибка',
                  message: 'Не могли обновить материал :(',
                  type: 'error',
               })
            }
         }
      } else {
         console.log('error submit!', fields)
      }
   })
}

const resetForm = (formEl: FormInstance | undefined) => {
   if (!formEl) return
   formEl.resetFields()
   ruleForm.videoUrl = ''
}
</script>

<script lang="ts">
import { usePromoStore } from '~/store/promoStore'
import { UploadFilled } from '@element-plus/icons-vue'
</script>

<style lang="scss">
@import '@/assets/styles/add-edit-cards.scss';
.upload-demo {
   min-width: 350px;
}
.uploaded_image {
   width: 360px;
   height: 210px;
   overflow: hidden;
   img {
      width: 100%;
   }
}
</style>
import { defineStore } from 'pinia'
import {
   getAllPromo, getPromo, addPromo, deletePromo, updatePromo
} from '~/services/promoService'

export const usePromoStore = defineStore({
   id: 'promo',
   state: () => ({
      allPromo: [],
      currentPromo: null
   }),
   actions: {
      async fetchAllPromo() {
         this.allPromo = await getAllPromo() as any
      },
      async fetchPromo(id: any) {
         this.currentPromo = await getPromo(id) as any
      },
      async addPromo(data: any) {
         await addPromo(data) as any
      },
      async deletePromo(id: any) {
         await deletePromo(id) as any
         this.allPromo = this.allPromo.filter((promo: any) => promo.id !== id)
      },
      async updatePromo(id: string, data: any) {
        const updatedPromo = await updatePromo(id, data)
        const index = this.allPromo.findIndex((partner: any) => partner.id === id)
        this.allPromo[index] = updatedPromo;
      },
   }
})
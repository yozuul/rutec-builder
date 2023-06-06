import { defineStore } from 'pinia'
import {
   getAllPartners, getPartner, addPartner, deletePartner, updatePartner, getAllCity, addCity, findByCity, getCityForUser
} from '~/services/partnerService'

export const usePartnerStore = defineStore({
   id: 'partner',
   state: () => ({
      partners: [] as any,
      cities: [],
      usersCity: [],
      usersPartners: [],
      currentPartner: null
   }),
   actions: {
      async fetchAllPartners() {
         this.partners = await getAllPartners() as any
      },
      async fetchPartner(id: any) {
         const partners = await getPartner(id) as any
         if(partners) {
            partners.companySpec = JSON.parse(partners.companySpec)
         }
         this.currentPartner = partners
      },
      async addPartner(data: any) {
         await addPartner(data) as any
      },
      async deletePartner(id: any) {
         await deletePartner(id) as any
         this.partners = this.partners.filter((partner: any) => partner.id !== id)
      },
      async updatePartner(id: string, data: any) {
        const updatedPartner = await updatePartner(id, data)
        const index = this.partners.findIndex((partner: any) => partner.id === id)
        this.partners[index] = updatedPartner;
      },
      // ГОРОДА
      async fetchCity() {
         this.cities = await getAllCity() as any
      },
      async getCityForUser() {
         this.usersCity = await getCityForUser() as any
      },
      async addCity(name: string) {
         return addCity(name) as any
      },
      async findByCity(name: string) {
         this.usersPartners = await findByCity(name) as any
      },
   }
})
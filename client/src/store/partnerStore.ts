import { defineStore } from 'pinia'
import {
   getAllPartners, getAllSignsGroup, getPartner, addPartner, deletePartner, updatePartner, getAllCountry, getAllCity, addCity, findByCity, getCityForUser, findCityByCountry,findByCityByData, deleteUser,
} from '~/services/partnerService'

export const usePartnerStore = defineStore({
   id: 'partner',
   state: () => ({
      partners: [] as any,
      partnersByType: [] as any,
      country: [] as any,
      cities: [] as any,
      usersCity: [],
      usersPartners: [],
      currentPartner: null,
      signsGroup: []
   }),
   actions: {

      async getAllSignGroup () {
         console.log('ddsfdsf');
         this.signsGroup = await getAllSignsGroup() as any
      },
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
      async deleteUser(id: any) {
         await deleteUser(id) as any
         // this.partners = this.partners.filter((partner: any) => partner.id !== id)
      },
      async updatePartner(id: string, data: any) {
         console.log('data', data);
        const updatedPartner = await updatePartner(id, data)
        const index = this.partners.findIndex((partner: any) => partner.id === id)
        this.partners[index] = updatedPartner;
      },
      // ГОРОДА
      async fetchCountry(name?: string) {
         this.country = await getAllCountry() as any
      },
      async findCityByCountry(countryId?: any) {
         this.cities = await findCityByCountry(countryId)
      },
      async findPartnerByType(type: any) {
         this.cities = await findCityByCountry(type)
      },
      async fetchCity() {
         this.cities = await getAllCity() as any
      },
      async getCityForUser() {
         this.usersCity = await getCityForUser() as any
      },
      async addCity(name: string) {
         return addCity(name) as any
      },
      async findByCityByData(data: any) {
         this.usersPartners = await findByCityByData(data) as any
      },
      async findByCity(name: string) {
         this.usersPartners = await findByCity(name) as any
      },
   }
})
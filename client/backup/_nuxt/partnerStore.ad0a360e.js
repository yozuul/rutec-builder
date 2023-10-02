import{am as i}from"./entry.ffdc8223.js";import{a as r}from"./api.config.a7d4d112.js";const a=`${r.baseURL}/partners`;async function d(){return $fetch("/",{baseURL:a,method:"GET",headers:r.authHeader})}async function h(e){return $fetch(`/id/${e}`,{baseURL:a,method:"GET",headers:r.authHeader})}async function o(e){return $fetch("/add",{baseURL:a,method:"POST",headers:r.authHeader,body:e})}async function y(e){return $fetch(`/delete/${e}`,{baseURL:a,method:"DELETE",headers:r.authHeader})}async function u(e,t){return $fetch(`/update/${e}`,{baseURL:a,method:"PUT",headers:r.authHeader,body:t})}async function f(){try{return $fetch("/getCityForUser",{baseURL:a,method:"GET"})}catch(e){console.log(e)}}async function p(){try{return $fetch("/city",{baseURL:a,method:"GET",headers:r.authHeader})}catch(e){console.log(e)}}async function P(e){return $fetch("/city/add",{baseURL:a,method:"POST",headers:r.authHeader,body:e})}async function l(e){return $fetch(`/findByCity/${e}`,{baseURL:a,method:"GET",headers:r.authHeader})}const b=i({id:"partner",state:()=>({partners:[],cities:[],usersCity:[],usersPartners:[],currentPartner:null}),actions:{async fetchAllPartners(){this.partners=await d()},async fetchPartner(e){const t=await h(e);t&&(t.companySpec=JSON.parse(t.companySpec)),this.currentPartner=t},async addPartner(e){await o(e)},async deletePartner(e){await y(e),this.partners=this.partners.filter(t=>t.id!==e)},async updatePartner(e,t){const n=await u(e,t),s=this.partners.findIndex(c=>c.id===e);this.partners[s]=n},async fetchCity(){this.cities=await p()},async getCityForUser(){this.usersCity=await f()},async addCity(e){return P(e)},async findByCity(e){this.usersPartners=await l(e)}}});export{b as u};

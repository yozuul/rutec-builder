import{am as m}from"./entry.ffdc8223.js";import{a as e}from"./api.config.a7d4d112.js";const a=`${e.baseURL}/promo`;async function s(){return $fetch("/",{baseURL:a,method:"GET",headers:e.authHeader})}async function c(o){return $fetch(`/id/${o}`,{baseURL:a,method:"GET",headers:e.authHeader})}async function h(){return $fetch("/random",{baseURL:a,method:"GET"})}async function i(o){return $fetch("/add",{baseURL:a,method:"POST",headers:e.authHeader,body:o})}async function u(o){return $fetch(`/delete/${o}`,{baseURL:a,method:"DELETE",headers:e.authHeader})}async function P(o,t){return $fetch(`/update/${o}`,{baseURL:a,method:"PUT",headers:e.authHeader,body:t})}const y=m({id:"promo",state:()=>({allPromo:[],currentPromo:null,randomPromo:null}),actions:{async fetchAllPromo(){this.allPromo=await s()},async fetchPromo(o){this.currentPromo=await c(o)},async getRandomPromo(){this.randomPromo=await h()},async addPromo(o){await i(o)},async deletePromo(o){await u(o),this.allPromo=this.allPromo.filter(t=>t.id!==o)},async updatePromo(o,t){const r=await P(o,t),n=this.allPromo.findIndex(d=>d.id===o);this.allPromo[n]=r}}});export{y as u};

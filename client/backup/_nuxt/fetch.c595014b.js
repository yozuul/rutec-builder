import{u as E}from"./cookie.1208391b.js";import{am as b}from"./entry.dd0ef4c2.js";const v=b("useFetchData",()=>{const t={dev:"http://localhost:4444/",prod:"/api/"}.prod,s=E("accessToken"),a=async()=>$fetch("/signs/all",{baseURL:t,method:"GET"}),c=async e=>$fetch("/signs/add",{baseURL:t,method:"POST",body:e,headers:o()}),d=async e=>$fetch(`/signs/delete/${e}`,{baseURL:t,method:"DELETE",headers:o()}),u=async e=>$fetch(`/signs/byId/${e}`,{baseURL:t,method:"GET",headers:o()}),h=async(e,r)=>$fetch(`/signs/update/${e}`,{baseURL:t,method:"PUT",body:r,headers:o()}),l=async()=>$fetch("/products/all",{baseURL:t,method:"GET"}),i=async e=>$fetch("/products/add",{baseURL:t,method:"POST",body:e,headers:o()}),y=async e=>$fetch(`/products/byId/${e}`,{baseURL:t,method:"GET",headers:o()}),p=async e=>$fetch(`/products/delete/${e}`,{baseURL:t,method:"DELETE",headers:o()}),g=async(e,r)=>$fetch(`/products/update/${e}`,{baseURL:t,method:"PUT",body:r,headers:o()}),m=async()=>{let e=null;try{e=await $fetch("/auth/validateUser",{baseURL:t,method:"POST",headers:o()})}catch(r){console.log(r,"ОШИБКА")}return e},f=async e=>{let r=null;try{r=await $fetch("/auth/login",{baseURL:t,method:"POST",body:e})}catch{console.log("Ошибка авторизации")}return r},$=async e=>{let r=null;try{r=await $fetch("/auth/sendPromo",{baseURL:t,method:"POST",body:e})}catch{console.log("Ошибка отправки промокода")}return r},T=async()=>{const e={users:null,error:""};try{e.users=await $fetch("/users/all",{baseURL:t,method:"GET",headers:o()})}catch{e.error="Не удалось полученить список пользователей",console.log(e.error)}return e},P=async()=>{try{return $fetch("/settings/get",{baseURL:t,method:"GET",headers:o()})}catch{return!1}},S=async e=>$fetch("/settings/update",{baseURL:t,method:"PUT",body:e,headers:o()});function o(){return s.value?{authorization:"Bearer "+s.value}:{authorization:"NoToken"}}return{loginDasboard:f,getAllProducts:l,getProductById:y,addProduct:i,updateProduct:g,deleteProduct:p,getAllSignGroup:a,getSignGroupById:u,addSignGroup:c,updateSignGroup:h,deleteSignGroup:d,validateUser:m,getAllUsers:T,getSettings:P,updateSettings:S,sendPromo:$}});export{v as u};

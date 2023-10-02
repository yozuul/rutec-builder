import{E as q}from"./el-input.8e444ff3.js";import{E as B,a as I}from"./el-form.945573f0.js";import{E as M,a as O}from"./el-select.dda1b83d.js";import{E as $,a as j}from"./el-checkbox.7a9b0417.js";import{E as R}from"./el-button.bdac6b4d.js";import{a as z}from"./layout.5e4a1864.js";import"./base.2a5ba82d.js";import"./el-scrollbar.d8204862.js";import"./el-popper.ca496116.js";/* empty css                          */import{E as g}from"./el-notification.e7b47f25.js";import{I as G}from"./index.2048010d.js";import{u as H}from"./partnerStore.05807a51.js";import{p as L,s as J,r as K,v as C,b as Q,o as u,c as d,e as n,f as l,u as a,k as W,F as X,l as Y,m as V,j as h}from"./entry.cb56e92e.js";const ye=L({__name:"PartnerAddEdit",props:{cardTitle:{type:String},partnerData:{type:Object}},async setup(k){let w,x;const y=k,f=H();[w,x]=J(()=>f.fetchCity()),await w,x();const v=f.cities,b=K(),e=C({companyName:"",companyType:"",city:"",adress:"",newCityData:"",companyAreas:"",experience:0,companySpec:[],email:"",phone:"",companyEmployee:"",employeePosition:"",status:"Одобрен"}),m=C({newCityData:!1,companyAreas:!1,companyEmployee:!1,employeePosition:!1});function _(){m.newCityData=!1,m.companyAreas=!1,m.companyEmployee=!1,m.employeePosition=!1,e.city==="Новый город"&&(m.newCityData=!0),D()}Q(()=>{if(y.partnerData){const r=y.partnerData;e.companyName=r.companyName,e.companyType=r.companyType,e.city=r.city.name,e.adress=r.adress,e.companySpec=r.companySpec,e.companyAreas=r.companyAreas,e.experience=r.experience,e.email=r.email,e.phone=r.phone,e.companyEmployee=r.companyEmployee,e.employeePosition=r.employeePosition,e.status=r.status,D()}const s=document.querySelector(".phoneMask .el-input__inner");s&&G(s,{mask:"+{7} (000) 000-00-00"})});function D(){e.companyType==="Предприятие"&&(m.companyAreas=!0,m.companyEmployee=!0,m.employeePosition=!0)}const A=C({companyName:[{required:!0,message:"Название обязательно",trigger:"blur"}],companyType:[{required:!0,message:"Тип обязателен",trigger:"blur"}],city:[{required:!0,message:"Город обязателен",trigger:"change"}],adress:[{required:!0,message:"Адрес обязателен",trigger:"change"}],newCityData:[{required:!0,message:"Укажите название города",trigger:"change"}],companySpec:[{required:!0,message:"Укажите тип обслуживаемых авто",trigger:"change"}],companyEmployee:[{required:!0,message:"Укажите свое Ф.И.О.",trigger:"change"}],employeePosition:[{required:!0,message:"Укажите свою должность",trigger:"change"}],email:[{required:!0,message:"Email обязателен",trigger:"blur"},{type:"email",message:"Укажите корректный email",trigger:["blur","change"]}]}),T=async s=>{s&&await s.validate(async(o,r)=>{if(o){if(!y.partnerData)try{await f.addPartner(e),g({title:"Готово",message:"Партнёр успешно добавлен",type:"success"})}catch{g({title:"Ошибка",message:"Не могли добавить партнёра :(",type:"error"})}if(y.partnerData)try{await f.updatePartner(y.partnerData.id,e),g({title:"Готово",message:"Партнёр успешно обновлён",type:"success"})}catch{g({title:"Ошибка",message:"Не могли обновить партнёра :(",type:"error"})}}else console.log("error submit!",r)})},U=s=>{s&&(s.resetFields(),e.city="")};return(s,o)=>{const r=q,p=B,i=M,E=O,c=$,F=j,P=R,S=I,N=z;return u(),d(N,{title:k.cardTitle},{default:n(()=>[l(S,{ref_key:"ruleFormRef",ref:b,model:a(e),rules:a(A),"label-width":"170px",size:"default",class:"partnersForm","status-icon":""},{default:n(()=>[l(p,{label:"Наименование",prop:"companyName"},{default:n(()=>[l(r,{modelValue:a(e).companyName,"onUpdate:modelValue":o[0]||(o[0]=t=>a(e).companyName=t),placeholder:"Название компании"},null,8,["modelValue"])]),_:1}),l(p,{label:"Тип",prop:"companyType"},{default:n(()=>[l(E,{modelValue:a(e).companyType,"onUpdate:modelValue":o[1]||(o[1]=t=>a(e).companyType=t),onChange:_,placeholder:a(e).companyType?a(e).companyType:"Тип компании"},{default:n(()=>[l(i,{label:"Магазин",value:"Магазин"}),l(i,{label:"Автосервис",value:"Автосервис"}),l(i,{label:"Предприятие",value:"Предприятие"})]),_:1},8,["modelValue","placeholder"])]),_:1}),l(p,{label:"Город",prop:"city"},{default:n(()=>[l(E,{modelValue:a(e).city,"onUpdate:modelValue":o[2]||(o[2]=t=>a(e).city=t),placeholder:a(e).city?a(e).city:"Выберите город",onChange:_,filterable:""},{default:n(()=>[(u(!0),W(X,null,Y(a(v),t=>(u(),d(i,{key:t.id,label:t.name,value:t.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1}),a(m).newCityData?(u(),d(p,{key:0,onChange:_,label:"Новый город",prop:"newCityData"},{default:n(()=>[l(r,{modelValue:a(e).newCityData,"onUpdate:modelValue":o[3]||(o[3]=t=>a(e).newCityData=t),placeholder:"Город"},null,8,["modelValue"])]),_:1})):V("",!0),l(p,{label:"Адрес",prop:"adress"},{default:n(()=>[l(r,{modelValue:a(e).adress,"onUpdate:modelValue":o[4]||(o[4]=t=>a(e).adress=t),placeholder:"Адрес компании"},null,8,["modelValue"])]),_:1}),a(m).companyAreas?(u(),d(p,{key:1,label:"Вид деятельности",prop:"companyAreas"},{default:n(()=>[l(r,{modelValue:a(e).companyAreas,"onUpdate:modelValue":o[5]||(o[5]=t=>a(e).companyAreas=t),placeholder:"Сфера деятельности предприятия"},null,8,["modelValue"])]),_:1})):V("",!0),l(p,{label:"Опыт работы",prop:"experience"},{default:n(()=>[l(r,{modelValue:a(e).experience,"onUpdate:modelValue":o[6]||(o[6]=t=>a(e).experience=t),placeholder:"0",formatter:t=>t.replace(/\D/g,"")},null,8,["modelValue","formatter"])]),_:1}),l(p,{label:"Вид транспорта",prop:"companySpec"},{default:n(()=>[l(F,{modelValue:a(e).companySpec,"onUpdate:modelValue":o[7]||(o[7]=t=>a(e).companySpec=t)},{default:n(()=>[l(c,{label:"Легковой",name:"type"}),l(c,{label:"Грузовой",name:"type"}),l(c,{label:"Коммерческий транспорт",name:"type"}),l(c,{label:"Специальная техника",name:"type"}),l(c,{label:"Все виды транспорта",name:"type"})]),_:1},8,["modelValue"])]),_:1}),a(m).companyEmployee?(u(),d(p,{key:2,label:"Представитель",prop:"companyEmployee"},{default:n(()=>[l(r,{modelValue:a(e).companyEmployee,"onUpdate:modelValue":o[8]||(o[8]=t=>a(e).companyEmployee=t),placeholder:"Ф.И.О. представителя компании"},null,8,["modelValue"])]),_:1})):V("",!0),a(m).employeePosition?(u(),d(p,{key:3,label:"Должность",prop:"employeePosition"},{default:n(()=>[l(r,{modelValue:a(e).employeePosition,"onUpdate:modelValue":o[9]||(o[9]=t=>a(e).employeePosition=t),placeholder:"Занимаемая должность"},null,8,["modelValue"])]),_:1})):V("",!0),l(p,{label:"Email",prop:"email"},{default:n(()=>[l(r,{modelValue:a(e).email,"onUpdate:modelValue":o[10]||(o[10]=t=>a(e).email=t),placeholder:"Электронная почта"},null,8,["modelValue"])]),_:1}),l(p,{label:"Телефон",prop:"phone",class:"phoneMask"},{default:n(()=>[l(r,{modelValue:a(e).phone,"onUpdate:modelValue":o[11]||(o[11]=t=>a(e).phone=t),placeholder:"Телефон"},null,8,["modelValue"])]),_:1}),l(p,{label:"Статус",prop:"status"},{default:n(()=>[l(E,{modelValue:a(e).status,"onUpdate:modelValue":o[12]||(o[12]=t=>a(e).status=t),placeholder:"Статус"},{default:n(()=>[l(i,{label:"Ожидает",value:"Ожидает"}),l(i,{label:"Одобрен",value:"Одобрен"}),l(i,{label:"Отклонён",value:"Отклонён"})]),_:1},8,["modelValue"])]),_:1}),l(p,null,{default:n(()=>[l(P,{type:"primary",onClick:o[13]||(o[13]=t=>T(a(b)))},{default:n(()=>[h("Сохранить")]),_:1}),l(P,{onClick:o[14]||(o[14]=t=>U(a(b)))},{default:n(()=>[h("Очистить")]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title"])}}});export{ye as _};

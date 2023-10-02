import{_ as I}from"./PublicNavi.vue.8b2cba94.js";import{E as M}from"./el-input.a60a8382.js";import{E as O,a as $}from"./el-form.3b991ae5.js";import{E as H,a as j}from"./el-select.353b8380.js";import{E as z,a as G}from"./el-checkbox.9c38c335.js";import{E as L}from"./el-button.03ba6d71.js";import"./base.77fa367f.js";import"./el-scrollbar.34d97b83.js";import"./el-popper.dbcacd56.js";/* empty css                          */import{E as w}from"./el-notification.feb64695.js";import{p as J,s as K,r as Q,v as h,b as W,ao as X,o as u,k as x,f as l,h as r,e as n,u as e,F as P,l as Y,c,m as _,j as F,a4 as R,a5 as q}from"./entry.fc15d232.js";import{I as Z}from"./index.2048010d.js";import{u as ee}from"./partnerStore.bd21c24a.js";import"./el-menu.7f2e9ea5.js";import"./aria.e58ff6b3.js";import"./index.5fa32fd5.js";import"./vnode.9fcf83e4.js";import"./typescript.defaf979.js";import"./el-tooltip.4ed993c7.js";import"./event.9519ab40.js";import"./_Uint8Array.d1d7f028.js";import"./_initCloneObject.61cc963c.js";import"./validator.2bf4c219.js";import"./api.config.aa9a154d.js";import"./cookie.980930a1.js";const oe={class:"anketa_wrapper partnersPage"},le={class:"partner_form"},ae={class:"partnersText"},te={class:"partner_text1"},ne=r("p",null,"1. ООО «РУТЕК» поможет вам расширить ассортимент продукцией от российского производителя, которая востребована и позволит вам зарабатывать.",-1),re=r("p",null,"2. Каждый магазин, который покупает добавки RUTEC, автоматически попадает в перечень магазинов Программы подбора добавок RUTEC - https://dvaresursa.ru/ ",-1),pe=r("p",null,"3. Использование продавцами Программы подбора позволит быстро и аргументированно рекомендовать продукцию из наличия на складе «холодным» клиентам. ",-1),se=r("p",null,"4. Для начала работы мы подготовили стартовый комплект, включающий весь ассортимент с учетом двухлетней статистики продаж на маркет-плейсах и постоянным наличием на складе.",-1),me=r("p",null,"5. Подробные условия сотрудничества вы можете получить, отправив форму запрос.",-1),ie=[ne,re,pe,se,me],ue={class:"partner_text2"},de=r("p",null,"1. Автосервисы применяют добавки RUTEC с 2002 года. Техподдержка работает с 2005 года.",-1),ce=r("p",null,"2. Есть два варианта применения добавок RUTEC в условиях автосервиса/СТО: оказание услуги (экспресс-раскоксовка, устранение стука гидрокомпенсаторов, устранение гула гидроусилителя руля, повышение и выравнивание компрессии и т.п.) и продажа розничных серий добавок RUTEC. ",-1),ye=r("p",null,"3. Стабильный химический состав позволяет прогнозировать результат, что дает возможность уверенно применять добавки RUTEC при обслуживании автомобилей клиентов.",-1),_e=r("p",null,"4. Каждый автосервис, который покупает добавки RUTEC, автоматически попадает в перечень автосервисов данной Программы подбора добавок RUTEC.",-1),fe=r("p",null,"5. Программа подбора добавок RUTEC позволит вашему приемщику быстро и аргументированно рекомендовать именно ту продукцию нашей компании или услугу, которая подходит под конкретный двигатель.",-1),ge=r("p",null,"6. Для начала работы мы подготовили стартовый комплект, включающий ассортимент добавок RUTEC с учетом специфики работы автосервиса по наименьшим доступным розничным магазинам ценам.",-1),Ve=r("p",null,"7. Подробные условия сотрудничества вы можете получить, отправив форму запрос.",-1),be=[de,ce,ye,_e,fe,ge,Ve],Je=J({__name:"partners",async setup(he){let E,C;const f=ee();[E,C]=K(()=>f.fetchCity()),await E,C();const D=f.cities,g=Q(),o=h({companyName:"",companyType:"",city:"",adress:"",newCityData:"",companyAreas:"",experience:0,companySpec:[],email:"",phone:"",companyEmployee:"",employeePosition:"",status:"Ожидает",accept:"",offer:!0}),s=h({newCityData:!1,companyAreas:!1,companyEmployee:!1,employeePosition:!1});function V(){s.newCityData=!1,s.companyAreas=!1,s.companyEmployee=!1,s.employeePosition=!1,o.city==="Новый город"&&(s.newCityData=!0),k()}W(()=>{k();const m=document.querySelector(".phoneMask .el-input__inner");m&&Z(m,{mask:"+{7} (000) 000-00-00"})});function k(){o.companyType==="Предприятие"&&(s.companyAreas=!0,s.companyEmployee=!0,s.employeePosition=!0)}const N=h({companyName:[{required:!0,message:"Название обязательно",trigger:"blur"}],companyType:[{required:!0,message:"Тип обязателен",trigger:"blur"}],city:[{required:!0,message:"Город обязателен",trigger:"change"}],adress:[{required:!0,message:"Адрес обязателен",trigger:"change"}],newCityData:[{required:!0,message:"Укажите название города",trigger:"change"}],companySpec:[{required:!0,message:"Укажите тип обслуживаемых авто",trigger:"change"}],companyEmployee:[{required:!0,message:"Укажите свое Ф.И.О.",trigger:"change"}],employeePosition:[{required:!0,message:"Укажите свою должность",trigger:"change"}],email:[{required:!0,message:"Email обязателен",trigger:"blur"},{type:"email",message:"Укажите корректный email",trigger:["blur","change"]}],accept:[{required:!0,trigger:"change",message:"Необходимо ваше согласие"}]}),A=async m=>{m&&await m.validate(async(a,b)=>{if(a)try{await f.addPartner(o),w({title:"Готово",message:"Заявка успешно отправлена",type:"success"}),U(m)}catch{w({title:"Ошибка",message:"Не могли отправить заявку :(",type:"error"})}else console.log("error submit!",b)})},U=m=>{m&&(m.resetFields(),o.city="")};return X(()=>({bodyAttrs:{class:"partnersPage"}})),(m,a)=>{const b=I,i=M,p=O,y=H,T=j,d=z,S=G,v=L,B=$;return u(),x(P,null,[l(b),r("main",oe,[r("div",le,[l(B,{ref_key:"ruleFormRef",ref:g,model:e(o),rules:e(N),"label-width":"170px",size:"default",class:"partnersForm","status-icon":""},{default:n(()=>[l(p,{label:"Наименование",prop:"companyName"},{default:n(()=>[l(i,{modelValue:e(o).companyName,"onUpdate:modelValue":a[0]||(a[0]=t=>e(o).companyName=t),placeholder:"Название компании"},null,8,["modelValue"])]),_:1}),l(p,{label:"Деятельноcть",prop:"companyType"},{default:n(()=>[l(T,{modelValue:e(o).companyType,"onUpdate:modelValue":a[1]||(a[1]=t=>e(o).companyType=t),onChange:V,placeholder:e(o).companyType?e(o).companyType:"Сфера дейятельности"},{default:n(()=>[l(y,{label:"Магазин",value:"Магазин"}),l(y,{label:"Автосервис",value:"Автосервис"}),l(y,{label:"Предприятие",value:"Предприятие"})]),_:1},8,["modelValue","placeholder"])]),_:1}),l(p,{label:"Город",prop:"city"},{default:n(()=>[l(T,{modelValue:e(o).city,"onUpdate:modelValue":a[2]||(a[2]=t=>e(o).city=t),placeholder:e(o).city?e(o).city:"Выберите город",onChange:V,filterable:""},{default:n(()=>[(u(!0),x(P,null,Y(e(D),t=>(u(),c(y,{key:t.id,label:t.name,value:t.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1}),e(s).newCityData?(u(),c(p,{key:0,onChange:V,label:"Новый город",prop:"newCityData"},{default:n(()=>[l(i,{modelValue:e(o).newCityData,"onUpdate:modelValue":a[3]||(a[3]=t=>e(o).newCityData=t),placeholder:"Город"},null,8,["modelValue"])]),_:1})):_("",!0),l(p,{label:"Адрес",prop:"adress"},{default:n(()=>[l(i,{modelValue:e(o).adress,"onUpdate:modelValue":a[4]||(a[4]=t=>e(o).adress=t),placeholder:"Адрес компании"},null,8,["modelValue"])]),_:1}),e(s).companyAreas?(u(),c(p,{key:1,label:"Вид деятельности",prop:"companyAreas"},{default:n(()=>[l(i,{modelValue:e(o).companyAreas,"onUpdate:modelValue":a[5]||(a[5]=t=>e(o).companyAreas=t),placeholder:"Вид деятельности предприятия"},null,8,["modelValue"])]),_:1})):_("",!0),l(p,{label:"Опыт работы",prop:"experience"},{default:n(()=>[l(i,{modelValue:e(o).experience,"onUpdate:modelValue":a[6]||(a[6]=t=>e(o).experience=t),placeholder:"0",formatter:t=>t.replace(/\D/g,"")},null,8,["modelValue","formatter"])]),_:1}),l(p,{label:"Вид транспорта",prop:"companySpec"},{default:n(()=>[l(S,{modelValue:e(o).companySpec,"onUpdate:modelValue":a[7]||(a[7]=t=>e(o).companySpec=t)},{default:n(()=>[l(d,{label:"Легковой",name:"type"}),l(d,{label:"Грузовой",name:"type"}),l(d,{label:"Коммерческий транспорт",name:"type"}),l(d,{label:"Специальная техника",name:"type"}),l(d,{label:"Все виды транспорта",name:"type"})]),_:1},8,["modelValue"])]),_:1}),e(s).companyEmployee?(u(),c(p,{key:2,label:"Представитель",prop:"companyEmployee"},{default:n(()=>[l(i,{modelValue:e(o).companyEmployee,"onUpdate:modelValue":a[8]||(a[8]=t=>e(o).companyEmployee=t),placeholder:"Ф.И.О. представителя компании"},null,8,["modelValue"])]),_:1})):_("",!0),e(s).employeePosition?(u(),c(p,{key:3,label:"Должность",prop:"employeePosition"},{default:n(()=>[l(i,{modelValue:e(o).employeePosition,"onUpdate:modelValue":a[9]||(a[9]=t=>e(o).employeePosition=t),placeholder:"Занимаемая должность"},null,8,["modelValue"])]),_:1})):_("",!0),l(p,{label:"Email",prop:"email"},{default:n(()=>[l(i,{modelValue:e(o).email,"onUpdate:modelValue":a[10]||(a[10]=t=>e(o).email=t),placeholder:"info@company.ru"},null,8,["modelValue"])]),_:1}),l(p,{label:"Телефон",prop:"phone",class:"phoneMask"},{default:n(()=>[l(i,{modelValue:e(o).phone,"onUpdate:modelValue":a[11]||(a[11]=t=>e(o).phone=t),placeholder:"+7-495-555-66-77"},null,8,["modelValue"])]),_:1}),l(p,null,{default:n(()=>[l(v,{type:"primary",onClick:a[12]||(a[12]=t=>A(e(g)))},{default:n(()=>[F(" Получить коммерческое предложение ")]),_:1}),l(v,{onClick:a[13]||(a[13]=t=>U(e(g)))},{default:n(()=>[F("Очистить")]),_:1})]),_:1}),l(p,{prop:"accept"},{default:n(()=>[l(d,{modelValue:e(o).accept,"onUpdate:modelValue":a[14]||(a[14]=t=>e(o).accept=t),label:"Согласие на обработку персональных данных",name:"accept"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),r("div",ae,[R(r("div",te,ie,512),[[q,e(o).companyType==="Магазин"]]),R(r("div",ue,be,512),[[q,e(o).companyType==="Автосервис"]])])])],64)}}});export{Je as default};

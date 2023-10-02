import{E as P}from"./el-input.db2ebe94.js";import{E as T,a as q}from"./el-select.83fc79f8.js";import{E as J,a as R}from"./el-checkbox.0cd4025a.js";import{E as $}from"./el-button.2d386b0f.js";import{_ as A,a as H}from"./layout.7dc97c92.js";import"./base.39a2e6bb.js";import"./el-scrollbar.ce65630b.js";import"./el-popper.8fbfdcc6.js";/* empty css                          */import{u as K}from"./cookie.484f84a8.js";import{r as c,w as Q,a as W,b as X,c as w,e as _,o as d,f as i,h as m,u as n,i as x,j as N,k as s,l as V,F as k,t as B,m as S}from"./entry.bede21bb.js";import{n as Y,a as Z}from"./notify.93c6400e.js";import{g as ee}from"./field-id-sorter.b437f58c.js";import"./fetch.799b0d4c.js";import{a as le}from"./fetch-data.87f96ffe.js";import"./aria.f177d53e.js";import"./index.cf0ad421.js";import"./typescript.defaf979.js";import"./event.9519ab40.js";import"./validator.92468783.js";import"./_Uint8Array.46b57dc8.js";import"./el-card.464539a8.js";import"./el-notification.6a32ec1f.js";const G=[{id:0,name:"Данные на автомобиль",part:"car",type:"input",fields:[{id:1,name:"Объем двигателя",type:"number",placeholder:"1,7",required:!0},{id:2,name:"Марка",placeholder:"Лада"},{id:3,name:"Модель",placeholder:"Гранта"},{id:4,name:"Год выпуска",placeholder:"2020",type:"number"}]},{id:1,name:"Пробег",part:"engine",type:"radio",fields:[{id:5,name:"До 100 000 км"},{id:6,name:"От 100 000 км"}]},{id:111,name:"Неполадки",part:"errors",type:"checkbox",fields:[{id:999,name:"Работа двигателя не сопровождается никаким из ниже перечисленных признаков:"}]},{id:2,name:"Повышенный расход масла",part:"engine",type:"radio",fields:[{id:7,name:"Расход масла до 100 мл на 1000 км"},{id:8,name:"Расход масла до 500 мл на 1000 км"},{id:9,name:"Расход масла более 500 мл на 1000 км"}]},{id:3,name:"Дымление",part:"engine",type:"checkbox",fields:[{id:10,name:"Cизый дым при запуске"},{id:11,name:"Дымление во время движения"}]},{id:4,name:"Прочие признаки",part:"engine",type:"checkbox",fields:[{id:12,name:"Повышенная вибрация"},{id:13,name:"Троение"},{id:14,name:"Стучат гидрокомпенсаторы"},{id:15,name:"Пониженная компрессия"},{id:16,name:"Посторонние звуки/стуки (не гидрокомпенсаторы)",exception:!0}]},{id:5,name:"Когда появились признаки неисправной работы",part:"engine",type:"radio",fields:[{id:17,name:"После последнего ТО"},{id:18,name:"Давно"}]},{id:11,name:"Условия эксплуатации и обслуживания",part:"service",type:"radio",fields:[{id:29,name:"Агрессивный стиль езды, резкое переключение скоростей"},{id:30,name:"Редкое использование, раз-два раза в неделю"},{id:31,name:"Ежедневное использование по городу на малые расстояния"},{id:32,name:"Большая часть в пробках"},{id:33,name:"Регулярное использование, большие пробеги"},{id:34,name:"Работа в городском режиме, частые пробки"},{id:35,name:"Автопутешествия в периоды каникул"},{id:36,name:"Спокойный характер езды (до 3000 об/мин)"},{id:37,name:"Участвую в соревнованиях (трофи, автокросс, ралли, дрифт и т.п.)"},{id:38,name:"Сам провожу ТО"},{id:39,name:"Периодические или разовые долгие простои от 1 месяца и более",exception:!0}]},{id:12,name:"Цель применения",part:"purpose",type:"radio",fields:[{id:40,name:"Продлить безремонтный срок эксплуатации (профилактика)"},{id:41,name:"Снизить расход топлива"},{id:42,name:"Повысить надежность"},{id:43,name:"Повысить компрессию, мощность"},{id:44,name:"Заменить ремонт"},{id:45,name:"Подготовить к дальней поездке, сезону повышенной эксплуатации"}]},{id:6,name:"Состояние АКПП",part:"akpp",type:"radio",fields:[{id:19,name:"работает ровно и без шума"},{id:20,name:"Рывки при переключении, шум, вибрация"}]},{id:7,name:"Состояние МКПП",part:"mkpp",type:"radio",fields:[{id:21,name:"Работает ровно и без шума, переключение без усилий"},{id:22,name:"Трудности при переключении, шум, гул"}]},{id:8,name:"Состояние ГУР",part:"gur",type:"radio",fields:[{id:23,name:"Работает ровно и без шума"},{id:24,name:"Трудно вращать, в движении ухудшается управление («отдает» на неровностях), шум/вой при работе"}]},{id:9,name:"Состояние редукторов мостов",part:"gearboxes",type:"radio",fields:[{id:25,name:"Работает ровно и без шума"},{id:26,name:"Шум, гул в движении"}]},{id:10,name:"Состояние раздаточной коробки",part:"case",type:"radio",fields:[{id:27,name:"Работает ровно и без шума"},{id:28,name:"Шум, повышенная вибрация, гул в движении"}]}];const ae={class:"constructPrevCard"},ne=m("h3",null,"Название товара",-1),te=m("h3",null,"Ссылка",-1),oe=m("h3",null,"Рекомендательный текст",-1),de=m("br",null,null,-1),ie={key:0,class:"constructorInputGroup"},re={class:"iputData"},se={key:1,class:"constructorInputGroup"},me={class:"btnsControlConstructor"},je={__name:"constructor",setup(ue){const h=c(null),y=c(null),g=c(null),b=c([]),I=c([]),F=c([]),U=c([]),v=c([]),C=K("accessToken");Q(b,(f,e)=>{for(let u of f)I.value=G.filter(a=>f.includes(a.name))});const j=W(()=>I.value.flatMap(f=>f));async function z(){var u;if(!h.value||!y.value){console.log("dd"),Y();return}const f=ee(F.value,U.value),e={name:h.value,url:y.value,fields:[],orFields:[],notFields:[],notOrFields:[],prioriteFields:[],prioriteOrFields:[]};for(let a of f){const r=a.fieldId,E=a.fieldValue,p=v.value[r];p==="И"&&e.fields.push({id:r,value:E||null}),p==="ИЛИ"&&e.orFields.push(r),p==="!И"&&e.notFields.push(r),p==="!ИЛИ"&&e.notOrFields.push(r),p==="=И"&&e.prioriteFields.push(r),p==="=ИЛИ"&&e.prioriteOrFields.push(r)}for(let a in e)((u=e[a])==null?void 0:u.length)===0?e[a]=null:typeof e[a]=="object"&&(e[a]=JSON.stringify(e[a]));await le(e,C==null?void 0:C.value),Z()}const O=[{name:"И"},{name:"ИЛИ"},{name:"!И"},{name:"!ИЛИ"},{name:"=И"},{name:"=ИЛИ"}];return X(()=>{}),(f,e)=>{const u=P,a=T,r=q,E=J,p=R,D=$,L=H,M=A;return d(),w(M,null,{default:_(()=>[i(L,{title:"Конструктор"},{default:_(()=>[m("div",ae,[ne,i(u,{modelValue:n(h),"onUpdate:modelValue":e[0]||(e[0]=l=>x(h)?h.value=l:null),placeholder:"Наименование"},null,8,["modelValue"]),te,i(u,{modelValue:n(y),"onUpdate:modelValue":e[1]||(e[1]=l=>x(y)?y.value=l:null),placeholder:"https://"},null,8,["modelValue"]),oe,i(u,{modelValue:n(g),"onUpdate:modelValue":e[2]||(e[2]=l=>x(g)?g.value=l:null),placeholder:"Через 500 км после применения рекомендуется дополнить эффект"},null,8,["modelValue"])]),N(" Отметьте необходимые признаки "),i(r,{modelValue:n(b),"onUpdate:modelValue":e[3]||(e[3]=l=>x(b)?b.value=l:null),multiple:"",filterable:"","allow-create":"","default-first-option":"","reserve-keyword":!1,placeholder:"Выберите признак",size:"large",style:{width:"100%"}},{default:_(()=>[(d(!0),s(k,null,V(n(G),l=>(d(),w(a,{key:l.id,label:l.name,value:l.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),de,(d(!0),s(k,null,V(n(j),l=>(d(),s("div",{key:l.id,class:"constructorBlock"},[m("h3",null,B(l.name),1),(d(!0),s(k,null,V(l.fields,o=>(d(),s("div",{key:o.id},[l.type=="input"?(d(),s("div",ie,[m("label",null,B(o.name),1),m("div",re,[i(r,{modelValue:n(v)[o.id],"onUpdate:modelValue":t=>n(v)[o.id]=t,placeholder:"Условие",style:{width:"125px"}},{default:_(()=>[(d(),s(k,null,V(O,t=>i(a,{key:t.name,value:t.name},null,8,["value"])),64))]),_:2},1032,["modelValue","onUpdate:modelValue"]),i(u,{modelValue:n(F)[o.id],"onUpdate:modelValue":t=>n(F)[o.id]=t,placeholder:o.placeholder},null,8,["modelValue","onUpdate:modelValue","placeholder"])])])):S("",!0),l.type!="input"?(d(),s("div",se,[i(r,{modelValue:n(v)[o.id],"onUpdate:modelValue":t=>n(v)[o.id]=t,placeholder:"Условие",style:{width:"110px"}},{default:_(()=>[(d(),s(k,null,V(O,t=>i(a,{key:t.name,value:t.name},null,8,["value"])),64))]),_:2},1032,["modelValue","onUpdate:modelValue"]),i(p,{modelValue:n(U)[l.id],"onUpdate:modelValue":t=>n(U)[l.id]=t},{default:_(()=>[(d(),w(E,{label:o.name,key:o.name},{default:_(()=>[N(B(o.name),1)]),_:2},1032,["label"]))]),_:2},1032,["modelValue","onUpdate:modelValue"])])):S("",!0)]))),128))]))),128)),m("div",me,[i(D,{size:"large",type:"primary",onClick:z},{default:_(()=>[N(" СОХРАНИТЬ ")]),_:1})])]),_:1})]),_:1})}}};export{je as default};

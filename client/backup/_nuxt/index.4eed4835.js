import{E as k,a as B}from"./el-table.1ea00c33.js";import{e as C,d as T,E as $}from"./index.5fa32fd5.js";import{E as S}from"./el-button.03ba6d71.js";import{_ as D}from"./nuxt-link.ea6b5504.js";import{a as G,_ as z}from"./layout.3928bfcd.js";import"./base.77fa367f.js";import"./el-checkbox.9c38c335.js";import"./el-scrollbar.34d97b83.js";/* empty css                */import"./el-tooltip.4ed993c7.js";import"./el-popper.dbcacd56.js";import{E as A}from"./el-overlay.d0e24d55.js";import"./el-input.a60a8382.js";import{E as w}from"./el-message.559fdb3b.js";import{u as F}from"./fetch.8d6c139c.js";import{p as M,s as N,r as P,o as c,c as V,e as o,f as t,u as m,h as n,t as l,k as g}from"./entry.fc15d232.js";import"./aria.e58ff6b3.js";import"./_Uint8Array.d1d7f028.js";import"./_initCloneObject.61cc963c.js";import"./el-card.638d2078.js";import"./event.9519ab40.js";import"./vnode.9fcf83e4.js";import"./validator.2bf4c219.js";import"./typescript.defaf979.js";import"./cookie.980930a1.js";const I={key:0},K={key:1},pt=M({__name:"index",async setup(L){let r,d;const u=F(),h=([r,d]=N(()=>u.getAllSignGroup()),r=await r,d(),r),i=P(h),y=async(s,_)=>{try{await A.confirm("Это приведёт к удалению всех связанных признаков и товаров. Продолжить?","Внимание!",{cancelButtonText:"Отмена",confirmButtonText:"OK",type:"warning"});try{await u.deleteSignGroup(s),i.value=i.value.filter(a=>a.id!==s),w({type:"success",message:`Группа признаков "${_}" удалена`})}catch{w({type:"error",message:`При удалении признака "${_}" возникла ошибка`})}}catch{console.log("Удаление отменено")}};return(s,_)=>{const a=k,p=$,f=S,b=D,x=B,E=G,v=z;return c(),V(v,null,{default:o(()=>[t(E,{title:"Группы признаков",buttonText:"Добавить группу",buttonRoute:"/admin/signs/add"},{default:o(()=>[t(x,{data:m(i),style:{width:"100%"}},{default:o(()=>[t(a,{label:"Наименование"},{default:o(e=>[n("div",null,l(e.row.name),1)]),_:1}),t(a,{label:"Позиция",width:"110",align:"center"},{default:o(e=>[n("div",null,l(e.row.orderPosition),1)]),_:1}),t(a,{label:"Тип группы",width:"150",align:"center"},{default:o(e=>[n("div",null,l(e.row.part),1)]),_:1}),t(a,{label:"Тип полей",width:"120",align:"center"},{default:o(e=>[n("div",null,l(e.row.fieldsType),1)]),_:1}),t(a,{label:"Признаков",width:"140",align:"center"},{default:o(e=>[n("div",null,l(e.row.signs.length),1)]),_:1}),t(a,{label:"Неисправность",width:"150",align:"center"},{default:o(e=>[e.row.trouble?(c(),g("div",K,"Да")):(c(),g("div",I,"Нет"))]),_:1}),t(a,{width:"130"},{default:o(e=>[t(b,{to:`/admin/signs/${e.row.id}`},{default:o(()=>[t(f,{size:"small"},{default:o(()=>[t(p,null,{default:o(()=>[t(m(C))]),_:1})]),_:1})]),_:2},1032,["to"]),t(f,{class:"deleteProductBtn",size:"small",type:"danger",onClick:O=>y(e.row.id,e.row.name)},{default:o(()=>[t(p,null,{default:o(()=>[t(m(T))]),_:1})]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1})]),_:1})}}});export{pt as default};

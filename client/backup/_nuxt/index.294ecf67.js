import{E as b,a as h}from"./el-table.5861f07a.js";import{e as w,d as C,E}from"./index.ecc70c7e.js";import{E as v}from"./el-button.fc66341b.js";import{_ as g}from"./nuxt-link.47d258eb.js";import{a as B,_ as k}from"./layout.a8ccacc0.js";import"./base.f1308dc9.js";import"./el-checkbox.e071bec1.js";import"./el-scrollbar.c28338f8.js";/* empty css                */import"./el-tooltip.4ed993c7.js";import"./el-popper.e4edb06d.js";import{u as D}from"./cookie.f064772b.js";import{p as N,r as P,s as $,o as z,c as A,e as o,f as t,u as s,h as V,t as I}from"./entry.67b6308c.js";import{n as L}from"./notify.07e3b357.js";import"./fetch.96af1957.js";import{g as R,d as S}from"./fetch-data.87f96ffe.js";import"./aria.266764fd.js";import"./_Uint8Array.5a0b4080.js";import"./_initCloneObject.a4a85dbf.js";import"./el-card.2e4a40ed.js";import"./event.9519ab40.js";import"./el-notification.c217bb8d.js";const T={style:{display:"flex","align-items":"center"}},it=N({__name:"index",async setup(j){let a,_;const e=D("accessToken"),n=P([]);try{n.value=([a,_]=$(()=>R(e==null?void 0:e.value)),a=await a,_(),a)}catch{L({message:"Ошибка получения товаров"})}async function p(l){n.value=n.value.filter(i=>i.id!==l),await S(l,e==null?void 0:e.value)}return(l,i)=>{const m=b,c=E,d=v,u=g,f=h,x=B,y=k;return z(),A(y,null,{default:o(()=>[t(x,{title:"Товары",buttonText:"Добавить товар",buttonRoute:"/admin/products/add"},{default:o(()=>[t(f,{data:s(n),style:{width:"100%"}},{default:o(()=>[t(m,{label:"Наименование"},{default:o(r=>[V("div",T,I(r.row.name),1)]),_:1}),t(m,{label:"Управление",width:"130"},{default:o(r=>[t(u,{to:`/admin/products/${r.row.id}`},{default:o(()=>[t(d,{size:"small"},{default:o(()=>[t(c,null,{default:o(()=>[t(s(w))]),_:1})]),_:1})]),_:2},1032,["to"]),t(d,{class:"deleteProductBtn",size:"small",type:"danger",onClick:q=>p(r.row.id)},{default:o(()=>[t(c,null,{default:o(()=>[t(s(C))]),_:1})]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1})]),_:1})}}});export{it as default};

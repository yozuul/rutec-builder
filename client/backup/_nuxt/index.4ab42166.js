import{E as b,a as h}from"./el-table.56c9ec03.js";import{e as w,d as C,E}from"./index.3749c23d.js";import{E as v}from"./el-button.66a7494d.js";import{_ as g}from"./nuxt-link.ad9dd8d2.js";import{a as B,_ as k}from"./layout.5b73358c.js";import"./base.9e48fd82.js";import"./el-checkbox.86d566aa.js";import"./el-scrollbar.59c927cb.js";/* empty css                */import"./el-tooltip.4ed993c7.js";import"./el-popper.7a72c05b.js";import{u as D}from"./cookie.5c62db49.js";import{p as N,r as P,s as $,o as z,c as A,e as o,f as t,u as s,h as V,t as I}from"./entry.217baba9.js";import{n as L}from"./notify.216590b0.js";import"./fetch.381ee2a2.js";import{g as R,d as S}from"./fetch-data.87f96ffe.js";import"./aria.e6ae6494.js";import"./_Uint8Array.5bb04ca3.js";import"./_initCloneObject.8fc5fac6.js";import"./el-card.0e945044.js";import"./event.9519ab40.js";import"./el-notification.e5d2fd0a.js";const T={style:{display:"flex","align-items":"center"}},it=N({__name:"index",async setup(j){let a,_;const e=D("accessToken"),n=P([]);try{n.value=([a,_]=$(()=>R(e==null?void 0:e.value)),a=await a,_(),a)}catch{L({message:"Ошибка получения товаров"})}async function p(l){n.value=n.value.filter(i=>i.id!==l),await S(l,e==null?void 0:e.value)}return(l,i)=>{const m=b,c=E,d=v,u=g,f=h,x=B,y=k;return z(),A(y,null,{default:o(()=>[t(x,{title:"Товары",buttonText:"Добавить товар",buttonRoute:"/admin/products/add"},{default:o(()=>[t(f,{data:s(n),style:{width:"100%"}},{default:o(()=>[t(m,{label:"Наименование"},{default:o(r=>[V("div",T,I(r.row.name),1)]),_:1}),t(m,{label:"Управление",width:"130"},{default:o(r=>[t(u,{to:`/admin/products/${r.row.id}`},{default:o(()=>[t(d,{size:"small"},{default:o(()=>[t(c,null,{default:o(()=>[t(s(w))]),_:1})]),_:1})]),_:2},1032,["to"]),t(d,{class:"deleteProductBtn",size:"small",type:"danger",onClick:q=>p(r.row.id)},{default:o(()=>[t(c,null,{default:o(()=>[t(s(C))]),_:1})]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1})]),_:1})}}});export{it as default};

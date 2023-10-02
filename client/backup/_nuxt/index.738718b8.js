import{E as I,a as R}from"./el-table.219392da.js";import{b as M}from"./el-select.cb4b6ca0.js";import{E as V}from"./el-button.acea7a01.js";import{e as j,d as K,E as L}from"./index.ab034334.js";import{_ as O}from"./nuxt-link.317eb2cf.js";import{E as q}from"./el-pagination.0fd35243.js";import{a as G,_ as H}from"./layout.13d49267.js";import"./base.285fe2dc.js";import"./el-checkbox.f1296d3c.js";import"./el-scrollbar.c5894b26.js";/* empty css                */import"./el-tooltip.4ed993c7.js";import"./el-popper.f43be05b.js";import"./el-input.dc05c29c.js";import{E as J}from"./el-overlay.e6f42b74.js";import{E as x}from"./el-message.dbf28c9d.js";import{u as Q}from"./partnerStore.d4ad66b7.js";import{p as U,s as b,r as u,z as W,o as X,c as Y,e as a,f as e,u as n,j as w,t as Z}from"./entry.dd0ef4c2.js";import"./aria.e49387ad.js";import"./_Uint8Array.99c0cb11.js";import"./_initCloneObject.43635b93.js";import"./event.9519ab40.js";import"./validator.d81aa55b.js";import"./typescript.defaf979.js";import"./el-card.f947c4bb.js";import"./vnode.155f36ff.js";import"./api.config.372e5441.js";import"./cookie.1208391b.js";const Pt=U({__name:"index",async setup(tt){let p,_;const m=Q();try{[p,_]=b(()=>m.fetchAllPartners()),await p,_(),[p,_]=b(()=>m.fetchCity()),await p,_()}catch(t){console.log(t)}const y=u([]);let v=new Set;m.partners.map(t=>{v.add(t.city.name)}),y.value=Array.from(v).map(t=>({text:t,value:t}));const g=u(),C=()=>{g.value.clearFilter()},E=(t,o)=>o.city===t,k=(t,o)=>o.companyType===t,T=(t,o)=>o.status===t;let f=m.partners.map(t=>({...t,city:t.city.name}));const l=u(50),r=u(1);let s=u([]);W(()=>{s.value=f.slice((r.value-1)*l.value,r.value*l.value)});const z=t=>{l.value=t,s.value=f.slice((r.value-1)*l.value,r.value*l.value)},S=t=>{r.value=t,s.value=f.slice((r.value-1)*l.value,r.value*l.value)},B=async t=>{try{await J.confirm("Уверены, что хотите удалить партнёра?","Внимание!",{cancelButtonText:"Отмена",confirmButtonText:"OK",type:"warning"});try{await m.deletePartner(t),s.value=s.value.filter(o=>o.id!==t),x({type:"success",message:`Партнёр с ID ${t} удалён`})}catch{x({type:"error",message:`При удалении партнёра с ID ${t}  возникла ошибка`})}}catch{console.log("Удаление отменено")}};return(t,o)=>{const i=I,P=M,d=V,h=L,D=O,N=R,$=q,A=G,F=H;return X(),Y(F,null,{default:a(()=>[e(A,{title:"Партнёры",buttonText:"Добавить партнёра",buttonRoute:"/admin/partners/add"},{default:a(()=>[e(N,{ref_key:"tableRef",ref:g,"row-key":"companyName",data:n(s),style:{width:"100%"}},{default:a(()=>[e(i,{prop:"companyName",label:"Название",sortable:"","column-key":"companyName"}),e(i,{width:"180",prop:"city",label:"Город",sortable:"","column-key":"city",filters:n(y),"filter-method":E},null,8,["filters"]),e(i,{width:"160",prop:"companyType",label:"Тип",sortable:"","column-key":"companyType",filters:[{text:"Автосервис",value:"Автосервис"},{text:"Магазин",value:"Магазин"},{text:"Предприятие",value:"Предприятие"}],"filter-method":k}),e(i,{prop:"email",label:"Email",width:"250"}),e(i,{prop:"status",label:"Статус",width:"130",sortable:"","column-key":"status",filters:[{text:"Одобрен",value:"Одобрен"},{text:"Ожидает",value:"Ожидает"},{text:"Отклонён",value:"Отклонён"}],"filter-method":T,"filter-placement":"bottom-end"},{default:a(c=>[e(P,{type:c.row.status==="Одобрен"?"success":c.row.status==="Отклонён"?"danger":"","disable-transitions":""},{default:a(()=>[w(Z(c.row.status),1)]),_:2},1032,["type"])]),_:1}),e(i,{width:"160",align:"right"},{header:a(()=>[e(d,{size:"small",onClick:C},{default:a(()=>[w("Очистить фильтры")]),_:1})]),default:a(c=>[e(D,{to:`/admin/partners/${c.row.id}`},{default:a(()=>[e(d,{size:"small"},{default:a(()=>[e(h,null,{default:a(()=>[e(n(j))]),_:1})]),_:1})]),_:2},1032,["to"]),e(d,{class:"deleteProductBtn",size:"small",type:"danger",onClick:et=>B(c.row.id)},{default:a(()=>[e(h,null,{default:a(()=>[e(n(K))]),_:1})]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),e($,{onSizeChange:z,onCurrentChange:S,"current-page":n(r),"page-size":n(l),layout:"prev, pager, next",total:n(f).length},null,8,["current-page","page-size","total"])]),_:1})]),_:1})}}});export{Pt as default};

import{_ as i}from"./PromoAddEdit.vue.cfc51be4.js";import{_ as a}from"./layout.541a1484.js";import{p as s,x as n,s as _,o as c,c as u,e as f,f as l,u as d}from"./entry.3d92c549.js";import{u as x}from"./promoStore.72742efe.js";import"./el-input.4a922344.js";import"./aria.910d6243.js";import"./index.1b6b466e.js";import"./base.93ed0562.js";import"./el-button.a2516ad4.js";import"./typescript.defaf979.js";import"./event.9519ab40.js";import"./el-form.b9988dee.js";import"./_Uint8Array.f8a188ec.js";import"./_initCloneObject.f0202db4.js";import"./el-select.1ad93c9c.js";import"./el-popper.b4a381c3.js";import"./el-scrollbar.45f457e3.js";import"./validator.40155378.js";import"./el-notification.7a709104.js";import"./el-card.9b80e41d.js";import"./api.config.70c9179f.js";import"./cookie.6679f996.js";const H=s({__name:"[id]",async setup(P){let o,t;const r=n().params.id;console.log(r);const m=x();return[o,t]=_(()=>m.fetchPromo(r)),await o,t(),(h,w)=>{const p=i,e=a;return c(),u(e,null,{default:f(()=>[l(p,{title:"Редактирование материала",promoData:d(m).currentPromo},null,8,["promoData"])]),_:1})}}});export{H as default};

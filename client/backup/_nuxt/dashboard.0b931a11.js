import{Y as C,Z as E,_ as y,$,a0 as w,a1 as h,E as N}from"./index.4edc3df1.js";import{E as I,a as L}from"./el-menu.a0e2a947.js";import{a as M,b as x,E as A}from"./el-main.a9dd3174.js";import"./base.2bb6cb54.js";/* empty css                */import"./el-tooltip.4ed993c7.js";import"./el-popper.8acabd0f.js";import{p as v,x as B,r as c,z as O,o as g,c as P,e,f as a,u as o,af as r,j as d,b as R,k as S,G as V}from"./entry.18e2495c.js";import"./aria.e146d83a.js";import"./vnode.21d4e520.js";import"./typescript.defaf979.js";const j=v({__name:"Navbar",setup(k){const m=B(),p=c(!1),s=(t,n)=>{},f=(t,n)=>{},l=c("0");return O(()=>{switch(m.path){case"/admin/products":l.value="0";break;case"/admin/signs":l.value="1";break;case"/admin/partners":l.value="2";break;case"/admin/promo":l.value="3";break;case"/admin/users":l.value="4";break;case"/admin/settings":l.value="5";break}}),(t,n)=>{const i=N,u=I,b=L,T=M;return g(),P(T,{width:"220px"},{default:e(()=>[a(b,{"default-active":"1",class:"el-menu-vertical-demo",collapse:o(p),onOpen:s,onClose:f},{default:e(()=>[a(u,{index:"0",onClick:n[0]||(n[0]=_=>("navigateTo"in t?t.navigateTo:o(r))("/admin/products"))},{title:e(()=>[d("Товары")]),default:e(()=>[a(i,null,{default:e(()=>[a(o(C))]),_:1})]),_:1}),a(u,{index:"1",onClick:n[1]||(n[1]=_=>("navigateTo"in t?t.navigateTo:o(r))("/admin/signs"))},{title:e(()=>[d("Признаки")]),default:e(()=>[a(i,null,{default:e(()=>[a(o(E))]),_:1})]),_:1}),a(u,{index:"2",onClick:n[2]||(n[2]=_=>("navigateTo"in t?t.navigateTo:o(r))("/admin/partners"))},{title:e(()=>[d("Партнёры")]),default:e(()=>[a(i,null,{default:e(()=>[a(o(y))]),_:1})]),_:1}),a(u,{index:"3",onClick:n[3]||(n[3]=_=>("navigateTo"in t?t.navigateTo:o(r))("/admin/promo"))},{title:e(()=>[d("Промо")]),default:e(()=>[a(i,null,{default:e(()=>[a(o($))]),_:1})]),_:1}),a(u,{index:"4",onClick:n[4]||(n[4]=_=>("navigateTo"in t?t.navigateTo:o(r))("/admin/users"))},{title:e(()=>[d("Пользователи")]),default:e(()=>[a(i,null,{default:e(()=>[a(o(w))]),_:1})]),_:1}),a(u,{index:"5",onClick:n[5]||(n[5]=_=>("navigateTo"in t?t.navigateTo:o(r))("/admin/settings"))},{title:e(()=>[d("Настройки")]),default:e(()=>[a(i,null,{default:e(()=>[a(o(h))]),_:1})]),_:1})]),_:1},8,["collapse"])]),_:1})}}});const q={class:"common-layout"},W=v({__name:"dashboard",setup(k){return R(()=>{const m=new URL(window.location.href),p=document.querySelectorAll('[role="menuitem"]');for(let s of p)s.classList.remove("is-active"),s.getAttribute("url")===m.pathname&&s.classList.add("is-active")}),(m,p)=>{const s=j,f=x,l=A;return g(),S("div",q,[a(l,null,{default:e(()=>[a(s),a(f,null,{default:e(()=>[V(m.$slots,"default")]),_:3})]),_:3})])}}});export{W as default};

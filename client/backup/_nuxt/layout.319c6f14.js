import{E as y}from"./el-button.92a13505.js";import{E as _}from"./el-card.5a69f647.js";import"./base.3b6041b1.js";import{p as r,o as l,k as g,h as u,t as i,c as v,e as c,j as T,u as m,af as h,m as L,f as b,G as C,F as k,L as x,x as S,ag as B,a as j,ah as p,ai as E,aj as d,a6 as N,X as R}from"./entry.587fe9c8.js";const V={class:"cardTitle"},D=r({__name:"Card",props:{title:{type:String,default:"Признаки"},buttonText:{type:String},buttonRoute:{type:String}},setup(e){return(t,a)=>{const n=y,o=_;return l(),g(k,null,[u("div",V,[u("h1",null,i(e.title),1),e.buttonText?(l(),v(n,{key:0,type:"primary",size:"default",onClick:a[0]||(a[0]=s=>("navigateTo"in t?t.navigateTo:m(h))(e.buttonRoute))},{default:c(()=>[T(i(e.buttonText),1)]),_:1})):L("",!0)]),b(o,{class:"box-card"},{default:c(()=>[u("div",null,[C(t.$slots,"default")])]),_:3})],64)}}});const w=r({name:"LayoutLoader",inheritAttrs:!1,props:{name:String},async setup(e,t){const a=await p[e.name]().then(n=>n.default||n);return()=>R(a,t.attrs,t.slots)}}),G=r({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(e,t){const a=x("_route"),n=a===S()?B():a,o=j(()=>m(e.name)??n.meta.layout??"default");return()=>{const s=o.value&&o.value in p,f=n.meta.layoutTransition??E;return d(N,s&&f,{default:()=>d(w,s&&{key:o.value,name:o.value,...t.attrs},t.slots).default()}).default()}}});export{G as _,D as a};

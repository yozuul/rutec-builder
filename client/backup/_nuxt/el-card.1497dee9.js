import{b as n,a as p}from"./index.ef34f96c.js";import{_ as c,w as i}from"./base.1cfe9988.js";import{p as d,A as m,o,k as t,D as r,u as s,G as l,j as u,t as y,m as f,h,E as v}from"./entry.932ab5da.js";const w=n({header:{type:String,default:""},bodyStyle:{type:p([String,Object,Array]),default:""},shadow:{type:String,values:["always","hover","never"],default:"always"}}),S=d({name:"ElCard"}),_=d({...S,props:w,setup(C){const a=m("card");return(e,k)=>(o(),t("div",{class:r([s(a).b(),s(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(o(),t("div",{key:0,class:r(s(a).e("header"))},[l(e.$slots,"header",{},()=>[u(y(e.header),1)])],2)):f("v-if",!0),h("div",{class:r(s(a).e("body")),style:v(e.bodyStyle)},[l(e.$slots,"default")],6)],2))}});var b=c(_,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);const $=i(b);export{$ as E};

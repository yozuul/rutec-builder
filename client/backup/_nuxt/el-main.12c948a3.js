import{_ as c,w as y,b as d}from"./base.262ab165.js";import{p as n,P as b,A as i,a as f,o as u,k as p,G as _,D as m,u as s,E as h}from"./entry.92975b44.js";const S=n({name:"ElContainer"}),C=n({...S,props:{direction:{type:String}},setup(r){const t=r,e=b(),o=i("container"),a=f(()=>t.direction==="vertical"?!0:t.direction==="horizontal"?!1:e&&e.default?e.default().some(g=>{const k=g.type.name;return k==="ElHeader"||k==="ElFooter"}):!1);return(l,g)=>(u(),p("section",{class:m([s(o).b(),s(o).is("vertical",s(a))])},[_(l.$slots,"default")],2))}});var A=c(C,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/container.vue"]]);const B=n({name:"ElAside"}),F=n({...B,props:{width:{type:String,default:null}},setup(r){const t=r,e=i("aside"),o=f(()=>t.width?e.cssVarBlock({width:t.width}):{});return(a,l)=>(u(),p("aside",{class:m(s(e).b()),style:h(s(o))},[_(a.$slots,"default")],6))}});var v=c(F,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/aside.vue"]]);const H=n({name:"ElFooter"}),M=n({...H,props:{height:{type:String,default:null}},setup(r){const t=r,e=i("footer"),o=f(()=>t.height?e.cssVarBlock({height:t.height}):{});return(a,l)=>(u(),p("footer",{class:m(s(e).b()),style:h(s(o))},[_(a.$slots,"default")],6))}});var E=c(M,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/footer.vue"]]);const N=n({name:"ElHeader"}),V=n({...N,props:{height:{type:String,default:null}},setup(r){const t=r,e=i("header"),o=f(()=>t.height?e.cssVarBlock({height:t.height}):{});return(a,l)=>(u(),p("header",{class:m(s(e).b()),style:h(s(o))},[_(a.$slots,"default")],6))}});var $=c(V,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/header.vue"]]);const z=n({name:"ElMain"}),x=n({...z,setup(r){const t=i("main");return(e,o)=>(u(),p("main",{class:m(s(t).b())},[_(e.$slots,"default")],2))}});var w=c(x,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/main.vue"]]);const G=y(A,{Aside:v,Footer:E,Header:$,Main:w}),P=d(v);d(E);d($);const j=d(w);export{G as E,P as a,j as b};

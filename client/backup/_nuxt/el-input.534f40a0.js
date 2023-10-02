import{a as c,W as De,r as F,C as Z,p as ze,at as Le,P as Ke,A as xe,M as q,w as ee,Y as P,b as je,S as We,a4 as Ue,a5 as Ye,o as p,k as x,m as v,F as te,D as h,u as t,G as W,h as V,c as C,e as R,H as U,V as ae,f as Xe,J as Ge,N as Je,t as Y,E as Qe,O as we}from"./entry.67b6308c.js";import{i as Ze,b as qe,d as Se}from"./aria.266764fd.js";import{t as ke,O as et,n as Ce,b as tt,a as oe,j as Ie,V as at,P as ot,Q as nt,E as A,f as st}from"./index.ecc70c7e.js";import{v as lt,b as rt,f as it,d as ut,a as ct}from"./el-button.fc66341b.js";import{m as dt}from"./typescript.defaf979.js";import{U as ne}from"./event.9519ab40.js";import{_ as pt,w as ft}from"./base.f1308dc9.js";const vt=()=>ke&&/firefox/i.test(window.navigator.userAgent),mt=o=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(o),ht=["class","style"],yt=/^on[A-Z]/,bt=(o={})=>{const{excludeListeners:m=!1,excludeKeys:l}=o,a=c(()=>((l==null?void 0:l.value)||[]).concat(ht)),r=De();return r?c(()=>{var i;return et(Object.entries((i=r.proxy)==null?void 0:i.$attrs).filter(([u])=>!a.value.includes(u)&&!(m&&yt.test(u))))}):c(()=>({}))};function gt(o){const m=F();function l(){if(o.value==null)return;const{selectionStart:r,selectionEnd:i,value:u}=o.value;if(r==null||i==null)return;const w=u.slice(0,Math.max(0,r)),d=u.slice(Math.max(0,i));m.value={selectionStart:r,selectionEnd:i,value:u,beforeTxt:w,afterTxt:d}}function a(){if(o.value==null||m.value==null)return;const{value:r}=o.value,{beforeTxt:i,afterTxt:u,selectionStart:w}=m.value;if(i==null||u==null||w==null)return;let d=r.length;if(r.endsWith(u))d=r.length-u.length;else if(r.startsWith(i))d=i.length;else{const y=i[w-1],I=r.indexOf(y,w-1);I!==-1&&(d=I+1)}o.value.setSelectionRange(d,d)}return[l,a]}let b;const xt=`
  height:0 !important;
  visibility:hidden !important;
  ${vt()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,wt=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function St(o){const m=window.getComputedStyle(o),l=m.getPropertyValue("box-sizing"),a=Number.parseFloat(m.getPropertyValue("padding-bottom"))+Number.parseFloat(m.getPropertyValue("padding-top")),r=Number.parseFloat(m.getPropertyValue("border-bottom-width"))+Number.parseFloat(m.getPropertyValue("border-top-width"));return{contextStyle:wt.map(u=>`${u}:${m.getPropertyValue(u)}`).join(";"),paddingSize:a,borderSize:r,boxSizing:l}}function Ee(o,m=1,l){var a;b||(b=document.createElement("textarea"),document.body.appendChild(b));const{paddingSize:r,borderSize:i,boxSizing:u,contextStyle:w}=St(o);b.setAttribute("style",`${w};${xt}`),b.value=o.value||o.placeholder||"";let d=b.scrollHeight;const y={};u==="border-box"?d=d+i:u==="content-box"&&(d=d-r),b.value="";const I=b.scrollHeight-r;if(Ce(m)){let f=I*m;u==="border-box"&&(f=f+r+i),d=Math.max(f,d),y.minHeight=`${f}px`}if(Ce(l)){let f=I*l;u==="border-box"&&(f=f+r+i),d=Math.min(f,d)}return y.height=`${d}px`,(a=b.parentNode)==null||a.removeChild(b),b=void 0,y}const Ct=tt({id:{type:String,default:void 0},size:lt,disabled:Boolean,modelValue:{type:oe([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:oe([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:Ie},prefixIcon:{type:Ie},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:oe([Object,Array,String]),default:()=>dt({})}}),It={[ne]:o=>Z(o),input:o=>Z(o),change:o=>Z(o),focus:o=>o instanceof FocusEvent,blur:o=>o instanceof FocusEvent,clear:()=>!0,mouseleave:o=>o instanceof MouseEvent,mouseenter:o=>o instanceof MouseEvent,keydown:o=>o instanceof Event,compositionstart:o=>o instanceof CompositionEvent,compositionupdate:o=>o instanceof CompositionEvent,compositionend:o=>o instanceof CompositionEvent},Et=["role"],zt=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder","form"],kt=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form"],Pt=ze({name:"ElInput",inheritAttrs:!1}),Vt=ze({...Pt,props:Ct,emits:It,setup(o,{expose:m,emit:l}){const a=o,r=Le(),i=Ke(),u=c(()=>{const e={};return a.containerRole==="combobox"&&(e["aria-haspopup"]=r["aria-haspopup"],e["aria-owns"]=r["aria-owns"],e["aria-expanded"]=r["aria-expanded"]),e}),w=c(()=>[a.type==="textarea"?le.b():n.b(),n.m(Pe.value),n.is("disabled",z.value),n.is("exceed",Ne.value),{[n.b("group")]:i.prepend||i.append,[n.bm("group","append")]:i.append,[n.bm("group","prepend")]:i.prepend,[n.m("prefix")]:i.prefix||a.prefixIcon,[n.m("suffix")]:i.suffix||a.suffixIcon||a.clearable||a.showPassword,[n.bm("suffix","password-clear")]:L.value&&G.value},r.class]),d=c(()=>[n.e("wrapper"),n.is("focus",N.value)]),y=bt({excludeKeys:c(()=>Object.keys(u.value))}),{form:I,formItem:f}=rt(),{inputId:se}=it(a,{formItemContext:f}),Pe=ut(),z=ct(),n=xe("input"),le=xe("textarea"),B=q(),S=q(),N=F(!1),X=F(!1),T=F(!1),H=F(!1),re=F(),D=q(a.inputStyle),_=c(()=>B.value||S.value),ie=c(()=>{var e;return(e=I==null?void 0:I.statusIcon)!=null?e:!1}),M=c(()=>(f==null?void 0:f.validateState)||""),ue=c(()=>M.value&&at[M.value]),Ve=c(()=>H.value?ot:nt),Fe=c(()=>[r.style,a.inputStyle]),ce=c(()=>[a.inputStyle,D.value,{resize:a.resize}]),E=c(()=>Ze(a.modelValue)?"":String(a.modelValue)),L=c(()=>a.clearable&&!z.value&&!a.readonly&&!!E.value&&(N.value||X.value)),G=c(()=>a.showPassword&&!z.value&&!a.readonly&&!!E.value&&(!!E.value||N.value)),k=c(()=>a.showWordLimit&&!!y.value.maxlength&&(a.type==="text"||a.type==="textarea")&&!z.value&&!a.readonly&&!a.showPassword),J=c(()=>E.value.length),Ne=c(()=>!!k.value&&J.value>Number(y.value.maxlength)),Te=c(()=>!!i.suffix||!!a.suffixIcon||L.value||a.showPassword||k.value||!!M.value&&ie.value),[_e,Me]=gt(B);qe(S,e=>{if($e(),!k.value||a.resize!=="both")return;const s=e[0],{width:g}=s.contentRect;re.value={right:`calc(100% - ${g+15+6}px)`}});const $=()=>{const{type:e,autosize:s}=a;if(!(!ke||e!=="textarea"||!S.value))if(s){const g=we(s)?s.minRows:void 0,j=we(s)?s.maxRows:void 0,ge=Ee(S.value,g,j);D.value={overflowY:"hidden",...ge},P(()=>{S.value.offsetHeight,D.value=ge})}else D.value={minHeight:Ee(S.value).minHeight}},$e=(e=>{let s=!1;return()=>{var g;if(s||!a.autosize)return;((g=S.value)==null?void 0:g.offsetParent)===null||(e(),s=!0)}})($),O=()=>{const e=_.value;!e||e.value===E.value||(e.value=E.value)},Q=async e=>{_e();let{value:s}=e.target;if(a.formatter&&(s=a.parser?a.parser(s):s,s=a.formatter(s)),!T.value){if(s===E.value){O();return}l(ne,s),l("input",s),await P(),O(),Me()}},de=e=>{l("change",e.target.value)},pe=e=>{l("compositionstart",e),T.value=!0},fe=e=>{var s;l("compositionupdate",e);const g=(s=e.target)==null?void 0:s.value,j=g[g.length-1]||"";T.value=!mt(j)},ve=e=>{l("compositionend",e),T.value&&(T.value=!1,Q(e))},Oe=()=>{H.value=!H.value,K()},K=async()=>{var e;await P(),(e=_.value)==null||e.focus()},Re=()=>{var e;return(e=_.value)==null?void 0:e.blur()},me=e=>{N.value=!0,l("focus",e)},he=e=>{var s;N.value=!1,l("blur",e),a.validateEvent&&((s=f==null?void 0:f.validate)==null||s.call(f,"blur").catch(g=>Se()))},Ae=e=>{X.value=!1,l("mouseleave",e)},Be=e=>{X.value=!0,l("mouseenter",e)},ye=e=>{l("keydown",e)},He=()=>{var e;(e=_.value)==null||e.select()},be=()=>{l(ne,""),l("change",""),l("clear"),l("input","")};return ee(()=>a.modelValue,()=>{var e;P(()=>$()),a.validateEvent&&((e=f==null?void 0:f.validate)==null||e.call(f,"change").catch(s=>Se()))}),ee(E,()=>O()),ee(()=>a.type,async()=>{await P(),O(),$()}),je(()=>{!a.formatter&&a.parser,O(),P($)}),m({input:B,textarea:S,ref:_,textareaStyle:ce,autosize:We(a,"autosize"),focus:K,blur:Re,select:He,clear:be,resizeTextarea:$}),(e,s)=>Ue((p(),x("div",ae(t(u),{class:t(w),style:t(Fe),role:e.containerRole,onMouseenter:Be,onMouseleave:Ae}),[v(" input "),e.type!=="textarea"?(p(),x(te,{key:0},[v(" prepend slot "),e.$slots.prepend?(p(),x("div",{key:0,class:h(t(n).be("group","prepend"))},[W(e.$slots,"prepend")],2)):v("v-if",!0),V("div",{class:h(t(d))},[v(" prefix slot "),e.$slots.prefix||e.prefixIcon?(p(),x("span",{key:0,class:h(t(n).e("prefix"))},[V("span",{class:h(t(n).e("prefix-inner")),onClick:K},[W(e.$slots,"prefix"),e.prefixIcon?(p(),C(t(A),{key:0,class:h(t(n).e("icon"))},{default:R(()=>[(p(),C(U(e.prefixIcon)))]),_:1},8,["class"])):v("v-if",!0)],2)],2)):v("v-if",!0),V("input",ae({id:t(se),ref_key:"input",ref:B,class:t(n).e("inner")},t(y),{type:e.showPassword?H.value?"text":"password":e.type,disabled:t(z),formatter:e.formatter,parser:e.parser,readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,form:a.form,onCompositionstart:pe,onCompositionupdate:fe,onCompositionend:ve,onInput:Q,onFocus:me,onBlur:he,onChange:de,onKeydown:ye}),null,16,zt),v(" suffix slot "),t(Te)?(p(),x("span",{key:1,class:h(t(n).e("suffix"))},[V("span",{class:h(t(n).e("suffix-inner")),onClick:K},[!t(L)||!t(G)||!t(k)?(p(),x(te,{key:0},[W(e.$slots,"suffix"),e.suffixIcon?(p(),C(t(A),{key:0,class:h(t(n).e("icon"))},{default:R(()=>[(p(),C(U(e.suffixIcon)))]),_:1},8,["class"])):v("v-if",!0)],64)):v("v-if",!0),t(L)?(p(),C(t(A),{key:1,class:h([t(n).e("icon"),t(n).e("clear")]),onMousedown:Ge(t(Je),["prevent"]),onClick:be},{default:R(()=>[Xe(t(st))]),_:1},8,["class","onMousedown"])):v("v-if",!0),t(G)?(p(),C(t(A),{key:2,class:h([t(n).e("icon"),t(n).e("password")]),onClick:Oe},{default:R(()=>[(p(),C(U(t(Ve))))]),_:1},8,["class"])):v("v-if",!0),t(k)?(p(),x("span",{key:3,class:h(t(n).e("count"))},[V("span",{class:h(t(n).e("count-inner"))},Y(t(J))+" / "+Y(t(y).maxlength),3)],2)):v("v-if",!0),t(M)&&t(ue)&&t(ie)?(p(),C(t(A),{key:4,class:h([t(n).e("icon"),t(n).e("validateIcon"),t(n).is("loading",t(M)==="validating")])},{default:R(()=>[(p(),C(U(t(ue))))]),_:1},8,["class"])):v("v-if",!0)],2)],2)):v("v-if",!0)],2),v(" append slot "),e.$slots.append?(p(),x("div",{key:1,class:h(t(n).be("group","append"))},[W(e.$slots,"append")],2)):v("v-if",!0)],64)):(p(),x(te,{key:1},[v(" textarea "),V("textarea",ae({id:t(se),ref_key:"textarea",ref:S,class:t(le).e("inner")},t(y),{tabindex:e.tabindex,disabled:t(z),readonly:e.readonly,autocomplete:e.autocomplete,style:t(ce),"aria-label":e.label,placeholder:e.placeholder,form:a.form,onCompositionstart:pe,onCompositionupdate:fe,onCompositionend:ve,onInput:Q,onFocus:me,onBlur:he,onChange:de,onKeydown:ye}),null,16,kt),t(k)?(p(),x("span",{key:0,style:Qe(re.value),class:h(t(n).e("count"))},Y(t(J))+" / "+Y(t(y).maxlength),7)):v("v-if",!0)],64))],16,Et)),[[Ye,e.type!=="hidden"]])}});var Ft=pt(Vt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);const Bt=ft(Ft);export{Bt as E,mt as i};

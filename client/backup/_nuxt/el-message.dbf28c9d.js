import{p as B,A as ae,a as d,o as p,k,G as A,f as x,e as w,a4 as U,h as M,D as m,u as t,t as j,a5 as q,a6 as G,an as re,r as S,b as le,w as ie,c as h,E as ue,m as T,H as ce,F as de,J as pe,C as O,a7 as J,B as _,a8 as F}from"./entry.dd0ef4c2.js";import{a as me,b as fe,E as ge}from"./aria.e49387ad.js";import{b as Z,n as $,j as ye,a as H,t as K,B as P,E as R,T as ve,J as Ce,D as he}from"./index.ab034334.js";import{_ as Q,w as be,c as Te}from"./base.285fe2dc.js";import{m as we}from"./typescript.defaf979.js";import{g as Be}from"./el-button.acea7a01.js";const V={},Ne=Z({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"}}),Ee=["textContent"],Se=B({name:"ElBadge"}),ke=B({...Se,props:Ne,setup(s,{expose:n}){const e=s,o=ae("badge"),a=d(()=>e.isDot?"":$(e.value)&&$(e.max)?e.max<e.value?`${e.max}+`:`${e.value}`:`${e.value}`);return n({content:a}),(l,u)=>(p(),k("div",{class:m(t(o).b())},[A(l.$slots,"default"),x(G,{name:`${t(o).namespace.value}-zoom-in-center`,persisted:""},{default:w(()=>[U(M("sup",{class:m([t(o).e("content"),t(o).em("content",l.type),t(o).is("fixed",!!l.$slots.default),t(o).is("dot",l.isDot)]),textContent:j(t(a))},null,10,Ee),[[q,!l.hidden&&(t(a)||l.isDot)]])]),_:1},8,["name"])],2))}});var Me=Q(ke,[["__file","/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);const _e=be(Me),W=["success","info","warning","error"],i=we({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:K?document.body:void 0}),$e=Z({customClass:{type:String,default:i.customClass},center:{type:Boolean,default:i.center},dangerouslyUseHTMLString:{type:Boolean,default:i.dangerouslyUseHTMLString},duration:{type:Number,default:i.duration},icon:{type:ye,default:i.icon},id:{type:String,default:i.id},message:{type:H([String,Object,Function]),default:i.message},onClose:{type:H(Function),required:!1},showClose:{type:Boolean,default:i.showClose},type:{type:String,values:W,default:i.type},offset:{type:Number,default:i.offset},zIndex:{type:Number,default:i.zIndex},grouping:{type:Boolean,default:i.grouping},repeatNum:{type:Number,default:i.repeatNum}}),xe={destroy:()=>!0},c=re([]),ze=s=>{const n=c.findIndex(a=>a.id===s),e=c[n];let o;return n>0&&(o=c[n-1]),{current:e,prev:o}},Ie=s=>{const{prev:n}=ze(s);return n?n.vm.exposed.bottom.value:0},De=(s,n)=>c.findIndex(o=>o.id===s)>0?20:n,Le=["id"],Oe=["innerHTML"],Fe=B({name:"ElMessage"}),He=B({...Fe,props:$e,emits:xe,setup(s,{expose:n}){const e=s,{Close:o}=ve,{ns:a,zIndex:l}=Be("message"),{currentZIndex:u,nextZIndex:f}=l,g=S(),v=S(!1),C=S(0);let N;const Y=d(()=>e.type?e.type==="error"?"danger":e.type:"info"),ee=d(()=>{const r=e.type;return{[a.bm("icon",r)]:r&&P[r]}}),z=d(()=>e.icon||P[e.type]||""),se=d(()=>Ie(e.id)),I=d(()=>De(e.id,e.offset)+se.value),ne=d(()=>C.value+I.value),te=d(()=>({top:`${I.value}px`,zIndex:u.value}));function E(){e.duration!==0&&({stop:N}=Ce(()=>{b()},e.duration))}function D(){N==null||N()}function b(){v.value=!1}function oe({code:r}){r===ge.esc&&b()}return le(()=>{E(),f(),v.value=!0}),ie(()=>e.repeatNum,()=>{D(),E()}),me(document,"keydown",oe),fe(g,()=>{C.value=g.value.getBoundingClientRect().height}),n({visible:v,bottom:ne,close:b}),(r,L)=>(p(),h(G,{name:t(a).b("fade"),onBeforeLeave:r.onClose,onAfterLeave:L[0]||(L[0]=je=>r.$emit("destroy")),persisted:""},{default:w(()=>[U(M("div",{id:r.id,ref_key:"messageRef",ref:g,class:m([t(a).b(),{[t(a).m(r.type)]:r.type&&!r.icon},t(a).is("center",r.center),t(a).is("closable",r.showClose),r.customClass]),style:ue(t(te)),role:"alert",onMouseenter:D,onMouseleave:E},[r.repeatNum>1?(p(),h(t(_e),{key:0,value:r.repeatNum,type:t(Y),class:m(t(a).e("badge"))},null,8,["value","type","class"])):T("v-if",!0),t(z)?(p(),h(t(R),{key:1,class:m([t(a).e("icon"),t(ee)])},{default:w(()=>[(p(),h(ce(t(z))))]),_:1},8,["class"])):T("v-if",!0),A(r.$slots,"default",{},()=>[r.dangerouslyUseHTMLString?(p(),k(de,{key:1},[T(" Caution here, message could've been compromised, never use user's input as message "),M("p",{class:m(t(a).e("content")),innerHTML:r.message},null,10,Oe)],2112)):(p(),k("p",{key:0,class:m(t(a).e("content"))},j(r.message),3))]),r.showClose?(p(),h(t(R),{key:2,class:m(t(a).e("closeBtn")),onClick:pe(b,["stop"])},{default:w(()=>[x(t(o))]),_:1},8,["class","onClick"])):T("v-if",!0)],46,Le),[[q,v.value]])]),_:3},8,["name","onBeforeLeave"]))}});var Pe=Q(He,[["__file","/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);let Re=1;const X=s=>{const n=!s||O(s)||J(s)||_(s)?{message:s}:s,e={...i,...n};if(!e.appendTo)e.appendTo=document.body;else if(O(e.appendTo)){let o=document.querySelector(e.appendTo);he(o)||(o=document.body),e.appendTo=o}return e},Ve=s=>{const n=c.indexOf(s);if(n===-1)return;c.splice(n,1);const{handler:e}=s;e.close()},Ae=({appendTo:s,...n},e)=>{const o=`message_${Re++}`,a=n.onClose,l=document.createElement("div"),u={...n,id:o,onClose:()=>{a==null||a(),Ve(C)},onDestroy:()=>{F(null,l)}},f=x(Pe,u,_(u.message)||J(u.message)?{default:_(u.message)?u.message:()=>u.message}:null);f.appContext=e||y._context,F(f,l),s.appendChild(l.firstElementChild);const g=f.component,C={id:o,vnode:f,vm:g,handler:{close:()=>{g.exposed.visible.value=!1}},props:f.component.props};return C},y=(s={},n)=>{if(!K)return{close:()=>{}};if($(V.max)&&c.length>=V.max)return{close:()=>{}};const e=X(s);if(e.grouping&&c.length){const a=c.find(({vnode:l})=>{var u;return((u=l.props)==null?void 0:u.message)===e.message});if(a)return a.props.repeatNum+=1,a.props.type=e.type,a.handler}const o=Ae(e,n);return c.push(o),o.handler};W.forEach(s=>{y[s]=(n={},e)=>{const o=X(n);return y({...o,type:s},e)}});function Ue(s){for(const n of c)(!s||s===n.props.type)&&n.handler.close()}y.closeAll=Ue;y._context=null;const We=Te(y,"$message");export{We as E};

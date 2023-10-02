import{p as j,r as W,a as g,b as K,o as m,c as E,e as N,a4 as D,h as C,D as v,u as a,E as P,H as R,m as _,t as z,G as Q,k as F,F as X,a5 as $,J as Y,f as G,a6 as ee,a7 as I,C as te,a8 as x}from"./entry.18e2495c.js";import{a as oe,E as w}from"./aria.e146d83a.js";import{b as ne,j as se,a as B,B as V,E as A,R as ie,J as ae,t as le,D as O}from"./index.4edc3df1.js";import{_ as re,c as ce}from"./base.2bb6cb54.js";import{g as ue}from"./el-button.4b28c0d2.js";const Z=["success","info","warning","error"],fe=ne({customClass:{type:String,default:""},dangerouslyUseHTMLString:{type:Boolean,default:!1},duration:{type:Number,default:4500},icon:{type:se},id:{type:String,default:""},message:{type:B([String,Object]),default:""},offset:{type:Number,default:0},onClick:{type:B(Function),default:()=>{}},onClose:{type:B(Function),required:!0},position:{type:String,values:["top-right","top-left","bottom-right","bottom-left"],default:"top-right"},showClose:{type:Boolean,default:!0},title:{type:String,default:""},type:{type:String,values:[...Z,""],default:""},zIndex:{type:Number,default:0}}),pe={destroy:()=>!0},de=["id"],me=["textContent"],ve={key:0},ye=["innerHTML"],ge=j({name:"ElNotification"}),Ce=j({...ge,props:fe,emits:pe,setup(e,{expose:s}){const o=e,{ns:n,zIndex:r}=ue("notification"),{nextZIndex:f,currentZIndex:p}=r,{Close:c}=ie,l=W(!1);let i;const u=g(()=>{const t=o.type;return t&&V[o.type]?n.m(t):""}),d=g(()=>o.type&&V[o.type]||o.icon),T=g(()=>o.position.endsWith("right")?"right":"left"),q=g(()=>o.position.startsWith("top")?"top":"bottom"),J=g(()=>({[q.value]:`${o.offset}px`,zIndex:p.value}));function S(){o.duration>0&&({stop:i}=ae(()=>{l.value&&h()},o.duration))}function H(){i==null||i()}function h(){l.value=!1}function U({code:t}){t===w.delete||t===w.backspace?H():t===w.esc?l.value&&h():S()}return K(()=>{S(),f(),l.value=!0}),oe(document,"keydown",U),s({visible:l,close:h}),(t,b)=>(m(),E(ee,{name:a(n).b("fade"),onBeforeLeave:t.onClose,onAfterLeave:b[1]||(b[1]=L=>t.$emit("destroy")),persisted:""},{default:N(()=>[D(C("div",{id:t.id,class:v([a(n).b(),t.customClass,a(T)]),style:P(a(J)),role:"alert",onMouseenter:H,onMouseleave:S,onClick:b[0]||(b[0]=(...L)=>t.onClick&&t.onClick(...L))},[a(d)?(m(),E(a(A),{key:0,class:v([a(n).e("icon"),a(u)])},{default:N(()=>[(m(),E(R(a(d))))]),_:1},8,["class"])):_("v-if",!0),C("div",{class:v(a(n).e("group"))},[C("h2",{class:v(a(n).e("title")),textContent:z(t.title)},null,10,me),D(C("div",{class:v(a(n).e("content")),style:P(t.title?void 0:{margin:0})},[Q(t.$slots,"default",{},()=>[t.dangerouslyUseHTMLString?(m(),F(X,{key:1},[_(" Caution here, message could've been compromised, never use user's input as message "),C("p",{innerHTML:t.message},null,8,ye)],2112)):(m(),F("p",ve,z(t.message),1))])],6),[[$,t.message]]),t.showClose?(m(),E(a(A),{key:0,class:v(a(n).e("closeBtn")),onClick:Y(h,["stop"])},{default:N(()=>[G(a(c))]),_:1},8,["class","onClick"])):_("v-if",!0)],2)],46,de),[[$,l.value]])]),_:3},8,["name","onBeforeLeave"]))}});var he=re(Ce,[["__file","/home/runner/work/element-plus/element-plus/packages/components/notification/src/notification.vue"]]);const k={"top-left":[],"top-right":[],"bottom-left":[],"bottom-right":[]},M=16;let be=1;const y=function(e={},s=null){if(!le)return{close:()=>{}};(typeof e=="string"||I(e))&&(e={message:e});const o=e.position||"top-right";let n=e.offset||0;k[o].forEach(({vm:u})=>{var d;n+=(((d=u.el)==null?void 0:d.offsetHeight)||0)+M}),n+=M;const r=`notification_${be++}`,f=e.onClose,p={...e,offset:n,id:r,onClose:()=>{Ee(r,o,f)}};let c=document.body;O(e.appendTo)?c=e.appendTo:te(e.appendTo)&&(c=document.querySelector(e.appendTo)),O(c)||(c=document.body);const l=document.createElement("div"),i=G(he,p,I(p.message)?{default:()=>p.message}:null);return i.appContext=s??y._context,i.props.onDestroy=()=>{x(null,l)},x(i,l),k[o].push({vm:i}),c.appendChild(l.firstElementChild),{close:()=>{i.component.exposed.visible.value=!1}}};Z.forEach(e=>{y[e]=(s={})=>((typeof s=="string"||I(s))&&(s={message:s}),y({...s,type:e}))});function Ee(e,s,o){const n=k[s],r=n.findIndex(({vm:i})=>{var u;return((u=i.component)==null?void 0:u.props.id)===e});if(r===-1)return;const{vm:f}=n[r];if(!f)return;o==null||o(f);const p=f.el.offsetHeight,c=s.split("-")[0];n.splice(r,1);const l=n.length;if(!(l<1))for(let i=r;i<l;i++){const{el:u,component:d}=n[i].vm,T=Number.parseInt(u.style[c],10)-p-M;d.props.offset=T}}function ke(){for(const e of Object.values(k))e.forEach(({vm:s})=>{s.component.exposed.visible.value=!1})}y.closeAll=ke;y._context=null;const Be=ce(y,"$notify");export{Be as E};

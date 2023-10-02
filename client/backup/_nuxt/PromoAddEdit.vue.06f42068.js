import{E as Ee}from"./el-input.0c7e4fc0.js";import{b as Pe,E as Ue,a as Se}from"./el-form.ffaaa79d.js";import{E as Ce,a as Fe}from"./el-select.4d0d0907.js";import{u as Le,a as G,e as Re,E as De}from"./el-button.527ce4bf.js";import{p as V,A as I,a as D,B as Te,C as ae,o as g,k as C,D as h,u as e,h as O,E as A,G as T,t as W,m as _,c as L,e as b,H as Oe,N as F,r as x,F as Be,l as Ne,I as pe,J as M,f as w,T as Ve,K as Ae,L as je,M as ee,O as Ie,w as re,P as Me,Q as qe,R as ze,S as He,U as le,V as ne,v as Q,b as Ke,i as We,j as Z}from"./entry.95ec977b.js";import{b as q,a as $,w as xe,c as fe,f as Ge,g as me,h as ve,E as j,i as Xe,z as Je,d as Ye}from"./index.48935fd0.js";import{_ as H,w as ye}from"./base.4b945391.js";import{t as oe,i as ge,u as Qe,d as Ze}from"./aria.3d98f9c5.js";import{m as te}from"./typescript.defaf979.js";import{a as et}from"./layout.840bdf1c.js";import"./el-scrollbar.c9f15ca1.js";import"./el-popper.b6937cee.js";import{E as K}from"./el-notification.10eb951a.js";import{u as tt}from"./promoStore.29f8485c.js";var st=1,ot=4;function at(r){return Pe(r,st|ot)}const rt=q({type:{type:String,default:"line",values:["line","circle","dashboard"]},percentage:{type:Number,default:0,validator:r=>r>=0&&r<=100},status:{type:String,default:"",values:["","success","exception","warning"]},indeterminate:{type:Boolean,default:!1},duration:{type:Number,default:3},strokeWidth:{type:Number,default:6},strokeLinecap:{type:$(String),default:"round"},textInside:{type:Boolean,default:!1},width:{type:Number,default:126},showText:{type:Boolean,default:!0},color:{type:$([String,Array,Function]),default:""},striped:Boolean,stripedFlow:Boolean,format:{type:$(Function),default:r=>`${r}%`}}),lt=["aria-valuenow"],nt={viewBox:"0 0 100 100"},it=["d","stroke","stroke-width"],ut=["d","stroke","opacity","stroke-linecap","stroke-width"],dt={key:0},ct=V({name:"ElProgress"}),pt=V({...ct,props:rt,setup(r){const s=r,l={success:"#13ce66",exception:"#ff4949",warning:"#e6a23c",default:"#20a0ff"},o=I("progress"),i=D(()=>({width:`${s.percentage}%`,animationDuration:`${s.duration}s`,backgroundColor:B(s.percentage)})),m=D(()=>(s.strokeWidth/s.width*100).toFixed(1)),v=D(()=>["circle","dashboard"].includes(s.type)?Number.parseInt(`${50-Number.parseFloat(m.value)/2}`,10):0),U=D(()=>{const u=v.value,R=s.type==="dashboard";return`
          M 50 50
          m 0 ${R?"":"-"}${u}
          a ${u} ${u} 0 1 1 0 ${R?"-":""}${u*2}
          a ${u} ${u} 0 1 1 0 ${R?"":"-"}${u*2}
          `}),y=D(()=>2*Math.PI*v.value),f=D(()=>s.type==="dashboard"?.75:1),E=D(()=>`${-1*y.value*(1-f.value)/2}px`),k=D(()=>({strokeDasharray:`${y.value*f.value}px, ${y.value}px`,strokeDashoffset:E.value})),n=D(()=>({strokeDasharray:`${y.value*f.value*(s.percentage/100)}px, ${y.value}px`,strokeDashoffset:E.value,transition:"stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"})),a=D(()=>{let u;return s.color?u=B(s.percentage):u=l[s.status]||l.default,u}),t=D(()=>s.status==="warning"?xe:s.type==="line"?s.status==="success"?fe:Ge:s.status==="success"?me:ve),c=D(()=>s.type==="line"?12+s.strokeWidth*.4:s.width*.111111+2),p=D(()=>s.format(s.percentage));function d(u){const R=100/u.length;return u.map((S,P)=>ae(S)?{color:S,percentage:(P+1)*R}:S).sort((S,P)=>S.percentage-P.percentage)}const B=u=>{var R;const{color:N}=s;if(Te(N))return N(u);if(ae(N))return N;{const S=d(N);for(const P of S)if(P.percentage>u)return P.color;return(R=S[S.length-1])==null?void 0:R.color}};return(u,R)=>(g(),C("div",{class:h([e(o).b(),e(o).m(u.type),e(o).is(u.status),{[e(o).m("without-text")]:!u.showText,[e(o).m("text-inside")]:u.textInside}]),role:"progressbar","aria-valuenow":u.percentage,"aria-valuemin":"0","aria-valuemax":"100"},[u.type==="line"?(g(),C("div",{key:0,class:h(e(o).b("bar"))},[O("div",{class:h(e(o).be("bar","outer")),style:A({height:`${u.strokeWidth}px`})},[O("div",{class:h([e(o).be("bar","inner"),{[e(o).bem("bar","inner","indeterminate")]:u.indeterminate},{[e(o).bem("bar","inner","striped")]:u.striped},{[e(o).bem("bar","inner","striped-flow")]:u.stripedFlow}]),style:A(e(i))},[(u.showText||u.$slots.default)&&u.textInside?(g(),C("div",{key:0,class:h(e(o).be("bar","innerText"))},[T(u.$slots,"default",{percentage:u.percentage},()=>[O("span",null,W(e(p)),1)])],2)):_("v-if",!0)],6)],6)],2)):(g(),C("div",{key:1,class:h(e(o).b("circle")),style:A({height:`${u.width}px`,width:`${u.width}px`})},[(g(),C("svg",nt,[O("path",{class:h(e(o).be("circle","track")),d:e(U),stroke:`var(${e(o).cssVarName("fill-color-light")}, #e5e9f2)`,"stroke-width":e(m),fill:"none",style:A(e(k))},null,14,it),O("path",{class:h(e(o).be("circle","path")),d:e(U),stroke:e(a),fill:"none",opacity:u.percentage?1:0,"stroke-linecap":u.strokeLinecap,"stroke-width":e(m),style:A(e(n))},null,14,ut)]))],6)),(u.showText||u.$slots.default)&&!u.textInside?(g(),C("div",{key:2,class:h(e(o).e("text")),style:A({fontSize:`${e(c)}px`})},[T(u.$slots,"default",{percentage:u.percentage},()=>[u.status?(g(),L(e(j),{key:1},{default:b(()=>[(g(),L(Oe(e(t))))]),_:1})):(g(),C("span",dt,W(e(p)),1))])],6)):_("v-if",!0)],10,lt))}});var ft=H(pt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/progress/src/progress.vue"]]);const mt=ye(ft),he=Symbol("uploadContextKey"),vt="ElUpload";class yt extends Error{constructor(s,l,o,i){super(s),this.name="UploadAjaxError",this.status=l,this.method=o,this.url=i}}function ie(r,s,l){let o;return l.response?o=`${l.response.error||l.response}`:l.responseText?o=`${l.responseText}`:o=`fail to ${s.method} ${r} ${l.status}`,new yt(o,l.status,s.method,r)}function gt(r){const s=r.responseText||r.response;if(!s)return s;try{return JSON.parse(s)}catch{return s}}const ht=r=>{typeof XMLHttpRequest>"u"&&oe(vt,"XMLHttpRequest is undefined");const s=new XMLHttpRequest,l=r.action;s.upload&&s.upload.addEventListener("progress",m=>{const v=m;v.percent=m.total>0?m.loaded/m.total*100:0,r.onProgress(v)});const o=new FormData;if(r.data)for(const[m,v]of Object.entries(r.data))Array.isArray(v)?o.append(m,...v):o.append(m,v);o.append(r.filename,r.file,r.file.name),s.addEventListener("error",()=>{r.onError(ie(l,r,s))}),s.addEventListener("load",()=>{if(s.status<200||s.status>=300)return r.onError(ie(l,r,s));r.onSuccess(gt(s))}),s.open(r.method,l,!0),r.withCredentials&&"withCredentials"in s&&(s.withCredentials=!0);const i=r.headers||{};if(i instanceof Headers)i.forEach((m,v)=>s.setRequestHeader(v,m));else for(const[m,v]of Object.entries(i))ge(v)||s.setRequestHeader(m,String(v));return s.send(o),s},be=["text","picture","picture-card"];let bt=1;const se=()=>Date.now()+bt++,ke=q({action:{type:String,default:"#"},headers:{type:$(Object)},method:{type:String,default:"post"},data:{type:Object,default:()=>te({})},multiple:{type:Boolean,default:!1},name:{type:String,default:"file"},drag:{type:Boolean,default:!1},withCredentials:Boolean,showFileList:{type:Boolean,default:!0},accept:{type:String,default:""},type:{type:String,default:"select"},fileList:{type:$(Array),default:()=>te([])},autoUpload:{type:Boolean,default:!0},listType:{type:String,values:be,default:"text"},httpRequest:{type:$(Function),default:ht},disabled:Boolean,limit:Number}),kt=q({...ke,beforeUpload:{type:$(Function),default:F},beforeRemove:{type:$(Function)},onRemove:{type:$(Function),default:F},onChange:{type:$(Function),default:F},onPreview:{type:$(Function),default:F},onSuccess:{type:$(Function),default:F},onProgress:{type:$(Function),default:F},onError:{type:$(Function),default:F},onExceed:{type:$(Function),default:F}}),_t=q({files:{type:$(Array),default:()=>te([])},disabled:{type:Boolean,default:!1},handlePreview:{type:$(Function),default:F},listType:{type:String,values:be,default:"text"}}),wt={remove:r=>!!r},$t=["onKeydown"],Et=["src"],Pt=["onClick"],Ut=["onClick"],St=["onClick"],Ct=V({name:"ElUploadList"}),Ft=V({...Ct,props:_t,emits:wt,setup(r,{emit:s}){const{t:l}=Le(),o=I("upload"),i=I("icon"),m=I("list"),v=G(),U=x(!1),y=f=>{s("remove",f)};return(f,E)=>(g(),L(Ve,{tag:"ul",class:h([e(o).b("list"),e(o).bm("list",f.listType),e(o).is("disabled",e(v))]),name:e(m).b()},{default:b(()=>[(g(!0),C(Be,null,Ne(f.files,k=>(g(),C("li",{key:k.uid||k.name,class:h([e(o).be("list","item"),e(o).is(k.status),{focusing:U.value}]),tabindex:"0",onKeydown:pe(n=>!e(v)&&y(k),["delete"]),onFocus:E[0]||(E[0]=n=>U.value=!0),onBlur:E[1]||(E[1]=n=>U.value=!1),onClick:E[2]||(E[2]=n=>U.value=!1)},[T(f.$slots,"default",{file:k},()=>[f.listType==="picture"||k.status!=="uploading"&&f.listType==="picture-card"?(g(),C("img",{key:0,class:h(e(o).be("list","item-thumbnail")),src:k.url,alt:""},null,10,Et)):_("v-if",!0),k.status==="uploading"||f.listType!=="picture-card"?(g(),C("div",{key:1,class:h(e(o).be("list","item-info"))},[O("a",{class:h(e(o).be("list","item-name")),onClick:M(n=>f.handlePreview(k),["prevent"])},[w(e(j),{class:h(e(i).m("document"))},{default:b(()=>[w(e(Xe))]),_:1},8,["class"]),O("span",{class:h(e(o).be("list","item-file-name"))},W(k.name),3)],10,Pt),k.status==="uploading"?(g(),L(e(mt),{key:0,type:f.listType==="picture-card"?"circle":"line","stroke-width":f.listType==="picture-card"?6:2,percentage:Number(k.percentage),style:A(f.listType==="picture-card"?"":"margin-top: 0.5rem")},null,8,["type","stroke-width","percentage","style"])):_("v-if",!0)],2)):_("v-if",!0),O("label",{class:h(e(o).be("list","item-status-label"))},[f.listType==="text"?(g(),L(e(j),{key:0,class:h([e(i).m("upload-success"),e(i).m("circle-check")])},{default:b(()=>[w(e(fe))]),_:1},8,["class"])):["picture-card","picture"].includes(f.listType)?(g(),L(e(j),{key:1,class:h([e(i).m("upload-success"),e(i).m("check")])},{default:b(()=>[w(e(me))]),_:1},8,["class"])):_("v-if",!0)],2),e(v)?_("v-if",!0):(g(),L(e(j),{key:2,class:h(e(i).m("close")),onClick:n=>y(k)},{default:b(()=>[w(e(ve))]),_:2},1032,["class","onClick"])),_(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"),_(" This is a bug which needs to be fixed "),_(" TODO: Fix the incorrect navigation interaction "),e(v)?_("v-if",!0):(g(),C("i",{key:3,class:h(e(i).m("close-tip"))},W(e(l)("el.upload.deleteTip")),3)),f.listType==="picture-card"?(g(),C("span",{key:4,class:h(e(o).be("list","item-actions"))},[O("span",{class:h(e(o).be("list","item-preview")),onClick:n=>f.handlePreview(k)},[w(e(j),{class:h(e(i).m("zoom-in"))},{default:b(()=>[w(e(Je))]),_:1},8,["class"])],10,Ut),e(v)?_("v-if",!0):(g(),C("span",{key:0,class:h(e(o).be("list","item-delete")),onClick:n=>y(k)},[w(e(j),{class:h(e(i).m("delete"))},{default:b(()=>[w(e(Ye))]),_:1},8,["class"])],10,St))],2)):_("v-if",!0)])],42,$t))),128)),T(f.$slots,"append")]),_:3},8,["class","name"]))}});var ue=H(Ft,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-list.vue"]]);const Lt=q({disabled:{type:Boolean,default:!1}}),Rt={file:r=>Ae(r)},Dt=["onDrop","onDragover"],_e="ElUploadDrag",Tt=V({name:_e}),Ot=V({...Tt,props:Lt,emits:Rt,setup(r,{emit:s}){const l=je(he);l||oe(_e,"usage: <el-upload><el-upload-dragger /></el-upload>");const o=I("upload"),i=x(!1),m=G(),v=y=>{if(m.value)return;i.value=!1,y.stopPropagation();const f=Array.from(y.dataTransfer.files),E=l.accept.value;if(!E){s("file",f);return}const k=f.filter(n=>{const{type:a,name:t}=n,c=t.includes(".")?`.${t.split(".").pop()}`:"",p=a.replace(/\/.*$/,"");return E.split(",").map(d=>d.trim()).filter(d=>d).some(d=>d.startsWith(".")?c===d:/\/\*$/.test(d)?p===d.replace(/\/\*$/,""):/^[^/]+\/[^/]+$/.test(d)?a===d:!1)});s("file",k)},U=()=>{m.value||(i.value=!0)};return(y,f)=>(g(),C("div",{class:h([e(o).b("dragger"),e(o).is("dragover",i.value)]),onDrop:M(v,["prevent"]),onDragover:M(U,["prevent"]),onDragleave:f[0]||(f[0]=M(E=>i.value=!1,["prevent"]))},[T(y.$slots,"default")],42,Dt))}});var Bt=H(Ot,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-dragger.vue"]]);const Nt=q({...ke,beforeUpload:{type:$(Function),default:F},onRemove:{type:$(Function),default:F},onStart:{type:$(Function),default:F},onSuccess:{type:$(Function),default:F},onProgress:{type:$(Function),default:F},onError:{type:$(Function),default:F},onExceed:{type:$(Function),default:F}}),Vt=["onKeydown"],At=["name","multiple","accept"],jt=V({name:"ElUploadContent",inheritAttrs:!1}),It=V({...jt,props:Nt,setup(r,{expose:s}){const l=r,o=I("upload"),i=G(),m=ee({}),v=ee(),U=t=>{if(t.length===0)return;const{autoUpload:c,limit:p,fileList:d,multiple:B,onStart:u,onExceed:R}=l;if(p&&d.length+t.length>p){R(t,d);return}B||(t=t.slice(0,1));for(const N of t){const S=N;S.uid=se(),u(S),c&&y(S)}},y=async t=>{if(v.value.value="",!l.beforeUpload)return f(t);let c,p={};try{const B=l.beforeUpload(t);p=Ie(l.data)?at(l.data):l.data,c=await B}catch{c=!1}if(c===!1){l.onRemove(t);return}let d=t;c instanceof Blob&&(c instanceof File?d=c:d=new File([c],t.name,{type:t.type})),f(Object.assign(d,{uid:t.uid}),p)},f=(t,c)=>{const{headers:p,data:d,method:B,withCredentials:u,name:R,action:N,onProgress:S,onSuccess:P,onError:we,httpRequest:$e}=l,{uid:X}=t,J={headers:p||{},withCredentials:u,file:t,data:c??d,method:B,filename:R,action:N,onProgress:z=>{S(z,t)},onSuccess:z=>{P(z,t),delete m.value[X]},onError:z=>{we(z,t),delete m.value[X]}},Y=$e(J);m.value[X]=Y,Y instanceof Promise&&Y.then(J.onSuccess,J.onError)},E=t=>{const c=t.target.files;c&&U(Array.from(c))},k=()=>{i.value||(v.value.value="",v.value.click())},n=()=>{k()};return s({abort:t=>{Re(m.value).filter(t?([p])=>String(t.uid)===p:()=>!0).forEach(([p,d])=>{d instanceof XMLHttpRequest&&d.abort(),delete m.value[p]})},upload:y}),(t,c)=>(g(),C("div",{class:h([e(o).b(),e(o).m(t.listType),e(o).is("drag",t.drag)]),tabindex:"0",onClick:k,onKeydown:pe(M(n,["self"]),["enter","space"])},[t.drag?(g(),L(Bt,{key:0,disabled:e(i),onFile:U},{default:b(()=>[T(t.$slots,"default")]),_:3},8,["disabled"])):T(t.$slots,"default",{key:1}),O("input",{ref_key:"inputRef",ref:v,class:h(e(o).e("input")),name:t.name,multiple:t.multiple,accept:t.accept,type:"file",onChange:E,onClick:c[0]||(c[0]=M(()=>{},["stop"]))},null,42,At)],42,Vt))}});var de=H(It,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-content.vue"]]);const ce="ElUpload",Mt=r=>{var s;(s=r.url)!=null&&s.startsWith("blob:")&&URL.revokeObjectURL(r.url)},qt=(r,s)=>{const l=Qe(r,"fileList",void 0,{passive:!0}),o=n=>l.value.find(a=>a.uid===n.uid);function i(n){var a;(a=s.value)==null||a.abort(n)}function m(n=["ready","uploading","success","fail"]){l.value=l.value.filter(a=>!n.includes(a.status))}const v=(n,a)=>{const t=o(a);t&&(console.error(n),t.status="fail",l.value.splice(l.value.indexOf(t),1),r.onError(n,t,l.value),r.onChange(t,l.value))},U=(n,a)=>{const t=o(a);t&&(r.onProgress(n,t,l.value),t.status="uploading",t.percentage=Math.round(n.percent))},y=(n,a)=>{const t=o(a);t&&(t.status="success",t.response=n,r.onSuccess(n,t,l.value),r.onChange(t,l.value))},f=n=>{ge(n.uid)&&(n.uid=se());const a={name:n.name,percentage:0,status:"ready",size:n.size,raw:n,uid:n.uid};if(r.listType==="picture-card"||r.listType==="picture")try{a.url=URL.createObjectURL(n)}catch(t){Ze(ce,t.message),r.onError(t,a,l.value)}l.value=[...l.value,a],r.onChange(a,l.value)},E=async n=>{const a=n instanceof File?o(n):n;a||oe(ce,"file to be removed not found");const t=c=>{i(c);const p=l.value;p.splice(p.indexOf(c),1),r.onRemove(c,p),Mt(c)};r.beforeRemove?await r.beforeRemove(a,l.value)!==!1&&t(a):t(a)};function k(){l.value.filter(({status:n})=>n==="ready").forEach(({raw:n})=>{var a;return n&&((a=s.value)==null?void 0:a.upload(n))})}return re(()=>r.listType,n=>{n!=="picture-card"&&n!=="picture"||(l.value=l.value.map(a=>{const{raw:t,url:c}=a;if(!c&&t)try{a.url=URL.createObjectURL(t)}catch(p){r.onError(p,a,l.value)}return a}))}),re(l,n=>{for(const a of n)a.uid||(a.uid=se()),a.status||(a.status="success")},{immediate:!0,deep:!0}),{uploadFiles:l,abort:i,clearFiles:m,handleError:v,handleProgress:U,handleStart:f,handleSuccess:y,handleRemove:E,submit:k}},zt=V({name:"ElUpload"}),Ht=V({...zt,props:kt,setup(r,{expose:s}){const l=r,o=Me(),i=G(),m=ee(),{abort:v,submit:U,clearFiles:y,uploadFiles:f,handleStart:E,handleError:k,handleRemove:n,handleSuccess:a,handleProgress:t}=qt(l,m),c=D(()=>l.listType==="picture-card"),p=D(()=>({...l,fileList:f.value,onStart:E,onProgress:t,onSuccess:a,onError:k,onRemove:n}));return qe(()=>{f.value.forEach(({url:d})=>{d!=null&&d.startsWith("blob:")&&URL.revokeObjectURL(d)})}),ze(he,{accept:He(l,"accept")}),s({abort:v,submit:U,clearFiles:y,handleStart:E,handleRemove:n}),(d,B)=>(g(),C("div",null,[e(c)&&d.showFileList?(g(),L(ue,{key:0,disabled:e(i),"list-type":d.listType,files:e(f),"handle-preview":d.onPreview,onRemove:e(n)},le({append:b(()=>[w(de,ne({ref_key:"uploadRef",ref:m},e(p)),{default:b(()=>[e(o).trigger?T(d.$slots,"trigger",{key:0}):_("v-if",!0),!e(o).trigger&&e(o).default?T(d.$slots,"default",{key:1}):_("v-if",!0)]),_:3},16)]),_:2},[d.$slots.file?{name:"default",fn:b(({file:u})=>[T(d.$slots,"file",{file:u})])}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):_("v-if",!0),!e(c)||e(c)&&!d.showFileList?(g(),L(de,ne({key:1,ref_key:"uploadRef",ref:m},e(p)),{default:b(()=>[e(o).trigger?T(d.$slots,"trigger",{key:0}):_("v-if",!0),!e(o).trigger&&e(o).default?T(d.$slots,"default",{key:1}):_("v-if",!0)]),_:3},16)):_("v-if",!0),d.$slots.trigger?T(d.$slots,"default",{key:2}):_("v-if",!0),T(d.$slots,"tip"),!e(c)&&d.showFileList?(g(),L(ue,{key:3,disabled:e(i),"list-type":d.listType,files:e(f),"handle-preview":d.onPreview,onRemove:e(n)},le({_:2},[d.$slots.file?{name:"default",fn:b(({file:u})=>[T(d.$slots,"file",{file:u})])}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):_("v-if",!0)]))}});var Kt=H(Ht,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload.vue"]]);const Wt=ye(Kt);const xt={class:"uploaded_image"},Gt=["src"],Xt=O("div",{class:"el-upload__tip"}," jpg/png файлы не больше 500kb ",-1),ds=V({__name:"PromoAddEdit",props:{cardTitle:{type:String},promoData:{type:Object}},setup(r){const s=r,l=tt(),o=x(),i=Q({name:"",type:"",text:"",videoUrl:"",videoPreview:""}),m=x([]),v=(a,t)=>{console.log(a,t)},U=a=>{console.log(a)},y=Q({text:!1,videoUrl:!1,videoPreview:!1,uploadedPreview:!1});function f(){var a;y.text=!1,y.videoUrl=!1,y.videoPreview=!1,y.uploadedPreview=!1,i.type==="Факт"&&(y.text=!0),i.type==="Видео"&&(y.videoUrl=!0,(a=s==null?void 0:s.promoData)!=null&&a.videoPreview&&(y.uploadedPreview=!0))}Ke(()=>{if(s.promoData){console.log(s.promoData);const a=s.promoData;i.name=a.name,i.type=a.type,i.text=a.text,i.videoUrl=a.videoUrl,i.videoPreview=a.videoPreview?`/video/${a.videoPreview}`:""}f()});const E=Q({name:[{required:!0,message:"Название обязательно",trigger:"blur"}]}),k=async a=>{a&&await a.validate(async(t,c)=>{if(t){const p=new FormData;if(p.append("name",i.name),p.append("type",i.type),i.type==="Факт"&&p.append("text",i.text),i.type==="Видео"&&(p.append("videoUrl",i.videoUrl),p.append("file",m.value[0].raw)),!s.promoData)try{await l.addPromo(p),K({title:"Готово",message:"Материал успешно добавлен",type:"success"})}catch{K({title:"Ошибка",message:"Не могли добавить материал :(",type:"error"})}if(s.promoData)try{await l.updatePromo(s.promoData.id,p),K({title:"Готово",message:"Материал успешно обновлён",type:"success"})}catch{K({title:"Ошибка",message:"Не могли обновить материал :(",type:"error"})}}else console.log("error submit!",c)})},n=a=>{a&&(a.resetFields(),i.videoUrl="")};return(a,t)=>{const c=Ee,p=Ue,d=Ce,B=Fe,u=De,R=Wt,N=Se,S=et;return g(),L(S,{title:r.cardTitle},{default:b(()=>[w(N,{ref_key:"ruleFormRef",ref:o,model:e(i),rules:e(E),"label-width":"150px",size:"default","status-icon":""},{default:b(()=>[w(p,{label:"Название",prop:"name"},{default:b(()=>[w(c,{modelValue:e(i).name,"onUpdate:modelValue":t[0]||(t[0]=P=>e(i).name=P),placeholder:"Заголовок"},null,8,["modelValue"])]),_:1}),w(p,{label:"Тип",prop:"type"},{default:b(()=>[w(B,{modelValue:e(i).type,"onUpdate:modelValue":t[1]||(t[1]=P=>e(i).type=P),onChange:f,placeholder:"Тип материала"},{default:b(()=>[w(d,{label:"Факт",value:"Факт"}),w(d,{label:"Видео",value:"Видео"})]),_:1},8,["modelValue"])]),_:1}),e(y).text?(g(),L(p,{key:0,label:"Описание",prop:"text"},{default:b(()=>[w(c,{modelValue:e(i).text,"onUpdate:modelValue":t[2]||(t[2]=P=>e(i).text=P),type:"textarea",rows:"5"},null,8,["modelValue"])]),_:1})):_("",!0),e(y).videoUrl?(g(),L(p,{key:1,label:"Ссылка на видео",prop:"videoUrl"},{default:b(()=>[w(c,{modelValue:e(i).videoUrl,"onUpdate:modelValue":t[3]||(t[3]=P=>e(i).videoUrl=P),placeholder:"https://www.youtube.com/watch?v=qrIY_nLHLIk"},null,8,["modelValue"])]),_:1})):_("",!0),e(y).uploadedPreview?(g(),L(p,{key:2,label:"Превью"},{default:b(()=>[O("div",xt,[O("img",{src:e(i).videoPreview},null,8,Gt)])]),_:1})):_("",!0),e(y).videoUrl?(g(),L(p,{key:3,prop:"videoPreview"},{default:b(()=>[w(R,{"file-list":e(m),"onUpdate:fileList":t[4]||(t[4]=P=>We(m)?m.value=P:null),class:"upload-demo","on-preview":U,"on-remove":v,"list-type":"picture"},{tip:b(()=>[Xt]),default:b(()=>[w(u,{type:"primary"},{default:b(()=>[Z("Нажмите для загрузки нового изображения")]),_:1})]),_:1},8,["file-list"])]),_:1})):_("",!0),w(p,null,{default:b(()=>[w(u,{type:"primary",onClick:t[5]||(t[5]=P=>k(e(o)))},{default:b(()=>[Z("Сохранить")]),_:1}),w(u,{onClick:t[6]||(t[6]=P=>n(e(o)))},{default:b(()=>[Z("Очистить")]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title"])}}});export{ds as _};

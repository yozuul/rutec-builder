import{p as ae,A as ie,a as v,o as h,k as $,h as k,G as ee,D as b,u as T,c as D,e as C,f as X,J as N,m as B,E as x,a6 as ul,L as ze,ao as De,w as K,W as cl,v as Pe,a2 as pl,Q as Fl,Y as z,a4 as be,a5 as fl,t as Z,r as q,b as vl,M as yl,B as te,ap as he,aq as sl,O as Sl,C as kl,R as Ml,a3 as Y,aa as Wl,F as Ve,l as rl,I as F,ar as Kl,U as Hl,H as Cl}from"./entry.7f028a03.js";import{b as $l,d as Rl,E as Ol}from"./aria.3c6403e5.js";import{E as Nl,b as jl,c as Ql}from"./el-popper.3bd3cc02.js";import{i as Gl,E as Ul}from"./el-input.57265631.js";import{i as wl,d as El,E as Jl,C as Yl}from"./el-scrollbar.82b407f2.js";import{b as Xl,h as Ll,E as dl,u as Zl,t as xl,n as _l,j as Tl,f as en,F as ln,M as nn}from"./index.02c2e2c9.js";import{y as on,c as tn,d as Vl,n as W,u as ml,b as an}from"./el-button.05de3bc9.js";import{_ as ge,w as zl,a as Dl}from"./base.aaa84ba8.js";import{U as _,C as Pl}from"./event.9519ab40.js";import{s as sn,i as rn}from"./validator.b5fefb33.js";const un=(e="")=>e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d"),dn=e=>on[e||"default"],cn=e=>({focus:()=>{var l,i;(i=(l=e.value)==null?void 0:l.focus)==null||i.call(l)}}),Bl=Xl({closable:Boolean,type:{type:String,values:["success","info","warning","danger",""],default:""},hit:Boolean,disableTransitions:Boolean,color:{type:String,default:""},size:{type:String,values:tn,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),pn={close:e=>e instanceof MouseEvent,click:e=>e instanceof MouseEvent},fn=ae({name:"ElTag"}),vn=ae({...fn,props:Bl,emits:pn,setup(e,{emit:l}){const i=e,y=Vl(),c=ie("tag"),d=v(()=>{const{type:r,hit:S,effect:p,closable:g,round:O}=i;return[c.b(),c.is("closable",g),c.m(r),c.m(y.value),c.m(p),c.is("hit",S),c.is("round",O)]}),s=r=>{l("close",r)},m=r=>{l("click",r)};return(r,S)=>r.disableTransitions?(h(),$("span",{key:0,class:b(T(d)),style:x({backgroundColor:r.color}),onClick:m},[k("span",{class:b(T(c).e("content"))},[ee(r.$slots,"default")],2),r.closable?(h(),D(T(dl),{key:0,class:b(T(c).e("close")),onClick:N(s,["stop"])},{default:C(()=>[X(T(Ll))]),_:1},8,["class","onClick"])):B("v-if",!0)],6)):(h(),D(ul,{key:1,name:`${T(c).namespace.value}-zoom-in-center`,appear:""},{default:C(()=>[k("span",{class:b(T(d)),style:x({backgroundColor:r.color}),onClick:m},[k("span",{class:b(T(c).e("content"))},[ee(r.$slots,"default")],2),r.closable?(h(),D(T(dl),{key:0,class:b(T(c).e("close")),onClick:N(s,["stop"])},{default:C(()=>[X(T(Ll))]),_:1},8,["class","onClick"])):B("v-if",!0)],6)]),_:3},8,["name"]))}});var mn=ge(vn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);const hn=zl(mn),Al=Symbol("ElSelectGroup"),Be=Symbol("ElSelect");function bn(e,l){const i=ze(Be),y=ze(Al,{disabled:!1}),c=v(()=>Object.prototype.toString.call(e.value).toLowerCase()==="[object object]"),d=v(()=>i.props.multiple?g(i.props.modelValue,e.value):O(e.value,i.props.modelValue)),s=v(()=>{if(i.props.multiple){const t=i.props.modelValue||[];return!d.value&&t.length>=i.props.multipleLimit&&i.props.multipleLimit>0}else return!1}),m=v(()=>e.label||(c.value?"":e.value)),r=v(()=>e.value||e.label||""),S=v(()=>e.disabled||l.groupDisabled||s.value),p=cl(),g=(t=[],f)=>{if(c.value){const w=i.props.valueKey;return t&&t.some(H=>De(W(H,w))===W(f,w))}else return t&&t.includes(f)},O=(t,f)=>{if(c.value){const{valueKey:w}=i.props;return W(t,w)===W(f,w)}else return t===f},L=()=>{!e.disabled&&!y.disabled&&(i.hoverIndex=i.optionsArray.indexOf(p.proxy))};K(()=>m.value,()=>{!e.created&&!i.props.remote&&i.setSelected()}),K(()=>e.value,(t,f)=>{const{remote:w,valueKey:H}=i.props;if(Object.is(t,f)||(i.onOptionDestroy(f,p.proxy),i.onOptionCreate(p.proxy)),!e.created&&!w){if(H&&typeof t=="object"&&typeof f=="object"&&t[H]===f[H])return;i.setSelected()}}),K(()=>y.disabled,()=>{l.groupDisabled=y.disabled},{immediate:!0});const{queryChange:V}=De(i);return K(V,t=>{const{query:f}=T(t),w=new RegExp(un(f),"i");l.visible=w.test(m.value)||e.created,l.visible||i.filteredOptionsCount--},{immediate:!0}),{select:i,currentLabel:m,currentValue:r,itemSelected:d,isDisabled:S,hoverItem:L}}const gn=ae({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:{type:Boolean,default:!1}},setup(e){const l=ie("select"),i=Pe({index:-1,groupDisabled:!1,visible:!0,hitState:!1,hover:!1}),{currentLabel:y,itemSelected:c,isDisabled:d,select:s,hoverItem:m}=bn(e,i),{visible:r,hover:S}=pl(i),p=cl().proxy;s.onOptionCreate(p),Fl(()=>{const O=p.value,{selected:L}=s,t=(s.props.multiple?L:[L]).some(f=>f.value===p.value);z(()=>{s.cachedOptions.get(O)===p&&!t&&s.cachedOptions.delete(O)}),s.onOptionDestroy(O,p)});function g(){e.disabled!==!0&&i.groupDisabled!==!0&&s.handleOptionSelect(p,!0)}return{ns:l,currentLabel:y,itemSelected:c,isDisabled:d,select:s,hoverItem:m,visible:r,hover:S,selectOptionClick:g,states:i}}});function yn(e,l,i,y,c,d){return be((h(),$("li",{class:b([e.ns.be("dropdown","item"),e.ns.is("disabled",e.isDisabled),{selected:e.itemSelected,hover:e.hover}]),onMouseenter:l[0]||(l[0]=(...s)=>e.hoverItem&&e.hoverItem(...s)),onClick:l[1]||(l[1]=N((...s)=>e.selectOptionClick&&e.selectOptionClick(...s),["stop"]))},[ee(e.$slots,"default",{},()=>[k("span",null,Z(e.currentLabel),1)])],34)),[[fl,e.visible]])}var hl=ge(gn,[["render",yn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);const Sn=ae({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=ze(Be),l=ie("select"),i=v(()=>e.props.popperClass),y=v(()=>e.props.multiple),c=v(()=>e.props.fitInputWidth),d=q("");function s(){var m;d.value=`${(m=e.selectWrapper)==null?void 0:m.offsetWidth}px`}return vl(()=>{s(),$l(e.selectWrapper,s)}),{ns:l,minWidth:d,popperClass:i,isMultiple:y,isFitInputWidth:c}}});function Cn(e,l,i,y,c,d){return h(),$("div",{class:b([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:x({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[ee(e.$slots,"default")],6)}var On=ge(Sn,[["render",Cn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);function wn(e){const{t:l}=ml();return Pe({options:new Map,cachedOptions:new Map,createdLabel:null,createdSelected:!1,selected:e.multiple?[]:{},inputLength:20,inputWidth:0,optionsCount:0,filteredOptionsCount:0,visible:!1,softFocus:!1,selectedLabel:"",hoverIndex:-1,query:"",previousQuery:null,inputHovering:!1,cachedPlaceHolder:"",currentPlaceholder:l("el.select.placeholder"),menuVisibleOnFocus:!1,isOnComposition:!1,isSilentBlur:!1,prefixWidth:11,tagInMultiLine:!1,mouseEnter:!1})}const En=(e,l,i)=>{const{t:y}=ml(),c=ie("select");Zl({from:"suffixTransition",replacement:"override style scheme",version:"2.3.0",scope:"props",ref:"https://element-plus.org/en-US/component/select.html#select-attributes"},v(()=>e.suffixTransition===!1));const d=q(null),s=q(null),m=q(null),r=q(null),S=q(null),p=q(null),g=q(null),O=q(-1),L=yl({query:""}),V=yl(""),t=q([]);let f=0;const{form:w,formItem:H}=an(),ye=v(()=>!e.filterable||e.multiple||!l.visible),G=v(()=>e.disabled||(w==null?void 0:w.disabled)),Ae=v(()=>{const n=e.multiple?Array.isArray(e.modelValue)&&e.modelValue.length>0:e.modelValue!==void 0&&e.modelValue!==null&&e.modelValue!=="";return e.clearable&&!G.value&&l.inputHovering&&n}),Se=v(()=>e.remote&&e.filterable&&!e.remoteShowSuffix?"":e.suffixIcon),qe=v(()=>c.is("reverse",Se.value&&l.visible&&e.suffixTransition)),Ce=v(()=>e.remote?300:0),de=v(()=>e.loading?e.loadingText||y("el.select.loading"):e.remote&&l.query===""&&l.options.size===0?!1:e.filterable&&l.query&&l.options.size>0&&l.filteredOptionsCount===0?e.noMatchText||y("el.select.noMatch"):l.options.size===0?e.noDataText||y("el.select.noData"):null),M=v(()=>{const n=Array.from(l.options.values()),o=[];return t.value.forEach(a=>{const u=n.findIndex(E=>E.currentLabel===a);u>-1&&o.push(n[u])}),o.length?o:n}),Fe=v(()=>Array.from(l.cachedOptions.values())),We=v(()=>{const n=M.value.filter(o=>!o.created).some(o=>o.currentLabel===l.query);return e.filterable&&e.allowCreate&&l.query!==""&&!n}),le=Vl(),Ke=v(()=>["small"].includes(le.value)?"small":"default"),He=v({get(){return l.visible&&de.value!==!1},set(n){l.visible=n}});K([()=>G.value,()=>le.value,()=>w==null?void 0:w.size],()=>{z(()=>{R()})}),K(()=>e.placeholder,n=>{l.cachedPlaceHolder=l.currentPlaceholder=n}),K(()=>e.modelValue,(n,o)=>{e.multiple&&(R(),n&&n.length>0||s.value&&l.query!==""?l.currentPlaceholder="":l.currentPlaceholder=l.cachedPlaceHolder,e.filterable&&!e.reserveKeyword&&(l.query="",U(l.query))),ce(),e.filterable&&!e.multiple&&(l.inputLength=20),!wl(n,o)&&e.validateEvent&&(H==null||H.validate("change").catch(a=>Rl()))},{flush:"post",deep:!0}),K(()=>l.visible,n=>{var o,a,u,E,I;n?((a=(o=r.value)==null?void 0:o.updatePopper)==null||a.call(o),e.filterable&&(l.filteredOptionsCount=l.optionsCount,l.query=e.remote?"":l.selectedLabel,(E=(u=m.value)==null?void 0:u.focus)==null||E.call(u),e.multiple?(I=s.value)==null||I.focus():l.selectedLabel&&(l.currentPlaceholder=`${l.selectedLabel}`,l.selectedLabel=""),U(l.query),!e.multiple&&!e.remote&&(L.value.query="",he(L),he(V)))):(e.filterable&&(te(e.filterMethod)&&e.filterMethod(""),te(e.remoteMethod)&&e.remoteMethod("")),s.value&&s.value.blur(),l.query="",l.previousQuery=null,l.selectedLabel="",l.inputLength=20,l.menuVisibleOnFocus=!1,Re(),z(()=>{s.value&&s.value.value===""&&l.selected.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)}),e.multiple||(l.selected&&(e.filterable&&e.allowCreate&&l.createdSelected&&l.createdLabel?l.selectedLabel=l.createdLabel:l.selectedLabel=l.selected.currentLabel,e.filterable&&(l.query=l.selectedLabel)),e.filterable&&(l.currentPlaceholder=l.cachedPlaceHolder))),i.emit("visible-change",n)}),K(()=>l.options.entries(),()=>{var n,o,a;if(!xl)return;(o=(n=r.value)==null?void 0:n.updatePopper)==null||o.call(n),e.multiple&&R();const u=((a=p.value)==null?void 0:a.querySelectorAll("input"))||[];Array.from(u).includes(document.activeElement)||ce(),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&we()},{flush:"post"}),K(()=>l.hoverIndex,n=>{_l(n)&&n>-1?O.value=M.value[n]||{}:O.value={},M.value.forEach(o=>{o.hover=O.value===o})});const R=()=>{z(()=>{var n,o;if(!d.value)return;const a=d.value.$el.querySelector("input");f=f||(a.clientHeight>0?a.clientHeight+2:0);const u=S.value,E=dn(le.value||(w==null?void 0:w.size)),I=le.value||E===f||f<=0?E:f;!(a.offsetParent===null)&&(a.style.height=`${(l.selected.length===0?I:Math.max(u?u.clientHeight+(u.clientHeight>I?6:0):0,I))-2}px`),l.tagInMultiLine=Number.parseFloat(a.style.height)>=I,l.visible&&de.value!==!1&&((o=(n=r.value)==null?void 0:n.updatePopper)==null||o.call(n))})},U=async n=>{if(!(l.previousQuery===n||l.isOnComposition)){if(l.previousQuery===null&&(te(e.filterMethod)||te(e.remoteMethod))){l.previousQuery=n;return}l.previousQuery=n,z(()=>{var o,a;l.visible&&((a=(o=r.value)==null?void 0:o.updatePopper)==null||a.call(o))}),l.hoverIndex=-1,e.multiple&&e.filterable&&z(()=>{const o=s.value.value.length*15+20;l.inputLength=e.collapseTags?Math.min(50,o):o,Oe(),R()}),e.remote&&te(e.remoteMethod)?(l.hoverIndex=-1,e.remoteMethod(n)):te(e.filterMethod)?(e.filterMethod(n),he(V)):(l.filteredOptionsCount=l.optionsCount,L.value.query=n,he(L),he(V)),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&(await z(),we())}},Oe=()=>{l.currentPlaceholder!==""&&(l.currentPlaceholder=s.value.value?"":l.cachedPlaceHolder)},we=()=>{const n=M.value.filter(u=>u.visible&&!u.disabled&&!u.states.groupDisabled),o=n.find(u=>u.created),a=n[0];l.hoverIndex=Te(M.value,o||a)},ce=()=>{var n;if(e.multiple)l.selectedLabel="";else{const a=Ee(e.modelValue);(n=a.props)!=null&&n.created?(l.createdLabel=a.props.value,l.createdSelected=!0):l.createdSelected=!1,l.selectedLabel=a.currentLabel,l.selected=a,e.filterable&&(l.query=l.selectedLabel);return}const o=[];Array.isArray(e.modelValue)&&e.modelValue.forEach(a=>{o.push(Ee(a))}),l.selected=o,z(()=>{R()})},Ee=n=>{let o;const a=sl(n).toLowerCase()==="object",u=sl(n).toLowerCase()==="null",E=sl(n).toLowerCase()==="undefined";for(let Q=l.cachedOptions.size-1;Q>=0;Q--){const A=Fe.value[Q];if(a?W(A.value,e.valueKey)===W(n,e.valueKey):A.value===n){o={value:n,currentLabel:A.currentLabel,isDisabled:A.isDisabled};break}}if(o)return o;const I=a?n.label:!u&&!E?n:"",j={value:n,currentLabel:I};return e.multiple&&(j.hitState=!1),j},Re=()=>{setTimeout(()=>{const n=e.valueKey;e.multiple?l.selected.length>0?l.hoverIndex=Math.min.apply(null,l.selected.map(o=>M.value.findIndex(a=>W(a,n)===W(o,n)))):l.hoverIndex=-1:l.hoverIndex=M.value.findIndex(o=>ue(o)===ue(l.selected))},300)},Ne=()=>{var n,o;je(),(o=(n=r.value)==null?void 0:n.updatePopper)==null||o.call(n),e.multiple&&R()},je=()=>{var n;l.inputWidth=(n=d.value)==null?void 0:n.$el.offsetWidth},Qe=()=>{e.filterable&&l.query!==l.selectedLabel&&(l.query=l.selectedLabel,U(l.query))},Ge=El(()=>{Qe()},Ce.value),Ue=El(n=>{U(n.target.value)},Ce.value),ne=n=>{wl(e.modelValue,n)||i.emit(Pl,n)},se=n=>{if(n.code!==Ol.delete){if(n.target.value.length<=0&&!ve()){const o=e.modelValue.slice();o.pop(),i.emit(_,o),ne(o)}n.target.value.length===1&&e.modelValue.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)}},Je=(n,o)=>{const a=l.selected.indexOf(o);if(a>-1&&!G.value){const u=e.modelValue.slice();u.splice(a,1),i.emit(_,u),ne(u),i.emit("remove-tag",o.value)}n.stopPropagation()},Le=n=>{n.stopPropagation();const o=e.multiple?[]:"";if(!kl(o))for(const a of l.selected)a.isDisabled&&o.push(a.value);i.emit(_,o),ne(o),l.hoverIndex=-1,l.visible=!1,i.emit("clear")},pe=(n,o)=>{var a;if(e.multiple){const u=(e.modelValue||[]).slice(),E=Te(u,n.value);E>-1?u.splice(E,1):(e.multipleLimit<=0||u.length<e.multipleLimit)&&u.push(n.value),i.emit(_,u),ne(u),n.created&&(l.query="",U(""),l.inputLength=20),e.filterable&&((a=s.value)==null||a.focus())}else i.emit(_,n.value),ne(n.value),l.visible=!1;l.isSilentBlur=o,fe(),!l.visible&&z(()=>{re(n)})},Te=(n=[],o)=>{if(!Sl(o))return n.indexOf(o);const a=e.valueKey;let u=-1;return n.some((E,I)=>De(W(E,a))===W(o,a)?(u=I,!0):!1),u},fe=()=>{l.softFocus=!0;const n=s.value||d.value;n&&(n==null||n.focus())},re=n=>{var o,a,u,E,I;const j=Array.isArray(n)?n[0]:n;let Q=null;if(j!=null&&j.value){const A=M.value.filter(al=>al.value===j.value);A.length>0&&(Q=A[0].$el)}if(r.value&&Q){const A=(E=(u=(a=(o=r.value)==null?void 0:o.popperRef)==null?void 0:a.contentRef)==null?void 0:u.querySelector)==null?void 0:E.call(u,`.${c.be("dropdown","wrap")}`);A&&sn(A,Q)}(I=g.value)==null||I.handleScroll()},Ye=n=>{l.optionsCount++,l.filteredOptionsCount++,l.options.set(n.value,n),l.cachedOptions.set(n.value,n)},Xe=(n,o)=>{l.options.get(n)===o&&(l.optionsCount--,l.filteredOptionsCount--,l.options.delete(n))},Ze=n=>{n.code!==Ol.backspace&&ve(!1),l.inputLength=s.value.value.length*15+20,R()},ve=n=>{if(!Array.isArray(l.selected))return;const o=l.selected[l.selected.length-1];if(o)return n===!0||n===!1?(o.hitState=n,n):(o.hitState=!o.hitState,o.hitState)},xe=n=>{const o=n.target.value;if(n.type==="compositionend")l.isOnComposition=!1,z(()=>U(o));else{const a=o[o.length-1]||"";l.isOnComposition=!Gl(a)}},_e=()=>{z(()=>re(l.selected))},el=n=>{l.softFocus?l.softFocus=!1:((e.automaticDropdown||e.filterable)&&(e.filterable&&!l.visible&&(l.menuVisibleOnFocus=!0),l.visible=!0),i.emit("focus",n))},J=()=>{var n,o,a;l.visible=!1,(n=d.value)==null||n.blur(),(a=(o=m.value)==null?void 0:o.blur)==null||a.call(o)},Ie=n=>{z(()=>{l.isSilentBlur?l.isSilentBlur=!1:i.emit("blur",n)}),l.softFocus=!1},ll=n=>{Le(n)},ke=()=>{l.visible=!1},nl=n=>{l.visible&&(n.preventDefault(),n.stopPropagation(),l.visible=!1)},Me=n=>{var o;n&&!l.mouseEnter||G.value||(l.menuVisibleOnFocus?l.menuVisibleOnFocus=!1:(!r.value||!r.value.isFocusInsideContent())&&(l.visible=!l.visible),l.visible&&((o=s.value||d.value)==null||o.focus()))},ol=()=>{l.visible?M.value[l.hoverIndex]&&pe(M.value[l.hoverIndex],void 0):Me()},ue=n=>Sl(n.value)?W(n.value,e.valueKey):n.value,tl=v(()=>M.value.filter(n=>n.visible).every(n=>n.disabled)),il=v(()=>l.selected.slice(0,e.maxCollapseTags)),me=v(()=>l.selected.slice(e.maxCollapseTags)),$e=n=>{if(!l.visible){l.visible=!0;return}if(!(l.options.size===0||l.filteredOptionsCount===0)&&!l.isOnComposition&&!tl.value){n==="next"?(l.hoverIndex++,l.hoverIndex===l.options.size&&(l.hoverIndex=0)):n==="prev"&&(l.hoverIndex--,l.hoverIndex<0&&(l.hoverIndex=l.options.size-1));const o=M.value[l.hoverIndex];(o.disabled===!0||o.states.groupDisabled===!0||!o.visible)&&$e(n),z(()=>re(O.value))}};return{optionList:t,optionsArray:M,selectSize:le,handleResize:Ne,debouncedOnInputChange:Ge,debouncedQueryChange:Ue,deletePrevTag:se,deleteTag:Je,deleteSelected:Le,handleOptionSelect:pe,scrollToOption:re,readonly:ye,resetInputHeight:R,showClose:Ae,iconComponent:Se,iconReverse:qe,showNewOption:We,collapseTagSize:Ke,setSelected:ce,managePlaceholder:Oe,selectDisabled:G,emptyText:de,toggleLastOptionHitState:ve,resetInputState:Ze,handleComposition:xe,onOptionCreate:Ye,onOptionDestroy:Xe,handleMenuEnter:_e,handleFocus:el,blur:J,handleBlur:Ie,handleClearClick:ll,handleClose:ke,handleKeydownEscape:nl,toggleMenu:Me,selectOption:ol,getValueKey:ue,navigateOptions:$e,dropMenuVisible:He,queryChange:L,groupQueryChange:V,showTagList:il,collapseTagList:me,reference:d,input:s,iOSInput:m,tooltipRef:r,tags:S,selectWrapper:p,scrollbar:g,handleMouseEnter:()=>{l.mouseEnter=!0},handleMouseLeave:()=>{l.mouseEnter=!1}}};var Ln=ae({name:"ElOptions",emits:["update-options"],setup(e,{slots:l,emit:i}){let y=[];function c(d,s){if(d.length!==s.length)return!1;for(const[m]of d.entries())if(d[m]!=s[m])return!1;return!0}return()=>{var d,s;const m=(d=l.default)==null?void 0:d.call(l),r=[];function S(p){Array.isArray(p)&&p.forEach(g=>{var O,L,V,t;const f=(O=(g==null?void 0:g.type)||{})==null?void 0:O.name;f==="ElOptionGroup"?S(!kl(g.children)&&!Array.isArray(g.children)&&te((L=g.children)==null?void 0:L.default)?(V=g.children)==null?void 0:V.default():g.children):f==="ElOption"?r.push((t=g.props)==null?void 0:t.label):Array.isArray(g.children)&&S(g.children)})}return m.length&&S((s=m[0])==null?void 0:s.children),c(r,y)||(y=r,i("update-options",r)),m}}});const Il="ElSelect",Tn=ae({name:Il,componentName:Il,components:{ElInput:Ul,ElSelectMenu:On,ElOption:hl,ElOptions:Ln,ElTag:hn,ElScrollbar:Jl,ElTooltip:Nl,ElIcon:dl},directives:{ClickOutside:Yl},props:{name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:{type:String,validator:rn},effect:{type:String,default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},popperOptions:{type:Object,default:()=>({})},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:{type:Boolean,default:!1},maxCollapseTags:{type:Number,default:1},teleported:jl.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:Tl,default:en},fitInputWidth:{type:Boolean,default:!1},suffixIcon:{type:Tl,default:ln},tagType:{...Bl.type,default:"info"},validateEvent:{type:Boolean,default:!0},remoteShowSuffix:{type:Boolean,default:!1},suffixTransition:{type:Boolean,default:!0},placement:{type:String,values:Ql,default:"bottom-start"}},emits:[_,Pl,"remove-tag","clear","visible-change","focus","blur"],setup(e,l){const i=ie("select"),y=ie("input"),{t:c}=ml(),d=wn(e),{optionList:s,optionsArray:m,selectSize:r,readonly:S,handleResize:p,collapseTagSize:g,debouncedOnInputChange:O,debouncedQueryChange:L,deletePrevTag:V,deleteTag:t,deleteSelected:f,handleOptionSelect:w,scrollToOption:H,setSelected:ye,resetInputHeight:G,managePlaceholder:Ae,showClose:Se,selectDisabled:qe,iconComponent:Ce,iconReverse:de,showNewOption:M,emptyText:Fe,toggleLastOptionHitState:We,resetInputState:le,handleComposition:Ke,onOptionCreate:He,onOptionDestroy:R,handleMenuEnter:U,handleFocus:Oe,blur:we,handleBlur:ce,handleClearClick:Ee,handleClose:Re,handleKeydownEscape:Ne,toggleMenu:je,selectOption:Qe,getValueKey:Ge,navigateOptions:Ue,dropMenuVisible:ne,reference:se,input:Je,iOSInput:Le,tooltipRef:pe,tags:Te,selectWrapper:fe,scrollbar:re,queryChange:Ye,groupQueryChange:Xe,handleMouseEnter:Ze,handleMouseLeave:ve,showTagList:xe,collapseTagList:_e}=En(e,d,l),{focus:el}=cn(se),{inputWidth:J,selected:Ie,inputLength:ll,filteredOptionsCount:ke,visible:nl,softFocus:Me,selectedLabel:ol,hoverIndex:ue,query:tl,inputHovering:il,currentPlaceholder:me,menuVisibleOnFocus:$e,isOnComposition:bl,isSilentBlur:gl,options:n,cachedOptions:o,optionsCount:a,prefixWidth:u,tagInMultiLine:E}=pl(d),I=v(()=>{const P=[i.b()],oe=T(r);return oe&&P.push(i.m(oe)),e.disabled&&P.push(i.m("disabled")),P}),j=v(()=>({maxWidth:`${T(J)-32}px`,width:"100%"})),Q=v(()=>({maxWidth:`${T(J)>123?T(J)-123:T(J)-75}px`}));Ml(Be,Pe({props:e,options:n,optionsArray:m,cachedOptions:o,optionsCount:a,filteredOptionsCount:ke,hoverIndex:ue,handleOptionSelect:w,onOptionCreate:He,onOptionDestroy:R,selectWrapper:fe,selected:Ie,setSelected:ye,queryChange:Ye,groupQueryChange:Xe})),vl(()=>{d.cachedPlaceHolder=me.value=e.placeholder||(()=>c("el.select.placeholder")),e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0&&(me.value=""),$l(fe,p),e.remote&&e.multiple&&G(),z(()=>{const P=se.value&&se.value.$el;if(P&&(J.value=P.getBoundingClientRect().width,l.slots.prefix)){const oe=P.querySelector(`.${y.e("prefix")}`);u.value=Math.max(oe.getBoundingClientRect().width+5,30)}}),ye()}),e.multiple&&!Array.isArray(e.modelValue)&&l.emit(_,[]),!e.multiple&&Array.isArray(e.modelValue)&&l.emit(_,"");const A=v(()=>{var P,oe;return(oe=(P=pe.value)==null?void 0:P.popperRef)==null?void 0:oe.contentRef});return{isIOS:nn,onOptionsRendered:P=>{s.value=P},tagInMultiLine:E,prefixWidth:u,selectSize:r,readonly:S,handleResize:p,collapseTagSize:g,debouncedOnInputChange:O,debouncedQueryChange:L,deletePrevTag:V,deleteTag:t,deleteSelected:f,handleOptionSelect:w,scrollToOption:H,inputWidth:J,selected:Ie,inputLength:ll,filteredOptionsCount:ke,visible:nl,softFocus:Me,selectedLabel:ol,hoverIndex:ue,query:tl,inputHovering:il,currentPlaceholder:me,menuVisibleOnFocus:$e,isOnComposition:bl,isSilentBlur:gl,options:n,resetInputHeight:G,managePlaceholder:Ae,showClose:Se,selectDisabled:qe,iconComponent:Ce,iconReverse:de,showNewOption:M,emptyText:Fe,toggleLastOptionHitState:We,resetInputState:le,handleComposition:Ke,handleMenuEnter:U,handleFocus:Oe,blur:we,handleBlur:ce,handleClearClick:Ee,handleClose:Re,handleKeydownEscape:Ne,toggleMenu:je,selectOption:Qe,getValueKey:Ge,navigateOptions:Ue,dropMenuVisible:ne,focus:el,reference:se,input:Je,iOSInput:Le,tooltipRef:pe,popperPaneRef:A,tags:Te,selectWrapper:fe,scrollbar:re,wrapperKls:I,selectTagsStyle:j,nsSelect:i,tagTextStyle:Q,handleMouseEnter:Ze,handleMouseLeave:ve,showTagList:xe,collapseTagList:_e}}}),In=["disabled","autocomplete"],kn=["disabled"],Mn={style:{height:"100%",display:"flex","justify-content":"center","align-items":"center"}};function $n(e,l,i,y,c,d){const s=Y("el-tag"),m=Y("el-tooltip"),r=Y("el-icon"),S=Y("el-input"),p=Y("el-option"),g=Y("el-options"),O=Y("el-scrollbar"),L=Y("el-select-menu"),V=Wl("click-outside");return be((h(),$("div",{ref:"selectWrapper",class:b(e.wrapperKls),onMouseenter:l[21]||(l[21]=(...t)=>e.handleMouseEnter&&e.handleMouseEnter(...t)),onMouseleave:l[22]||(l[22]=(...t)=>e.handleMouseLeave&&e.handleMouseLeave(...t)),onClick:l[23]||(l[23]=N((...t)=>e.toggleMenu&&e.toggleMenu(...t),["stop"]))},[X(m,{ref:"tooltipRef",visible:e.dropMenuVisible,placement:e.placement,teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"popper-options":e.popperOptions,"fallback-placements":["bottom-start","top-start","right","left"],effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onShow:e.handleMenuEnter},{default:C(()=>[k("div",{class:"select-trigger",onMouseenter:l[19]||(l[19]=t=>e.inputHovering=!0),onMouseleave:l[20]||(l[20]=t=>e.inputHovering=!1)},[e.multiple?(h(),$("div",{key:0,ref:"tags",class:b([e.nsSelect.e("tags"),e.nsSelect.is("disabled",e.selectDisabled)]),style:x(e.selectTagsStyle)},[e.collapseTags&&e.selected.length?(h(),D(ul,{key:0,onAfterLeave:e.resetInputHeight},{default:C(()=>[k("span",{class:b([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[(h(!0),$(Ve,null,rl(e.showTagList,t=>(h(),D(s,{key:e.getValueKey(t),closable:!e.selectDisabled&&!t.isDisabled,size:e.collapseTagSize,hit:t.hitState,type:e.tagType,"disable-transitions":"",onClose:f=>e.deleteTag(f,t)},{default:C(()=>[k("span",{class:b(e.nsSelect.e("tags-text")),style:x(e.tagTextStyle)},Z(t.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))),128)),e.selected.length>e.maxCollapseTags?(h(),D(s,{key:0,closable:!1,size:e.collapseTagSize,type:e.tagType,"disable-transitions":""},{default:C(()=>[e.collapseTagsTooltip?(h(),D(m,{key:0,disabled:e.dropMenuVisible,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:C(()=>[k("span",{class:b(e.nsSelect.e("tags-text"))},"+ "+Z(e.selected.length-e.maxCollapseTags),3)]),content:C(()=>[k("div",{class:b(e.nsSelect.e("collapse-tags"))},[(h(!0),$(Ve,null,rl(e.collapseTagList,t=>(h(),$("div",{key:e.getValueKey(t),class:b(e.nsSelect.e("collapse-tag"))},[X(s,{class:"in-tooltip",closable:!e.selectDisabled&&!t.isDisabled,size:e.collapseTagSize,hit:t.hitState,type:e.tagType,"disable-transitions":"",style:{margin:"2px"},onClose:f=>e.deleteTag(f,t)},{default:C(()=>[k("span",{class:b(e.nsSelect.e("tags-text")),style:x({maxWidth:e.inputWidth-75+"px"})},Z(t.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"])],2))),128))],2)]),_:1},8,["disabled","effect","teleported"])):(h(),$("span",{key:1,class:b(e.nsSelect.e("tags-text"))},"+ "+Z(e.selected.length-e.maxCollapseTags),3))]),_:1},8,["size","type"])):B("v-if",!0)],2)]),_:1},8,["onAfterLeave"])):B("v-if",!0),e.collapseTags?B("v-if",!0):(h(),D(ul,{key:1,onAfterLeave:e.resetInputHeight},{default:C(()=>[k("span",{class:b([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[(h(!0),$(Ve,null,rl(e.selected,t=>(h(),D(s,{key:e.getValueKey(t),closable:!e.selectDisabled&&!t.isDisabled,size:e.collapseTagSize,hit:t.hitState,type:e.tagType,"disable-transitions":"",onClose:f=>e.deleteTag(f,t)},{default:C(()=>[k("span",{class:b(e.nsSelect.e("tags-text")),style:x({maxWidth:e.inputWidth-75+"px"})},Z(t.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))),128))],2)]),_:1},8,["onAfterLeave"])),e.filterable?be((h(),$("input",{key:2,ref:"input","onUpdate:modelValue":l[0]||(l[0]=t=>e.query=t),type:"text",class:b([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize),e.nsSelect.is("disabled",e.selectDisabled)]),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:x({marginLeft:e.prefixWidth&&!e.selected.length||e.tagInMultiLine?`${e.prefixWidth}px`:"",flexGrow:1,width:`${e.inputLength/(e.inputWidth-32)}%`,maxWidth:`${e.inputWidth-42}px`}),onFocus:l[1]||(l[1]=(...t)=>e.handleFocus&&e.handleFocus(...t)),onBlur:l[2]||(l[2]=(...t)=>e.handleBlur&&e.handleBlur(...t)),onKeyup:l[3]||(l[3]=(...t)=>e.managePlaceholder&&e.managePlaceholder(...t)),onKeydown:[l[4]||(l[4]=(...t)=>e.resetInputState&&e.resetInputState(...t)),l[5]||(l[5]=F(N(t=>e.navigateOptions("next"),["prevent"]),["down"])),l[6]||(l[6]=F(N(t=>e.navigateOptions("prev"),["prevent"]),["up"])),l[7]||(l[7]=F((...t)=>e.handleKeydownEscape&&e.handleKeydownEscape(...t),["esc"])),l[8]||(l[8]=F(N((...t)=>e.selectOption&&e.selectOption(...t),["stop","prevent"]),["enter"])),l[9]||(l[9]=F((...t)=>e.deletePrevTag&&e.deletePrevTag(...t),["delete"])),l[10]||(l[10]=F(t=>e.visible=!1,["tab"]))],onCompositionstart:l[11]||(l[11]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onCompositionupdate:l[12]||(l[12]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onCompositionend:l[13]||(l[13]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onInput:l[14]||(l[14]=(...t)=>e.debouncedQueryChange&&e.debouncedQueryChange(...t))},null,46,In)),[[Kl,e.query]]):B("v-if",!0)],6)):B("v-if",!0),B(" fix: https://github.com/element-plus/element-plus/issues/11415 "),e.isIOS&&!e.multiple&&e.filterable&&e.readonly?(h(),$("input",{key:1,ref:"iOSInput",class:b([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize),e.nsSelect.em("input","iOS")]),disabled:e.selectDisabled,type:"text"},null,10,kn)):B("v-if",!0),X(S,{id:e.id,ref:"reference",modelValue:e.selectedLabel,"onUpdate:modelValue":l[15]||(l[15]=t=>e.selectedLabel=t),type:"text",placeholder:typeof e.currentPlaceholder=="function"?e.currentPlaceholder():e.currentPlaceholder,name:e.name,autocomplete:e.autocomplete,size:e.selectSize,disabled:e.selectDisabled,readonly:e.readonly,"validate-event":!1,class:b([e.nsSelect.is("focus",e.visible)]),tabindex:e.multiple&&e.filterable?-1:void 0,onFocus:e.handleFocus,onBlur:e.handleBlur,onInput:e.debouncedOnInputChange,onPaste:e.debouncedOnInputChange,onCompositionstart:e.handleComposition,onCompositionupdate:e.handleComposition,onCompositionend:e.handleComposition,onKeydown:[l[16]||(l[16]=F(N(t=>e.navigateOptions("next"),["stop","prevent"]),["down"])),l[17]||(l[17]=F(N(t=>e.navigateOptions("prev"),["stop","prevent"]),["up"])),F(N(e.selectOption,["stop","prevent"]),["enter"]),F(e.handleKeydownEscape,["esc"]),l[18]||(l[18]=F(t=>e.visible=!1,["tab"]))]},Hl({suffix:C(()=>[e.iconComponent&&!e.showClose?(h(),D(r,{key:0,class:b([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:C(()=>[(h(),D(Cl(e.iconComponent)))]),_:1},8,["class"])):B("v-if",!0),e.showClose&&e.clearIcon?(h(),D(r,{key:1,class:b([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:C(()=>[(h(),D(Cl(e.clearIcon)))]),_:1},8,["class","onClick"])):B("v-if",!0)]),_:2},[e.$slots.prefix?{name:"prefix",fn:C(()=>[k("div",Mn,[ee(e.$slots,"prefix")])])}:void 0]),1032,["id","modelValue","placeholder","name","autocomplete","size","disabled","readonly","class","tabindex","onFocus","onBlur","onInput","onPaste","onCompositionstart","onCompositionupdate","onCompositionend","onKeydown"])],32)]),content:C(()=>[X(L,null,{default:C(()=>[be(X(O,{ref:"scrollbar",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:b([e.nsSelect.is("empty",!e.allowCreate&&!!e.query&&e.filteredOptionsCount===0)])},{default:C(()=>[e.showNewOption?(h(),D(p,{key:0,value:e.query,created:!0},null,8,["value"])):B("v-if",!0),X(g,{onUpdateOptions:e.onOptionsRendered},{default:C(()=>[ee(e.$slots,"default")]),_:3},8,["onUpdateOptions"])]),_:3},8,["wrap-class","view-class","class"]),[[fl,e.options.size>0&&!e.loading]]),e.emptyText&&(!e.allowCreate||e.loading||e.allowCreate&&e.options.size===0)?(h(),$(Ve,{key:0},[e.$slots.empty?ee(e.$slots,"empty",{key:0}):(h(),$("p",{key:1,class:b(e.nsSelect.be("dropdown","empty"))},Z(e.emptyText),3))],64)):B("v-if",!0)]),_:3})]),_:3},8,["visible","placement","teleported","popper-class","popper-options","effect","transition","persistent","onShow"])],34)),[[V,e.handleClose,e.popperPaneRef]])}var Vn=ge(Tn,[["render",$n],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);const zn=ae({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:{type:Boolean,default:!1}},setup(e){const l=ie("select"),i=q(!0),y=cl(),c=q([]);Ml(Al,Pe({...pl(e)}));const d=ze(Be);vl(()=>{c.value=s(y.subTree)});const s=r=>{const S=[];return Array.isArray(r.children)&&r.children.forEach(p=>{var g;p.type&&p.type.name==="ElOption"&&p.component&&p.component.proxy?S.push(p.component.proxy):(g=p.children)!=null&&g.length&&S.push(...s(p))}),S},{groupQueryChange:m}=De(d);return K(m,()=>{i.value=c.value.some(r=>r.visible===!0)},{flush:"post"}),{visible:i,ns:l}}});function Dn(e,l,i,y,c,d){return be((h(),$("ul",{class:b(e.ns.be("group","wrap"))},[k("li",{class:b(e.ns.be("group","title"))},Z(e.label),3),k("li",null,[k("ul",{class:b(e.ns.b("group"))},[ee(e.$slots,"default")],2)])],2)),[[fl,e.visible]])}var ql=ge(zn,[["render",Dn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);const jn=zl(Vn,{Option:hl,OptionGroup:ql}),Qn=Dl(hl);Dl(ql);export{Qn as E,jn as a,hn as b};

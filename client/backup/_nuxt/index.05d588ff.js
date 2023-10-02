import{_ as Re}from"./PublicNavi.vue.41c3ed76.js";import{E as Ce,a as Pe}from"./el-select.1ad93c9c.js";import{E as M}from"./el-card.9b80e41d.js";import{_ as q,w as $e,b as Q}from"./base.93ed0562.js";import{E as X}from"./el-input.4a922344.js";import"./el-scrollbar.45f457e3.js";import"./el-popper.b4a381c3.js";import{u as Be}from"./partnerStore.e980da03.js";import{C as J,r as y,L as Ie,a as $,p as x,A as H,o as _,k as g,h as p,a4 as ee,ak as oe,u as o,i as D,D as F,G,j as U,t as S,J as te,Y as le,E as we,a1 as Ue,b as ne,R as Te,v as z,a2 as Ae,w as Ne,s as ae,f as b,e as k,F as V,l as B,c as P,m as R,al as Le,ab as se}from"./entry.3d92c549.js";import{b as N,n as Y,q as Z,I as Oe,E as ze}from"./index.1b6b466e.js";import{v as re,d as Me,a as qe,b as He,f as De,E as ie}from"./el-button.a2516ad4.js";import{U as K,C as Ge}from"./event.9519ab40.js";import{d as Ke}from"./aria.910d6243.js";import{E as ue,a as je}from"./el-checkbox.ff8a1271.js";import{E as We,a as Je}from"./el-form.b9988dee.js";import{s as Ye}from"./fetch-data.87f96ffe.js";import{a as Ze,n as Qe}from"./notify.d8f7857d.js";import{u as Xe}from"./promoStore.72742efe.js";import{u as j}from"./fetch.a6b300cb.js";/* empty css                          *//* empty css                */import{g as eo}from"./field-id-sorter.b437f58c.js";import{c as oo}from"./convert-products-fields.6a8f9e75.js";import{E as to}from"./el-message.93595105.js";import"./el-menu.2b00331f.js";import"./vnode.1fc98a52.js";import"./typescript.defaf979.js";import"./el-tooltip.4ed993c7.js";import"./validator.40155378.js";import"./_Uint8Array.f8a188ec.js";import"./api.config.70c9179f.js";import"./cookie.6679f996.js";import"./_initCloneObject.f0202db4.js";import"./el-notification.7a709104.js";const ce=N({size:re,disabled:Boolean,label:{type:[String,Number,Boolean],default:""}}),lo=N({...ce,modelValue:{type:[String,Number,Boolean],default:""},name:{type:String,default:""},border:Boolean}),de={[K]:n=>J(n)||Y(n)||Z(n),[Ge]:n=>J(n)||Y(n)||Z(n)},me=Symbol("radioGroupKey"),pe=(n,s)=>{const t=y(),e=Ie(me,void 0),a=$(()=>!!e),r=$({get(){return a.value?e.modelValue:n.modelValue},set(f){a.value?e.changeEvent(f):s&&s(K,f),t.value.checked=n.modelValue===n.label}}),l=Me($(()=>e==null?void 0:e.size)),d=qe($(()=>e==null?void 0:e.disabled)),c=y(!1),i=$(()=>d.value||a.value&&r.value!==n.label?-1:0);return{radioRef:t,isGroup:a,radioGroup:e,focus:c,size:l,disabled:d,tabIndex:i,modelValue:r}},no=["value","name","disabled"],ao=x({name:"ElRadio"}),so=x({...ao,props:lo,emits:de,setup(n,{emit:s}){const t=n,e=H("radio"),{radioRef:a,radioGroup:r,focus:l,size:d,disabled:c,modelValue:i}=pe(t,s);function f(){le(()=>s("change",i.value))}return(u,m)=>{var v;return _(),g("label",{class:F([o(e).b(),o(e).is("disabled",o(c)),o(e).is("focus",o(l)),o(e).is("bordered",u.border),o(e).is("checked",o(i)===u.label),o(e).m(o(d))])},[p("span",{class:F([o(e).e("input"),o(e).is("disabled",o(c)),o(e).is("checked",o(i)===u.label)])},[ee(p("input",{ref_key:"radioRef",ref:a,"onUpdate:modelValue":m[0]||(m[0]=C=>D(i)?i.value=C:null),class:F(o(e).e("original")),value:u.label,name:u.name||((v=o(r))==null?void 0:v.name),disabled:o(c),type:"radio",onFocus:m[1]||(m[1]=C=>l.value=!0),onBlur:m[2]||(m[2]=C=>l.value=!1),onChange:f},null,42,no),[[oe,o(i)]]),p("span",{class:F(o(e).e("inner"))},null,2)],2),p("span",{class:F(o(e).e("label")),onKeydown:m[3]||(m[3]=te(()=>{},["stop"]))},[G(u.$slots,"default",{},()=>[U(S(u.label),1)])],34)],2)}}});var ro=q(so,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);const io=N({...ce,name:{type:String,default:""}}),uo=["value","name","disabled"],co=x({name:"ElRadioButton"}),mo=x({...co,props:io,setup(n){const s=n,t=H("radio"),{radioRef:e,focus:a,size:r,disabled:l,modelValue:d,radioGroup:c}=pe(s),i=$(()=>({backgroundColor:(c==null?void 0:c.fill)||"",borderColor:(c==null?void 0:c.fill)||"",boxShadow:c!=null&&c.fill?`-1px 0 0 0 ${c.fill}`:"",color:(c==null?void 0:c.textColor)||""}));return(f,u)=>{var m;return _(),g("label",{class:F([o(t).b("button"),o(t).is("active",o(d)===f.label),o(t).is("disabled",o(l)),o(t).is("focus",o(a)),o(t).bm("button",o(r))])},[ee(p("input",{ref_key:"radioRef",ref:e,"onUpdate:modelValue":u[0]||(u[0]=v=>D(d)?d.value=v:null),class:F(o(t).be("button","original-radio")),value:f.label,type:"radio",name:f.name||((m=o(c))==null?void 0:m.name),disabled:o(l),onFocus:u[1]||(u[1]=v=>a.value=!0),onBlur:u[2]||(u[2]=v=>a.value=!1)},null,42,uo),[[oe,o(d)]]),p("span",{class:F(o(t).be("button","inner")),style:we(o(d)===f.label?o(i):{}),onKeydown:u[3]||(u[3]=te(()=>{},["stop"]))},[G(f.$slots,"default",{},()=>[U(S(f.label),1)])],38)],2)}}});var fe=q(mo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);const po=N({id:{type:String,default:void 0},size:re,disabled:Boolean,modelValue:{type:[String,Number,Boolean],default:""},fill:{type:String,default:""},label:{type:String,default:void 0},textColor:{type:String,default:""},name:{type:String,default:void 0},validateEvent:{type:Boolean,default:!0}}),fo=de,_o=["id","aria-label","aria-labelledby"],vo=x({name:"ElRadioGroup"}),go=x({...vo,props:po,emits:fo,setup(n,{emit:s}){const t=n,e=H("radio"),a=Ue(),r=y(),{formItem:l}=He(),{inputId:d,isLabeledByFormItem:c}=De(t,{formItemContext:l}),i=u=>{s(K,u),le(()=>s("change",u))};ne(()=>{const u=r.value.querySelectorAll("[type=radio]"),m=u[0];!Array.from(u).some(v=>v.checked)&&m&&(m.tabIndex=0)});const f=$(()=>t.name||a.value);return Te(me,z({...Ae(t),changeEvent:i,name:f})),Ne(()=>t.modelValue,()=>{t.validateEvent&&(l==null||l.validate("change").catch(u=>Ke()))}),(u,m)=>(_(),g("div",{id:o(d),ref_key:"radioGroupRef",ref:r,class:F(o(e).b("group")),role:"radiogroup","aria-label":o(c)?void 0:u.label||"radio-group","aria-labelledby":o(c)?o(l).labelId:void 0},[G(u.$slots,"default")],10,_o))}});var _e=q(go,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);const ho=$e(ro,{RadioButton:fe,RadioGroup:_e}),bo=Q(_e);Q(fe);const yo=async(n,s,t)=>{const e=j(),a=[],r=[],l=eo(n.value,s.value,t);console.log(l);const d=await e.getAllProducts();for(let i of d){const f=oo(i);c(f,l)&&(i.exception?r.push(i):a.push(i))}return{recomended:a,exceptions:r,fields:l};function c(i,f){if(i.fields&&i.fields.length>0)for(let u of i.fields){const m=f.find(v=>v.fieldId===u.id);if(!m)return!1;if(u.value&&m.fieldValue){const[v,C]=u.value.toString().split("<x<"),A=parseFloat(m.fieldValue);if(!(parseFloat(v)<=A)||!(A<=parseFloat(C)))return!1}}return!(i.orFields&&i.orFields.length>0&&!i.orFields.some(u=>f.some(m=>m.fieldId===u.id))||i.notFields&&i.notFields.length>0&&i.notFields.some(u=>f.some(m=>m.fieldId===u.id))||i.notOrFields&&i.notOrFields.length>0&&i.notOrFields.some(u=>f.some(m=>m.fieldId===u.id))||i.prioriteFields&&i.prioriteFields.length>0&&!i.prioriteFields.every(u=>f.some(m=>m.fieldId===u.id))||i.prioriteOrFields&&i.prioriteOrFields.length>0&&!i.prioriteOrFields.some(u=>f.some(m=>m.fieldId===u.id)))}},ko={class:"citySelector"},Eo={key:0,class:"partnerRec"},Fo={key:0},So=x({__name:"SelectCity",async setup(n){let s,t;const e=Be();try{[s,t]=ae(()=>e.getCityForUser()),await s,t()}catch(c){console.log(c)}const a=y(""),r=e.usersCity,l=y(r);async function d(){await e.findByCity(a.value),console.log("partnerStore.usersCity",e.usersPartners)}return(c,i)=>{const f=Ce,u=Pe,m=M;return _(),g("div",ko,[b(u,{modelValue:o(a),"onUpdate:modelValue":i[0]||(i[0]=v=>D(a)?a.value=v:null),filterable:"",placeholder:"Выбор города",onChange:d},{default:k(()=>[(_(!0),g(V,null,B(o(l),v=>(_(),P(f,{key:v.id,label:v.name,value:v.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),o(e).usersPartners.length>0?(_(),g("div",Eo,[b(m,{class:"box-card"},{default:k(()=>[(_(!0),g(V,null,B(o(e).usersPartners,v=>(_(),g("div",null,[p("div",null,[p("b",null,S(v.companyName),1)]),p("div",null,[U(S(v.adress)+" ",1),v.phone?(_(),g("span",Fo,". Тел.: "+S(v.phone),1)):R("",!0)])]))),256))]),_:1})])):R("",!0)])}}});const Vo=Le('<h1>Автохимия <br>для человека</h1><p>Теперь вы можете сами улучшить работу двигателя и узлов трансмиссии своего автомобиля: увеличить срок эксплуатации, повысить надежность и экономичность.<br>Для этого достаточно внимательно прочитать и заполнить необходимые поля и отметить характеристики в различных категориях.<br>В результате вам будет рекомендован один из продуктов компании «РУТЕК», который позволит улучшить работу двигателя, узлов трансмиссии указанного автомобиля.</p><p>Применять добавки RUTEC просто и быстро. В этом убедились десятки тысяч автовладельцев.<br> Это подтверждают отзывы на маркетплейсах (только на OZON отзывов около 4000).</p><p>Купить рекомендованный товар можно как на маркетппейсах, так и в интернет-магазине <a href="https://rutec-shop.ru/" target="_blank">rutec-shop.ru</a>.</p><p>Если вы хотите получить скидку в 15% на покупку в интернет-магазине производителя добавок RUTEC, то введите в поле ниже адрес вашей электронной почты, на который мы отправим купон на скидку. </p><p>Просто и быстро. И в любом месте. И не надо ездить по сервисам.</p>',6),xo={class:"promoBlock"},Ro=p("h3",null,"Email для получения скидки:",-1),Co=x({__name:"AnketaText",setup(n){const s=y(),t=z({email:"",accept:""}),e=z({email:[{required:!0,message:"Email обязателен",trigger:"blur"},{type:"email",message:"Укажите корректный email",trigger:["blur","change"]}],accept:[{required:!0,trigger:"change",message:"Необходимо ваше согласие"}]}),a=r=>{r&&r.validate(async l=>{if(l)await Ye({email:t.email})&&Ze({message:"Отправили вам промокод на скидку"});else return console.log("error submit!"),!1})};return(r,l)=>{const d=X,c=We,i=ie,f=ue,u=Je;return _(),g(V,null,[Vo,p("div",xo,[Ro,b(u,{ref_key:"ruleFormRef",ref:s,model:o(t),"status-icon":"",rules:o(e),class:"demo-ruleForm"},{default:k(()=>[b(c,{prop:"email"},{default:k(()=>[b(d,{modelValue:o(t).email,"onUpdate:modelValue":l[0]||(l[0]=m=>o(t).email=m),placeholder:"mail@mail.ru"},null,8,["modelValue"])]),_:1}),b(c,null,{default:k(()=>[b(i,{onClick:l[1]||(l[1]=m=>a(o(s))),type:"success",size:"large",class:"getPromoBtn",disabled:!o(t).email&&!o(t).accept},{default:k(()=>[U(" ХОЧУ СКИДКУ! ")]),_:1},8,["disabled"])]),_:1}),b(c,{prop:"accept",class:"acceptCheckbox"},{default:k(()=>[b(f,{modelValue:o(t).accept,"onUpdate:modelValue":l[2]||(l[2]=m=>o(t).accept=m),label:"Согласие на обработку персональных данных",name:"accept"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])])],64)}}});const Po={key:0,class:"promoFact"},$o={class:"card-header"},Bo=p("span",null,"Факты о РУТЕК",-1),Io=["innerHTML"],wo={key:1,class:"promoVideo"},Uo={class:"card-header"},To=["href"],Ao=["href"],No=["src","alt"],Lo=x({__name:"PromoMaterial",setup(n){const s=y(null),t=y(null);return se(async()=>{const e=Xe();await e.getRandomPromo(),s.value=e.randomPromo.fact,t.value=e.randomPromo.video}),(e,a)=>{const r=M;return _(),g(V,null,[o(s)?(_(),g("div",Po,[b(r,{class:"box-card"},{header:k(()=>[p("div",$o,[Bo,p("span",null,[p("h4",null,S(o(s).name),1)])])]),default:k(()=>[p("div",null,[p("p",{innerHTML:o(s).text},null,8,Io)])]),_:1})])):R("",!0),o(t)?(_(),g("div",wo,[b(r,{class:"box-card"},{header:k(()=>[p("div",Uo,[p("span",null,[p("h4",null,S(o(t).name),1)])])]),default:k(()=>{var l;return[p("div",null,[p("a",{href:o(t).videoUrl,target:"_blank"},S(o(t).videoUrl),9,To),p("a",{href:o(t).videoUrl,target:"_blank"},[p("img",{src:"/video/"+o(t).videoPreview,alt:(l=o(t))==null?void 0:l.name},null,8,No)],8,Ao)])]}),_:1})])):R("",!0)],64)}}});const Oo={key:0,class:"adminsRec"},zo=p("div",{class:"card-header"},[p("span",null,"Рекомендация")],-1),Mo=x({__name:"AdminRecomendation",props:{recomendation:{type:Object}},async setup(n){let s,t;const e=n,a=j(),r=y(!1),l=([s,t]=ae(()=>a.validateUser()),s=await s,t(),s);return e.recomendation&&(r.value=!0),console.log(e.recomendation),(d,c)=>{const i=M;return n.recomendation&&o(l)?(_(),g("div",Oo,[b(i,{class:"box-card"},{header:k(()=>[zo]),default:k(()=>[(_(!0),g(V,null,B(n.recomendation,f=>(_(),g("div",null,[p("div",null,S(f.name),1)]))),256))]),_:1})])):R("",!0)}}});function qo(n,s,t){var d;const a=t.find(c=>c.function==="cleaner").id;if(!a){console.log('Кнопка очистки неполадок не найдена "Работа двигателя не сопровождается никаким из ниже перечисленных признаков"');return}const r=[];for(let c of t)c.trouble&&r.push(c.id);if(n.value[a])if(((d=n.value[a])==null?void 0:d.length)===1){l();for(let c of r)n.value[c]=void 0;s.value=!0}else l(),n.value.splice(a,1),s.value=!0;function l(){const c=document.querySelectorAll(".trouble");for(let i of c)i.classList.contains("disable")?i.classList.remove("disable"):i.classList.add("disable")}}function Ho(n,s,t){const e=[];for(let r of t)r.part==="unit"&&e.push(r.id);if(e.length===0)return;const a=[];n.value.forEach((r,l)=>{e.includes(l)&&r!==void 0&&a.push(r)}),n.value.forEach((r,l)=>{e.includes(l)&&a.length>1&&l!==s&&(n.value[l]=void 0)})}function Do(n,s,t){const e=[];let a=null;for(let l of t)l.function!=="cleaner"&&l.trouble&&e.push(l.id),l.function=="cleaner"&&(a=l.id);if(e.length===0)return;let r=!1;n.value.forEach((l,d)=>{e.includes(d)&&l&&(l==null?void 0:l.length)>0&&(r=!1)}),r?(s.value=!0,n.value[a]=void 0):s.value=!1}function Go(n){const[s,t,e,a,r,l,d]=n;s.length===0&&ve(d,l),!Wo(e,a,r)&&(Ko(s,e,d,l),jo(t,e,d,l),Jo(e,r),console.log("Отфильтрованный товар:",d.value),d.value?a.value=!0:a.value=!1)}function Ko(n,s,t,e){if(n.length===1&&(t.value=n[0],e.value=n[0].url),n.length>1){console.log("КОНФЛИКТ ТОВАРОВ!"),console.log(...n);const a=[];for(let r of n)console.log("Проверяем у которого из товаров есть приоритетные поля"),(r.prioriteFields||r.prioriteOrFields)&&a.push(r);a.length==0&&console.log("Приоритетных товаров не найдено. Невозможно разрешить конфликт"),a.length>1&&(console.log("В рекомендациях оказалось более одного товара с приоритетными полями"),console.log(...a)),a.length===1&&(console.log("Товар с приоритетными отфильтрован"),t.value=a[0],e.value=a[0].url)}}function jo(n,s,t,e){console.log("exceptions",...n);for(let l of s)if(l.fieldId===49)return;if(n.length>=1){const l=[];for(let d of s)d.trouble&&l.push(d);if(console.log("Отмечено признаков неисправностей:",l.length),l.length>1&&(console.log("selectedBadSigns.length",l.length),a()),l.length===1){let d=!0;for(let c of l)c.special&&(d=!1);d?a():r()}}else r();function a(){t.value=n[0],e.value=n[0].url}function r(){t.value&&t.value.exception&&ve(t,e)}}function Wo(n,s,t){const e=n.find(a=>a.blockRecomendation===!0);return e?(s.value=!1,t.value=!0):t.value=!1,e}function Jo(n,s){for(let t of n)if(t.alert){s.value=!0;return}if(n.length===1&&n[0].alert){s.value=!0;return}s.value=!1}function ve(n,s){n.value=void 0,s.value=void 0}function Yo(n,s,t){var e;n.value&&(s.value?(window.open(s.value,"_blank"),(e=t.value)!=null&&e.recText&&to({showClose:!0,dangerouslyUseHTMLString:!0,message:t.value.recText,type:"success",duration:0})):Qe({title:"Ошибка",message:"Указанных параметров не достаточно для рекомендации"}))}const Zo={class:"anketa_wrapper"},Qo={class:"anketa"},Xo={class:"inputGroup"},et={key:0},ot={class:"anketaText"},tt=p("b",null,"Очистить выбранное",-1),Nt={__name:"index",setup(n){const s=j();let t=[];const e=y([]),a=y([]),r=y(!1),l=y(!1),d=y(!0),c=y(""),i=y(null),f=y(null),u=y(null);async function m(I){console.log(`---
`),qo(e,d,t),Do(e,d,t),Ho(e,I,t);const{recomended:T,exceptions:L,fields:O}=await yo(a,e,t);Go([T,L,O,r,l,i,f]),u.value=T,v()}function v(){d.value?document.querySelector(c.value).classList.add("disable"):document.querySelector(c.value).classList.remove("disable")}function C(){e.value=[],r.value=!1,l.value=!1,d.value=!0,v()}function A(){Yo(r,i,f)}return se(async()=>{try{t=await s.getAllSignGroup()}catch(I){console.log(I)}}),ne(async()=>{const I=t.find(T=>T.function==="block");c.value=`.groupId_${I.id}`,document.querySelector(c.value).classList.add("disable")}),(I,T)=>{const L=Re,O=So,W=X,ge=ho,he=bo,be=ue,ye=je,ke=Co,Ee=Lo,Fe=Mo,Se=ze,Ve=ie;return _(),g(V,null,[b(L),p("main",Zo,[p("div",Qo,[b(O),(_(!0),g(V,null,B(o(t),(E,xe)=>(_(),g("div",{key:xe,class:F(["optionsGroup",{inputs:E.fieldsType==="input",trouble:E.trouble},"groupId_"+E.id])},[p("h3",null,S(E.name),1),E.fieldsType=="input"?(_(!0),g(V,{key:0},B(E.signs,h=>(_(),g("div",Xo,[U(S(h.name)+" ",1),h.required?(_(),g("sup",et," * ")):R("",!0),h.type=="number"?(_(),P(W,{modelValue:o(a)[h.id],"onUpdate:modelValue":w=>o(a)[h.id]=w,placeholder:h.placeholder,key:h.id,formatter:w=>w.replace(/[^0-9\,]/g,""),onChange:m},null,8,["modelValue","onUpdate:modelValue","placeholder","formatter"])):(_(),P(W,{modelValue:o(a)[h.id],"onUpdate:modelValue":w=>o(a)[h.id]=w,placeholder:h.placeholder,key:h.id,onChange:m},null,8,["modelValue","onUpdate:modelValue","placeholder"]))]))),256)):R("",!0),E.fieldsType=="radio"?(_(),P(he,{key:1,modelValue:o(e)[E.id],"onUpdate:modelValue":h=>o(e)[E.id]=h},{default:k(()=>[(_(!0),g(V,null,B(E.signs,h=>(_(),P(ge,{label:h.name,key:E.id,onChange:w=>m(E.id)},{default:k(()=>[U(S(h.name),1)]),_:2},1032,["label","onChange"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])):R("",!0),E.fieldsType=="checkbox"?(_(),P(ye,{key:2,modelValue:o(e)[E.id],"onUpdate:modelValue":h=>o(e)[E.id]=h},{default:k(()=>[(_(!0),g(V,null,B(E.signs,h=>(_(),P(be,{label:h.name,key:E.id,onChange:m},null,8,["label"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])):R("",!0)],2))),128))]),p("div",ot,[b(ke),b(Ee),b(Fe,{recomendation:o(u)},null,8,["recomendation"])]),p("div",{class:F(["recomendationBtnDanger",{active:o(l)}])}," Рекомендация позвонить по номеру 8 800 101 90 07 для консультации. ",2),p("div",{class:F(["recomendationBtn",{active:o(r)}]),onClick:A}," РЕКОМЕНДАЦИИ ",2),p("div",{class:F(["clear_selections",{recActive:o(r),noSelectors:o(e).length===0}])},[b(Ve,{class:"deleteProductBtn",size:"large",type:"primary",onClick:C},{default:k(()=>[tt,b(Se,null,{default:k(()=>[b(o(Oe))]),_:1})]),_:1})],2)])],64)}}};export{Nt as default};

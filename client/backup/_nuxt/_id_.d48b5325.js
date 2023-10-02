import{E as de}from"./el-input.6c51afcb.js";import{E as pe,a as me}from"./el-form.25ce4bf6.js";import{E as fe,a as _e}from"./el-select.3d13cbe9.js";import{E as le}from"./el-popper.c559b43e.js";import{_ as ve,w as be}from"./base.4b6264ad.js";import"./el-tooltip.4ed993c7.js";import{C as W,p as F,A as he,a as w,r as N,w as j,b as ye,o as d,k as y,h as P,u as t,D as V,I as ge,c as g,e as n,H as L,m as h,t as G,f as e,E as oe,J as Ve,W as ke,Y as Se,Z as ae,G as Te,j as z,v as J,F as Y,l as Ee,x as Ce,s as we}from"./entry.c3c29ec0.js";import{b as Ie,j as ne,a as xe,q as M,n as Z,u as Ne,r as Pe,E as O,s as Fe,d as Be}from"./index.010f5bcd.js";import{i as Ue}from"./validator.1327dfbe.js";import{U as Q,C as X,I as ee}from"./event.9519ab40.js";import{b as Oe,d as $e,f as De,a as Ae,E as se}from"./el-button.caa19f74.js";import{d as qe,t as Ge}from"./aria.70066936.js";import{E as ze,a as Me}from"./el-checkbox.a5029100.js";import{a as Re,_ as He}from"./layout.c0b212aa.js";import"./el-scrollbar.161c4417.js";/* empty css                *//* empty css                          */import{E as q}from"./el-notification.56476da9.js";import{u as ie}from"./fetch.9a091c99.js";import"./typescript.defaf979.js";import"./_Uint8Array.b6631b00.js";import"./_initCloneObject.fb608d10.js";import"./el-card.d4e0add8.js";import"./cookie.7abe9f98.js";const Ke=Ie({modelValue:{type:[Boolean,String,Number],default:!1},value:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},activeIcon:{type:ne},inactiveIcon:{type:ne},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},id:String,loading:{type:Boolean,default:!1},beforeChange:{type:xe(Function)},size:{type:String,validator:Ue},tabindex:{type:[String,Number]}}),We={[Q]:c=>M(c)||W(c)||Z(c),[X]:c=>M(c)||W(c)||Z(c),[ee]:c=>M(c)||W(c)||Z(c)},je=["onClick"],Le=["id","aria-checked","aria-disabled","name","true-value","false-value","disabled","tabindex","onKeydown"],Je=["aria-hidden"],Ye=["aria-hidden"],Ze=["aria-hidden"],te="ElSwitch",Qe=F({name:te}),Xe=F({...Qe,props:Ke,emits:We,setup(c,{expose:b,emit:v}){const o=c,k=ke(),{formItem:f}=Oe(),I=$e(),a=he("switch");Ne({from:'"value"',replacement:'"model-value" or "v-model"',scope:te,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},w(()=>{var l;return!!((l=k.vnode.props)!=null&&l.value)}));const{inputId:x}=De(o,{formItemContext:f}),S=Ae(w(()=>o.loading)),B=N(o.modelValue!==!1),E=N(),R=N(),H=w(()=>[a.b(),a.m(I.value),a.is("disabled",S.value),a.is("checked",i.value)]),s=w(()=>({width:Pe(o.width)}));j(()=>o.modelValue,()=>{B.value=!0}),j(()=>o.value,()=>{B.value=!1});const r=w(()=>B.value?o.modelValue:o.value),i=w(()=>r.value===o.activeValue);[o.activeValue,o.inactiveValue].includes(r.value)||(v(Q,o.inactiveValue),v(X,o.inactiveValue),v(ee,o.inactiveValue)),j(i,l=>{var _;E.value.checked=l,o.validateEvent&&((_=f==null?void 0:f.validate)==null||_.call(f,"change").catch(C=>qe()))});const p=()=>{const l=i.value?o.inactiveValue:o.activeValue;v(Q,l),v(X,l),v(ee,l),Se(()=>{E.value.checked=i.value})},m=()=>{if(S.value)return;const{beforeChange:l}=o;if(!l){p();return}const _=l();[ae(_),M(_)].includes(!0)||Ge(te,"beforeChange must return type `Promise<boolean>` or `boolean`"),ae(_)?_.then(D=>{D&&p()}).catch(D=>{}):_&&p()},K=w(()=>a.cssVarBlock({...o.activeColor?{"on-color":o.activeColor}:null,...o.inactiveColor?{"off-color":o.inactiveColor}:null,...o.borderColor?{"border-color":o.borderColor}:null})),$=()=>{var l,_;(_=(l=E.value)==null?void 0:l.focus)==null||_.call(l)};return ye(()=>{E.value.checked=i.value}),b({focus:$,checked:i}),(l,_)=>(d(),y("div",{class:V(t(H)),style:oe(t(K)),onClick:Ve(m,["prevent"])},[P("input",{id:t(x),ref_key:"input",ref:E,class:V(t(a).e("input")),type:"checkbox",role:"switch","aria-checked":t(i),"aria-disabled":t(S),name:l.name,"true-value":l.activeValue,"false-value":l.inactiveValue,disabled:t(S),tabindex:l.tabindex,onChange:p,onKeydown:ge(m,["enter"])},null,42,Le),!l.inlinePrompt&&(l.inactiveIcon||l.inactiveText)?(d(),y("span",{key:0,class:V([t(a).e("label"),t(a).em("label","left"),t(a).is("active",!t(i))])},[l.inactiveIcon?(d(),g(t(O),{key:0},{default:n(()=>[(d(),g(L(l.inactiveIcon)))]),_:1})):h("v-if",!0),!l.inactiveIcon&&l.inactiveText?(d(),y("span",{key:1,"aria-hidden":t(i)},G(l.inactiveText),9,Je)):h("v-if",!0)],2)):h("v-if",!0),P("span",{ref_key:"core",ref:R,class:V(t(a).e("core")),style:oe(t(s))},[l.inlinePrompt?(d(),y("div",{key:0,class:V(t(a).e("inner"))},[l.activeIcon||l.inactiveIcon?(d(),g(t(O),{key:0,class:V(t(a).is("icon"))},{default:n(()=>[(d(),g(L(t(i)?l.activeIcon:l.inactiveIcon)))]),_:1},8,["class"])):l.activeText||l.inactiveText?(d(),y("span",{key:1,class:V(t(a).is("text")),"aria-hidden":!t(i)},G(t(i)?l.activeText:l.inactiveText),11,Ye)):h("v-if",!0)],2)):h("v-if",!0),P("div",{class:V(t(a).e("action"))},[l.loading?(d(),g(t(O),{key:0,class:V(t(a).is("loading"))},{default:n(()=>[e(t(Fe))]),_:1},8,["class"])):h("v-if",!0)],2)],6),!l.inlinePrompt&&(l.activeIcon||l.activeText)?(d(),y("span",{key:1,class:V([t(a).e("label"),t(a).em("label","right"),t(a).is("active",t(i))])},[l.activeIcon?(d(),g(t(O),{key:0},{default:n(()=>[(d(),g(L(l.activeIcon)))]),_:1})):h("v-if",!0),!l.activeIcon&&l.activeText?(d(),y("span",{key:1,"aria-hidden":!t(i)},G(l.activeText),9,Ze)):h("v-if",!0)],2)):h("v-if",!0)],14,je))}});var et=ve(Xe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]);const tt=be(et),lt=F({__name:"OptionWithTooltip",props:{title:{type:String}},setup(c){return(b,v)=>{const o=le;return d(),g(o,{class:"box-item",effect:"dark",content:c.title,placement:"right"},{default:n(()=>[Te(b.$slots,"default")]),_:3},8,["content"])}}}),ot=F({__name:"AddSignHelpButtons",props:{tooltip:{type:String},btnText:{type:String}},setup(c){return(b,v)=>{const o=se,k=le;return d(),g(k,{class:"box-item",effect:"dark",content:c.tooltip,placement:"top"},{default:n(()=>[e(o,{size:"small",type:"info",plain:""},{default:n(()=>[z(G(c.btnText),1)]),_:1})]),_:1},8,["content"])}}});const at={class:"border signsHelp"},nt=P("div",{class:"border"},null,-1),st={class:"inline_form"},it={key:0,class:"inline_form"},rt=F({__name:"SignsAddEdit",props:{cardTitle:{type:String},existSign:{type:Object}},setup(c){const b=c,v=ie(),o=b.existSign,k=N(),f=N([]),I=N(!1),a=J({orderPosition:0,name:"",part:"",fieldsType:"",trouble:!1,function:"",signs:[]});function x(s){console.log(s),a.fieldsType==="input"?I.value=!0:I.value=!1;const r=f.value.length,i={required:s?s.required:!1,id:s?s.id:r,name:s?s.name:"",props:[],placeholder:s?s.placeholder:"",numbersOnly:s?s.numbersOnly:!1};s.trouble&&i.props.push("Неисправность"),s.alert&&i.props.push("Предупреждение"),s.blockRecomendation&&i.props.push("Блокировать рекомендации"),s.special&&i.props.push("Особое"),s.required&&i.props.push("Обязательное"),f.value.push(J(i)),console.log(f)}if(o){if(a.orderPosition=o.orderPosition,a.name=o.name,a.part=o.part,a.fieldsType=o.fieldsType,a.trouble=o.trouble,a.function=o.function,o.signs.length>0)for(let s of o.signs)x(s);console.log(f)}const S=J({orderPosition:[{required:!0,message:"Укажите порядковый номер в анкете",trigger:"blur"},{type:"number",message:"Должно быть число"}],name:[{required:!0,message:"Укажите название группы признаков",trigger:"blur"}],part:[{required:!0,message:"Укажите принадлежность к типу группы",trigger:"change"}],fieldsType:[{required:!0,message:"Укажите тип полей",trigger:"change"}]}),B=async s=>{s&&await s.validate(async(r,i)=>{if(r){const p=a;p.signs=[];for(let m of f.value)p.signs.push({name:m.name,placeholder:m.placeholder?m.placeholder:null,trouble:!!m.props.includes("Неисправность"),alert:!!m.props.includes("Предупреждение"),blockRecomendation:!!m.props.includes("Блокировать рекомендации"),special:!!m.props.includes("Особое"),required:!!m.props.includes("Обязательное"),numbersOnly:m.numbersOnly});await E(p)}else console.log("error submit!",i)})};async function E(s){if(!o)try{await v.addSignGroup(s),q({title:"Готово",message:"Группа признаков успешно добавлена",type:"success"})}catch(r){console.log(r),q({title:"Ошибка",message:"Не могли добавить группу признаков :(",type:"error"})}if(o)try{await v.updateSignGroup(o.id,s),q({title:"Готово",message:"Группа успешно обновлена",type:"success"})}catch(r){console.log(r),q({title:"Ошибка",message:"Не могли обновить группу признаков :(",type:"error"})}}const R=s=>{f.value=f.value.filter((r,i)=>s!==i)},H=s=>{s&&(s.resetFields(),f.value=[],a.trouble=!1)};return(s,r)=>{const i=de,p=pe,m=fe,K=lt,$=_e,l=le,_=tt,C=ot,D=O,A=se,U=ze,re=Me,ue=me,ce=Re;return d(),g(ce,{title:c.cardTitle},{default:n(()=>[e(ue,{ref_key:"ruleFormRef",ref:k,model:t(a),rules:t(S),"label-width":"130px",class:"add-signs-form",size:"default","status-icon":""},{default:n(()=>[e(p,{label:"Позиция",prop:"orderPosition",class:"signGroupOrderNum"},{default:n(()=>[e(i,{modelValue:t(a).orderPosition,"onUpdate:modelValue":r[0]||(r[0]=u=>t(a).orderPosition=u),modelModifiers:{number:!0},placeholder:"0"},null,8,["modelValue"])]),_:1}),e(p,{label:"Название",prop:"name"},{default:n(()=>[e(i,{modelValue:t(a).name,"onUpdate:modelValue":r[1]||(r[1]=u=>t(a).name=u),placeholder:"Как называется группа признаков"},null,8,["modelValue"])]),_:1}),e(p,{label:"Тип группы",prop:"part"},{default:n(()=>[e($,{modelValue:t(a).part,"onUpdate:modelValue":r[2]||(r[2]=u=>t(a).part=u),placeholder:"Выберите тип"},{default:n(()=>[e(m,{label:"Авто",value:"car"}),e(m,{label:"Двигатель",value:"engine"}),e(K,{title:"Объединяются в общуюю группу, внутри которой можно выбрать вариант только одной группы"},{default:n(()=>[e(m,{label:"Прочие узлы",value:"unit"})]),_:1}),e(m,{label:"Сервис",value:"service"}),e(m,{label:"Другое",value:"other"})]),_:1},8,["modelValue"])]),_:1}),e(p,{label:"Тип полей",prop:"fieldsType"},{default:n(()=>[e($,{modelValue:t(a).fieldsType,"onUpdate:modelValue":r[3]||(r[3]=u=>t(a).fieldsType=u),placeholder:"Выберите тип"},{default:n(()=>[e(m,{label:"Поле ввода",value:"input"}),e(m,{label:"Выбор нескольких",value:"checkbox"}),e(m,{label:"Выбор одного",value:"radio"})]),_:1},8,["modelValue"])]),_:1}),e(p,{label:"Функция",prop:"function",class:"spesialFunctionWrapper"},{default:n(()=>[e(l,{class:"box-item",effect:"dark",content:"Привязка доп. функционала, например очистка полей, блокировка групп и тд",placement:"right"},{default:n(()=>[e(i,{modelValue:t(a).function,"onUpdate:modelValue":r[4]||(r[4]=u=>t(a).function=u),placeholder:"Идентификатор"},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{label:"Неисправность",prop:"trouble"},{default:n(()=>[e(l,{class:"box-item",effect:"dark",content:"В полям группы будут применяться общие правила признаков неисправностей",placement:"right"},{default:n(()=>[e(_,{modelValue:t(a).trouble,"onUpdate:modelValue":r[5]||(r[5]=u=>t(a).trouble=u)},null,8,["modelValue"])]),_:1})]),_:1}),t(f).length>0?(d(),y(Y,{key:0},[P("div",at,[e(C,{btnText:"Неисправность",tooltip:"Если признак относится к неисправностям"}),e(C,{btnText:"Предупреждение",tooltip:"Выводить предупреждение позвонить по телефону"}),e(C,{btnText:"Блокировать рекомендации",tooltip:"Если в рекомендациях есть товар, кнопка перехода будет заблокирована"}),e(C,{btnText:"Особое",tooltip:"Применяется к неполадкам, если привязан специализированный товар, например СтукаСтой, Экспресс-раскоксовка и тд"}),e(C,{btnText:"Обязательное",tooltip:"Кнопка рекомендаций будет неактивна, если данное поле будет пустое"})]),(d(!0),y(Y,null,Ee(t(f),u=>(d(),y(Y,{key:u.id},[nt,P("div",st,[e(p,{label:"Название"},{default:n(()=>[e(i,{modelValue:u.name,"onUpdate:modelValue":T=>u.name=T,placeholder:"Название признака"},null,8,["modelValue","onUpdate:modelValue"]),e(A,{type:"danger",onClick:T=>R(u.id)},{default:n(()=>[e(D,null,{default:n(()=>[e(t(Be))]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),t(I)?(d(),y("div",it,[e(p,{label:"Плейсхолдер"},{default:n(()=>[e(i,{modelValue:u.placeholder,"onUpdate:modelValue":T=>u.placeholder=T,placeholder:"Текст в пустом поле"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(p,{label:"Только числа",prop:"numbersOnly"},{default:n(()=>[e(_,{modelValue:u.numbersOnly,"onUpdate:modelValue":T=>u.numbersOnly=T},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)])):h("",!0),e(p,{label:"Свойства"},{default:n(()=>[e(re,{modelValue:u.props,"onUpdate:modelValue":T=>u.props=T},{default:n(()=>[e(U,{label:"Неисправность",name:"type"}),e(U,{label:"Предупреждение",name:"type"}),e(U,{label:"Блокировать рекомендации",name:"type"}),e(U,{label:"Особое",name:"type"}),e(U,{label:"Обязательное",name:"type"})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024)],64))),128))],64)):h("",!0),e(p,null,{default:n(()=>[e(A,{type:"success",onClick:x},{default:n(()=>[z(" Добавить признак ")]),_:1})]),_:1}),e(p,null,{default:n(()=>[e(A,{type:"primary",onClick:r[6]||(r[6]=u=>B(t(k)))},{default:n(()=>[z(" Сохранить группу  ")]),_:1}),e(A,{onClick:r[7]||(r[7]=u=>H(t(k)))},{default:n(()=>[z("Очистить")]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title"])}}});const Bt=F({__name:"[id]",async setup(c){let b,v;const o=ie(),k=Ce().params.id,f=([b,v]=we(()=>o.getSignGroupById(k)),b=await b,v(),b);return(I,a)=>{const x=rt,S=He;return d(),g(S,null,{default:n(()=>[e(x,{cardTitle:"Редактирование признака",existSign:t(f)},null,8,["existSign"])]),_:1})}}});export{Bt as default};

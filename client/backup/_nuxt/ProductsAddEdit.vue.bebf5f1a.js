import{E as R}from"./el-input.00fc759c.js";import{E as z,a as J}from"./el-form.4dedcd0b.js";import{E as L,a as H}from"./el-select.02662bfb.js";import{E as K,a as M}from"./el-checkbox.56c3bf7a.js";import{E as Q}from"./el-button.e2c9f36f.js";import{a as W}from"./layout.d6d447f0.js";import"./base.94fa8163.js";import"./el-scrollbar.172836d9.js";import"./el-popper.de26d9bc.js";/* empty css                          */import{E as v}from"./el-notification.7ddc4075.js";import{u as X}from"./fetch.cc65edc0.js";import{c as Y}from"./convert-products-fields.6a8f9e75.js";import{g as Z}from"./field-id-sorter.b437f58c.js";import{p as ee,s as te,r as oe,v as S,o as f,c as N,e as r,f as a,u as l,k as g,F,l as x,h as C,t as P,m as G,j as U}from"./entry.ffdc8223.js";const se={key:0,class:"constructorInputGroup"},le={class:"iputData"},ne={key:1,class:"constructorInputGroup"},he=ee({__name:"ProductsAddEdit",props:{cardTitle:{type:String},existProduct:{type:Object}},async setup(w){let V,I;const y=w,T=X(),h=([V,I]=te(()=>T.getAllSignGroup()),V=await V,I(),V),D=oe(),e=S({name:"",url:"",recText:"",signsName:[],conditions:[],inputs:[],selectors:[],signsData:[]});if(y.existProduct){let d=function(s,m){for(let b of s)for(let _ of h){const k=_.signs.find(E=>E.id===b.id);k&&(t.add(_),u.push({...b,...k,groupId:_.id,fieldsType:_.fieldsType,condition:m}))}};const t=new Set,u=[],o=y.existProduct;e.name=o.name,e.url=o.url,e.recText=o.recText!=="null"?o.recText:"",Y(o);const i=["fields","orFields","notFields","notOrFields","prioriteFields","prioriteOrFields"];for(let s of i)o[s]&&d(o[s],s);e.signsData=[...e.signsData,...Array.from(t)];for(let s of e.signsData)e.signsName.push(s.name);for(let s of u){s.fieldsType==="input"&&(e.inputs[s.id]=s.value),(s.fieldsType==="radio"||s.fieldsType==="checkbox")&&(e.selectors[s.groupId]||(e.selectors[s.groupId]=[]),e.selectors[s.groupId].push(s.name));const m={fields:"И",orFields:"ИЛИ",notFields:"!И",notOrFields:"!ИЛИ",prioriteFields:"=И",prioriteOrFields:"=ИЛИ"};e.conditions[s.id]=m[s.condition]}}function B(){if(e.signsName.length===0){e.signsData=[];return}for(let d of e.signsName){const t=h.find(o=>o.name===d);e.signsData.find(o=>o.name===d)||e.signsData.push(t)}}const A=S({name:[{required:!0,message:"Укажите название товара",trigger:"blur"}],url:[{required:!0,message:"Укажите ссылку на товар",trigger:"blur"}],signsName:[{required:!0,message:"Выберите признак",trigger:"change"}]}),j=async d=>{d&&await d.validate(async(t,u)=>{if(t){const o=q();if(!y.existProduct)try{await T.addProduct(o),v({title:"Готово",message:"Товар успешно добавлен",type:"success"})}catch{v({title:"Ошибка",message:"Не могли добавить товар :(",type:"error"})}if(y.existProduct)try{await T.updateProduct(y.existProduct.id,o),v({title:"Готово",message:"Товар успешно обнволён",type:"success"})}catch{v({title:"Ошибка",message:"Не могли обновить товар :(",type:"error"})}}else console.log("error submit!",u)})};function q(){var u;const d=Z(e.inputs,e.selectors,h),t={name:e.name,url:e.url,recText:e.recText,fields:[],orFields:[],notFields:[],notOrFields:[],prioriteFields:[],prioriteOrFields:[]};for(let o of d){const i=o.fieldId,s=o.fieldValue,m=e.conditions[i];m==="И"&&t.fields.push({id:i,value:s||null}),m==="ИЛИ"&&t.orFields.push({id:i}),m==="!И"&&t.notFields.push({id:i}),m==="!ИЛИ"&&t.notOrFields.push({id:i}),m==="=И"&&t.prioriteFields.push({id:i}),m==="=ИЛИ"&&t.prioriteOrFields.push({id:i})}for(let o in t)((u=t[o])==null?void 0:u.length)===0?t[o]=null:typeof t[o]=="object"&&(t[o]=JSON.stringify(t[o]));return t}const $=d=>{d&&(d.resetFields(),e.signsName=[],e.signsData=[])},O=[{name:"И"},{name:"ИЛИ"},{name:"!И"},{name:"!ИЛИ"},{name:"=И"},{name:"=ИЛИ"}];return(d,t)=>{const u=R,o=z,i=L,s=H,m=K,b=M,_=Q,k=J,E=W;return f(),N(E,{title:w.cardTitle},{default:r(()=>[a(k,{ref_key:"ruleFormRef",ref:D,model:l(e),rules:l(A),"label-width":"140px",class:"demo-ruleForm",size:"default","status-icon":""},{default:r(()=>[a(o,{label:"Наименование",prop:"name"},{default:r(()=>[a(u,{modelValue:l(e).name,"onUpdate:modelValue":t[0]||(t[0]=n=>l(e).name=n)},null,8,["modelValue"])]),_:1}),a(o,{label:"Ссылка",prop:"url"},{default:r(()=>[a(u,{modelValue:l(e).url,"onUpdate:modelValue":t[1]||(t[1]=n=>l(e).url=n)},null,8,["modelValue"])]),_:1}),a(o,{label:"Рекомендации",prop:"recText"},{default:r(()=>[a(u,{modelValue:l(e).recText,"onUpdate:modelValue":t[2]||(t[2]=n=>l(e).recText=n),type:"textarea"},null,8,["modelValue"])]),_:1}),a(o,{label:"Признаки",prop:"signs"},{default:r(()=>[a(s,{modelValue:l(e).signsName,"onUpdate:modelValue":t[3]||(t[3]=n=>l(e).signsName=n),multiple:"","collapse-tags":"","collapse-tags-tooltip":"","max-collapse-tags":2,placeholder:"Выберите признаки",style:{width:"100%"},onChange:B},{default:r(()=>[(f(!0),g(F,null,x(l(h),n=>(f(),N(i,{key:n.id,label:n.name,value:n.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),(f(!0),g(F,null,x(l(e).signsData,n=>(f(),g("div",{key:n.id,class:"constructorBlock"},[C("h3",null,P(n.name),1),(f(!0),g(F,null,x(n.signs,p=>(f(),g("div",{key:p.id},[n.fieldsType=="input"?(f(),g("div",se,[C("label",null,P(p.name),1),C("div",le,[a(s,{modelValue:l(e).conditions[p.id],"onUpdate:modelValue":c=>l(e).conditions[p.id]=c,placeholder:"Условие",style:{width:"140px"}},{default:r(()=>[(f(),g(F,null,x(O,c=>a(i,{key:c.name,value:c.name},null,8,["value"])),64))]),_:2},1032,["modelValue","onUpdate:modelValue"]),a(u,{modelValue:l(e).inputs[p.id],"onUpdate:modelValue":c=>l(e).inputs[p.id]=c,placeholder:p.placeholder},null,8,["modelValue","onUpdate:modelValue","placeholder"])])])):G("",!0),n.fieldsType!="input"?(f(),g("div",ne,[a(s,{modelValue:l(e).conditions[p.id],"onUpdate:modelValue":c=>l(e).conditions[p.id]=c,placeholder:"Условие",style:{width:"120px"}},{default:r(()=>[(f(),g(F,null,x(O,c=>a(i,{key:c.name,value:c.name},null,8,["value"])),64))]),_:2},1032,["modelValue","onUpdate:modelValue"]),a(b,{modelValue:l(e).selectors[n.id],"onUpdate:modelValue":c=>l(e).selectors[n.id]=c},{default:r(()=>[(f(),N(m,{label:p.name,key:p.name},{default:r(()=>[U(P(p.name),1)]),_:2},1032,["label"]))]),_:2},1032,["modelValue","onUpdate:modelValue"])])):G("",!0)]))),128))]))),128)),a(o,{style:{"margin-top":"30px"}},{default:r(()=>[a(_,{type:"primary",onClick:t[4]||(t[4]=n=>j(l(D)))},{default:r(()=>[U(" Сохранить товар ")]),_:1}),a(_,{onClick:t[5]||(t[5]=n=>$(l(D)))},{default:r(()=>[U("Очистить")]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title"])}}});export{he as _};

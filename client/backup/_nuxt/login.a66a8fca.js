import{E as g}from"./el-input.244f5504.js";import{E as y,a as k}from"./el-form.79ce874c.js";import{E as w}from"./el-button.2237a205.js";import"./base.b9103a6f.js";import{u as E}from"./fetch.ce4d6640.js";import{p as V,q as b,r as x,s as F,v as h,o as C,k as B,f as o,e as s,j as q,h as N}from"./entry.651c9841.js";import{u as R}from"./cookie.57d8faf2.js";import{n as T}from"./notify.1f6e89f6.js";import"./aria.f1e9b2c2.js";import"./index.bcd6fe96.js";import"./typescript.defaf979.js";import"./event.9519ab40.js";import"./_Uint8Array.aba76a1a.js";import"./_initCloneObject.888891a3.js";import"./el-notification.c48b69e5.js";const U={class:"loginFormWrapper"},D=N("h2",null,"Авторизация",-1),X=V({__name:"login",async setup(I){let r,i;const u=E(),p=b(),d=x(),c=R("accessToken");c.value&&([r,i]=F(()=>u.validateUser()),r=await r,i(),r)&&p.push("/admin/constructor");const t=h({email:"",password:""}),f=async a=>{if(!a)return;a.validate(l=>{if(l)console.log("submit!");else return console.log("error submit!"),!1});const e=await u.loginDasboard(t);e||T({message:"Неверный логин или пароль"}),e&&e.token&&(c.value=e.token,p.push("/admin/constructor"))};return(a,e)=>{const l=g,m=y,_=w,v=k;return C(),B("div",U,[D,o(v,{ref_key:"formRef",ref:d,model:t,"label-width":"100px",class:"demo-ruleForm"},{default:s(()=>[o(m,{label:"Email",prop:"email",rules:[{required:!0,message:"Email обязателен"}]},{default:s(()=>[o(l,{modelValue:t.email,"onUpdate:modelValue":e[0]||(e[0]=n=>t.email=n),type:"text",autocomplete:"off"},null,8,["modelValue"])]),_:1}),o(m,{label:"Пароль",prop:"password",rules:[{required:!0,message:"Пароль обязателен"}]},{default:s(()=>[o(l,{modelValue:t.password,"onUpdate:modelValue":e[1]||(e[1]=n=>t.password=n),type:"password",autocomplete:"off"},null,8,["modelValue"])]),_:1}),o(m,null,{default:s(()=>[o(_,{type:"primary",onClick:e[2]||(e[2]=n=>f(d.value))},{default:s(()=>[q("Логин")]),_:1})]),_:1})]),_:1},8,["model"])])}}});export{X as default};

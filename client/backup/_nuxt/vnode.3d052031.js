import{K as o,a7 as i}from"./entry.217baba9.js";const s='a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])',T=e=>getComputedStyle(e).position==="fixed"?!1:e.offsetParent!==null,f=e=>Array.from(e.querySelectorAll(s)).filter(r=>d(r)&&T(r)),d=e=>{if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.disabled)return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return!(e.type==="hidden"||e.type==="file");case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}},N=function(e,r,...t){let n;r.includes("mouse")||r.includes("click")?n="MouseEvents":r.includes("key")?n="KeyboardEvent":n="HTMLEvents";const E=document.createEvent(n);return E.initEvent(r,...t),e.dispatchEvent(E),e};var A=(e=>(e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL",e))(A||{});const u=e=>{const r=o(e)?e:[e],t=[];return r.forEach(n=>{var E;o(n)?t.push(...u(n)):i(n)&&o(n.children)?t.push(...u(n.children)):(t.push(n),i(n)&&((E=n.component)!=null&&E.subTree)&&t.push(...u(n.component.subTree)))}),t};export{A as P,u as f,f as o,N as t};

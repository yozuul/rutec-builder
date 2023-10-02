import{a3 as x,a4 as Q,t as R,a5 as W,a6 as V,a7 as j,a8 as T,N as B,a9 as D,aa as F}from"./index.9bc97ea7.js";import{w as _,r as L,a as U,W as M}from"./entry.92975b44.js";function v(e){var t;const n=Q(e);return(t=n==null?void 0:n.$el)!=null?t:n}const g=R?window:void 0;function b(...e){let t,n,s,c;if(j(e[0])||Array.isArray(e[0])?([n,s,c]=e,t=g):[t,n,s,c]=e,!t)return T;Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s]);const d=[],u=()=>{d.forEach(o=>o()),d.length=0},l=(o,f,r,a)=>(o.addEventListener(f,r,a),()=>o.removeEventListener(f,r,a)),p=_(()=>[v(t),Q(c)],([o,f])=>{u(),o&&d.push(...n.flatMap(r=>s.map(a=>l(o,r,a,f))))},{immediate:!0,flush:"post"}),m=()=>{p(),u()};return x(m),m}let I=!1;function re(e,t,n={}){const{window:s=g,ignore:c=[],capture:d=!0,detectIframe:u=!1}=n;if(!s)return;B&&!I&&(I=!0,Array.from(s.document.body.children).forEach(r=>r.addEventListener("click",T)));let l=!0;const p=r=>c.some(a=>{if(typeof a=="string")return Array.from(s.document.querySelectorAll(a)).some(i=>i===r.target||r.composedPath().includes(i));{const i=v(a);return i&&(r.target===i||r.composedPath().includes(i))}}),o=[b(s,"click",r=>{const a=v(e);if(!(!a||a===r.target||r.composedPath().includes(a))){if(r.detail===0&&(l=!p(r)),!l){l=!0;return}t(r)}},{passive:!0,capture:d}),b(s,"pointerdown",r=>{const a=v(e);a&&(l=!r.composedPath().includes(a)&&!p(r))},{passive:!0}),u&&b(s,"blur",r=>{var a;const i=v(e);((a=s.document.activeElement)==null?void 0:a.tagName)==="IFRAME"&&!(i!=null&&i.contains(s.document.activeElement))&&t(r)})].filter(Boolean);return()=>o.forEach(r=>r())}function z(e,t=!1){const n=L(),s=()=>n.value=!!e();return s(),W(s,t),n}function H(e){return JSON.parse(JSON.stringify(e))}const P=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},S="__vueuse_ssr_handlers__";P[S]=P[S]||{};var N=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable,k=(e,t)=>{var n={};for(var s in e)J.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&N)for(var s of N(e))t.indexOf(s)<0&&G.call(e,s)&&(n[s]=e[s]);return n};function se(e,t,n={}){const s=n,{window:c=g}=s,d=k(s,["window"]);let u;const l=z(()=>c&&"ResizeObserver"in c),p=()=>{u&&(u.disconnect(),u=void 0)},m=_(()=>v(e),f=>{p(),l.value&&c&&f&&(u=new ResizeObserver(t),u.observe(f,d))},{immediate:!0,flush:"post"}),o=()=>{p(),m()};return x(o),{isSupported:l,stop:o}}var A;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(A||(A={}));var q=Object.defineProperty,C=Object.getOwnPropertySymbols,K=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,$=(e,t,n)=>t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Y=(e,t)=>{for(var n in t||(t={}))K.call(t,n)&&$(e,n,t[n]);if(C)for(var n of C(t))X.call(t,n)&&$(e,n,t[n]);return e};const Z={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Y({linear:V},Z);function ae(e,t,n,s={}){var c,d,u;const{clone:l=!1,passive:p=!1,eventName:m,deep:o=!1,defaultValue:f}=s,r=M(),a=n||(r==null?void 0:r.emit)||((c=r==null?void 0:r.$emit)==null?void 0:c.bind(r))||((u=(d=r==null?void 0:r.proxy)==null?void 0:d.$emit)==null?void 0:u.bind(r==null?void 0:r.proxy));let i=m;t||(t="modelValue"),i=m||i||`update:${t.toString()}`;const y=O=>l?D(l)?l(O):H(O):O,h=()=>F(e[t])?y(e[t]):f;if(p){const O=h(),w=L(O);return _(()=>e[t],E=>w.value=y(E)),_(w,E=>{(E!==e[t]||o)&&a(i,E)},{deep:o}),w}else return U({get(){return h()},set(O){a(i,O)}})}function oe(e){return e==null}class ee extends Error{constructor(t){super(t),this.name="ElementPlusError"}}function ie(e,t){throw new ee(`[${e}] ${t}`)}function ue(e,t){}const le={tab:"Tab",enter:"Enter",space:"Space",left:"ArrowLeft",up:"ArrowUp",right:"ArrowRight",down:"ArrowDown",esc:"Escape",delete:"Delete",backspace:"Backspace",numpadEnter:"NumpadEnter",pageUp:"PageUp",pageDown:"PageDown",home:"Home",end:"End"};export{le as E,b as a,se as b,v as c,ue as d,oe as i,re as o,ie as t,ae as u};

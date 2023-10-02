import{C as Ee,i as G,M as Ae,S as Z,j as Le,p as k,k as j,D as Oe}from"./el-button.e2c9f36f.js";import{U as V,j as ee,f as te,a as ne,S as W,b as Pe}from"./_Uint8Array.b3c4ca0d.js";import{t as xe,a as X,b as Re}from"./aria.8124cea2.js";import{p as $,L as Ce,A as he,r as S,a as R,Q as He,S as re,o as z,c as Y,e as ye,a4 as ze,h as K,D as M,u as L,E as q,a5 as Me,a6 as Be,k as be,f as ae,F as Ne,w as se,Y as le,R as Ie,v as De,b as $e,ac as We,G as Ue,H as Fe,m as Ge,O as Xe}from"./entry.ffdc8223.js";import{b as Q,t as we,a as Ye,n as H,r as ie,D as Ke}from"./index.33489bae.js";import{_ as J,w as qe}from"./base.94fa8163.js";var Qe=/\s/;function Je(e){for(var t=e.length;t--&&Qe.test(e.charAt(t)););return t}var Ze=/^\s+/;function ke(e){return e&&e.slice(0,Je(e)+1).replace(Ze,"")}var oe=0/0,je=/^[-+]0x[0-9a-f]+$/i,Ve=/^0b[01]+$/i,et=/^0o[0-7]+$/i,tt=parseInt;function ue(e){if(typeof e=="number")return e;if(Ee(e))return oe;if(G(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=G(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=ke(e);var n=Ve.test(e);return n||et.test(e)?tt(e.slice(2),n?2:8):je.test(e)?oe:+e}var nt="__lodash_hash_undefined__";function rt(e){return this.__data__.set(e,nt),this}function at(e){return this.__data__.has(e)}function D(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new Ae;++t<n;)this.add(e[t])}D.prototype.add=D.prototype.push=rt;D.prototype.has=at;function st(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}function lt(e,t){return e.has(t)}var it=1,ot=2;function _e(e,t,n,r,u,a){var i=n&it,f=e.length,s=t.length;if(f!=s&&!(i&&s>f))return!1;var v=a.get(e),m=a.get(t);if(v&&m)return v==t&&m==e;var o=-1,d=!0,h=n&ot?new D:void 0;for(a.set(e,t),a.set(t,e);++o<f;){var p=e[o],y=t[o];if(r)var _=i?r(y,p,o,t,e,a):r(p,y,o,e,t,a);if(_!==void 0){if(_)continue;d=!1;break}if(h){if(!st(t,function(b,w){if(!lt(h,w)&&(p===b||u(p,b,n,r,a)))return h.push(w)})){d=!1;break}}else if(!(p===y||u(p,y,n,r,a))){d=!1;break}}return a.delete(e),a.delete(t),d}function ut(e){var t=-1,n=Array(e.size);return e.forEach(function(r,u){n[++t]=[u,r]}),n}function ft(e){var t=-1,n=Array(e.size);return e.forEach(function(r){n[++t]=r}),n}var ct=1,dt=2,vt="[object Boolean]",mt="[object Date]",pt="[object Error]",gt="[object Map]",ht="[object Number]",yt="[object RegExp]",bt="[object Set]",wt="[object String]",_t="[object Symbol]",St="[object ArrayBuffer]",Tt="[object DataView]",fe=Z?Z.prototype:void 0,U=fe?fe.valueOf:void 0;function Et(e,t,n,r,u,a,i){switch(n){case Tt:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case St:return!(e.byteLength!=t.byteLength||!a(new V(e),new V(t)));case vt:case mt:case ht:return Le(+e,+t);case pt:return e.name==t.name&&e.message==t.message;case yt:case wt:return e==t+"";case gt:var f=ut;case bt:var s=r&ct;if(f||(f=ft),e.size!=t.size&&!s)return!1;var v=i.get(e);if(v)return v==t;r|=dt,i.set(e,t);var m=_e(f(e),f(t),r,u,a,i);return i.delete(e),m;case _t:if(U)return U.call(e)==U.call(t)}return!1}var At=1,Lt=Object.prototype,Ot=Lt.hasOwnProperty;function Pt(e,t,n,r,u,a){var i=n&At,f=ee(e),s=f.length,v=ee(t),m=v.length;if(s!=m&&!i)return!1;for(var o=s;o--;){var d=f[o];if(!(i?d in t:Ot.call(t,d)))return!1}var h=a.get(e),p=a.get(t);if(h&&p)return h==t&&p==e;var y=!0;a.set(e,t),a.set(t,e);for(var _=i;++o<s;){d=f[o];var b=e[d],w=t[d];if(r)var O=i?r(w,b,d,t,e,a):r(b,w,d,e,t,a);if(!(O===void 0?b===w||u(b,w,n,r,a):O)){y=!1;break}_||(_=d=="constructor")}if(y&&!_){var E=e.constructor,T=t.constructor;E!=T&&"constructor"in e&&"constructor"in t&&!(typeof E=="function"&&E instanceof E&&typeof T=="function"&&T instanceof T)&&(y=!1)}return a.delete(e),a.delete(t),y}var xt=1,ce="[object Arguments]",de="[object Array]",I="[object Object]",Rt=Object.prototype,ve=Rt.hasOwnProperty;function Ct(e,t,n,r,u,a){var i=k(e),f=k(t),s=i?de:te(e),v=f?de:te(t);s=s==ce?I:s,v=v==ce?I:v;var m=s==I,o=v==I,d=s==v;if(d&&ne(e)){if(!ne(t))return!1;i=!0,m=!1}if(d&&!m)return a||(a=new W),i||Pe(e)?_e(e,t,n,r,u,a):Et(e,t,s,n,r,u,a);if(!(n&xt)){var h=m&&ve.call(e,"__wrapped__"),p=o&&ve.call(t,"__wrapped__");if(h||p){var y=h?e.value():e,_=p?t.value():t;return a||(a=new W),u(y,_,n,r,a)}}return d?(a||(a=new W),Pt(e,t,n,r,u,a)):!1}function Se(e,t,n,r,u){return e===t?!0:e==null||t==null||!j(e)&&!j(t)?e!==e&&t!==t:Ct(e,t,n,r,Se,u)}var Ht=function(){return Oe.Date.now()};const F=Ht;var zt="Expected a function",Mt=Math.max,Bt=Math.min;function nn(e,t,n){var r,u,a,i,f,s,v=0,m=!1,o=!1,d=!0;if(typeof e!="function")throw new TypeError(zt);t=ue(t)||0,G(n)&&(m=!!n.leading,o="maxWait"in n,a=o?Mt(ue(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d);function h(c){var l=r,g=u;return r=u=void 0,v=c,i=e.apply(g,l),i}function p(c){return v=c,f=setTimeout(b,t),m?h(c):i}function y(c){var l=c-s,g=c-v,A=t-l;return o?Bt(A,a-g):A}function _(c){var l=c-s,g=c-v;return s===void 0||l>=t||l<0||o&&g>=a}function b(){var c=F();if(_(c))return w(c);f=setTimeout(b,y(c))}function w(c){return f=void 0,d&&r?h(c):(r=u=void 0,i)}function O(){f!==void 0&&clearTimeout(f),v=0,r=s=u=f=void 0}function E(){return f===void 0?i:w(F())}function T(){var c=F(),l=_(c);if(r=arguments,u=this,s=c,l){if(f===void 0)return p(s);if(o)return clearTimeout(f),f=setTimeout(b,t),h(s)}return f===void 0&&(f=setTimeout(b,t)),i}return T.cancel=O,T.flush=E,T}function rn(e,t){return Se(e,t)}const x=4,Nt={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},It=({move:e,size:t,bar:n})=>({[n.size]:t,transform:`translate${n.axis}(${e}%)`}),Te=Symbol("scrollbarContextKey"),Dt=Q({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),$t="Thumb",Wt=$({__name:"thumb",props:Dt,setup(e){const t=e,n=Ce(Te),r=he("scrollbar");n||xe($t,"can not inject scrollbar context");const u=S(),a=S(),i=S({}),f=S(!1);let s=!1,v=!1,m=we?document.onselectstart:null;const o=R(()=>Nt[t.vertical?"vertical":"horizontal"]),d=R(()=>It({size:t.size,move:t.move,bar:o.value})),h=R(()=>u.value[o.value.offset]**2/n.wrapElement[o.value.scrollSize]/t.ratio/a.value[o.value.offset]),p=c=>{var l;if(c.stopPropagation(),c.ctrlKey||[1,2].includes(c.button))return;(l=window.getSelection())==null||l.removeAllRanges(),_(c);const g=c.currentTarget;g&&(i.value[o.value.axis]=g[o.value.offset]-(c[o.value.client]-g.getBoundingClientRect()[o.value.direction]))},y=c=>{if(!a.value||!u.value||!n.wrapElement)return;const l=Math.abs(c.target.getBoundingClientRect()[o.value.direction]-c[o.value.client]),g=a.value[o.value.offset]/2,A=(l-g)*100*h.value/u.value[o.value.offset];n.wrapElement[o.value.scroll]=A*n.wrapElement[o.value.scrollSize]/100},_=c=>{c.stopImmediatePropagation(),s=!0,document.addEventListener("mousemove",b),document.addEventListener("mouseup",w),m=document.onselectstart,document.onselectstart=()=>!1},b=c=>{if(!u.value||!a.value||s===!1)return;const l=i.value[o.value.axis];if(!l)return;const g=(u.value.getBoundingClientRect()[o.value.direction]-c[o.value.client])*-1,A=a.value[o.value.offset]-l,C=(g-A)*100*h.value/u.value[o.value.offset];n.wrapElement[o.value.scroll]=C*n.wrapElement[o.value.scrollSize]/100},w=()=>{s=!1,i.value[o.value.axis]=0,document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",w),T(),v&&(f.value=!1)},O=()=>{v=!1,f.value=!!t.size},E=()=>{v=!0,f.value=s};He(()=>{T(),document.removeEventListener("mouseup",w)});const T=()=>{document.onselectstart!==m&&(document.onselectstart=m)};return X(re(n,"scrollbarElement"),"mousemove",O),X(re(n,"scrollbarElement"),"mouseleave",E),(c,l)=>(z(),Y(Be,{name:L(r).b("fade"),persisted:""},{default:ye(()=>[ze(K("div",{ref_key:"instance",ref:u,class:M([L(r).e("bar"),L(r).is(L(o).key)]),onMousedown:y},[K("div",{ref_key:"thumb",ref:a,class:M(L(r).e("thumb")),style:q(L(d)),onMousedown:p},null,38)],34),[[Me,c.always||f.value]])]),_:1},8,["name"]))}});var me=J(Wt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);const Ut=Q({always:{type:Boolean,default:!0},width:String,height:String,ratioX:{type:Number,default:1},ratioY:{type:Number,default:1}}),Ft=$({__name:"bar",props:Ut,setup(e,{expose:t}){const n=e,r=S(0),u=S(0);return t({handleScroll:i=>{if(i){const f=i.offsetHeight-x,s=i.offsetWidth-x;u.value=i.scrollTop*100/f*n.ratioY,r.value=i.scrollLeft*100/s*n.ratioX}}}),(i,f)=>(z(),be(Ne,null,[ae(me,{move:r.value,ratio:i.ratioX,size:i.width,always:i.always},null,8,["move","ratio","size","always"]),ae(me,{move:u.value,ratio:i.ratioY,size:i.height,vertical:"",always:i.always},null,8,["move","ratio","size","always"])],64))}});var Gt=J(Ft,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);const Xt=Q({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:Ye([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20}}),Yt={scroll:({scrollTop:e,scrollLeft:t})=>[e,t].every(H)},Kt="ElScrollbar",qt=$({name:Kt}),Qt=$({...qt,props:Xt,emits:Yt,setup(e,{expose:t,emit:n}){const r=e,u=he("scrollbar");let a,i;const f=S(),s=S(),v=S(),m=S("0"),o=S("0"),d=S(),h=S(1),p=S(1),y=R(()=>{const l={};return r.height&&(l.height=ie(r.height)),r.maxHeight&&(l.maxHeight=ie(r.maxHeight)),[r.wrapStyle,l]}),_=R(()=>[r.wrapClass,u.e("wrap"),{[u.em("wrap","hidden-default")]:!r.native}]),b=R(()=>[u.e("view"),r.viewClass]),w=()=>{var l;s.value&&((l=d.value)==null||l.handleScroll(s.value),n("scroll",{scrollTop:s.value.scrollTop,scrollLeft:s.value.scrollLeft}))};function O(l,g){Xe(l)?s.value.scrollTo(l):H(l)&&H(g)&&s.value.scrollTo(l,g)}const E=l=>{H(l)&&(s.value.scrollTop=l)},T=l=>{H(l)&&(s.value.scrollLeft=l)},c=()=>{if(!s.value)return;const l=s.value.offsetHeight-x,g=s.value.offsetWidth-x,A=l**2/s.value.scrollHeight,C=g**2/s.value.scrollWidth,B=Math.max(A,r.minSize),N=Math.max(C,r.minSize);h.value=A/(l-A)/(B/(l-B)),p.value=C/(g-C)/(N/(g-N)),o.value=B+x<l?`${B}px`:"",m.value=N+x<g?`${N}px`:""};return se(()=>r.noresize,l=>{l?(a==null||a(),i==null||i()):({stop:a}=Re(v,c),i=X("resize",c))},{immediate:!0}),se(()=>[r.maxHeight,r.height],()=>{r.native||le(()=>{var l;c(),s.value&&((l=d.value)==null||l.handleScroll(s.value))})}),Ie(Te,De({scrollbarElement:f,wrapElement:s})),$e(()=>{r.native||le(()=>{c()})}),We(()=>c()),t({wrapRef:s,update:c,scrollTo:O,setScrollTop:E,setScrollLeft:T,handleScroll:w}),(l,g)=>(z(),be("div",{ref_key:"scrollbarRef",ref:f,class:M(L(u).b())},[K("div",{ref_key:"wrapRef",ref:s,class:M(L(_)),style:q(L(y)),onScroll:w},[(z(),Y(Fe(l.tag),{ref_key:"resizeRef",ref:v,class:M(L(b)),style:q(l.viewStyle)},{default:ye(()=>[Ue(l.$slots,"default")]),_:3},8,["class","style"]))],38),l.native?Ge("v-if",!0):(z(),Y(Gt,{key:0,ref_key:"barRef",ref:d,height:o.value,width:m.value,always:l.always,"ratio-x":p.value,"ratio-y":h.value},null,8,["height","width","always","ratio-x","ratio-y"]))],2))}});var Jt=J(Qt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);const an=qe(Jt),P=new Map;let pe;we&&(document.addEventListener("mousedown",e=>pe=e),document.addEventListener("mouseup",e=>{for(const t of P.values())for(const{documentHandler:n}of t)n(e,pe)}));function ge(e,t){let n=[];return Array.isArray(t.arg)?n=t.arg:Ke(t.arg)&&n.push(t.arg),function(r,u){const a=t.instance.popperRef,i=r.target,f=u==null?void 0:u.target,s=!t||!t.instance,v=!i||!f,m=e.contains(i)||e.contains(f),o=e===i,d=n.length&&n.some(p=>p==null?void 0:p.contains(i))||n.length&&n.includes(f),h=a&&(a.contains(i)||a.contains(f));s||v||m||o||d||h||t.value(r,u)}}const sn={beforeMount(e,t){P.has(e)||P.set(e,[]),P.get(e).push({documentHandler:ge(e,t),bindingFn:t.value})},updated(e,t){P.has(e)||P.set(e,[]);const n=P.get(e),r=n.findIndex(a=>a.bindingFn===t.oldValue),u={documentHandler:ge(e,t),bindingFn:t.value};r>=0?n.splice(r,1,u):n.push(u)},unmounted(e){P.delete(e)}};export{sn as C,an as E,Se as b,nn as d,rn as i};

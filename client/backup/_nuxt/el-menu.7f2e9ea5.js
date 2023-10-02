import{E as S,t as Z,b as Oe,i as Ie}from"./aria.e58ff6b3.js";import{y as G,A as re,v as Ne,X as Ae,b as ve,j as U,u as ze,F as Le,p as He,E as Te,J as xe,a as de,a2 as De}from"./index.5fa32fd5.js";import{t as J,f as We}from"./vnode.9fcf83e4.js";import{p as L,A as w,o as z,c as fe,e as K,G as B,V as ke,aB as je,u as Re,a6 as Se,a as p,L as ee,r as x,v as he,w as Q,R as pe,b as be,Q as we,X as b,C as W,a4 as Fe,a5 as Ve,F as ge,W as Me,z as qe,O as Ge,Y as Ue,S as Xe,a3 as Je,k as te,h as me,D as ne,j as Qe,t as Ye}from"./entry.fc15d232.js";import{_ as oe,w as Ze,b as ye}from"./base.77fa367f.js";import{E as Ee}from"./el-popper.dbcacd56.js";import{m as Ke}from"./typescript.defaf979.js";const et=L({name:"ElCollapseTransition"}),tt=L({...et,setup(e){const o=w("collapse-transition"),n={beforeEnter(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0},enter(t){t.dataset.oldOverflow=t.style.overflow,t.scrollHeight!==0?(t.style.maxHeight=`${t.scrollHeight}px`,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom):(t.style.maxHeight=0,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom),t.style.overflow="hidden"},afterEnter(t){t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow},beforeLeave(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.maxHeight=`${t.scrollHeight}px`,t.style.overflow="hidden"},leave(t){t.scrollHeight!==0&&(t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0)},afterLeave(t){t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom}};return(t,r)=>(z(),fe(Se,ke({name:Re(o).b()},je(n)),{default:K(()=>[B(t.$slots,"default")]),_:3},16,["name"]))}});var Y=oe(tt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);Y.install=e=>{e.component(Y.name,Y)};const nt=Y;let ot=class{constructor(o,n){this.parent=o,this.domNode=n,this.subIndex=0,this.subIndex=0,this.init()}init(){this.subMenuItems=this.domNode.querySelectorAll("li"),this.addListeners()}gotoSubIndex(o){o===this.subMenuItems.length?o=0:o<0&&(o=this.subMenuItems.length-1),this.subMenuItems[o].focus(),this.subIndex=o}addListeners(){const o=this.parent.domNode;Array.prototype.forEach.call(this.subMenuItems,n=>{n.addEventListener("keydown",t=>{let r=!1;switch(t.code){case S.down:{this.gotoSubIndex(this.subIndex+1),r=!0;break}case S.up:{this.gotoSubIndex(this.subIndex-1),r=!0;break}case S.tab:{J(o,"mouseleave");break}case S.enter:case S.space:{r=!0,t.currentTarget.click();break}}return r&&(t.preventDefault(),t.stopPropagation()),!1})})}},at=class{constructor(o,n){this.domNode=o,this.submenu=null,this.submenu=null,this.init(n)}init(o){this.domNode.setAttribute("tabindex","0");const n=this.domNode.querySelector(`.${o}-menu`);n&&(this.submenu=new ot(this,n)),this.addListeners()}addListeners(){this.domNode.addEventListener("keydown",o=>{let n=!1;switch(o.code){case S.down:{J(o.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(0),n=!0;break}case S.up:{J(o.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(this.submenu.subMenuItems.length-1),n=!0;break}case S.tab:{J(o.currentTarget,"mouseleave");break}case S.enter:case S.space:{n=!0,o.currentTarget.click();break}}n&&o.preventDefault()})}},st=class{constructor(o,n){this.domNode=o,this.init(n)}init(o){const n=this.domNode.childNodes;Array.from(n).forEach(t=>{t.nodeType===1&&new at(t,o)})}};const lt=L({name:"ElMenuCollapseTransition",setup(){const e=w("menu");return{listeners:{onBeforeEnter:n=>n.style.opacity="0.2",onEnter(n,t){G(n,`${e.namespace.value}-opacity-transition`),n.style.opacity="1",t()},onAfterEnter(n){re(n,`${e.namespace.value}-opacity-transition`),n.style.opacity=""},onBeforeLeave(n){n.dataset||(n.dataset={}),Ne(n,e.m("collapse"))?(re(n,e.m("collapse")),n.dataset.oldOverflow=n.style.overflow,n.dataset.scrollWidth=n.clientWidth.toString(),G(n,e.m("collapse"))):(G(n,e.m("collapse")),n.dataset.oldOverflow=n.style.overflow,n.dataset.scrollWidth=n.clientWidth.toString(),re(n,e.m("collapse"))),n.style.width=`${n.scrollWidth}px`,n.style.overflow="hidden"},onLeave(n){G(n,"horizontal-collapse-transition"),n.style.width=`${n.dataset.scrollWidth}px`}}}}});function ut(e,o,n,t,r,I){return z(),fe(Se,ke({mode:"out-in"},e.listeners),{default:K(()=>[B(e.$slots,"default")]),_:3},16)}var rt=oe(lt,[["render",ut],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-collapse-transition.vue"]]);function $e(e,o){const n=p(()=>{let r=e.parent;const I=[o.value];for(;r.type.name!=="ElMenu";)r.props.index&&I.unshift(r.props.index),r=r.parent;return I});return{parentMenu:p(()=>{let r=e.parent;for(;r&&!["ElMenu","ElSubMenu"].includes(r.type.name);)r=r.parent;return r}),indexPath:n}}function it(e){return p(()=>{const n=e.backgroundColor;return n?new Ae(n).shade(20).toString():""})}const _e=(e,o)=>{const n=w("menu");return p(()=>n.cssVarBlock({"text-color":e.textColor||"","hover-text-color":e.textColor||"","bg-color":e.backgroundColor||"","hover-bg-color":it(e).value||"","active-color":e.activeTextColor||"",level:`${o}`}))},ct=ve({index:{type:String,required:!0},showTimeout:{type:Number,default:300},hideTimeout:{type:Number,default:300},popperClass:String,disabled:Boolean,popperAppendToBody:{type:Boolean,default:void 0},teleported:{type:Boolean,default:void 0},popperOffset:{type:Number,default:6},expandCloseIcon:{type:U},expandOpenIcon:{type:U},collapseCloseIcon:{type:U},collapseOpenIcon:{type:U}}),X="ElSubMenu";var Ce=L({name:X,props:ct,setup(e,{slots:o,expose:n}){ze({from:"popper-append-to-body",replacement:"teleported",scope:X,version:"2.3.0",ref:"https://element-plus.org/en-US/component/menu.html#submenu-attributes"},p(()=>e.popperAppendToBody!==void 0));const t=Me(),{indexPath:r,parentMenu:I}=$e(t,p(()=>e.index)),c=w("menu"),f=w("sub-menu"),l=ee("rootMenu");l||Z(X,"can not inject root menu");const m=ee(`subMenu:${I.value.uid}`);m||Z(X,"can not inject sub menu");const v=x({}),g=x({});let C;const _=x(!1),ae=x(),q=x(null),O=p(()=>a.value==="horizontal"&&N.value?"bottom-start":"right-start"),H=p(()=>a.value==="horizontal"&&N.value||a.value==="vertical"&&!l.props.collapse?e.expandCloseIcon&&e.expandOpenIcon?k.value?e.expandOpenIcon:e.expandCloseIcon:Le:e.collapseCloseIcon&&e.collapseOpenIcon?k.value?e.collapseOpenIcon:e.collapseCloseIcon:He),N=p(()=>m.level===0),j=p(()=>{var i;const d=(i=e.teleported)!=null?i:e.popperAppendToBody;return d===void 0?N.value:d}),se=p(()=>l.props.collapse?`${c.namespace.value}-zoom-in-left`:`${c.namespace.value}-zoom-in-top`),le=p(()=>a.value==="horizontal"&&N.value?["bottom-start","bottom-end","top-start","top-end","right-start","left-start"]:["right-start","left-start","bottom-start","bottom-end","top-start","top-end"]),k=p(()=>l.openedMenus.includes(e.index)),A=p(()=>{let i=!1;return Object.values(v.value).forEach(d=>{d.active&&(i=!0)}),Object.values(g.value).forEach(d=>{d.active&&(i=!0)}),i}),R=p(()=>l.props.backgroundColor||""),F=p(()=>l.props.activeTextColor||""),D=p(()=>l.props.textColor||""),a=p(()=>l.props.mode),s=he({index:e.index,indexPath:r,active:A}),u=_e(l.props,m.level+1),M=p(()=>a.value!=="horizontal"?{color:D.value}:{borderBottomColor:A.value?l.props.activeTextColor?F.value:"":"transparent",color:A.value?F.value:D.value}),h=()=>{var i,d,y;return(y=(d=(i=q.value)==null?void 0:i.popperRef)==null?void 0:d.popperInstanceRef)==null?void 0:y.destroy()},E=i=>{i||h()},P=()=>{l.props.menuTrigger==="hover"&&l.props.mode==="horizontal"||l.props.collapse&&l.props.mode==="vertical"||e.disabled||l.handleSubMenuClick({index:e.index,indexPath:r.value,active:A.value})},$=(i,d=e.showTimeout)=>{var y;i.type!=="focus"&&(l.props.menuTrigger==="click"&&l.props.mode==="horizontal"||!l.props.collapse&&l.props.mode==="vertical"||e.disabled||(m.mouseInChild.value=!0,C==null||C(),{stop:C}=xe(()=>{l.openMenu(e.index,r.value)},d),j.value&&((y=I.value.vnode.el)==null||y.dispatchEvent(new MouseEvent("mouseenter")))))},T=(i=!1)=>{var d,y;l.props.menuTrigger==="click"&&l.props.mode==="horizontal"||!l.props.collapse&&l.props.mode==="vertical"||(C==null||C(),m.mouseInChild.value=!1,{stop:C}=xe(()=>!_.value&&l.closeMenu(e.index,r.value),e.hideTimeout),j.value&&i&&((d=t.parent)==null?void 0:d.type.name)==="ElSubMenu"&&((y=m.handleMouseleave)==null||y.call(m,!0)))};Q(()=>l.props.collapse,i=>E(!!i));{const i=y=>{g.value[y.index]=y},d=y=>{delete g.value[y.index]};pe(`subMenu:${t.uid}`,{addSubMenu:i,removeSubMenu:d,handleMouseleave:T,mouseInChild:_,level:m.level+1})}return n({opened:k}),be(()=>{l.addSubMenu(s),m.addSubMenu(s)}),we(()=>{m.removeSubMenu(s),l.removeSubMenu(s)}),()=>{var i;const d=[(i=o.title)==null?void 0:i.call(o),b(Te,{class:f.e("icon-arrow"),style:{transform:k.value?e.expandCloseIcon&&e.expandOpenIcon||e.collapseCloseIcon&&e.collapseOpenIcon&&l.props.collapse?"none":"rotateZ(180deg)":"none"}},{default:()=>W(H.value)?b(t.appContext.components[H.value]):b(H.value)})],y=l.isMenuPopup?b(Ee,{ref:q,visible:k.value,effect:"light",pure:!0,offset:e.popperOffset,showArrow:!1,persistent:!0,popperClass:e.popperClass,placement:O.value,teleported:j.value,fallbackPlacements:le.value,transition:se.value,gpuAcceleration:!1},{content:()=>{var V;return b("div",{class:[c.m(a.value),c.m("popup-container"),e.popperClass],onMouseenter:ue=>$(ue,100),onMouseleave:()=>T(!0),onFocus:ue=>$(ue,100)},[b("ul",{class:[c.b(),c.m("popup"),c.m(`popup-${O.value}`)],style:u.value},[(V=o.default)==null?void 0:V.call(o)])])},default:()=>b("div",{class:f.e("title"),style:[M.value,{backgroundColor:R.value}],onClick:P},d)}):b(ge,{},[b("div",{class:f.e("title"),style:[M.value,{backgroundColor:R.value}],ref:ae,onClick:P},d),b(nt,{},{default:()=>{var V;return Fe(b("ul",{role:"menu",class:[c.b(),c.m("inline")],style:u.value},[(V=o.default)==null?void 0:V.call(o)]),[[Ve,k.value]])}})]);return b("li",{class:[f.b(),f.is("active",A.value),f.is("opened",k.value),f.is("disabled",e.disabled)],role:"menuitem",ariaHaspopup:!0,ariaExpanded:k.value,onMouseenter:$,onMouseleave:()=>T(!0),onFocus:$},[y])}}});const dt=ve({mode:{type:String,values:["horizontal","vertical"],default:"vertical"},defaultActive:{type:String,default:""},defaultOpeneds:{type:de(Array),default:()=>Ke([])},uniqueOpened:Boolean,router:Boolean,menuTrigger:{type:String,values:["hover","click"],default:"hover"},collapse:Boolean,backgroundColor:String,textColor:String,activeTextColor:String,collapseTransition:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0},popperEffect:{type:String,values:["dark","light"],default:"dark"}}),ie=e=>Array.isArray(e)&&e.every(o=>W(o)),pt={close:(e,o)=>W(e)&&ie(o),open:(e,o)=>W(e)&&ie(o),select:(e,o,n,t)=>W(e)&&ie(o)&&Ge(n)&&(t===void 0||t instanceof Promise)};var mt=L({name:"ElMenu",props:dt,emits:pt,setup(e,{emit:o,slots:n,expose:t}){const r=Me(),I=r.appContext.config.globalProperties.$router,c=x(),f=w("menu"),l=w("sub-menu"),m=x(-1),v=x(e.defaultOpeneds&&!e.collapse?e.defaultOpeneds.slice(0):[]),g=x(e.defaultActive),C=x({}),_=x({}),ae=p(()=>e.mode==="horizontal"||e.mode==="vertical"&&e.collapse),q=()=>{const a=g.value&&C.value[g.value];if(!a||e.mode==="horizontal"||e.collapse)return;a.indexPath.forEach(u=>{const M=_.value[u];M&&O(u,M.indexPath)})},O=(a,s)=>{v.value.includes(a)||(e.uniqueOpened&&(v.value=v.value.filter(u=>s.includes(u))),v.value.push(a),o("open",a,s))},H=a=>{const s=v.value.indexOf(a);s!==-1&&v.value.splice(s,1)},N=(a,s)=>{H(a),o("close",a,s)},j=({index:a,indexPath:s})=>{v.value.includes(a)?N(a,s):O(a,s)},se=a=>{(e.mode==="horizontal"||e.collapse)&&(v.value=[]);const{index:s,indexPath:u}=a;if(!(Ie(s)||Ie(u)))if(e.router&&I){const M=a.route||s,h=I.push(M).then(E=>(E||(g.value=s),E));o("select",s,u,{index:s,indexPath:u,route:M},h)}else g.value=s,o("select",s,u,{index:s,indexPath:u})},le=a=>{const s=C.value,u=s[a]||g.value&&s[g.value]||s[e.defaultActive];u?g.value=u.index:g.value=a},k=()=>{var a,s;if(!c.value)return-1;const u=Array.from((s=(a=c.value)==null?void 0:a.childNodes)!=null?s:[]).filter(i=>i.nodeName!=="#text"||i.nodeValue),M=64,h=Number.parseInt(getComputedStyle(c.value).paddingLeft,10),E=Number.parseInt(getComputedStyle(c.value).paddingRight,10),P=c.value.clientWidth-h-E;let $=0,T=0;return u.forEach((i,d)=>{$+=i.offsetWidth||0,$<=P-M&&(T=d+1)}),T===u.length?-1:T},A=(a,s=33.34)=>{let u;return()=>{u&&clearTimeout(u),u=setTimeout(()=>{a()},s)}};let R=!0;const F=()=>{const a=()=>{m.value=-1,Ue(()=>{m.value=k()})};R?a():A(a)(),R=!1};Q(()=>e.defaultActive,a=>{C.value[a]||(g.value=""),le(a)}),Q(()=>e.collapse,a=>{a&&(v.value=[])}),Q(C.value,q);let D;qe(()=>{e.mode==="horizontal"&&e.ellipsis?D=Oe(c,F).stop:D==null||D()});{const a=h=>{_.value[h.index]=h},s=h=>{delete _.value[h.index]};pe("rootMenu",he({props:e,openedMenus:v,items:C,subMenus:_,activeIndex:g,isMenuPopup:ae,addMenuItem:h=>{C.value[h.index]=h},removeMenuItem:h=>{delete C.value[h.index]},addSubMenu:a,removeSubMenu:s,openMenu:O,closeMenu:N,handleMenuItemClick:se,handleSubMenuClick:j})),pe(`subMenu:${r.uid}`,{addSubMenu:a,removeSubMenu:s,mouseInChild:x(!1),level:0})}return be(()=>{e.mode==="horizontal"&&new st(r.vnode.el,f.namespace.value)}),t({open:s=>{const{indexPath:u}=_.value[s];u.forEach(M=>O(M,u))},close:H,handleResize:F}),()=>{var a,s;let u=(s=(a=n.default)==null?void 0:a.call(n))!=null?s:[];const M=[];if(e.mode==="horizontal"&&c.value){const P=We(u),$=m.value===-1?P:P.slice(0,m.value),T=m.value===-1?[]:P.slice(m.value);T!=null&&T.length&&e.ellipsis&&(u=$,M.push(b(Ce,{index:"sub-menu-more",class:l.e("hide-arrow")},{title:()=>b(Te,{class:l.e("icon-more")},{default:()=>b(De)}),default:()=>T})))}const h=_e(e,0),E=b("ul",{key:String(e.collapse),role:"menubar",ref:c,style:h.value,class:{[f.b()]:!0,[f.m(e.mode)]:!0,[f.m("collapse")]:e.collapse}},[...u,...M]);return e.collapseTransition&&e.mode==="vertical"?b(rt,()=>E):E}}});const vt=ve({index:{type:de([String,null]),default:null},route:{type:de([String,Object])},disabled:Boolean}),ft={click:e=>W(e.index)&&Array.isArray(e.indexPath)},ce="ElMenuItem",ht=L({name:ce,components:{ElTooltip:Ee},props:vt,emits:ft,setup(e,{emit:o}){const n=Me(),t=ee("rootMenu"),r=w("menu"),I=w("menu-item");t||Z(ce,"can not inject root menu");const{parentMenu:c,indexPath:f}=$e(n,Xe(e,"index")),l=ee(`subMenu:${c.value.uid}`);l||Z(ce,"can not inject sub menu");const m=p(()=>e.index===t.activeIndex),v=he({index:e.index,indexPath:f,active:m}),g=()=>{e.disabled||(t.handleMenuItemClick({index:e.index,indexPath:f.value,route:e.route}),o("click",v))};return be(()=>{l.addSubMenu(v),t.addMenuItem(v)}),we(()=>{l.removeSubMenu(v),t.removeMenuItem(v)}),{parentMenu:c,rootMenu:t,active:m,nsMenu:r,nsMenuItem:I,handleClick:g}}});function bt(e,o,n,t,r,I){const c=Je("el-tooltip");return z(),te("li",{class:ne([e.nsMenuItem.b(),e.nsMenuItem.is("active",e.active),e.nsMenuItem.is("disabled",e.disabled)]),role:"menuitem",tabindex:"-1",onClick:o[0]||(o[0]=(...f)=>e.handleClick&&e.handleClick(...f))},[e.parentMenu.type.name==="ElMenu"&&e.rootMenu.props.collapse&&e.$slots.title?(z(),fe(c,{key:0,effect:e.rootMenu.props.popperEffect,placement:"right","fallback-placements":["left"],persistent:""},{content:K(()=>[B(e.$slots,"title")]),default:K(()=>[me("div",{class:ne(e.nsMenu.be("tooltip","trigger"))},[B(e.$slots,"default")],2)]),_:3},8,["effect"])):(z(),te(ge,{key:1},[B(e.$slots,"default"),B(e.$slots,"title")],64))],2)}var Pe=oe(ht,[["render",bt],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item.vue"]]);const gt={title:String},Mt="ElMenuItemGroup",yt=L({name:Mt,props:gt,setup(){return{ns:w("menu-item-group")}}});function Ct(e,o,n,t,r,I){return z(),te("li",{class:ne(e.ns.b())},[me("div",{class:ne(e.ns.e("title"))},[e.$slots.title?B(e.$slots,"title",{key:1}):(z(),te(ge,{key:0},[Qe(Ye(e.title),1)],64))],2),me("ul",null,[B(e.$slots,"default")])],2)}var Be=oe(yt,[["render",Ct],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item-group.vue"]]);const Bt=Ze(mt,{MenuItem:Pe,MenuItemGroup:Be,SubMenu:Ce}),Ot=ye(Pe);ye(Be);ye(Ce);export{Ot as E,Bt as a};

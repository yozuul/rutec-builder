import{t as c}from"./index.58200fbe.js";import{c as h}from"./el-button.d6c706ff.js";let r;const m=o=>{var s;if(!c)return 0;if(r!==void 0)return r;const t=document.createElement("div");t.className=`${o}-scrollbar__wrap`,t.style.visibility="hidden",t.style.width="100px",t.style.position="absolute",t.style.top="-9999px",document.body.appendChild(t);const e=t.offsetWidth;t.style.overflow="scroll";const l=document.createElement("div");l.style.width="100%",t.appendChild(l);const i=l.offsetWidth;return(s=t.parentNode)==null||s.removeChild(t),r=e-i,r};function v(o,s){if(!c)return;if(!s){o.scrollTop=0;return}const t=[];let e=s.offsetParent;for(;e!==null&&o!==e&&o.contains(e);)t.push(e),e=e.offsetParent;const l=s.offsetTop+t.reduce((p,d)=>p+d.offsetTop,0),i=l+s.offsetHeight,n=o.scrollTop,f=n+o.clientHeight;l<n?o.scrollTop=l:i>f&&(o.scrollTop=i-o.clientHeight)}const w=o=>["",...h].includes(o);export{m as g,w as i,v as s};

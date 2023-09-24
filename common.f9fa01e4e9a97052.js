"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{9003:(y,v,i)=>{i.d(v,{c:()=>r});var f=i(8423),d=i(7150),u=i(9203);const r=(s,o)=>{let e,t;const c=(a,p,w)=>{if(typeof document>"u")return;const E=document.elementFromPoint(a,p);E&&o(E)?E!==e&&(n(),l(E,w)):n()},l=(a,p)=>{e=a,t||(t=e);const w=e;(0,f.w)(()=>w.classList.add("ion-activated")),p()},n=(a=!1)=>{if(!e)return;const p=e;(0,f.w)(()=>p.classList.remove("ion-activated")),a&&t!==e&&e.click(),e=void 0};return(0,u.createGesture)({el:s,gestureName:"buttonActiveDrag",threshold:0,onStart:a=>c(a.currentX,a.currentY,d.a),onMove:a=>c(a.currentX,a.currentY,d.b),onEnd:()=>{n(!0),(0,d.h)(),t=void 0}})}},4874:(y,v,i)=>{i.d(v,{g:()=>d});var f=i(6225);const d=()=>{if(void 0!==f.w)return f.w.Capacitor}},5149:(y,v,i)=>{i.d(v,{g:()=>f});const f=(o,e,t,c,l)=>u(o[1],e[1],t[1],c[1],l).map(n=>d(o[0],e[0],t[0],c[0],n)),d=(o,e,t,c,l)=>l*(3*e*Math.pow(l-1,2)+l*(-3*t*l+3*t+c*l))-o*Math.pow(l-1,3),u=(o,e,t,c,l)=>s((c-=l)-3*(t-=l)+3*(e-=l)-(o-=l),3*t-6*e+3*o,3*e-3*o,o).filter(a=>a>=0&&a<=1),s=(o,e,t,c)=>{if(0===o)return((o,e,t)=>{const c=e*e-4*o*t;return c<0?[]:[(-e+Math.sqrt(c))/(2*o),(-e-Math.sqrt(c))/(2*o)]})(e,t,c);const l=(3*(t/=o)-(e/=o)*e)/3,n=(2*e*e*e-9*e*t+27*(c/=o))/27;if(0===l)return[Math.pow(-n,1/3)];if(0===n)return[Math.sqrt(-l),-Math.sqrt(-l)];const a=Math.pow(n/2,2)+Math.pow(l/3,3);if(0===a)return[Math.pow(n/2,.5)-e/3];if(a>0)return[Math.pow(-n/2+Math.sqrt(a),1/3)-Math.pow(n/2+Math.sqrt(a),1/3)-e/3];const p=Math.sqrt(Math.pow(-l/3,3)),w=Math.acos(-n/(2*Math.sqrt(Math.pow(-l/3,3)))),E=2*Math.pow(p,1/3);return[E*Math.cos(w/3)-e/3,E*Math.cos((w+2*Math.PI)/3)-e/3,E*Math.cos((w+4*Math.PI)/3)-e/3]}},5085:(y,v,i)=>{i.d(v,{i:()=>f});const f=d=>d&&""!==d.dir?"rtl"===d.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},2779:(y,v,i)=>{i.r(v),i.d(v,{startFocusVisible:()=>r});const f="ion-focused",u=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=s=>{let o=[],e=!0;const t=s?s.shadowRoot:document,c=s||document.body,l=M=>{o.forEach(g=>g.classList.remove(f)),M.forEach(g=>g.classList.add(f)),o=M},n=()=>{e=!1,l([])},a=M=>{e=u.includes(M.key),e||l([])},p=M=>{if(e&&void 0!==M.composedPath){const g=M.composedPath().filter(m=>!!m.classList&&m.classList.contains("ion-focusable"));l(g)}},w=()=>{t.activeElement===c&&l([])};return t.addEventListener("keydown",a),t.addEventListener("focusin",p),t.addEventListener("focusout",w),t.addEventListener("touchstart",n,{passive:!0}),t.addEventListener("mousedown",n),{destroy:()=>{t.removeEventListener("keydown",a),t.removeEventListener("focusin",p),t.removeEventListener("focusout",w),t.removeEventListener("touchstart",n),t.removeEventListener("mousedown",n)},setFocus:l}}},5487:(y,v,i)=>{i.d(v,{c:()=>d});var f=i(839);const d=o=>{const e=o;let t;return{hasLegacyControl:()=>{if(void 0===t){const l=void 0!==e.label||u(e),n=e.hasAttribute("aria-label")||e.hasAttribute("aria-labelledby")&&null===e.shadowRoot,a=(0,f.h)(e);t=!0===e.legacy||!l&&!n&&null!==a}return t}}},u=o=>null!==o.shadowRoot&&!!(r.includes(o.tagName)&&null!==o.querySelector('[slot="label"]')||s.includes(o.tagName)&&""!==o.textContent),r=["ION-RANGE"],s=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},7150:(y,v,i)=>{i.d(v,{I:()=>d,a:()=>e,b:()=>t,c:()=>o,d:()=>l,h:()=>c});var f=i(4874),d=function(n){return n.Heavy="HEAVY",n.Medium="MEDIUM",n.Light="LIGHT",n}(d||{});const r={getEngine(){const n=window.TapticEngine;if(n)return n;const a=(0,f.g)();return null!=a&&a.isPluginAvailable("Haptics")?a.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const a=(0,f.g)();return"web"!==(null==a?void 0:a.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,f.g)(),impact(n){const a=this.getEngine();if(!a)return;const p=this.isCapacitor()?n.style:n.style.toLowerCase();a.impact({style:p})},notification(n){const a=this.getEngine();if(!a)return;const p=this.isCapacitor()?n.type:n.type.toLowerCase();a.notification({type:p})},selection(){const n=this.isCapacitor()?d.Light:"light";this.impact({style:n})},selectionStart(){const n=this.getEngine();n&&(this.isCapacitor()?n.selectionStart():n.gestureSelectionStart())},selectionChanged(){const n=this.getEngine();n&&(this.isCapacitor()?n.selectionChanged():n.gestureSelectionChanged())},selectionEnd(){const n=this.getEngine();n&&(this.isCapacitor()?n.selectionEnd():n.gestureSelectionEnd())}},s=()=>r.available(),o=()=>{s()&&r.selection()},e=()=>{s()&&r.selectionStart()},t=()=>{s()&&r.selectionChanged()},c=()=>{s()&&r.selectionEnd()},l=n=>{s()&&r.impact(n)}},8360:(y,v,i)=>{i.d(v,{I:()=>o,a:()=>l,b:()=>s,c:()=>p,d:()=>E,f:()=>n,g:()=>c,i:()=>t,p:()=>w,r:()=>M,s:()=>a});var f=i(5861),d=i(839),u=i(6710);const s="ion-content",o=".ion-content-scroll-host",e=`${s}, ${o}`,t=g=>"ION-CONTENT"===g.tagName,c=function(){var g=(0,f.Z)(function*(m){return t(m)?(yield new Promise(_=>(0,d.c)(m,_)),m.getScrollElement()):m});return function(_){return g.apply(this,arguments)}}(),l=g=>g.querySelector(o)||g.querySelector(e),n=g=>g.closest(e),a=(g,m)=>t(g)?g.scrollToTop(m):Promise.resolve(g.scrollTo({top:0,left:0,behavior:m>0?"smooth":"auto"})),p=(g,m,_,O)=>t(g)?g.scrollByPoint(m,_,O):Promise.resolve(g.scrollBy({top:_,left:m,behavior:O>0?"smooth":"auto"})),w=g=>(0,u.b)(g,s),E=g=>{if(t(g)){const _=g.scrollY;return g.scrollY=!1,_}return g.style.setProperty("overflow","hidden"),!0},M=(g,m)=>{t(g)?g.scrollY=m:g.style.removeProperty("overflow")}},3173:(y,v,i)=>{i.d(v,{a:()=>f,b:()=>p,c:()=>e,d:()=>w,e:()=>L,f:()=>o,g:()=>E,h:()=>u,i:()=>d,j:()=>O,k:()=>C,l:()=>t,m:()=>n,n:()=>M,o:()=>l,p:()=>s,q:()=>r,r:()=>_,s:()=>h,t:()=>a,u:()=>g,v:()=>m,w:()=>c});const f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",L="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},2894:(y,v,i)=>{i.d(v,{c:()=>r,g:()=>s});var f=i(6225),d=i(839),u=i(6710);const r=(e,t,c)=>{let l,n;void 0!==f.w&&"MutationObserver"in f.w&&(l=new MutationObserver(E=>{for(const M of E)for(const g of M.addedNodes)if(g.nodeType===Node.ELEMENT_NODE&&g.slot===t)return c(),void(0,d.r)(()=>a(g))}),l.observe(e,{childList:!0}));const a=E=>{var M;n&&(n.disconnect(),n=void 0),n=new MutationObserver(g=>{c();for(const m of g)for(const _ of m.removedNodes)_.nodeType===Node.ELEMENT_NODE&&_.slot===t&&w()}),n.observe(null!==(M=E.parentElement)&&void 0!==M?M:E,{subtree:!0,childList:!0})},w=()=>{n&&(n.disconnect(),n=void 0)};return{destroy:()=>{l&&(l.disconnect(),l=void 0),w()}}},s=(e,t,c)=>{const l=null==e?0:e.toString().length,n=o(l,t);if(void 0===c)return n;try{return c(l,t)}catch(a){return(0,u.a)("Exception in provided `counterFormatter`.",a),n}},o=(e,t)=>`${e} / ${t}`},7484:(y,v,i)=>{i.d(v,{K:()=>r,a:()=>u});var f=i(4874),d=function(s){return s.Unimplemented="UNIMPLEMENTED",s.Unavailable="UNAVAILABLE",s}(d||{}),u=function(s){return s.Body="body",s.Ionic="ionic",s.Native="native",s.None="none",s}(u||{});const r={getEngine(){const s=(0,f.g)();if(null!=s&&s.isPluginAvailable("Keyboard"))return s.Plugins.Keyboard},getResizeMode(){const s=this.getEngine();return null!=s&&s.getResizeMode?s.getResizeMode().catch(o=>{if(o.code!==d.Unimplemented)throw o}):Promise.resolve(void 0)}}},1612:(y,v,i)=>{i.r(v),i.d(v,{KEYBOARD_DID_CLOSE:()=>s,KEYBOARD_DID_OPEN:()=>r,copyVisualViewport:()=>C,keyboardDidClose:()=>g,keyboardDidOpen:()=>E,keyboardDidResize:()=>M,resetKeyboardAssist:()=>l,setKeyboardClose:()=>w,setKeyboardOpen:()=>p,startKeyboardAssist:()=>n,trackViewportChanges:()=>O});var f=i(7484);i(4874),i(6225);const r="ionKeyboardDidShow",s="ionKeyboardDidHide";let e={},t={},c=!1;const l=()=>{e={},t={},c=!1},n=h=>{if(f.K.getEngine())a(h);else{if(!h.visualViewport)return;t=C(h.visualViewport),h.visualViewport.onresize=()=>{O(h),E()||M(h)?p(h):g(h)&&w(h)}}},a=h=>{h.addEventListener("keyboardDidShow",L=>p(h,L)),h.addEventListener("keyboardDidHide",()=>w(h))},p=(h,L)=>{m(h,L),c=!0},w=h=>{_(h),c=!1},E=()=>!c&&e.width===t.width&&(e.height-t.height)*t.scale>150,M=h=>c&&!g(h),g=h=>c&&t.height===h.innerHeight,m=(h,L)=>{const D=new CustomEvent(r,{detail:{keyboardHeight:L?L.keyboardHeight:h.innerHeight-t.height}});h.dispatchEvent(D)},_=h=>{const L=new CustomEvent(s);h.dispatchEvent(L)},O=h=>{e=Object.assign({},t),t=C(h.visualViewport)},C=h=>({width:Math.round(h.width),height:Math.round(h.height),offsetTop:h.offsetTop,offsetLeft:h.offsetLeft,pageTop:h.pageTop,pageLeft:h.pageLeft,scale:h.scale})},3459:(y,v,i)=>{i.d(v,{c:()=>o});var f=i(5861),d=i(6225),u=i(7484);const r=e=>{if(void 0===d.d||e===u.a.None||void 0===e)return null;const t=d.d.querySelector("ion-app");return null!=t?t:d.d.body},s=e=>{const t=r(e);return null===t?0:t.clientHeight},o=function(){var e=(0,f.Z)(function*(t){let c,l,n,a;const p=function(){var m=(0,f.Z)(function*(){const _=yield u.K.getResizeMode(),O=void 0===_?void 0:_.mode;c=()=>{void 0===a&&(a=s(O)),n=!0,w(n,O)},l=()=>{n=!1,w(n,O)},null==d.w||d.w.addEventListener("keyboardWillShow",c),null==d.w||d.w.addEventListener("keyboardWillHide",l)});return function(){return m.apply(this,arguments)}}(),w=(m,_)=>{t&&t(m,E(_))},E=m=>{if(0===a||a===s(m))return;const _=r(m);return null!==_?new Promise(O=>{const h=new ResizeObserver(()=>{_.clientHeight===a&&(h.disconnect(),O())});h.observe(_)}):void 0};return yield p(),{init:p,destroy:()=>{null==d.w||d.w.removeEventListener("keyboardWillShow",c),null==d.w||d.w.removeEventListener("keyboardWillHide",l),c=l=void 0},isKeyboardVisible:()=>n}});return function(c){return e.apply(this,arguments)}}()},3830:(y,v,i)=>{i.d(v,{c:()=>d});var f=i(5861);const d=()=>{let u;return{lock:function(){var s=(0,f.Z)(function*(){const o=u;let e;return u=new Promise(t=>e=t),void 0!==o&&(yield o),e});return function(){return s.apply(this,arguments)}}()}}},5857:(y,v,i)=>{i.d(v,{c:()=>u});var f=i(6225),d=i(839);const u=(r,s,o)=>{let e;const t=()=>!(void 0===s()||void 0!==r.label||null===o()),l=()=>{const a=s();if(void 0===a)return;if(!t())return void a.style.removeProperty("width");const p=o().scrollWidth;if(0===p&&null===a.offsetParent&&void 0!==f.w&&"IntersectionObserver"in f.w){if(void 0!==e)return;const w=e=new IntersectionObserver(E=>{1===E[0].intersectionRatio&&(l(),w.disconnect(),e=void 0)},{threshold:.01,root:r});w.observe(a)}else a.style.setProperty("width",.75*p+"px")};return{calculateNotchWidth:()=>{t()&&(0,d.r)(()=>{l()})},destroy:()=>{e&&(e.disconnect(),e=void 0)}}}},3781:(y,v,i)=>{i.d(v,{S:()=>d});const d={bubbles:{dur:1e3,circles:9,fn:(u,r,s)=>{const o=u*r/s-u+"ms",e=2*Math.PI*r/s;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":o}}}},circles:{dur:1e3,circles:8,fn:(u,r,s)=>{const o=r/s,e=u*o-u+"ms",t=2*Math.PI*o;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(u,r)=>({r:6,style:{left:32-32*r+"%","animation-delay":-110*r+"ms"}})},lines:{dur:1e3,lines:8,fn:(u,r,s)=>({y1:14,y2:26,style:{transform:`rotate(${360/s*r+(r<s/2?180:-180)}deg)`,"animation-delay":u*r/s-u+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(u,r,s)=>({y1:12,y2:20,style:{transform:`rotate(${360/s*r+(r<s/2?180:-180)}deg)`,"animation-delay":u*r/s-u+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(u,r,s)=>({y1:17,y2:29,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":u*r/s-u+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(u,r,s)=>({y1:12,y2:20,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":u*r/s-u+"ms"}})}}},8466:(y,v,i)=>{i.r(v),i.d(v,{createSwipeBackGesture:()=>s});var f=i(839),d=i(5085),u=i(9203);i(619);const s=(o,e,t,c,l)=>{const n=o.ownerDocument.defaultView;let a=(0,d.i)(o);const w=_=>a?-_.deltaX:_.deltaX;return(0,u.createGesture)({el:o,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:_=>(a=(0,d.i)(o),(_=>{const{startX:C}=_;return a?C>=n.innerWidth-50:C<=50})(_)&&e()),onStart:t,onMove:_=>{const C=w(_)/n.innerWidth;c(C)},onEnd:_=>{const O=w(_),C=n.innerWidth,h=O/C,L=(_=>a?-_.velocityX:_.velocityX)(_),D=L>=0&&(L>.2||O>C/2),P=(D?1-h:h)*C;let T=0;if(P>5){const B=P/Math.abs(L);T=Math.min(B,540)}l(D,h<=0?.01:(0,f.l)(0,h,.9999),T)}})}},7063:(y,v,i)=>{i.d(v,{w:()=>f});const f=(r,s,o)=>{if(typeof MutationObserver>"u")return;const e=new MutationObserver(t=>{o(d(t,s))});return e.observe(r,{childList:!0,subtree:!0}),e},d=(r,s)=>{let o;return r.forEach(e=>{for(let t=0;t<e.addedNodes.length;t++)o=u(e.addedNodes[t],s)||o}),o},u=(r,s)=>1!==r.nodeType?void 0:(r.tagName===s.toUpperCase()?[r]:Array.from(r.querySelectorAll(s))).find(e=>e.value===r.value)},1434:(y,v,i)=>{i.d(v,{W:()=>s});var f=i(5861),d=i(5619),u=i(6689),r=i(1509);let s=(()=>{var o;class e{constructor(c,l,n){this.toastController=c,this.alertController=l,this.loadingController=n,this.isUpdateProfile=new d.X(!1),this.isLoading=!1}presentToast(c,l="warning"){var n=this;return(0,f.Z)(function*(){yield(yield n.toastController.create({message:c,duration:2e3,position:"middle",color:l})).present()})()}startLoad(){var c=this;return(0,f.Z)(function*(){return c.isLoading=!0,yield c.loadingController.create({message:"\u062c\u0627\u0631\u064a...",spinner:"bubbles"}).then(l=>{l.present().then(()=>{c.isLoading||l.dismiss().then(()=>{})})})})()}dismissLoader(){var c=this;return(0,f.Z)(function*(){c.isLoading=!1,yield c.loadingController.dismiss()})()}presentAlert(c){var l=this;return(0,f.Z)(function*(){yield(yield l.alertController.create({cssClass:"my-custom-class",header:"\u062a\u0646\u0628\u064a\u0647",message:c,buttons:["\u0645\u0648\u0627\u0641\u0642"]})).present()})()}getUser(){return(0,f.Z)(function*(){const c=localStorage.getItem("user");return JSON.parse(c)})()}}return(o=e).\u0275fac=function(c){return new(c||o)(u.LFG(r.yF),u.LFG(r.Br),u.LFG(r.HT))},o.\u0275prov=u.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),e})()}}]);
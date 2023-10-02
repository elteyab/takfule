"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6752],{5961:(X,D,f)=>{f.d(D,{GW:()=>v,dk:()=>F,oK:()=>d});var d=function(h){return h.Prompt="PROMPT",h.Camera="CAMERA",h.Photos="PHOTOS",h}(d||{}),v=function(h){return h.Rear="REAR",h.Front="FRONT",h}(v||{}),F=function(h){return h.Uri="uri",h.Base64="base64",h.DataUrl="dataUrl",h}(F||{})},2726:(X,D,f)=>{f.d(D,{Sd:()=>b,Uw:()=>z,fo:()=>K,xz:()=>j});var d=f(5861);typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"&&global;var U=function(o){return o.Unimplemented="UNIMPLEMENTED",o.Unavailable="UNAVAILABLE",o}(U||{});class j extends Error{constructor(e,n,l){super(e),this.message=e,this.code=n,this.data=l}}const ee=o=>{var e,n,l,c,s;const m=o.CapacitorCustomPlatform||null,u=o.Capacitor||{},C=u.Plugins=u.Plugins||{},g=o.CapacitorPlatforms,H=(null===(e=null==g?void 0:g.currentPlatform)||void 0===e?void 0:e.getPlatform)||(()=>null!==m?m.name:(o=>{var e,n;return null!=o&&o.androidBridge?"android":null!==(n=null===(e=null==o?void 0:o.webkit)||void 0===e?void 0:e.messageHandlers)&&void 0!==n&&n.bridge?"ios":"web"})(o)),ue=(null===(n=null==g?void 0:g.currentPlatform)||void 0===n?void 0:n.isNativePlatform)||(()=>"web"!==H()),fe=(null===(l=null==g?void 0:g.currentPlatform)||void 0===l?void 0:l.isPluginAvailable)||(P=>{const w=ne.get(P);return!!(null!=w&&w.platforms.has(H())||se(P))}),se=(null===(c=null==g?void 0:g.currentPlatform)||void 0===c?void 0:c.getPluginHeader)||(P=>{var w;return null===(w=u.PluginHeaders)||void 0===w?void 0:w.find(G=>G.name===P)}),ne=new Map,ve=(null===(s=null==g?void 0:g.currentPlatform)||void 0===s?void 0:s.registerPlugin)||((P,w={})=>{const G=ne.get(P);if(G)return console.warn(`Capacitor plugin "${P}" already registered. Cannot register plugins twice.`),G.proxy;const M=H(),O=se(P);let E;const ye=function(){var L=(0,d.Z)(function*(){return!E&&M in w?E=E="function"==typeof w[M]?yield w[M]():w[M]:null!==m&&!E&&"web"in w&&(E=E="function"==typeof w.web?yield w.web():w.web),E});return function(){return L.apply(this,arguments)}}(),oe=L=>{let $;const k=(...I)=>{const W=ye().then(_=>{const B=((L,$)=>{var k,I;if(!O){if(L)return null===(I=L[$])||void 0===I?void 0:I.bind(L);throw new j(`"${P}" plugin is not implemented on ${M}`,U.Unimplemented)}{const W=null==O?void 0:O.methods.find(_=>$===_.name);if(W)return"promise"===W.rtype?_=>u.nativePromise(P,$.toString(),_):(_,B)=>u.nativeCallback(P,$.toString(),_,B);if(L)return null===(k=L[$])||void 0===k?void 0:k.bind(L)}})(_,L);if(B){const V=B(...I);return $=null==V?void 0:V.remove,V}throw new j(`"${P}.${L}()" is not implemented on ${M}`,U.Unimplemented)});return"addListener"===L&&(W.remove=(0,d.Z)(function*(){return $()})),W};return k.toString=()=>`${L.toString()}() { [capacitor code] }`,Object.defineProperty(k,"name",{value:L,writable:!1,configurable:!1}),k},le=oe("addListener"),ce=oe("removeListener"),Pe=(L,$)=>{const k=le({eventName:L},$),I=function(){var _=(0,d.Z)(function*(){const B=yield k;ce({eventName:L,callbackId:B},$)});return function(){return _.apply(this,arguments)}}(),W=new Promise(_=>k.then(()=>_({remove:I})));return W.remove=(0,d.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield I()}),W},re=new Proxy({},{get(L,$){switch($){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return O?Pe:le;case"removeListener":return ce;default:return oe($)}}});return C[P]=re,ne.set(P,{name:P,proxy:re,platforms:new Set([...Object.keys(w),...O?[M]:[]])}),re});return u.convertFileSrc||(u.convertFileSrc=P=>P),u.getPlatform=H,u.handleError=P=>o.console.error(P),u.isNativePlatform=ue,u.isPluginAvailable=fe,u.pluginMethodNoop=(P,w,G)=>Promise.reject(`${G} does not have an implementation of "${w}".`),u.registerPlugin=ve,u.Exception=j,u.DEBUG=!!u.DEBUG,u.isLoggingEnabled=!!u.isLoggingEnabled,u.platform=u.getPlatform(),u.isNative=u.isNativePlatform(),u},x=(o=>o.Capacitor=ee(o))(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),K=x.registerPlugin;class z{constructor(e){this.listeners={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,n){var l=this;this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(n);const s=this.windowListeners[e];s&&!s.registered&&this.addWindowListener(s);const m=function(){var C=(0,d.Z)(function*(){return l.removeListener(e,n)});return function(){return C.apply(this,arguments)}}(),u=Promise.resolve({remove:m});return Object.defineProperty(u,"remove",{value:(C=(0,d.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield m()}),function(){return C.apply(this,arguments)})}),u;var C}removeAllListeners(){var e=this;return(0,d.Z)(function*(){e.listeners={};for(const n in e.windowListeners)e.removeWindowListener(e.windowListeners[n]);e.windowListeners={}})()}notifyListeners(e,n){const l=this.listeners[e];l&&l.forEach(c=>c(n))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,n){this.windowListeners[n]={registered:!1,windowEventName:e,pluginEventName:n,handler:l=>{this.notifyListeners(n,l)}}}unimplemented(e="not implemented"){return new x.Exception(e,U.Unimplemented)}unavailable(e="not available"){return new x.Exception(e,U.Unavailable)}removeListener(e,n){var l=this;return(0,d.Z)(function*(){const c=l.listeners[e];if(!c)return;const s=c.indexOf(n);l.listeners[e].splice(s,1),l.listeners[e].length||l.removeWindowListener(l.windowListeners[e])})()}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}}const Y=o=>encodeURIComponent(o).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),t=o=>o.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class R extends z{getCookies(){return(0,d.Z)(function*(){const e=document.cookie,n={};return e.split(";").forEach(l=>{if(l.length<=0)return;let[c,s]=l.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");c=t(c).trim(),s=t(s).trim(),n[c]=s}),n})()}setCookie(e){return(0,d.Z)(function*(){try{const n=Y(e.key),l=Y(e.value),c=`; expires=${(e.expires||"").replace("expires=","")}`,s=(e.path||"/").replace("path=",""),m=null!=e.url&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${n}=${l||""}${c}; path=${s}; ${m};`}catch(n){return Promise.reject(n)}})()}deleteCookie(e){return(0,d.Z)(function*(){try{document.cookie=`${e.key}=; Max-Age=0`}catch(n){return Promise.reject(n)}})()}clearCookies(){return(0,d.Z)(function*(){try{const e=document.cookie.split(";")||[];for(const n of e)document.cookie=n.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(e){return Promise.reject(e)}})()}clearAllCookies(){var e=this;return(0,d.Z)(function*(){try{yield e.clearCookies()}catch(n){return Promise.reject(n)}})()}}K("CapacitorCookies",{web:()=>new R});const r=function(){var o=(0,d.Z)(function*(e){return new Promise((n,l)=>{const c=new FileReader;c.onload=()=>{const s=c.result;n(s.indexOf(",")>=0?s.split(",")[1]:s)},c.onerror=s=>l(s),c.readAsDataURL(e)})});return function(n){return o.apply(this,arguments)}}(),b=(o,e={})=>{const n=Object.assign({method:o.method||"GET",headers:o.headers},e),c=((o={})=>{const e=Object.keys(o);return Object.keys(o).map(c=>c.toLocaleLowerCase()).reduce((c,s,m)=>(c[s]=o[e[m]],c),{})})(o.headers)["content-type"]||"";if("string"==typeof o.data)n.body=o.data;else if(c.includes("application/x-www-form-urlencoded")){const s=new URLSearchParams;for(const[m,u]of Object.entries(o.data||{}))s.set(m,u);n.body=s.toString()}else if(c.includes("multipart/form-data")){const s=new FormData;if(o.data instanceof FormData)o.data.forEach((u,C)=>{s.append(C,u)});else for(const u of Object.keys(o.data))s.append(u,o.data[u]);n.body=s;const m=new Headers(n.headers);m.delete("content-type"),n.headers=m}else(c.includes("application/json")||"object"==typeof o.data)&&(n.body=JSON.stringify(o.data));return n};class Z extends z{request(e){return(0,d.Z)(function*(){const n=b(e,e.webFetchExtra),l=((o,e=!0)=>o?Object.entries(o).reduce((l,c)=>{const[s,m]=c;let u,C;return Array.isArray(m)?(C="",m.forEach(g=>{u=e?encodeURIComponent(g):g,C+=`${s}=${u}&`}),C.slice(0,-1)):(u=e?encodeURIComponent(m):m,C=`${s}=${u}`),`${l}&${C}`},"").substr(1):null)(e.params,e.shouldEncodeUrlParams),c=l?`${e.url}?${l}`:e.url,s=yield fetch(c,n),m=s.headers.get("content-type")||"";let C,g,{responseType:u="text"}=s.ok?e:{};switch(m.includes("application/json")&&(u="json"),u){case"arraybuffer":case"blob":g=yield s.blob(),C=yield r(g);break;case"json":C=yield s.json();break;default:C=yield s.text()}const Q={};return s.headers.forEach((H,te)=>{Q[te]=H}),{data:C,headers:Q,status:s.status,url:s.url}})()}get(e){var n=this;return(0,d.Z)(function*(){return n.request(Object.assign(Object.assign({},e),{method:"GET"}))})()}post(e){var n=this;return(0,d.Z)(function*(){return n.request(Object.assign(Object.assign({},e),{method:"POST"}))})()}put(e){var n=this;return(0,d.Z)(function*(){return n.request(Object.assign(Object.assign({},e),{method:"PUT"}))})()}patch(e){var n=this;return(0,d.Z)(function*(){return n.request(Object.assign(Object.assign({},e),{method:"PATCH"}))})()}delete(e){var n=this;return(0,d.Z)(function*(){return n.request(Object.assign(Object.assign({},e),{method:"DELETE"}))})()}}K("CapacitorHttp",{web:()=>new Z})},5346:(X,D,f)=>{f.d(D,{ez:()=>v,tP:()=>d});var d=function(y){return y.Documents="DOCUMENTS",y.Data="DATA",y.Library="LIBRARY",y.Cache="CACHE",y.External="EXTERNAL",y.ExternalStorage="EXTERNAL_STORAGE",y}(d||{}),v=function(y){return y.UTF8="utf8",y.ASCII="ascii",y.UTF16="utf16",y}(v||{})},6752:(X,D,f)=>{f.r(D),f.d(D,{AddImagesPage:()=>Y});var d=f(5861),v=f(3614),F=f(2726),h=f(5346);const y=(0,F.fo)("Filesystem",{web:()=>f.e(4522).then(f.bind(f,4522)).then(t=>new t.FilesystemWeb)});var q=f(5961);const S=(0,F.fo)("Camera",{web:()=>f.e(6468).then(f.bind(f,6468)).then(t=>new t.CameraWeb)});var U=f(6814),j=function(t){return t.Accessibility="accessibility",t.Account="account",t.AirplaneMode="airplane_mode",t.Apn="apn",t.ApplicationDetails="application_details",t.ApplicationDevelopment="application_development",t.Application="application",t.AppNotification="app_notification",t.BatteryOptimization="battery_optimization",t.Bluetooth="bluetooth",t.Captioning="captioning",t.Cast="cast",t.DataRoaming="data_roaming",t.Date="date",t.Display="display",t.Dream="dream",t.Home="home",t.Keyboard="keyboard",t.KeyboardSubType="keyboard_subtype",t.Locale="locale",t.Location="location",t.ManageApplications="manage_applications",t.ManageAllApplications="manage_all_applications",t.MemoryCard="memory_card",t.Network="network",t.NfcSharing="nfcsharing",t.NfcPayment="nfc_payment",t.NfcSettings="nfc_settings",t.Print="print",t.Privacy="privacy",t.QuickLaunch="quick_launch",t.Search="search",t.Security="security",t.Settings="settings",t.ShowRegulatoryInfo="show_regulatory_info",t.Sound="sound",t.Storage="storage",t.Sync="sync",t.Usage="usage",t.UserDictionary="user_dictionary",t.VoiceInput="voice_input",t.Wifi="wifi",t.WifiIp="wifi_ip",t.Wireless="wireless",t}(j||{}),J=function(t){return t.About="about",t.App="app",t.AutoLock="autoLock",t.Bluetooth="bluetooth",t.DateTime="dateTime",t.FaceTime="facetime",t.General="general",t.Keyboard="keyboard",t.ICloud="iCloud",t.ICloudStorageBackup="iCloudStorageBackup",t.International="international",t.LocationServices="locationServices",t.Music="music",t.Notes="notes",t.Notifications="notifications",t.Phone="phone",t.Photos="photos",t.ManagedConfigurationList="managedConfigurationList",t.Reset="reset",t.Ringtone="ringtone",t.Sounds="sounds",t.SoftwareUpdate="softwareUpdate",t.Store="store",t.Tracking="tracking",t.Wallpaper="wallpaper",t.WiFi="wifi",t.Tethering="tethering",t.DoNotDisturb="doNotDisturb",t.TouchIdPasscode="touchIdPasscode",t}(J||{});const ee=(0,F.fo)("NativeSettings",{web:()=>f.e(359).then(f.bind(f,359)).then(t=>new t.NativeSettingsWeb)});var a=f(2029),x=f(9912),K=f(7626),ae=f(1434);function ie(t,R){1&t&&(a.TgZ(0,"h3",10),a._uU(1,"\u0627\u0644\u0631\u062c\u0627\u0621 \u062a\u062d\u062f\u064a\u062f \u0627\u0644\u0635\u0648\u0631\u0629!"),a.qZA())}function z(t,R){if(1&t){const A=a.EpF();a.TgZ(0,"ion-item")(1,"ion-thumbnail",11),a._UZ(2,"ion-img",12),a.qZA(),a.TgZ(3,"ion-label",13),a._uU(4),a.qZA(),a.TgZ(5,"ion-button",14),a.NdJ("click",function(){const p=a.CHM(A).$implicit,b=a.oxw();return a.KtG(b.deleteImage(p))}),a._UZ(6,"ion-icon",15),a.qZA()()}if(2&t){const A=R.$implicit;a.xp6(2),a.Q6J("src",A.data),a.xp6(2),a.hij(" ",A.name," ")}}const N="stored-images";let Y=(()=>{var t;class R{constructor(r,i,p,b,Z){var T,o;this.supabase=i,this.router=p,this.plt=b,this.helper=Z,this.modelId=1,this.type="request_status",this.convertBlobToBase64=e=>new Promise((n,l)=>{const c=new FileReader;c.onerror=l,c.onload=()=>{n(c.result)},c.readAsDataURL(e)}),this.pathImage=[],this.modelId=null===(T=r.snapshot.paramMap)||void 0===T?void 0:T.get("id"),this.type=null===(o=r.snapshot.paramMap)||void 0===o?void 0:o.get("type")}ngOnInit(){var r=this;return(0,d.Z)(function*(){yield r.loadFiles(),yield r.checkPermissions()})()}checkPermissions(){return(0,d.Z)(function*(){const i=(yield y.checkPermissions()).publicStorage;"granted"!==i&&("denied"===i?(console.log("denied -> ask the user to change the access himself"),yield ee.open({optionAndroid:j.ApplicationDetails,optionIOS:J.App})):yield y.requestPermissions())})()}loadFiles(){var r=this;return(0,d.Z)(function*(){r.images=[],yield r.helper.startLoad(),y.readdir({path:`${N}-${r.type}-${r.modelId}`,directory:h.tP.Data}).then(i=>{r.loadFileData(i.files.map(p=>p.name))},function(){var i=(0,d.Z)(function*(p){yield y.mkdir({path:`${N}-${r.type}-${r.modelId}`,directory:h.tP.Data})});return function(p){return i.apply(this,arguments)}}()).then(i=>{r.helper.dismissLoader()})})()}loadFileData(r){var i=this;return(0,d.Z)(function*(){const p=`${N}-${i.type}-${i.modelId}`;for(let b of r){const Z=`${p}/${b}`,T=yield y.readFile({path:Z,directory:h.tP.Data});i.images.push({name:b,path:Z,data:`data:image/jpeg;base64,${T.data}`})}})()}selectImage(){var r=this;return(0,d.Z)(function*(){const i=yield S.getPhoto({quality:90,allowEditing:!0,resultType:q.dk.Uri,source:q.oK.Prompt});i&&(yield r.saveImage(i))})()}saveImage(r){var i=this;return(0,d.Z)(function*(){const p=yield i.readAsBase64(r),b=(new Date).getTime()+".jpeg",Z=`${N}-${i.type}-${i.modelId}`;yield y.writeFile({path:`${Z}/${b}`,data:p,directory:h.tP.Data}),yield i.loadFiles()})()}readAsBase64(r){var i=this;return(0,d.Z)(function*(){if(i.plt.is("hybrid"))return(yield y.readFile({path:r.path})).data;{const b=yield(yield fetch(r.webPath)).blob();return yield i.convertBlobToBase64(b)}})()}startUpload(r){var i=this;return(0,d.Z)(function*(){const b=yield(yield fetch(r.data)).blob(),Z=new FormData;Z.append("image",b,r.name),yield i.uploadData(Z)})()}uploadData(r){var i=this;return(0,d.Z)(function*(){r.append("request_id",i.modelId),r.append("type",i.type),i.supabase.saveFiles(i.type,i.modelId,r).then(p=>{var b;i.pathImage.push(null===(b=p.data)||void 0===b?void 0:b.path),i.helper.dismissLoader()}).catch(p=>{console.log(p)})})()}deleteImage(r){var i=this;return(0,d.Z)(function*(){yield i.loadFiles()})()}deleteImages(){var r=this;return(0,d.Z)(function*(){yield y.rmdir({directory:h.tP.Data,path:`${N}-${r.type}-${r.modelId}`,recursive:!0}),yield r.loadFiles(),yield r.router.navigate(["/"])})()}uploadAllImage(){var r=this;return(0,d.Z)(function*(){yield r.helper.startLoad();for(let i of r.images){const b=yield(yield fetch(i.data)).blob(),Z=new FormData;Z.append("image",b,i.name),yield r.supabase.saveFiles(r.type,r.modelId,Z).then(T=>{var o;r.pathImage.push(null===(o=T.data)||void 0===o?void 0:o.path)}).catch(T=>{console.error(T)})}yield r.supabase.updateData(r.type,r.modelId,{images:r.pathImage}).then(i=>204===i.status?(r.router.navigate(["/"]),void r.helper.presentToast("\u062a\u0645 \u062a\u0642\u062f\u064a\u0645 \u0627\u0644\u0637\u0644\u0628 \u0628\u0646\u062c\u0627\u062d")):void r.helper.presentAlert("\u062e\u0637\u0627")).catch(i=>{console.log(i),r.helper.presentAlert(`err: ${i}`)}),yield r.helper.dismissLoader()})()}}return(t=R).\u0275fac=function(r){return new(r||t)(a.Y36(x.gz),a.Y36(K.T),a.Y36(x.F0),a.Y36(v.t4),a.Y36(ae.W))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-add-images"]],standalone:!0,features:[a.jDz],decls:19,vars:3,consts:[[3,"fullscreen"],["class","ion-padding ion-text-center",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"m-ion-toolbar"],["color","m-ion-toolbar"],["fill","clear","expand","full","color","success",3,"click"],["slot","start","name","camera"],["fill","clear","expand","full","color","secondary",3,"click"],["slot","start","name","save"],["fill","clear","expand","full","color","danger",3,"click"],[1,"ion-padding","ion-text-center"],["slot","start"],[3,"src"],[1,"ion-text-wrap"],["slot","end","fill","clear",3,"click"],["slot","icon-only","name","trash"]],template:function(r,i){1&r&&(a.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),a._uU(3,"\u0631\u0641\u0639 \u0627\u0644\u0645\u0631\u0641\u0642\u0627\u062a"),a.qZA()()(),a.TgZ(4,"ion-content",0),a.YNc(5,ie,2,0,"h3",1),a.TgZ(6,"ion-list"),a.YNc(7,z,7,2,"ion-item",2),a.qZA()(),a.TgZ(8,"ion-footer",3)(9,"ion-toolbar",4)(10,"ion-button",5),a.NdJ("click",function(){return i.selectImage()}),a._UZ(11,"ion-icon",6),a._uU(12," \u0627\u062e\u062a\u0627\u0631 \u0627\u0644\u0635\u0648\u0631\u0629 "),a.qZA(),a.TgZ(13,"ion-button",7),a.NdJ("click",function(){return i.uploadAllImage()}),a._UZ(14,"ion-icon",8),a._uU(15," \u062d\u0641\u0638 \u0627\u0644\u0635\u0648\u0631\u0629 "),a.qZA(),a.TgZ(16,"ion-button",9),a.NdJ("click",function(){return i.deleteImages()}),a._UZ(17,"ion-icon",6),a._uU(18," \u062d\u0641\u0638 \u0645\u0646 \u062f\u0648\u0646 \u0635\u0648\u0631 "),a.qZA()()()),2&r&&(a.xp6(4),a.Q6J("fullscreen",!0),a.xp6(1),a.Q6J("ngIf",0===i.images.length),a.xp6(2),a.Q6J("ngForOf",i.images))},dependencies:[v.Pc,v.YG,v.W2,v.fr,v.Gu,v.gu,v.Xz,v.Ie,v.Q$,v.q_,v.Bs,v.wd,v.sr,U.ez,U.sg,U.O5],styles:[".m-ion-toolbar[_ngcontent-%COMP%]{--background: #383a3e !important;border-radius:1.5%;background:#383a3e!important}"]}),R})()}}]);
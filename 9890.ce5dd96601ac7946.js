"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9890],{9890:(F,g,s)=>{s.r(g),s.d(g,{RequestDetailsPage:()=>k});var p=s(5861),d=s(6814),m=s(95),u=s(1509),t=s(6689),f=s(7626),Z=s(1434);function q(a,o){if(1&a){const e=t.EpF();t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",1)(3,"ion-button",2),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.cancel())}),t._uU(4,"\u0627\u0644\u063a\u0627\u0621"),t.qZA()(),t.TgZ(5,"ion-title"),t._uU(6),t.qZA(),t.TgZ(7,"ion-buttons",3)(8,"ion-button",4),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.confirm())}),t._uU(9,"\u062d\u0641\u0638"),t.qZA()()()(),t.TgZ(10,"ion-content",5)(11,"ion-item")(12,"ion-select",6),t.NdJ("ionChange",function(i){t.CHM(e);const l=t.oxw();return t.KtG(l.handleTypeChange(i))}),t.TgZ(13,"ion-select-option",7),t._uU(14,"\u062c\u062f\u064a\u062f\u0629"),t.qZA(),t.TgZ(15,"ion-select-option",8),t._uU(16,"\u0645\u0633\u0648\u062f\u0629"),t.qZA(),t.TgZ(17,"ion-select-option",9),t._uU(18,"\u0641\u064a \u0627\u0644\u0627\u0646\u062a\u0638\u0627\u0631"),t.qZA(),t.TgZ(19,"ion-select-option",10),t._uU(20,"\u0645\u0642\u0628\u0648\u0644\u0629"),t.qZA(),t.TgZ(21,"ion-select-option",11),t._uU(22,"\u0645\u0646\u062a\u0647\u064a\u0629"),t.qZA(),t.TgZ(23,"ion-select-option",12),t._uU(24,"\u0645\u0644\u063a\u064a\u0629"),t.qZA()()()()}if(2&a){const e=t.oxw();t.xp6(6),t.hij("\u0627\u062f\u0627\u0631\u0629 \u0627\u0644\u0637\u0644\u0628 :# ",e.id,""),t.xp6(2),t.Q6J("strong",!0)}}let A=(()=>{var a;class o{constructor(n,i){this.sup=n,this.helper=i,this.id=[]}ngOnInit(){}cancel(){var n=this;return(0,p.Z)(function*(){yield n.modal.dismiss(null,"cancel")})()}confirm(){var n=this;return(0,p.Z)(function*(){yield n.helper.startLoad(),n.sup.updateData("request_status",n.id,{status:n.status}).then(l=>{n.helper.dismissLoader(),204===l.status?n.modal.dismiss(n.id,"confirm"):n.helper.presentToast(l.error)}).catch(l=>{n.helper.dismissLoader(),alert("errors"),console.log("error: ",l)})})()}onWillDismiss(n){}handleTypeChange(n){this.status=n.target.value}}return(a=o).\u0275fac=function(n){return new(n||a)(t.Y36(f.T),t.Y36(Z.W))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-request-modal"]],viewQuery:function(n,i){if(1&n&&t.Gf(u.ki,7),2&n){let l;t.iGM(l=t.CRH())&&(i.modal=l.first)}},inputs:{id:"id"},standalone:!0,features:[t.jDz],decls:2,vars:0,consts:[["trigger","open-modal",3,"willDismiss"],["slot","start"],[3,"click"],["slot","end"],[3,"strong","click"],[1,"ion-padding"],["placeholder","\u062d\u0627\u0644\u0629 \u0627\u0644\u0637\u0644\u0628","label","\u0627\u062e\u062a\u0627\u0631 \u0645\u0646 \u0627\u0644\u0642\u0627\u0626\u0645\u0629",3,"ionChange"],["value","1"],["value","2"],["value","3"],["value","4"],["value","5"],["value","6"]],template:function(n,i){1&n&&(t.TgZ(0,"ion-modal",0),t.NdJ("willDismiss",function(r){return i.onWillDismiss(r)}),t.YNc(1,q,25,2,"ng-template"),t.qZA())},dependencies:[u.Pc,u.YG,u.Sm,u.W2,u.Gu,u.Ie,u.t9,u.n0,u.wd,u.sr,u.ki,u.QI,d.ez,m.u5],styles:["ion-button[_ngcontent-%COMP%]{color:#fff}"]}),o})();var b=s(9257);const T=["swiper"];function x(a,o){if(1&a){const e=t.EpF();t.TgZ(0,"swiper-slide",3),t.NdJ("click",function(){const l=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.openImage(l))}),t._UZ(1,"ion-img",4),t.qZA()}if(2&a){const e=o.$implicit;t.xp6(1),t.s9C("src",e)}}(0,b.z2)();let v=(()=>{var a;class o{constructor(){this.images=[]}swiperReady(){var n;this.swiper=null===(n=this.swiperRef)||void 0===n?void 0:n.nativeElement.swiper}next(){var n;null===(n=this.swiper)||void 0===n||n.slideNext(100,!0)}swiperSlideChanged(n){console.log("changed: ",n)}openImage(n){return window.open(n,"_blank")}ngOnInit(){}}return(a=o).\u0275fac=function(n){return new(n||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-slide-modal"]],viewQuery:function(n,i){if(1&n&&t.Gf(T,5),2&n){let l;t.iGM(l=t.CRH())&&(i.swiperRef=l.first)}},inputs:{images:"images"},standalone:!0,features:[t.jDz],decls:3,vars:1,consts:[["dir","rtl","pagination","true","pagination-type","progressbar","navigation","true","zoom","true","pager","true",3,"afterinit","slidechange"],["swiper",""],["class","step-one","dir","rtl",3,"click",4,"ngFor","ngForOf"],["dir","rtl",1,"step-one",3,"click"],[3,"src"]],template:function(n,i){1&n&&(t.TgZ(0,"swiper-container",0,1),t.NdJ("afterinit",function(){return i.swiperReady()})("slidechange",function(r){return i.swiperSlideChanged(r)}),t.YNc(2,x,2,1,"swiper-slide",2),t.qZA()),2&n&&(t.xp6(2),t.Q6J("ngForOf",i.images))},dependencies:[u.Pc,u.Xz,d.ez,d.sg],styles:["swiper-slide[_ngcontent-%COMP%]{text-align:center!important;flex-direction:column}ion-img[_ngcontent-%COMP%]{overflow:hidden;display:block;margin-left:auto;margin-right:auto}.step-one[_ngcontent-%COMP%]{background:var(--ion-color-primary);color:var(--ion-color-primary-contrast)}"]}),o})();var h=s(6958);function w(a,o){if(1&a&&(t.TgZ(0,"p",25)(1,"b"),t._uU(2,"\u0627\u0644\u0639\u0644\u0627\u0642\u0629 \u0645\u0639 \u0635\u0627\u062d\u0628 \u0627\u0644\u062d\u0633\u0627\u0628"),t.qZA(),t._uU(3),t.qZA()),2&a){const e=t.oxw(2);t.xp6(3),t.hij(": ",null==e.data?null:e.data.rel_with_account_owner,"")}}function U(a,o){if(1&a&&(t.TgZ(0,"p",25)(1,"b"),t._uU(2,"\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641"),t.qZA(),t._uU(3),t.TgZ(4,"a",26),t._UZ(5,"ion-icon",27),t.qZA()()),2&a){const e=t.oxw(2);t.xp6(3),t.hij(": ",null==e.data?null:e.data.phone," "),t.xp6(1),t.MGl("href","tel://",null==e.data?null:e.data.mobile,"",t.LSH)}}function C(a,o){1&a&&(t.TgZ(0,"ion-badge",28),t._uU(1,"\u062c\u062f\u064a\u062f"),t.qZA())}function I(a,o){1&a&&(t.TgZ(0,"ion-badge",29),t._uU(1,"\u0645\u0633\u0648\u062f\u0629"),t.qZA())}function D(a,o){1&a&&(t.TgZ(0,"ion-badge",30),t._uU(1,"\u0641\u064a \u0627\u0644\u0627\u0646\u062a\u0638\u0627\u0631"),t.qZA())}function y(a,o){1&a&&(t.TgZ(0,"ion-badge",31),t._uU(1,"\u0645\u0642\u0628\u0648\u0644\u0629"),t.qZA())}function M(a,o){1&a&&(t.TgZ(0,"ion-badge",32),t._uU(1,"\u0645\u0646\u062a\u0647\u064a\u0629"),t.qZA())}function R(a,o){1&a&&(t.TgZ(0,"ion-badge",33),t._uU(1,"\u0645\u0644\u063a\u064a\u0629"),t.qZA())}function J(a,o){if(1&a&&(t.TgZ(0,"ion-item")(1,"p",35),t._uU(2),t.qZA(),t.TgZ(3,"p",36),t._uU(4),t.ALo(5,"date"),t.qZA()()),2&a){const e=o.$implicit;t.xp6(2),t.hij("\u0642\u064a\u0645\u0629 \u0627\u0644\u062a\u0628\u0631\u0639: ",null==e?null:e.amount,""),t.xp6(2),t.hij("\u0628\u062a\u0631\u0627\u064a\u062e: ",t.xi3(5,2,null==e?null:e.created_at,"short"),"")}}function P(a,o){if(1&a&&(t.TgZ(0,"ion-card")(1,"ion-item-divider")(2,"ion-label",2),t._uU(3,"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062a\u0628\u0631\u0639\u0627\u062a"),t.qZA(),t.TgZ(4,"ion-label",5),t._uU(5),t.qZA()(),t.TgZ(6,"ion-list"),t.YNc(7,J,6,5,"ion-item",34),t.qZA()()),2&a){const e=t.oxw(2);t.xp6(5),t.hij("\u062c\u0645\u0639: ",e.totalAmount,""),t.xp6(2),t.Q6J("ngForOf",null==e.data?null:e.data.benefactor)}}function N(a,o){if(1&a&&(t.TgZ(0,"ion-card",12)(1,"ion-item")(2,"ion-avatar",2),t._UZ(3,"img",13),t.qZA(),t.TgZ(4,"ion-label")(5,"ion-card-title"),t._uU(6),t.qZA(),t.TgZ(7,"p"),t._uU(8),t.ALo(9,"date"),t.qZA()()(),t._UZ(10,"img",14)(11,"ion-card-header"),t.TgZ(12,"ion-card-content")(13,"p")(14,"b"),t._uU(15,"\u0627\u0644\u0648\u0635\u0641:"),t.qZA()(),t.TgZ(16,"p")(17,"b"),t._uU(18),t.qZA()(),t.TgZ(19,"p")(20,"b",15),t._uU(21,"\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641:"),t.qZA(),t._uU(22),t.qZA(),t.TgZ(23,"p")(24,"b"),t._uU(25,"\u0631\u0642\u0645 \u062d\u0633\u0627\u0628:"),t.qZA(),t._uU(26),t.qZA(),t.TgZ(27,"p")(28,"b"),t._uU(29,"\u0627\u0633\u0645 \u0635\u0627\u062d\u0628 \u0627\u0644\u062d\u0633\u0627\u0628:"),t.qZA(),t._uU(30),t.qZA(),t.YNc(31,w,4,1,"p",16),t.YNc(32,U,6,2,"p",16),t.TgZ(33,"ion-item"),t.YNc(34,C,2,0,"ion-badge",17),t.YNc(35,I,2,0,"ion-badge",18),t.YNc(36,D,2,0,"ion-badge",19),t.YNc(37,y,2,0,"ion-badge",20),t.YNc(38,M,2,0,"ion-badge",21),t.YNc(39,R,2,0,"ion-badge",22),t.TgZ(40,"ion-label"),t._uU(41,"\u0627\u0644\u062d\u0627\u0644\u0629:"),t.qZA()()(),t.TgZ(42,"ion-card")(43,"ion-card-content",23)(44,"ion-item-divider")(45,"ion-label"),t._uU(46,"\u0627\u0644\u0645\u0631\u0641\u0642\u0627\u062a"),t.qZA()(),t._UZ(47,"app-slide-modal",24),t.qZA()(),t.YNc(48,P,8,2,"ion-card",9),t.qZA()),2&a){const e=t.oxw();t.xp6(6),t.hij("\u0627\u0644\u0627\u0633\u0645: ",null==e.data?null:e.data.name,""),t.xp6(2),t.Oqu(t.xi3(9,18,null==e.data?null:e.data.created_at,"short")),t.xp6(2),t.Q6J("src",e.imageList[0],t.LSH)("alt",null==e.data?null:e.data.name),t.xp6(8),t.Oqu(null==e.data?null:e.data.description),t.xp6(4),t.hij(" ",null==e.data?null:e.data.mobile," "),t.xp6(4),t.Oqu(null==e.data?null:e.data.account_number),t.xp6(4),t.Oqu(null==e.data?null:e.data.account_owner),t.xp6(1),t.Q6J("ngIf",(null==e.data||null==e.data.rel_with_account_owner?null:e.data.rel_with_account_owner.length)>=5),t.xp6(1),t.Q6J("ngIf",null==e.data?null:e.data.phone),t.xp6(2),t.Q6J("ngIf",1===(null==e.data?null:e.data.status)),t.xp6(1),t.Q6J("ngIf",2===(null==e.data?null:e.data.status)),t.xp6(1),t.Q6J("ngIf",3===(null==e.data?null:e.data.status)),t.xp6(1),t.Q6J("ngIf",4===(null==e.data?null:e.data.status)),t.xp6(1),t.Q6J("ngIf",5===(null==e.data?null:e.data.status)),t.xp6(1),t.Q6J("ngIf",6===(null==e.data?null:e.data.status)),t.xp6(8),t.Q6J("images",e.imageList),t.xp6(1),t.Q6J("ngIf",null==e.data?null:e.data.benefactor)}}function Q(a,o){1&a&&(t.TgZ(0,"div")(1,"ion-list")(2,"ion-item",37)(3,"ion-label")(4,"h3"),t._UZ(5,"ion-skeleton-text",38),t.qZA(),t.TgZ(6,"p"),t._UZ(7,"ion-skeleton-text",39),t.qZA(),t.TgZ(8,"p"),t._UZ(9,"ion-skeleton-text",40),t.qZA()(),t.TgZ(10,"ion-avatar",2),t._UZ(11,"ion-skeleton-text",41),t.qZA()()()())}function Y(a,o){1&a&&(t.TgZ(0,"ion-fab",42)(1,"ion-fab-button"),t._UZ(2,"ion-icon",43),t.qZA(),t.TgZ(3,"ion-fab-list",44)(4,"ion-fab-button"),t._UZ(5,"ion-icon",45),t.qZA(),t.TgZ(6,"ion-fab-button"),t._UZ(7,"ion-icon",46),t.qZA(),t.TgZ(8,"ion-fab-button",47),t._UZ(9,"ion-icon",48),t.qZA()()())}let k=(()=>{var a;class o{constructor(n,i,l,r){this.router=n,this.route=i,this.helper=l,this.sup=r,this.showModal=!1,this.totalAmount=0,this.open=open}ngOnInit(){this.route.paramMap.subscribe(()=>{var n;let i=null===(n=this.router.getCurrentNavigation())||void 0===n?void 0:n.extras;if(i.id){this.data=i;const r=JSON.parse(this.data.images).filter(c=>/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/.test(c));this.imageList=r.map(c=>`https://iogenwxvdivtmnlnyrgs.supabase.co/storage/v1/object/public/bok/${c}`)}else this.requestId=this.route.snapshot.paramMap.get("id"),this.getDetails(this.requestId)}),this.isAdmin=this.route.snapshot.paramMap.get("role"),setTimeout(()=>{const n=this.data.benefactor.map(i=>parseFloat(i.amount));this.totalAmount=n.reduce((i,l)=>i+l,0)},1e3)}getDetails(n){var i=this;return(0,p.Z)(function*(){yield i.sup.getDataById("request_status",n,"*, benefactor(*)").then(l=>{if(200===l.status){i.data=l.data;const c=JSON.parse(i.data.images).filter(_=>/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/.test(_));i.imageList=c.map(_=>`https://iogenwxvdivtmnlnyrgs.supabase.co/storage/v1/object/public/bok/${_}`)}else i.helper.presentAlert("error")})})()}openImage(n){return window.open(n,"_blank")}openModel(){this.showModal=!0}}return(a=o).\u0275fac=function(n){return new(n||a)(t.Y36(h.F0),t.Y36(h.gz),t.Y36(Z.W),t.Y36(f.T))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-request-details"]],standalone:!0,features:[t.jDz],decls:13,vars:7,consts:[[3,"translucent"],["color","primary"],["slot","start"],["color","light"],[1,"ion-text-center"],["slot","end"],["color","light","defaultHref","/tabs/requests"],[3,"fullscreen"],["color","light","class","animate__animated animate__backInLeft animate__delay-.2s",4,"ngIf"],[4,"ngIf"],[3,"id"],["slot","fixed","vertical","bottom","horizontal","end",4,"ngIf"],["color","light",1,"animate__animated","animate__backInLeft","animate__delay-.2s"],["alt","lost icon","src","/assets/images/person.jpg"],[3,"src","alt"],[1,"phone"],["class","label-siz",4,"ngIf"],["color","secondary","slot","end",4,"ngIf"],["color","warning","slot","end",4,"ngIf"],["color","primary","slot","end",4,"ngIf"],["color","primary-tint","slot","end",4,"ngIf"],["color","success","slot","end",4,"ngIf"],["color","danger","slot","end",4,"ngIf"],[1,"animate__animated","animate__backInLeft","animate__delay-.1s"],[3,"images"],[1,"label-siz"],["target","_blank",3,"href"],["name","call"],["color","secondary","slot","end"],["color","warning","slot","end"],["color","primary","slot","end"],["color","primary-tint","slot","end"],["color","success","slot","end"],["color","danger","slot","end"],[4,"ngFor","ngForOf"],["slot","start",1,"do-text"],["slot","end",1,"do-text"],[1,"item"],["animated","true",2,"width","50%"],["animated","true",2,"width","80%"],["animated","true",2,"width","60%"],["animated","true"],["slot","fixed","vertical","bottom","horizontal","end"],["name","chevron-up-circle"],["side","top"],["name","document"],["name","color-palette"],["id","open-modal"],["name","create"]],template:function(n,i){1&n&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),t._UZ(3,"ion-menu-button",3),t.qZA(),t.TgZ(4,"ion-title",4),t._uU(5),t.qZA(),t.TgZ(6,"ion-buttons",5),t._UZ(7,"ion-back-button",6),t.qZA()()(),t.TgZ(8,"ion-content",7),t.YNc(9,N,49,21,"ion-card",8),t.YNc(10,Q,12,0,"div",9),t._UZ(11,"app-request-modal",10),t.YNc(12,Y,10,0,"ion-fab",11),t.qZA()),2&n&&(t.Q6J("translucent",!0),t.xp6(5),t.hij(" \u062d\u0627\u0644\u0629 \u0631\u0642\u0645: ",null==i.data?null:i.data.id,""),t.xp6(3),t.Q6J("fullscreen",!0),t.xp6(1),t.Q6J("ngIf",null==i.data?null:i.data.name),t.xp6(1),t.Q6J("ngIf",!i.data&&0===i.data||0===(null==i.data||null==i.data.name?null:i.data.name.length)),t.xp6(1),t.Q6J("id",null==i.data?null:i.data.id),t.xp6(1),t.Q6J("ngIf","admin"===i.isAdmin))},dependencies:[u.Pc,u.BJ,u.oU,u.yp,u.Sm,u.PM,u.FN,u.Zi,u.Dq,u.W2,u.IJ,u.W4,u.zq,u.Gu,u.gu,u.Ie,u.rH,u.Q$,u.q_,u.fG,u.CK,u.wd,u.sr,u.cs,d.ez,d.sg,d.O5,d.uU,m.u5,A,v],styles:[".phone[_ngcontent-%COMP%]{font-weight:700}.do-text[_ngcontent-%COMP%]{font-size:12px}"]}),o})()}}]);
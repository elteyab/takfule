"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1703],{1703:(N,p,s)=>{s.r(p),s.d(p,{RequestDetailsPage:()=>Q});var _=s(5861),d=s(6814),m=s(95),o=s(1509),t=s(6689),f=s(7626),Z=s(1434);function A(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",1)(3,"ion-button",2),t.NdJ("click",function(){t.CHM(e);const u=t.oxw();return t.KtG(u.cancel())}),t._uU(4,"\u0627\u0644\u063a\u0627\u0621"),t.qZA()(),t.TgZ(5,"ion-title"),t._uU(6),t.qZA(),t.TgZ(7,"ion-buttons",3)(8,"ion-button",4),t.NdJ("click",function(){t.CHM(e);const u=t.oxw();return t.KtG(u.confirm())}),t._uU(9,"\u062d\u0641\u0638"),t.qZA()()()(),t.TgZ(10,"ion-content",5)(11,"ion-item")(12,"ion-select",6),t.NdJ("ionChange",function(u){t.CHM(e);const l=t.oxw();return t.KtG(l.handleTypeChange(u))}),t.TgZ(13,"ion-select-option",7),t._uU(14,"\u062c\u062f\u064a\u062f\u0629"),t.qZA(),t.TgZ(15,"ion-select-option",8),t._uU(16,"\u0645\u0633\u0648\u062f\u0629"),t.qZA(),t.TgZ(17,"ion-select-option",9),t._uU(18,"\u0641\u064a \u0627\u0644\u0627\u0646\u062a\u0638\u0627\u0631"),t.qZA(),t.TgZ(19,"ion-select-option",10),t._uU(20,"\u0645\u0642\u0628\u0648\u0644\u0629"),t.qZA(),t.TgZ(21,"ion-select-option",11),t._uU(22,"\u0645\u0646\u062a\u0647\u064a\u0629"),t.qZA(),t.TgZ(23,"ion-select-option",12),t._uU(24,"\u0645\u0644\u063a\u064a\u0629"),t.qZA()()()()}if(2&n){const e=t.oxw();t.xp6(6),t.hij("\u0627\u062f\u0627\u0631\u0629 \u0627\u0644\u0637\u0644\u0628 :# ",e.id,""),t.xp6(2),t.Q6J("strong",!0)}}let q=(()=>{var n;class i{constructor(a,u){this.sup=a,this.helper=u,this.id=[]}ngOnInit(){}cancel(){var a=this;return(0,_.Z)(function*(){yield a.modal.dismiss(null,"cancel")})()}confirm(){var a=this;return(0,_.Z)(function*(){yield a.helper.startLoad(),a.sup.updateData("request_status",a.id,{status:a.status}).then(l=>{a.helper.dismissLoader(),204===l.status?a.modal.dismiss(a.id,"confirm"):a.helper.presentToast(l.error)}).catch(l=>{a.helper.dismissLoader(),alert("errors"),console.log("error: ",l)})})()}onWillDismiss(a){}handleTypeChange(a){this.status=a.target.value}}return(n=i).\u0275fac=function(a){return new(a||n)(t.Y36(f.T),t.Y36(Z.W))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-request-modal"]],viewQuery:function(a,u){if(1&a&&t.Gf(o.ki,7),2&a){let l;t.iGM(l=t.CRH())&&(u.modal=l.first)}},inputs:{id:"id"},standalone:!0,features:[t.jDz],decls:2,vars:0,consts:[["trigger","open-modal",3,"willDismiss"],["slot","start"],[3,"click"],["slot","end"],[3,"strong","click"],[1,"ion-padding"],["placeholder","\u062d\u0627\u0644\u0629 \u0627\u0644\u0637\u0644\u0628","label","\u0627\u062e\u062a\u0627\u0631 \u0645\u0646 \u0627\u0644\u0642\u0627\u0626\u0645\u0629",3,"ionChange"],["value","1"],["value","2"],["value","3"],["value","4"],["value","5"],["value","6"]],template:function(a,u){1&a&&(t.TgZ(0,"ion-modal",0),t.NdJ("willDismiss",function(r){return u.onWillDismiss(r)}),t.YNc(1,A,25,2,"ng-template"),t.qZA())},dependencies:[o.Pc,o.YG,o.Sm,o.W2,o.Gu,o.Ie,o.t9,o.n0,o.wd,o.sr,o.ki,o.QI,d.ez,m.u5],styles:["ion-button[_ngcontent-%COMP%]{color:#fff}"]}),i})();var b=s(6790),h=s(6958);function T(n,i){if(1&n&&(t.TgZ(0,"p",23)(1,"b"),t._uU(2," \u0627\u0644\u0639\u0644\u0627\u0642\u0629 \u0645\u0639 \u0635\u0627\u062d\u0628 \u0627\u0644\u062d\u0633\u0627\u0628 "),t.qZA(),t._uU(3),t.qZA()),2&n){const e=t.oxw(2);t.xp6(3),t.hij(": ",null==e.data?null:e.data.rel_with_account_owner,"")}}function x(n,i){if(1&n&&(t.TgZ(0,"p",23)(1,"b"),t._uU(2,"\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641"),t.qZA(),t._uU(3,": "),t.TgZ(4,"a",24),t._uU(5),t._UZ(6,"ion-icon",25),t.qZA()()),2&n){const e=t.oxw(2);t.xp6(4),t.MGl("href","tel://",null==e.data?null:e.data.mobile,"",t.LSH),t.xp6(1),t.hij(" ",null==e.data?null:e.data.mobile," ")}}function U(n,i){1&n&&(t.TgZ(0,"ion-badge",26),t._uU(1,"\u062c\u062f\u064a\u062f"),t.qZA())}function v(n,i){1&n&&(t.TgZ(0,"ion-badge",27),t._uU(1,"\u0645\u0633\u0648\u062f\u0629"),t.qZA())}function I(n,i){1&n&&(t.TgZ(0,"ion-badge",28),t._uU(1,"\u0641\u064a \u0627\u0644\u0627\u0646\u062a\u0638\u0627\u0631"),t.qZA())}function D(n,i){1&n&&(t.TgZ(0,"ion-badge",29),t._uU(1,"\u0645\u0642\u0628\u0648\u0644\u0629"),t.qZA())}function C(n,i){1&n&&(t.TgZ(0,"ion-badge",30),t._uU(1,"\u0645\u0646\u062a\u0647\u064a\u0629"),t.qZA())}function R(n,i){1&n&&(t.TgZ(0,"ion-badge",31),t._uU(1,"\u0645\u0644\u063a\u064a\u0629"),t.qZA())}function y(n,i){if(1&n&&(t.TgZ(0,"ion-item")(1,"p",33),t._uU(2),t.qZA(),t.TgZ(3,"p",34),t._uU(4),t.ALo(5,"date"),t.qZA()()),2&n){const e=i.$implicit;t.xp6(2),t.hij("\u0642\u064a\u0645\u0629 \u0627\u0644\u062a\u0628\u0631\u0639: ",null==e?null:e.amount,""),t.xp6(2),t.hij("\u0628\u062a\u0631\u0627\u064a\u062e: ",t.xi3(5,2,null==e?null:e.created_at,"short"),"")}}function w(n,i){if(1&n&&(t.TgZ(0,"ion-card")(1,"ion-item-divider")(2,"ion-label",1),t._uU(3,"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062a\u0628\u0631\u0639\u0627\u062a"),t.qZA(),t.TgZ(4,"ion-label",3),t._uU(5),t.qZA()(),t.TgZ(6,"ion-list"),t.YNc(7,y,6,5,"ion-item",32),t.qZA()()),2&n){const e=t.oxw(2);t.xp6(5),t.hij("\u062c\u0645\u0639: ",e.totalAmount,""),t.xp6(2),t.Q6J("ngForOf",null==e.data?null:e.data.benefactor)}}function J(n,i){if(1&n&&(t.TgZ(0,"ion-card",10)(1,"ion-item")(2,"ion-avatar",1),t._UZ(3,"img",11),t.qZA(),t.TgZ(4,"ion-label")(5,"h3"),t._uU(6),t.qZA(),t.TgZ(7,"p"),t._uU(8),t.ALo(9,"date"),t.qZA()()(),t._UZ(10,"img",12)(11,"ion-card-header"),t.TgZ(12,"ion-card-content")(13,"p")(14,"b"),t._uU(15,"\u0627\u0644\u0648\u0635\u0641:"),t.qZA()(),t.TgZ(16,"p")(17,"b"),t._uU(18),t.qZA()(),t.TgZ(19,"p")(20,"b",13),t._uU(21,"\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641:"),t.qZA(),t._uU(22),t.qZA(),t.TgZ(23,"p")(24,"b"),t._uU(25," \u0631\u0642\u0645 \u062d\u0633\u0627\u0628:"),t.qZA(),t._uU(26),t.qZA(),t.TgZ(27,"p")(28,"b"),t._uU(29," \u0627\u0633\u0645 \u0635\u0627\u062d\u0628 \u0627\u0644\u062d\u0633\u0627\u0628:"),t.qZA(),t._uU(30),t.qZA(),t.YNc(31,T,4,1,"p",14),t.YNc(32,x,7,2,"p",14),t.TgZ(33,"ion-item"),t.YNc(34,U,2,0,"ion-badge",15),t.YNc(35,v,2,0,"ion-badge",16),t.YNc(36,I,2,0,"ion-badge",17),t.YNc(37,D,2,0,"ion-badge",18),t.YNc(38,C,2,0,"ion-badge",19),t.YNc(39,R,2,0,"ion-badge",20),t.TgZ(40,"ion-label"),t._uU(41,"\u0627\u0644\u062d\u0627\u0644\u0629:"),t.qZA()()(),t.TgZ(42,"ion-card")(43,"ion-card-content",21)(44,"ion-item-divider")(45,"ion-label"),t._uU(46,"\u0627\u0644\u0645\u0631\u0641\u0642\u0627\u062a"),t.qZA()(),t._UZ(47,"app-slide-modal",22),t.qZA()(),t.YNc(48,w,8,2,"ion-card",7),t.qZA()),2&n){const e=t.oxw();t.xp6(6),t.hij("\u0627\u0644\u0627\u0633\u0645: ",null==e.data?null:e.data.name,""),t.xp6(2),t.Oqu(t.xi3(9,18,null==e.data?null:e.data.created_at,"short")),t.xp6(2),t.Q6J("src",e.imageList[0],t.LSH)("alt",null==e.data?null:e.data.name),t.xp6(8),t.Oqu(null==e.data?null:e.data.description),t.xp6(4),t.hij(" ",null==e.data?null:e.data.mobile," "),t.xp6(4),t.hij(" ",null==e.data?null:e.data.account_number," "),t.xp6(4),t.hij(" ",null==e.data?null:e.data.account_owner," "),t.xp6(1),t.Q6J("ngIf",(null==e.data||null==e.data.rel_with_account_owner?null:e.data.rel_with_account_owner.length)>=5),t.xp6(1),t.Q6J("ngIf",null==e.data?null:e.data.mobile),t.xp6(2),t.Q6J("ngIf",1===(null==e.data?null:e.data.status)),t.xp6(1),t.Q6J("ngIf",2===(null==e.data?null:e.data.status)),t.xp6(1),t.Q6J("ngIf",3===(null==e.data?null:e.data.status)),t.xp6(1),t.Q6J("ngIf",4===(null==e.data?null:e.data.status)),t.xp6(1),t.Q6J("ngIf",5===(null==e.data?null:e.data.status)),t.xp6(1),t.Q6J("ngIf",6===(null==e.data?null:e.data.status)),t.xp6(8),t.Q6J("images",e.imageList),t.xp6(1),t.Q6J("ngIf",null==e.data?null:e.data.benefactor)}}function M(n,i){1&n&&(t.TgZ(0,"div")(1,"ion-list")(2,"ion-item",35)(3,"ion-label")(4,"h3"),t._UZ(5,"ion-skeleton-text",36),t.qZA(),t.TgZ(6,"p"),t._UZ(7,"ion-skeleton-text",37),t.qZA(),t.TgZ(8,"p"),t._UZ(9,"ion-skeleton-text",38),t.qZA()(),t.TgZ(10,"ion-avatar",1),t._UZ(11,"ion-skeleton-text",39),t.qZA()()()())}function P(n,i){1&n&&(t.TgZ(0,"ion-fab",40)(1,"ion-fab-button"),t._UZ(2,"ion-icon",41),t.qZA(),t.TgZ(3,"ion-fab-list",42)(4,"ion-fab-button"),t._UZ(5,"ion-icon",43),t.qZA(),t.TgZ(6,"ion-fab-button"),t._UZ(7,"ion-icon",44),t.qZA(),t.TgZ(8,"ion-fab-button",45),t._UZ(9,"ion-icon",46),t.qZA()()())}let Q=(()=>{var n;class i{constructor(a,u,l,r){this.router=a,this.route=u,this.helper=l,this.sup=r,this.showModal=!1,this.totalAmount=0,this.open=open}ngOnInit(){this.route.paramMap.subscribe(()=>{var a;let u=null===(a=this.router.getCurrentNavigation())||void 0===a?void 0:a.extras;if(u.id){this.data=u;const r=JSON.parse(this.data.images).filter(c=>/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/.test(c));this.imageList=r.map(c=>`https://iogenwxvdivtmnlnyrgs.supabase.co/storage/v1/object/public/bok/${c}`)}else this.requestId=this.route.snapshot.paramMap.get("id"),this.getDetails(this.requestId)}),this.isAdmin=this.route.snapshot.paramMap.get("role"),setTimeout(()=>{const a=this.data.benefactor.map(u=>parseFloat(u.amount));this.totalAmount=a.reduce((u,l)=>u+l,0)},1e3)}getDetails(a){var u=this;return(0,_.Z)(function*(){yield u.sup.getDataById("request_status",a,"*, benefactor(*)").then(l=>{if(200===l.status){u.data=l.data;const c=JSON.parse(u.data.images).filter(g=>/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/.test(g));u.imageList=c.map(g=>`https://iogenwxvdivtmnlnyrgs.supabase.co/storage/v1/object/public/bok/${g}`)}else u.helper.presentAlert("error")})})()}openImage(a){return window.open(a,"_blank")}openModel(){this.showModal=!0}}return(n=i).\u0275fac=function(a){return new(a||n)(t.Y36(h.F0),t.Y36(h.gz),t.Y36(Z.W),t.Y36(f.T))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-request-details"]],standalone:!0,features:[t.jDz],decls:13,vars:7,consts:[[3,"translucent"],["slot","start"],["color","light"],["slot","end"],["color","light","defaultHref","/tabs/requests"],[3,"fullscreen"],["color","light","class","animate__animated animate__backInLeft animate__delay-.2s",4,"ngIf"],[4,"ngIf"],[3,"id"],["slot","fixed","vertical","bottom","horizontal","end",4,"ngIf"],["color","light",1,"animate__animated","animate__backInLeft","animate__delay-.2s"],["alt","lost icon","src","/assets/images/person.jpg"],[3,"src","alt"],[1,"phone"],["class","label-siz",4,"ngIf"],["color","secondary","slot","end",4,"ngIf"],["color","warning","slot","end",4,"ngIf"],["color","primary","slot","end",4,"ngIf"],["color","primary-tint","slot","end",4,"ngIf"],["color","success","slot","end",4,"ngIf"],["color","danger","slot","end",4,"ngIf"],[1,"animate__animated","animate__backInLeft","animate__delay-.1s"],[3,"images"],[1,"label-siz"],["target","_blank",3,"href"],["color","primary","name","call"],["color","secondary","slot","end"],["color","warning","slot","end"],["color","primary","slot","end"],["color","primary-tint","slot","end"],["color","success","slot","end"],["color","danger","slot","end"],[4,"ngFor","ngForOf"],["slot","start",1,"do-text"],["slot","end",1,"do-text"],[1,"item"],["animated","true",2,"width","50%"],["animated","true",2,"width","80%"],["animated","true",2,"width","60%"],["animated","true"],["slot","fixed","vertical","bottom","horizontal","end"],["name","chevron-up-circle"],["side","top"],["name","document"],["name","color-palette"],["id","open-modal"],["name","create"]],template:function(a,u){1&a&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),t._UZ(3,"ion-menu-button",2),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5),t.qZA(),t.TgZ(6,"ion-buttons",3),t._UZ(7,"ion-back-button",4),t.qZA()()(),t.TgZ(8,"ion-content",5),t.YNc(9,J,49,21,"ion-card",6),t.YNc(10,M,12,0,"div",7),t._UZ(11,"app-request-modal",8),t.YNc(12,P,10,0,"ion-fab",9),t.qZA()),2&a&&(t.Q6J("translucent",!0),t.xp6(5),t.hij(" \u062d\u0627\u0644\u0629 \u0631\u0642\u0645: ",null==u.data?null:u.data.id,""),t.xp6(3),t.Q6J("fullscreen",!0),t.xp6(1),t.Q6J("ngIf",null==u.data?null:u.data.name),t.xp6(1),t.Q6J("ngIf",!u.data&&0===u.data||0===(null==u.data||null==u.data.name?null:u.data.name.length)),t.xp6(1),t.Q6J("id",null==u.data?null:u.data.id),t.xp6(1),t.Q6J("ngIf","admin"===u.isAdmin))},dependencies:[o.Pc,o.BJ,o.oU,o.yp,o.Sm,o.PM,o.FN,o.Zi,o.W2,o.IJ,o.W4,o.zq,o.Gu,o.gu,o.Ie,o.rH,o.Q$,o.q_,o.fG,o.CK,o.wd,o.sr,o.cs,d.ez,d.sg,d.O5,d.uU,m.u5,q,b.n],styles:[".phone[_ngcontent-%COMP%]{font-weight:700}.do-text[_ngcontent-%COMP%]{font-size:12px}"]}),i})()}}]);
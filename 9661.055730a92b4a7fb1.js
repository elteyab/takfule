"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9661],{9661:(I,d,r)=>{r.r(d),r.d(d,{RequestsPage:()=>T});var l=r(5861),u=r(1509),c=r(6814),e=r(6689),g=r(6958),p=r(1434),f=r(7626);function h(i,_){if(1&i){const o=e.EpF();e.TgZ(0,"ion-button",10),e.NdJ("click",function(){e.CHM(o);const n=e.oxw().$implicit,s=e.oxw();return e.KtG(s.openDetails(n))}),e._uU(1," \u062a\u0641\u0627\u0635\u064a\u0644"),e.qZA()}}function m(i,_){if(1&i){const o=e.EpF();e.TgZ(0,"ion-button",10),e.NdJ("click",function(){e.CHM(o);const n=e.oxw().$implicit,s=e.oxw();return e.KtG(s.openDetailsAdmin(n))}),e._uU(1," \u062a\u0641\u0627\u0635\u064a\u0644"),e.qZA()}}function Z(i,_){if(1&i&&(e.TgZ(0,"ion-card")(1,"ion-card-header")(2,"ion-label"),e._uU(3),e.qZA(),e.TgZ(4,"ion-label"),e._uU(5),e.ALo(6,"date"),e.qZA()(),e.TgZ(7,"ion-card-content")(8,"p"),e._uU(9),e.qZA(),e.TgZ(10,"p"),e._uU(11),e.qZA()(),e.YNc(12,h,2,0,"ion-button",9),e.YNc(13,m,2,0,"ion-button",9),e.qZA()),2&i){const o=_.$implicit,t=e.oxw();e.xp6(3),e.hij("\u062d\u0627\u0644\u0629#: ",o.id,""),e.xp6(2),e.hij("\u0627\u0644\u062a\u0627\u0631\u064a\u062e: ",e.xi3(6,6,o.created_at,"short"),""),e.xp6(4),e.hij("\u0627\u0644\u0627\u0633\u0645: ",o.name,""),e.xp6(2),e.hij("\u0648\u0635\u0641 \u0627\u0644\u062d\u0627\u0644\u0629: ",o.description,""),e.xp6(1),e.Q6J("ngIf",!t.userInfo||!(null!=t.userInfo&&t.userInfo.role)),e.xp6(1),e.Q6J("ngIf","admin"===(null==t.userInfo?null:t.userInfo.role))}}function A(i,_){1&i&&(e.TgZ(0,"div")(1,"ion-list")(2,"ion-item",11)(3,"ion-label")(4,"h3"),e._UZ(5,"ion-skeleton-text",12),e.qZA(),e.TgZ(6,"p"),e._UZ(7,"ion-skeleton-text",13),e.qZA(),e.TgZ(8,"p"),e._UZ(9,"ion-skeleton-text",14),e.qZA()(),e.TgZ(10,"ion-avatar",15),e._UZ(11,"ion-skeleton-text",16),e.qZA()()()())}let T=(()=>{var i;class _{constructor(t,n,s,a){this.router=t,this.helper=n,this.supabase=s,this.nav=a,this.page=0,this.userInfo=JSON.parse(localStorage.getItem("user"))}ngOnInit(){var t=this;return(0,l.Z)(function*(){t.supabase.getBenefactor().then(n=>{200!==n.status?t.helper.presentToast("no Data","primary"):t.request=n.data}).catch(n=>{console.log("error: ",n),t.helper.presentToast(`Error: ${n}`,"danger")})})()}openDetails(t){var n=this;return(0,l.Z)(function*(){yield n.nav.navigateForward(`/request-details/${t.id}/user`,t)})()}openDetailsAdmin(t){var n=this;return(0,l.Z)(function*(){yield n.nav.navigateForward(`/request-details/${t.id}/admin`,t)})()}onIonInfinite(t){var n=this;return(0,l.Z)(function*(){yield n.helper.startLoad(),n.page=n.page+1,setTimeout(()=>{n.helper.dismissLoader(),t.target.complete()},1e3)})()}doRefresh(t){setTimeout(()=>{this.page=1,this.ngOnInit(),t.target.complete()},2e3)}searchName(t){var n=this;return(0,l.Z)(function*(){let s=yield t.detail.value;s.length>0?n.supabase.search("request_status",s,"*,benefactor(*)","name_mobile_id").then(a=>{n.request=a.data}).catch(a=>{console.log("err: ",a)}):n.ngOnInit()})()}}return(i=_).\u0275fac=function(t){return new(t||i)(e.Y36(g.F0),e.Y36(p.W),e.Y36(f.T),e.Y36(u.SH))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-requests"]],standalone:!0,features:[e.jDz],decls:13,vars:4,consts:[[3,"translucent"],["placeholder","\u0627\u0628\u062d\u062b \u0628\u0640(\u0631\u0642\u0645 \u0627\u0644\u062d\u0627\u0644\u0629, \u0627\u0644\u0647\u0627\u062a\u0641 , \u0627\u0644\u0627\u0633\u0645)",3,"ionChange"],[1,"ion-padding",3,"fullscreen"],["slot","fixed",3,"ionRefresh"],["pullingIcon","arrow-down-circle-outline","pullingText","\u0627\u0633\u062d\u0628 \u0644\u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0635\u063a\u062d\u0629","refreshingSpinner","circles","refreshingText","\u062c\u0627\u0631\u064a \u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0645\u062d\u062a\u0648\u064a",2,"background-color","#B9DCFF","margin-top","2px","padding-bottom","23px"],[1,"animate__animated","animate__backInRight","animate__delay-.4s"],[4,"ngFor","ngForOf"],[4,"ngIf"],[3,"ionInfinite"],["expand","block",3,"click",4,"ngIf"],["expand","block",3,"click"],[1,"item"],["animated","true",2,"width","50%"],["animated","true",2,"width","80%"],["animated","true",2,"width","60%"],["slot","start"],["animated","true"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"\u0627\u0644\u062d\u0627\u0644\u0627\u062a"),e.qZA()(),e.TgZ(4,"ion-searchbar",1),e.NdJ("ionChange",function(a){return n.searchName(a)}),e.qZA()(),e.TgZ(5,"ion-content",2)(6,"ion-refresher",3),e.NdJ("ionRefresh",function(a){return n.doRefresh(a)}),e._UZ(7,"ion-refresher-content",4),e.qZA(),e.TgZ(8,"ion-list",5),e.YNc(9,Z,14,9,"ion-card",6),e.qZA(),e.YNc(10,A,12,0,"div",7),e.TgZ(11,"ion-infinite-scroll",8),e.NdJ("ionInfinite",function(a){return n.onIonInfinite(a)}),e._UZ(12,"ion-infinite-scroll-content"),e.qZA()()),2&t&&(e.Q6J("translucent",!0),e.xp6(5),e.Q6J("fullscreen",!0),e.xp6(4),e.Q6J("ngForOf",n.request),e.xp6(1),e.Q6J("ngIf",!n.request))},dependencies:[u.Pc,u.BJ,u.YG,u.PM,u.FN,u.Zi,u.W2,u.Gu,u.ju,u.MB,u.Ie,u.Q$,u.q_,u.nJ,u.Wo,u.VI,u.CK,u.wd,u.sr,u.j9,c.ez,c.sg,c.O5,c.uU],styles:["p[_ngcontent-%COMP%]{color:#000;font-size:medium}.do-text[_ngcontent-%COMP%]{font-size:12px}"]}),_})()}}]);
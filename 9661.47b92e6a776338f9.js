"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9661],{9661:(A,d,o)=>{o.r(d),o.d(d,{RequestsPage:()=>Z});var _=o(5861),g=o(9912),i=o(3614),l=o(6814),e=o(2029),p=o(1434),h=o(7626);function f(r,c){if(1&r){const a=e.EpF();e.TgZ(0,"ion-card",11),e.NdJ("click",function(){const u=e.CHM(a).$implicit,s=e.oxw();return e.KtG(s.openDetails(u))}),e.TgZ(1,"ion-card-header")(2,"span")(3,"b"),e._uU(4,"\u062d\u0627\u0644\u0629: #"),e.qZA(),e._uU(5),e.qZA(),e.TgZ(6,"span")(7,"b"),e._uU(8,"\u0627\u0644\u062a\u0627\u0631\u064a\u062e: "),e.qZA(),e._uU(9),e.ALo(10,"date"),e.qZA()(),e.TgZ(11,"ion-card-content")(12,"p")(13,"b"),e._uU(14,"\u0627\u0644\u0627\u0633\u0645: "),e.qZA(),e._uU(15),e.qZA(),e.TgZ(16,"p")(17,"b"),e._uU(18,"\u0648\u0635\u0641 \u0627\u0644\u062d\u0627\u0644\u0629: "),e.qZA(),e._uU(19),e.ALo(20,"slice"),e.qZA()(),e.TgZ(21,"ion-button",12),e.NdJ("click",function(){const u=e.CHM(a).$implicit,s=e.oxw();return e.KtG(s.openDetails(u))}),e._uU(22," \u062a\u0641\u0627\u0635\u064a\u0644 "),e.qZA()()}if(2&r){const a=c.$implicit;e.xp6(5),e.Oqu(a.id),e.xp6(4),e.Oqu(e.xi3(10,4,a.created_at,"short")),e.xp6(6),e.Oqu(a.name),e.xp6(4),e.hij("",e.Dn7(20,7,a.description,0,100),"...")}}function m(r,c){1&r&&(e.TgZ(0,"div")(1,"ion-list")(2,"ion-item",13)(3,"ion-label")(4,"h3"),e._UZ(5,"ion-skeleton-text",14),e.qZA(),e.TgZ(6,"p"),e._UZ(7,"ion-skeleton-text",15),e.qZA(),e.TgZ(8,"p"),e._UZ(9,"ion-skeleton-text",16),e.qZA()(),e.TgZ(10,"ion-avatar",17),e._UZ(11,"ion-skeleton-text",18),e.qZA()()()())}let Z=(()=>{var r;class c{constructor(n,t,u){this.helper=n,this.supabase=t,this.nav=u,this.page=0,this.userInfo=JSON.parse(localStorage.getItem("user"))}ngOnInit(){var n=this;return(0,_.Z)(function*(){n.supabase.getBenefactor().then(t=>{200!==t.status?n.helper.presentToast("no Data","primary"):n.request=t.data}).catch(t=>{console.log("error: ",t),n.helper.presentToast(`Error: ${t}`,"danger")})})()}openDetails(n){var t=this;return(0,_.Z)(function*(){var u;"admin"!==(null===(u=t.userInfo)||void 0===u?void 0:u.role)?yield t.nav.navigateForward(`/request-details/${n.id}/user`,n):yield t.nav.navigateForward(`/request-details/${n.id}/admin`,n)})()}openDetailsAdmin(n){var t=this;return(0,_.Z)(function*(){yield t.nav.navigateForward(`/request-details/${n.id}/admin`,n)})()}onIonInfinite(n){var t=this;return(0,_.Z)(function*(){yield t.helper.startLoad(),t.page=t.page+1,setTimeout(()=>{t.helper.dismissLoader(),n.target.complete()},1e3)})()}doRefresh(n){setTimeout(()=>{this.page=1,this.ngOnInit(),n.target.complete()},2e3)}searchName(n){var t=this;return(0,_.Z)(function*(){let u=yield n.detail.value;u.length>0?t.supabase.search("request_status",u,"*,benefactor(*)","name_mobile_id").then(s=>{t.request=s.data}).catch(s=>{console.log("err: ",s)}):t.ngOnInit()})()}}return(r=c).\u0275fac=function(n){return new(n||r)(e.Y36(p.W),e.Y36(h.T),e.Y36(i.SH))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-requests"]],standalone:!0,features:[e.jDz],decls:16,vars:3,consts:[[3,"translucent"],["slot","end"],["routerLink","/add-request"],["color","light","slot","icon-only","name","add-circle-sharp"],["placeholder","\u0627\u0628\u062d\u062b \u0628\u0640(\u0631\u0642\u0645 \u0627\u0644\u062d\u0627\u0644\u0629, \u0627\u0644\u0647\u0627\u062a\u0641 , \u0627\u0644\u0627\u0633\u0645)",3,"ionChange"],["slot","fixed",3,"ionRefresh"],["pullingIcon","arrow-down-circle-outline","pullingText","\u0627\u0633\u062d\u0628 \u0644\u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0635\u063a\u062d\u0629","refreshingSpinner","circles","refreshingText","\u062c\u0627\u0631\u064a \u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0645\u062d\u062a\u0648\u064a",2,"background-color","#B9DCFF","margin-top","2px","padding-bottom","23px"],[1,"animate__animated","animate__backInRight","animate__delay-.4s"],[3,"click",4,"ngFor","ngForOf"],[4,"ngIf"],[3,"ionInfinite"],[3,"click"],["expand","block",3,"click"],[1,"item"],["animated","true",2,"width","50%"],["animated","true",2,"width","80%"],["animated","true",2,"width","60%"],["slot","start"],["animated","true"]],template:function(n,t){1&n&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"\u0627\u0644\u062d\u0627\u0644\u0627\u062a"),e.qZA(),e.TgZ(4,"ion-buttons",1)(5,"ion-button",2),e._UZ(6,"ion-icon",3),e.qZA()()(),e.TgZ(7,"ion-searchbar",4),e.NdJ("ionChange",function(s){return t.searchName(s)}),e.qZA()(),e.TgZ(8,"ion-content")(9,"ion-refresher",5),e.NdJ("ionRefresh",function(s){return t.doRefresh(s)}),e._UZ(10,"ion-refresher-content",6),e.qZA(),e.TgZ(11,"ion-list",7),e.YNc(12,f,23,11,"ion-card",8),e.qZA(),e.YNc(13,m,12,0,"div",9),e.TgZ(14,"ion-infinite-scroll",10),e.NdJ("ionInfinite",function(s){return t.onIonInfinite(s)}),e._UZ(15,"ion-infinite-scroll-content"),e.qZA()()),2&n&&(e.Q6J("translucent",!0),e.xp6(12),e.Q6J("ngForOf",t.request),e.xp6(1),e.Q6J("ngIf",!t.request))},dependencies:[i.Pc,i.BJ,i.YG,i.Sm,i.PM,i.FN,i.Zi,i.W2,i.Gu,i.gu,i.ju,i.MB,i.Ie,i.Q$,i.q_,i.nJ,i.Wo,i.VI,i.CK,i.wd,i.sr,i.j9,i.YI,l.ez,l.sg,l.O5,l.OU,l.uU,g.rH],styles:["p[_ngcontent-%COMP%]{color:#000;font-size:medium}.do-text[_ngcontent-%COMP%]{font-size:12px}ion-card[_ngcontent-%COMP%]{background:rgba(244,245,248,.9607843137)}"]}),c})()}}]);
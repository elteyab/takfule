"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9107],{9107:(P,f,i)=>{i.r(f),i.d(f,{BenefactorPage:()=>T});var c=i(5861),l=i(6814),d=i(95),a=i(3614),e=i(2029),g=i(9912),h=i(1434),p=i(7626);function m(o,s){if(1&o){const u=e.EpF();e.TgZ(0,"ion-button",8),e.NdJ("click",function(){e.CHM(u);const n=e.oxw().$implicit,r=e.oxw();return e.KtG(r.openDetails(n))}),e._uU(1," \u062a\u0641\u0627\u0635\u064a\u0644"),e.qZA()}}function A(o,s){if(1&o){const u=e.EpF();e.TgZ(0,"ion-button",8),e.NdJ("click",function(){e.CHM(u);const n=e.oxw().$implicit,r=e.oxw();return e.KtG(r.openDetailsAdmin(n))}),e._uU(1," \u062a\u0641\u0627\u0635\u064a\u0644"),e.qZA()}}function Z(o,s){if(1&o&&(e.TgZ(0,"ion-list")(1,"ion-card")(2,"ion-card-header")(3,"ion-label"),e._uU(4," \u062a\u0628\u0631\u0639 \u0644\u0644\u062d\u0627\u0644\u0629 #"),e.TgZ(5,"b"),e._uU(6),e.qZA()(),e.TgZ(7,"ion-label"),e._uU(8),e.ALo(9,"date"),e.qZA()(),e.TgZ(10,"ion-card-content")(11,"p"),e._uU(12),e.qZA()(),e.YNc(13,m,2,0,"ion-button",7),e.YNc(14,A,2,0,"ion-button",7),e.qZA()()),2&o){const u=s.$implicit,t=e.oxw();e.xp6(6),e.Oqu(null==u?null:u.id),e.xp6(2),e.hij("\u0628\u0640\u062a\u0627\u0631\u064a\u062e: ",e.xi3(9,5,u.created_at,"short"),""),e.xp6(4),e.hij("\u0627\u0644\u064a: ",u.name," "),e.xp6(1),e.Q6J("ngIf",!t.userInfo||!(null!=t.userInfo&&t.userInfo.role)),e.xp6(1),e.Q6J("ngIf","admin"===(null==t.userInfo?null:t.userInfo.role))}}function b(o,s){1&o&&(e.TgZ(0,"div")(1,"ion-list",9)(2,"ion-item",10)(3,"ion-label")(4,"h3"),e._UZ(5,"ion-skeleton-text",11),e.qZA(),e.TgZ(6,"p"),e._UZ(7,"ion-skeleton-text",12),e.qZA(),e.TgZ(8,"p"),e._UZ(9,"ion-skeleton-text",13),e.qZA()(),e.TgZ(10,"ion-avatar",14),e._UZ(11,"ion-skeleton-text",15),e.qZA()()(),e.TgZ(12,"ion-button",16),e._uU(13,"\u0644\u0627 \u062a\u0648\u062c\u062f \u0628\u064a\u0627\u0646\u0627\u062a"),e.qZA()())}let T=(()=>{var o;class s{constructor(t,n,r,_){this.router=t,this.helper=n,this.supabase=r,this.nav=_,this.userInfo=JSON.parse(localStorage.getItem("user"))}ngOnInit(){this.supabase.getData("benefactor","*,request_status(*)").then(t=>{this.benefactor=t.data,0===this.benefactor.length&&this.helper.presentToast("\u0644\u0627 \u062a\u0648\u062c\u062f \u0628\u064a\u0627\u0646\u0627\u062a!!")})}openDetails(t){var n=this;return(0,c.Z)(function*(){yield n.nav.navigateForward(`/benefactor-details/${t.id}/user`,t)})()}openDetailsAdmin(t){var n=this;return(0,c.Z)(function*(){yield n.nav.navigateForward(`/benefactor-details/${t.id}/admin`,t)})()}searchName(t){var n=this;return(0,c.Z)(function*(){yield n.helper.startLoad();let r=yield t.detail.value;r.length>0?n.supabase.getDataById("benefactor",r,"*,request_status(*)",!0,"status_number").then(_=>{n.helper.dismissLoader(),n.benefactor=_.data}).catch(_=>{n.helper.dismissLoader(),n.helper.presentToast(`error: ${_}`)}):n.ngOnInit()})()}}return(o=s).\u0275fac=function(t){return new(t||o)(e.Y36(g.F0),e.Y36(h.W),e.Y36(p.T),e.Y36(a.SH))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-benefactor"]],standalone:!0,features:[e.jDz],decls:10,vars:4,consts:[[3,"translucent"],["slot","end"],["color","light","defaultHref","/dashboard"],["placeholder","\u0627\u0628\u062d\u062b \u0628\u0640(\u0631\u0642\u0645 \u0627\u0644\u062d\u0627\u0644\u0629)",3,"ionChange"],[3,"fullscreen"],[4,"ngFor","ngForOf"],[4,"ngIf"],["expand","block",3,"click",4,"ngIf"],["expand","block",3,"click"],[1,"animate__animated","animate__backInRight","animate__delay-.4s"],[1,"item"],["animated","true",2,"width","50%"],["animated","true",2,"width","80%"],["animated","true",2,"width","60%"],["slot","start"],["animated","true"],["size","full"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062a\u0628\u0631\u0639\u0627\u062a"),e.qZA(),e.TgZ(4,"ion-buttons",1),e._UZ(5,"ion-back-button",2),e.qZA()(),e.TgZ(6,"ion-searchbar",3),e.NdJ("ionChange",function(_){return n.searchName(_)}),e.qZA()(),e.TgZ(7,"ion-content",4),e.YNc(8,Z,15,8,"ion-list",5),e.YNc(9,b,14,0,"div",6),e.qZA()),2&t&&(e.Q6J("translucent",!0),e.xp6(7),e.Q6J("fullscreen",!0),e.xp6(1),e.Q6J("ngForOf",n.benefactor),e.xp6(1),e.Q6J("ngIf",!n.benefactor||0===n.benefactor.length||void 0===n.benefactor.id))},dependencies:[a.Pc,a.BJ,a.oU,a.YG,a.Sm,a.PM,a.FN,a.Zi,a.W2,a.Gu,a.Ie,a.Q$,a.q_,a.VI,a.CK,a.wd,a.sr,a.j9,a.cs,l.ez,l.sg,l.O5,l.uU,d.u5]}),s})()}}]);
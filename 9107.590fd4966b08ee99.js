"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9107],{9107:(E,c,a)=>{a.r(c),a.d(c,{BenefactorPage:()=>Z});var d=a(5861),r=a(6814),f=a(95),e=a(1509),t=a(6689),g=a(6958),p=a(1434),h=a(7626);function A(o,s){if(1&o){const u=t.EpF();t.TgZ(0,"ion-list")(1,"ion-card")(2,"ion-card-header")(3,"ion-label"),t._uU(4," \u062a\u0628\u0631\u0639 \u0644\u0644\u062d\u0627\u0644\u0629 #"),t.TgZ(5,"b"),t._uU(6),t.qZA()(),t.TgZ(7,"ion-label"),t._uU(8),t.ALo(9,"date"),t.qZA()(),t.TgZ(10,"ion-card-content")(11,"p"),t._uU(12),t.qZA()(),t.TgZ(13,"ion-button",4),t.NdJ("click",function(){const _=t.CHM(u).$implicit,l=t.oxw();return t.KtG(l.openDetails(_))}),t._uU(14," \u062a\u0641\u0627\u0635\u064a\u0644"),t.qZA()()()}if(2&o){const u=s.$implicit;t.xp6(6),t.Oqu(null==u?null:u.id),t.xp6(2),t.hij("\u0628\u0640\u062a\u0627\u0631\u064a\u062e: ",t.xi3(9,3,u.created_at,"short"),""),t.xp6(4),t.hij("\u0627\u0644\u064a: ",u.name," ")}}function P(o,s){1&o&&(t.TgZ(0,"div")(1,"ion-list")(2,"ion-item",5)(3,"ion-label")(4,"h3"),t._UZ(5,"ion-skeleton-text",6),t.qZA(),t.TgZ(6,"p"),t._UZ(7,"ion-skeleton-text",7),t.qZA(),t.TgZ(8,"p"),t._UZ(9,"ion-skeleton-text",8),t.qZA()(),t.TgZ(10,"ion-avatar",9),t._UZ(11,"ion-skeleton-text",10),t.qZA()()()())}let Z=(()=>{var o;class s{constructor(n,i,_,l){this.router=n,this.helper=i,this.supabase=_,this.nav=l}ngOnInit(){this.supabase.getData("benefactor","*,request_status(*)").then(n=>{console.log(n.data),this.benefactor=n.data,0===this.benefactor.length&&this.helper.presentToast("\u0644\u0627 \u062a\u0648\u062c\u062f \u0628\u064a\u0627\u0646\u0627\u062a!!")})}openDetails(n){var i=this;return(0,d.Z)(function*(){yield i.nav.navigateForward(`/benefactor-details/${n.id}`,n)})()}}return(o=s).\u0275fac=function(n){return new(n||o)(t.Y36(g.F0),t.Y36(p.W),t.Y36(h.T),t.Y36(e.SH))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-benefactor"]],standalone:!0,features:[t.jDz],decls:7,vars:4,consts:[[3,"translucent"],[3,"fullscreen"],[4,"ngFor","ngForOf"],[4,"ngIf"],["expand","block",3,"click"],[1,"item"],["animated","true",2,"width","50%"],["animated","true",2,"width","80%"],["animated","true",2,"width","60%"],["slot","start"],["animated","true"]],template:function(n,i){1&n&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t._uU(3,"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062a\u0628\u0631\u0639\u0627\u062a"),t.qZA()()(),t.TgZ(4,"ion-content",1),t.YNc(5,A,15,6,"ion-list",2),t.YNc(6,P,12,0,"div",3),t.qZA()),2&n&&(t.Q6J("translucent",!0),t.xp6(4),t.Q6J("fullscreen",!0),t.xp6(1),t.Q6J("ngForOf",i.benefactor),t.xp6(1),t.Q6J("ngIf",!i.benefactor))},dependencies:[e.Pc,e.BJ,e.YG,e.PM,e.FN,e.Zi,e.W2,e.Gu,e.Ie,e.Q$,e.q_,e.CK,e.wd,e.sr,r.ez,r.sg,r.O5,r.uU,f.u5]}),s})()}}]);
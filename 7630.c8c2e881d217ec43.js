"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7630],{7630:(P,_,a)=>{a.r(_),a.d(_,{ManagersPage:()=>Z});var g=a(5861),c=a(6814),m=a(95),t=a(3614),n=a(2029),d=a(1434),p=a(7626);function h(i,l){if(1&i&&(n.TgZ(0,"ion-item-sliding")(1,"ion-item",6)(2,"ion-avatar",7),n._UZ(3,"img",8),n.qZA(),n.TgZ(4,"ion-label"),n._uU(5),n.qZA(),n.TgZ(6,"p"),n._uU(7),n.qZA()(),n.TgZ(8,"ion-item-options",1)(9,"ion-item-option",9),n._UZ(10,"ion-icon",10),n.qZA(),n.TgZ(11,"ion-item-option",11),n._UZ(12,"ion-icon",12),n.qZA(),n.TgZ(13,"ion-item-option",13),n._UZ(14,"ion-icon",14),n.qZA()()()),2&i){const o=l.$implicit;n.xp6(1),n.Q6J("button",!0),n.xp6(2),n.Q6J("alt",null==o?null:o.name),n.xp6(2),n.Oqu(null==o?null:o.name),n.xp6(2),n.Oqu(null==o?null:o.phone)}}let Z=(()=>{var i;class l{constructor(e,r){this.helper=e,this.sub=r}ngOnInit(){var e=this;return(0,g.Z)(function*(){yield e.getData()})()}getData(){var e=this;return(0,g.Z)(function*(){yield e.helper.startLoad(),e.sub.getData("profiles","*",{column:"type",value:"admin"}).then(s=>{var u;e.helper.dismissLoader(),console.log("response: ",s),200===s.status?e.managers=s.data:e.helper.presentAlert(`error: ${null===(u=s.error)||void 0===u?void 0:u.message.toString()}`)}).catch(s=>{e.helper.dismissLoader(),e.helper.presentAlert(`error: ${s.toString()}`)})})()}}return(i=l).\u0275fac=function(e){return new(e||i)(n.Y36(d.W),n.Y36(p.T))},i.\u0275cmp=n.Xpm({type:i,selectors:[["app-managers"]],standalone:!0,features:[n.jDz],decls:9,vars:3,consts:[[3,"translucent"],["slot","end"],["color","light","defaultHref","/dashboard"],["color","light"],[3,"inset"],[4,"ngFor","ngForOf"],[3,"button"],["aria-hidden","true","slot","start"],["src","/assets/images/person.jpg",3,"alt"],["color","warning"],["slot","icon-only","name","pin"],["color","tertiary"],["slot","icon-only","name","share"],["color","danger","expandable","true"],["slot","icon-only","name","trash"]],template:function(e,r){1&e&&(n.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),n._uU(3,"\u0627\u0644\u0645\u0634\u0631\u0641\u064a\u0646"),n.qZA(),n.TgZ(4,"ion-buttons",1),n._UZ(5,"ion-back-button",2),n.qZA()()(),n.TgZ(6,"ion-content",3)(7,"ion-list",4),n.YNc(8,h,15,4,"ion-item-sliding",5),n.qZA()()),2&e&&(n.Q6J("translucent",!0),n.xp6(7),n.Q6J("inset",!0),n.xp6(1),n.Q6J("ngForOf",r.managers))},dependencies:[t.Pc,t.BJ,t.oU,t.Sm,t.W2,t.Gu,t.gu,t.Ie,t.u8,t.IK,t.td,t.Q$,t.q_,t.wd,t.sr,t.cs,c.ez,c.sg,m.u5]}),l})()}}]);
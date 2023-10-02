"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1734],{1734:(D,v,t)=>{t.r(v),t.d(v,{LoginPage:()=>L});var m=t(5861),A=t(6814),e=t(95),n=t(3614),r=t(2029),T=t(7626),E=t(1434),b=t(9912);function h(l,s){1&l&&(r.TgZ(0,"span",10),r._uU(1," \u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641 \u0645\u0637\u0644\u0648\u0628 "),r.qZA())}function I(l,s){1&l&&(r.TgZ(0,"span",10),r._uU(1," \u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0627\u0644\u0645\u062f\u062e\u0644 \u063a\u064a\u0631 \u0635\u062d\u064a\u062d "),r.qZA())}function Z(l,s){1&l&&(r.TgZ(0,"span",10),r._uU(1," \u062d\u0642\u0644 \u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631 \u0645\u0637\u0644\u0648\u0628 "),r.qZA())}function C(l,s){1&l&&(r.TgZ(0,"span",10),r._uU(1," \u0627\u0642\u0644 \u0639\u062f\u062f \u0644\u0644\u0627\u062d\u0631\u0641 6 "),r.qZA())}let L=(()=>{var l;class s{constructor(o,u,i,a){this.supabase=o,this.formBuilder=u,this.helper=i,this.router=a,this.isSubmitted=!1}ngOnInit(){var o=this;return(0,m.Z)(function*(){o.loginForm=o.formBuilder.group({email:["",[e.kI.required,e.kI.email]],password:["",[e.kI.required,e.kI.minLength(5),e.kI.maxLength(60)]]})})()}get errorControl(){return this.loginForm.controls}submitForm(){var o=this;return(0,m.Z)(function*(){return o.isSubmitted=!0,o.loginForm.valid?void(yield o.sendToServer(o.loginForm.value)):(yield o.helper.presentToast("\u0627\u0631\u062c\u0627\u0621 \u0627\u062f\u062e\u0627\u0644 \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0644 \u0645\u0637\u0644\u0648\u0628\u0629"),!1)})()}sendToServer(o){var u=this;return(0,m.Z)(function*(){yield u.helper.startLoad(),u.supabase.signIn(o.email,o.password).then(i=>{var a,d,c,_;if(null!=i.data.user||null!=i.data.user)return localStorage.setItem("session",JSON.stringify({access_token:null===(a=i.data)||void 0===a||null===(a=a.session)||void 0===a?void 0:a.access_token,expires_at:null===(d=i.data)||void 0===d||null===(d=d.session)||void 0===d?void 0:d.expires_at,refresh_token:null==i||null===(c=i.data.session)||void 0===c?void 0:c.refresh_token})),u.supabase.getDataById("profiles",null===(_=i.data)||void 0===_?void 0:_.user.id,"*",!1,"user_id").then(g=>{var f,p;console.log("userInfo: ",g),g.data&&localStorage.setItem("user",JSON.stringify({auth_id:null===(f=i.data)||void 0===f?void 0:f.user.id,profile_id:g.data.id,role:g.data.type,email:null===(p=i.data.user)||void 0===p?void 0:p.email,phone:g.data.phone,name:g.data.name}))}),u.helper.dismissLoader(),void u.router.navigate(["/"]);u.helper.dismissLoader(),u.helper.presentAlert("\u0627\u0644\u0628\u064a\u0646\u0627\u062a \u0627\u0644\u0645\u062f\u062e\u0644\u0629 \u063a\u064a\u0631 \u0635\u062d\u064a\u062d\u0629")}).catch(i=>{u.helper.dismissLoader(),console.error("err: ",i)})})()}}return(l=s).\u0275fac=function(o){return new(o||l)(r.Y36(T.T),r.Y36(e.qu),r.Y36(E.W),r.Y36(b.F0))},l.\u0275cmp=r.Xpm({type:l,selectors:[["app-login"]],standalone:!0,features:[r.jDz],decls:22,vars:7,consts:[[3,"translucent"],["slot","end"],["color","light","defaultHref","/tabs/setting"],[3,"fullscreen"],["novalidate","",3,"formGroup","ngSubmit"],["lines","full"],["label","\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a","labelPlacement","floating","name","email","formControlName","email","placeholder","\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a"],["class","error ion-padding",4,"ngIf"],["label","\u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631","labelPlacement","floating","formControlName","password","type","password","placeholder","\u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631 \u0644\u062a\u0627\u0645\u064a\u0646 \u062d\u0633\u0627\u0628\u0643"],["type","submit","color","primary","expand","block"],[1,"error","ion-padding"]],template:function(o,u){1&o&&(r.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),r._uU(3,"\u062a\u0633\u062c\u064a\u0644 \u062f\u062e\u0648\u0644"),r.qZA(),r.TgZ(4,"ion-buttons",1),r._UZ(5,"ion-back-button",2),r.qZA()()(),r.TgZ(6,"ion-content",3)(7,"form",4),r.NdJ("ngSubmit",function(){return u.submitForm()}),r.TgZ(8,"ion-card")(9,"ion-list")(10,"ion-item",5),r._UZ(11,"ion-input",6),r.qZA(),r.YNc(12,h,2,0,"span",7),r.YNc(13,I,2,0,"span",7),r.TgZ(14,"ion-item",5),r._UZ(15,"ion-input",8),r.qZA(),r.YNc(16,Z,2,0,"span",7),r.YNc(17,C,2,0,"span",7),r.qZA(),r.TgZ(18,"ion-row")(19,"ion-col")(20,"ion-button",9),r._uU(21,"\u0627\u0644\u062a\u0627\u0644\u064a"),r.qZA()()()()()()),2&o&&(r.Q6J("translucent",!0),r.xp6(6),r.Q6J("fullscreen",!0),r.xp6(1),r.Q6J("formGroup",u.loginForm),r.xp6(5),r.Q6J("ngIf",u.isSubmitted&&(null==u.errorControl.email.errors?null:u.errorControl.email.errors.required)),r.xp6(1),r.Q6J("ngIf",u.isSubmitted&&(null==u.errorControl.email.errors?null:u.errorControl.email.errors.pattern)),r.xp6(3),r.Q6J("ngIf",u.isSubmitted&&(null==u.errorControl.password.errors?null:u.errorControl.password.errors.required)),r.xp6(1),r.Q6J("ngIf",u.isSubmitted&&(null==u.errorControl.password.errors?null:u.errorControl.password.errors.minlength)))},dependencies:[n.Pc,n.oU,n.YG,n.Sm,n.PM,n.wI,n.W2,n.Gu,n.pK,n.Ie,n.q_,n.Nd,n.wd,n.sr,n.j9,n.cs,A.ez,A.O5,e.u5,e._Y,e.JJ,e.JL,e.UX,e.sg,e.u],styles:[".error[_ngcontent-%COMP%]{color:var(--ion-color-danger)}.iconEye[_ngcontent-%COMP%]{font-size:24px;padding-left:4px;padding-top:12px;vertical-align:middle}ion-item[_ngcontent-%COMP%]{margin-bottom:10px;background:transparent;border:1px solid var(--ion-color-secondary);--highlight-height: 0px;--highlight-color-valid: var(--ion-color-secondary);--highlight-color-focused: var(--ion-color-secondary);--highlight-color-invalid: var(--ion-color-secondary)}"]}),s})()}}]);
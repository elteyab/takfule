"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8108],{8108:(J,c,a)=>{a.r(c),a.d(c,{SignupPage:()=>w});var m=a(5861),f=a(6814),o=a(95),i=a(3614),u=a(2029),A=a(7626),P=a(1434),T=a(9912);function Z(n,t){1&n&&(u.TgZ(0,"span",17),u._uU(1," \u062d\u0642\u0644 \u0627\u0644\u0627\u0633\u0645 \u0645\u0637\u0644\u0648\u0628 "),u.qZA())}function v(n,t){1&n&&(u.TgZ(0,"span",17),u._uU(1," \u0627\u0642\u0644 \u0639\u062f\u062f \u0644\u0640 \u0627\u062d\u0631\u0641 \u0627\u0644\u0627\u0633\u0645 \u0647\u064a 5 "),u.qZA())}function S(n,t){1&n&&(u.TgZ(0,"span",17),u._uU(1," \u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641 \u0645\u0637\u0644\u0648\u0628 "),u.qZA())}function C(n,t){1&n&&(u.TgZ(0,"span",17),u._uU(1," \u062a\u0627\u0643\u062f \u0645\u0646 \u062a\u0646\u0633\u064a\u0642 \u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641 "),u.qZA())}function I(n,t){1&n&&(u.TgZ(0,"span",17),u._uU(1," \u0627\u0642\u0644 \u0639\u062f\u062f \u0644\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641 \u0647\u0648 9 "),u.qZA())}function b(n,t){1&n&&(u.TgZ(0,"span",17),u._uU(1," \u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641 \u0645\u0637\u0644\u0648\u0628 "),u.qZA())}function U(n,t){1&n&&(u.TgZ(0,"span",17),u._uU(1," \u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0627\u0644\u0645\u062f\u062e\u0644 \u063a\u064a\u0631 \u0635\u062d\u064a\u062d "),u.qZA())}function E(n,t){1&n&&u._UZ(0,"ion-icon",18)}function y(n,t){1&n&&u._UZ(0,"ion-icon",19)}function D(n,t){1&n&&(u.TgZ(0,"span",17),u._uU(1," \u062d\u0642\u0644 \u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631 \u0645\u0637\u0644\u0648\u0628 "),u.qZA())}function F(n,t){1&n&&(u.TgZ(0,"span",17),u._uU(1," \u0627\u0642\u0644 \u0639\u062f\u062f \u0644\u0644\u0627\u062d\u0631\u0641 6 "),u.qZA())}let w=(()=>{var n;class t{constructor(e,r,l,s){this.supabase=e,this.formBuilder=r,this.helper=l,this.router=s,this.isSubmitted=!1,this.showPassword=!1,this.type="password"}ngOnInit(){var e=this;return(0,m.Z)(function*(){e.signUpForm=e.formBuilder.group({name:["",[o.kI.required,o.kI.minLength(2)]],email:["",[o.kI.required,o.kI.email]],phone:["",[o.kI.required,o.kI.pattern("^[0-9]+$"),o.kI.minLength(8),o.kI.maxLength(15)]],password:["",[o.kI.required,o.kI.minLength(5),o.kI.maxLength(60)]]})})()}get errorControl(){return this.signUpForm.controls}submitForm(){var e=this;return(0,m.Z)(function*(){return e.isSubmitted=!0,e.signUpForm.valid?void(yield e.sendToServer(e.signUpForm.value)):(yield e.helper.presentToast("\u0627\u0644\u0631\u062c\u0627\u0621 \u0627\u0643\u0645\u0627\u0644 \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0644!"),!1)})()}sendToServer(e){var r=this;return(0,m.Z)(function*(){yield r.helper.startLoad(),r.supabase.signUp(e.email,e.password).then(l=>{var s,p,_;if(null!=l.data.user||null!=l.data.user)return localStorage.setItem("session",JSON.stringify({access_token:null===(s=l.data)||void 0===s||null===(s=s.session)||void 0===s?void 0:s.access_token,expires_at:null===(p=l.data)||void 0===p||null===(p=p.session)||void 0===p?void 0:p.expires_at,refresh_token:null==l||null===(_=l.data.session)||void 0===_?void 0:_.refresh_token})),r.supabase.saveData("profiles",{name:e.name,phone:e.phone,user_id:l.data.user.id}).then(g=>{var d;console.log("userInfo: ",g),g.data&&localStorage.setItem("user",JSON.stringify({auth_id:g.data.user_id,profile_id:g.data.id,role:g.data.type,email:null===(d=l.data.user)||void 0===d?void 0:d.email,phone:e.phone,name:e.name}))}),r.helper.dismissLoader(),void r.router.navigate(["/"]);r.helper.dismissLoader(),r.helper.presentAlert("\u0627\u0644\u0628\u064a\u0646\u0627\u062a \u0627\u0644\u0645\u062f\u062e\u0644\u0629 \u063a\u064a\u0631 \u0635\u062d\u064a\u062d\u0629")}).catch(l=>{r.helper.dismissLoader(),console.error("err: ",l)})})()}toggleShow(){this.showPassword=!this.showPassword,this.type=this.showPassword?"text":"password"}}return(n=t).\u0275fac=function(e){return new(e||n)(u.Y36(A.T),u.Y36(o.qu),u.Y36(P.W),u.Y36(T.F0))},n.\u0275cmp=u.Xpm({type:n,selectors:[["app-signup"]],standalone:!0,features:[u.jDz],decls:34,vars:15,consts:[[3,"translucent"],["color","primary"],[1,"ion-text-center"],["slot","end"],["color","light","defaultHref","/tabs/setting"],[3,"fullscreen"],["novalidate","",3,"formGroup","ngSubmit"],["label","\u0627\u0633\u0645 \u0628\u0627\u0644\u0643\u0627\u0645\u0644","labelPlacement","floating","formControlName","name","placeholder","\u0627\u062f\u062e\u0644 \u0627\u0633\u0645\u0643"],["class","error ion-padding",4,"ngIf"],["lines","full"],["label","\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641","labelPlacement","floating","name","number","formControlName","phone","placeholder","\u0627\u062f\u062e\u0644 \u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641"],["label","\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a","labelPlacement","floating","name","email","formControlName","email","placeholder","\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a"],["label","\u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631","labelPlacement","floating","formControlName","password","placeholder","\u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631 \u0644\u062a\u0627\u0645\u064a\u0646 \u062d\u0633\u0627\u0628\u0643",3,"type"],["slot","end","fill","clear",1,"seeClient",3,"click"],["name","eye-outline","color","warning","class","iconEye",4,"ngIf"],["name","eye-off-outline","color","warning","class","iconEye",4,"ngIf"],["type","submit","color","primary","expand","block"],[1,"error","ion-padding"],["name","eye-outline","color","warning",1,"iconEye"],["name","eye-off-outline","color","warning",1,"iconEye"]],template:function(e,r){1&e&&(u.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-title",2),u._uU(3,"\u062a\u0633\u062c\u064a\u0644 \u062c\u062f\u064a\u062f"),u.qZA(),u.TgZ(4,"ion-buttons",3),u._UZ(5,"ion-back-button",4),u.qZA()()(),u.TgZ(6,"ion-content",5)(7,"form",6),u.NdJ("ngSubmit",function(){return r.submitForm()}),u.TgZ(8,"ion-card")(9,"ion-list")(10,"ion-item"),u._UZ(11,"ion-input",7),u.qZA(),u.YNc(12,Z,2,0,"span",8),u.YNc(13,v,2,0,"span",8),u.TgZ(14,"ion-item",9),u._UZ(15,"ion-input",10),u.qZA(),u.YNc(16,S,2,0,"span",8),u.YNc(17,C,2,0,"span",8),u.YNc(18,I,2,0,"span",8),u.TgZ(19,"ion-item",9),u._UZ(20,"ion-input",11),u.qZA(),u.YNc(21,b,2,0,"span",8),u.YNc(22,U,2,0,"span",8),u.TgZ(23,"ion-item",9),u._UZ(24,"ion-input",12),u.TgZ(25,"ion-button",13),u.NdJ("click",function(){return r.toggleShow()}),u.YNc(26,E,1,0,"ion-icon",14),u.YNc(27,y,1,0,"ion-icon",15),u.qZA()(),u.YNc(28,D,2,0,"span",8),u.YNc(29,F,2,0,"span",8),u.qZA(),u.TgZ(30,"ion-row")(31,"ion-col")(32,"ion-button",16),u._uU(33,"\u0627\u0644\u062a\u0627\u0644\u064a"),u.qZA()()()()()()),2&e&&(u.Q6J("translucent",!0),u.xp6(6),u.Q6J("fullscreen",!0),u.xp6(1),u.Q6J("formGroup",r.signUpForm),u.xp6(5),u.Q6J("ngIf",r.isSubmitted&&(null==r.errorControl.name.errors?null:r.errorControl.name.errors.required)),u.xp6(1),u.Q6J("ngIf",r.isSubmitted&&(null==r.errorControl.name.errors?null:r.errorControl.name.errors.minlength)),u.xp6(3),u.Q6J("ngIf",r.isSubmitted&&(null==r.errorControl.phone.errors?null:r.errorControl.phone.errors.required)),u.xp6(1),u.Q6J("ngIf",r.isSubmitted&&(null==r.errorControl.phone.errors?null:r.errorControl.phone.errors.pattern)),u.xp6(1),u.Q6J("ngIf",r.isSubmitted&&(null==r.errorControl.phone.errors?null:r.errorControl.phone.errors.minlength)),u.xp6(3),u.Q6J("ngIf",r.isSubmitted&&(null==r.errorControl.email.errors?null:r.errorControl.email.errors.required)),u.xp6(1),u.Q6J("ngIf",r.isSubmitted&&(null==r.errorControl.email.errors?null:r.errorControl.email.errors.pattern)),u.xp6(2),u.Q6J("type",r.type),u.xp6(2),u.Q6J("ngIf",r.showPassword),u.xp6(1),u.Q6J("ngIf",!r.showPassword),u.xp6(1),u.Q6J("ngIf",r.isSubmitted&&(null==r.errorControl.password.errors?null:r.errorControl.password.errors.required)),u.xp6(1),u.Q6J("ngIf",r.isSubmitted&&(null==r.errorControl.password.errors?null:r.errorControl.password.errors.minlength)))},dependencies:[i.Pc,i.oU,i.YG,i.Sm,i.PM,i.wI,i.W2,i.Gu,i.gu,i.pK,i.Ie,i.q_,i.Nd,i.wd,i.sr,i.j9,i.cs,f.ez,f.O5,o.u5,o._Y,o.JJ,o.JL,o.UX,o.sg,o.u],styles:[".error[_ngcontent-%COMP%]{color:var(--ion-color-danger)}.iconEye[_ngcontent-%COMP%]{font-size:24px;padding-left:4px;padding-top:12px;vertical-align:middle}ion-item[_ngcontent-%COMP%]{margin-bottom:10px;background:transparent;border:1px solid var(--ion-color-secondary);--highlight-height: 0px;--highlight-color-valid: var(--ion-color-secondary);--highlight-color-focused: var(--ion-color-secondary);--highlight-color-invalid: var(--ion-color-secondary)}"]}),t})()}}]);
"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8746],{8746:(I,d,r)=>{r.r(d),r.d(d,{AddBenefactorPage:()=>v});var c=r(5861),f=r(6814),t=r(95),s=r(1509),e=r(6689),p=r(6958),g=r(1434),h=r(7626);function A(o,m){1&o&&(e.TgZ(0,"p"),e._uU(1,"\u0644\u0645 \u064a\u062a\u0645 \u0627\u0644\u0639\u062b\u0648\u0631 \u0639\u0644\u064a \u0646\u062a\u064a\u062c\u0629"),e.qZA())}function P(o,m){if(1&o&&(e.TgZ(0,"ion-item"),e.YNc(1,A,2,0,"p",6),e._UZ(2,"ion-input",9),e.qZA()),2&o){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",!1===i.statusResult),e.xp6(1),e.s9C("value",i.statusResult.name)}}let v=(()=>{var o;class m{constructor(u,n,a,l){this.formBuilder=u,this.router=n,this.helper=a,this.supabase=l,this.statusResult=!1,this.createForm()}ngOnInit(){}createForm(){this.requestForm=this.formBuilder.group({name:new t.NI(null,[t.kI.required,t.kI.min(12)]),status_number:new t.NI(null,[t.kI.min(6),t.kI.required]),amount:new t.NI(null,[t.kI.min(5),t.kI.required]),status_name:new t.NI(null,[t.kI.min(5),t.kI.required])})}saveForm(){var u=this;return(0,c.Z)(function*(){yield u.helper.startLoad();const n=u.requestForm.value;n.status=1,yield u.supabase.saveData("benefactor",n).then(a=>{if(console.log("res: ",a),console.log(a.status),201===a.status)return console.log(a),u.helper.dismissLoader(),u.helper.presentToast("\u0634\u0643\u0631\u0627 \u0644\u0643 - \u062a\u0645 \u0627\u0644\u0627\u0631\u0633\u0627\u0644"),void u.router.navigate([`/add-images/${a.data.id}/benefactor`]);u.helper.dismissLoader(),u.helper.presentAlert("\u062e\u0637\u0627 \u0641\u064a \u0627\u0644\u0646\u0638\u0627\u0645")}).catch(a=>{u.helper.dismissLoader(),u.helper.presentAlert(`\u062e\u0637\u0627 \u0641\u064a:  ${a}`),console.error("ee: ",a)})})()}searchById(){var u=this;return(0,c.Z)(function*(){var n;yield u.helper.startLoad();const a=null===(n=u.requestForm.get("status_number"))||void 0===n?void 0:n.value;console.log(a),u.supabase.getDataById("request_status",a).then(l=>{var _;u.helper.dismissLoader(),200===l.status?(u.statusResult=l.data,null===(_=u.requestForm.get("status_name"))||void 0===_||_.setValue(u.statusResult.name)):u.statusResult=!1,console.log(l.data)}).catch(l=>{u.helper.dismissLoader(),u.helper.presentToast(`error: ${l}`)})})()}}return(o=m).\u0275fac=function(u){return new(u||o)(e.Y36(t.qu),e.Y36(p.F0),e.Y36(g.W),e.Y36(h.T))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-add-benefactor"]],standalone:!0,features:[e.jDz],decls:18,vars:5,consts:[[3,"translucent"],[3,"fullscreen"],[3,"formGroup","ngSubmit"],["label","\u0627\u0633\u0645\u0643","labelPlacement","floating","formControlName","name","name","name","placeholder","\u0631\u062c\u0627\u0621 \u0643\u062a\u0627\u0628\u0629 \u0627\u0644\u0627\u0633\u0645"],["label","\u0627\u0644\u0645\u0628\u0644\u063a","labelPlacement","floating","formControlName","amount","name","amount","placeholder","\u0642\u064a\u0645\u0629 \u0627\u0644\u062a\u0628\u0631\u0639"],["label","\u0631\u0642\u0645 \u0627\u0644\u062d\u0627\u0644\u0629","labelPlacement","floating","formControlName","status_number","name","status_number","placeholder","\u0631\u0642\u0645 \u0627\u0644\u062d\u0627\u0644\u0629 \u0627\u0644\u0645\u062a\u0628\u0631\u0639 \u0644\u0647",3,"ionChange"],[4,"ngIf"],["expand","block","type","submit",3,"disabled"],["name","checkmark"],["label","\u0627\u0633\u0645 \u0635\u0627\u062d\u0628 \u0627\u0644\u062d\u0627\u0644\u0629","labelPlacement","floating","formControlName","status_name","name","status_name","placeholder","\u0627\u0643\u062a\u0628 \u0627\u0633\u0645 \u0627\u0644\u0634\u062e\u0635 \u0627\u0644\u0645\u062a\u0628\u0631\u0639 \u0644\u0647",3,"value"]],template:function(u,n){1&u&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"\u0627\u0644\u062a\u0628\u0631\u0639"),e.qZA()()(),e.TgZ(4,"ion-content",1)(5,"form",2),e.NdJ("ngSubmit",function(){return n.saveForm()}),e.TgZ(6,"ion-list")(7,"ion-item-group")(8,"ion-item"),e._UZ(9,"ion-input",3),e.qZA(),e.TgZ(10,"ion-item"),e._UZ(11,"ion-input",4),e.qZA(),e.TgZ(12,"ion-item")(13,"ion-input",5),e.NdJ("ionChange",function(){return n.searchById()}),e.qZA()(),e.YNc(14,P,3,2,"ion-item",6),e.TgZ(15,"ion-button",7),e._UZ(16,"ion-icon",8),e._uU(17," \u062d\u0641\u0638 "),e.qZA()()()()()),2&u&&(e.Q6J("translucent",!0),e.xp6(4),e.Q6J("fullscreen",!0),e.xp6(1),e.Q6J("formGroup",n.requestForm),e.xp6(9),e.Q6J("ngIf",n.statusResult),e.xp6(1),e.Q6J("disabled",!n.requestForm.valid))},dependencies:[s.Pc,s.YG,s.W2,s.Gu,s.gu,s.pK,s.Ie,s.Ub,s.q_,s.wd,s.sr,s.j9,f.ez,f.O5,t.u5,t._Y,t.JJ,t.JL,t.UX,t.sg,t.u]}),m})()}}]);
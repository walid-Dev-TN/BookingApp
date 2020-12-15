(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{qq66:function(n,l,e){"use strict";e.r(l);var u=e("CcnG"),t=e("mrSG"),o=e("6uu6"),r=e("ZZ/e"),i=e("gIcY"),s=function(){function n(n,l,e,u,t,o){this.authService=n,this.loadingCtrl=l,this.alertCtrl=e,this.formBuilder=u,this.alertController=t,this.router=o,this.signupForm=this.formBuilder.group({email:["",i.l.compose([i.l.required,i.l.email])],password:["",i.l.compose([i.l.minLength(6),i.l.required])]})}return n.prototype.ngOnInit=function(){},n.prototype.signupUser=function(n){return t.__awaiter(this,void 0,void 0,(function(){var l,e=this;return t.__generator(this,(function(u){switch(u.label){case 0:return n.valid?[3,1]:(console.log("Need to complete the form, current value: ",n.value),[3,4]);case 1:return this.authService.signupUser(n.value.email,n.value.password,!0).then((function(){e.loading.dismiss().then((function(){e.presentAlert("Demande d'inscription envoy\xe9e avec succ\xe8s! <br/> Veuillez attendre la validation de l'administrateur de la plateforme")}))}),(function(n){e.loading.dismiss().then((function(){return t.__awaiter(e,void 0,void 0,(function(){return t.__generator(this,(function(l){switch(l.label){case 0:return[4,this.alertCtrl.create({message:n.message,buttons:[{text:"Ok",role:"cancel"}]})];case 1:return[4,l.sent().present()];case 2:return l.sent(),[2]}}))}))}))})),l=this,[4,this.loadingCtrl.create()];case 2:return l.loading=u.sent(),[4,this.loading.present()];case 3:u.sent(),u.label=4;case 4:return[2]}}))}))},n.prototype.presentAlert=function(n){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(l){switch(l.label){case 0:return[4,this.alertController.create({cssClass:"my-custom-class",header:"Alert",subHeader:"",message:n,buttons:["OK"]})];case 1:return[4,l.sent().present()];case 2:return l.sent(),[2]}}))}))},n}(),a=function(){return function(){}}(),b=e("pMnS"),c=e("oBZk"),d=e("Ip0R"),g=e("ZYCi"),p=u.ub({encapsulation:0,styles:[["form[_ngcontent-%COMP%]{margin-bottom:32px}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:20px!important}p[_ngcontent-%COMP%]{font-size:.8em;color:#d2d2d2}ion-label[_ngcontent-%COMP%]{margin-left:5px}ion-input[_ngcontent-%COMP%]{padding:5px}.invalid[_ngcontent-%COMP%]{border-bottom:1px solid #ff6153}.error-message[_ngcontent-%COMP%]{min-height:2.2rem}.error-message[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin:2px 0;font-size:60%;color:#ff6153}.error-message[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%]{border-bottom:0!important}"]],data:{}});function m(n){return u.Qb(0,[(n()(),u.wb(0,0,null,null,4,"ion-item",[["class","error-message"]],null,null,null,c.db,c.t)),u.vb(1,49152,null,0,r.H,[u.h,u.k,u.A],null,null),(n()(),u.wb(2,0,null,0,2,"ion-label",[],null,null,null,c.eb,c.u)),u.vb(3,49152,null,0,r.N,[u.h,u.k,u.A],null,null),(n()(),u.Ob(-1,0,["Please enter a valid email."]))],null,null)}function h(n){return u.Qb(0,[(n()(),u.wb(0,0,null,null,4,"ion-item",[["class","error-message"]],null,null,null,c.db,c.t)),u.vb(1,49152,null,0,r.H,[u.h,u.k,u.A],null,null),(n()(),u.wb(2,0,null,0,2,"ion-label",[],null,null,null,c.eb,c.u)),u.vb(3,49152,null,0,r.N,[u.h,u.k,u.A],null,null),(n()(),u.Ob(-1,0,["Your password needs more than 6 characters."]))],null,null)}function v(n){return u.Qb(0,[(n()(),u.wb(0,0,null,null,38,"ion-content",[["padding",""]],null,null,null,c.U,c.k)),u.vb(1,49152,null,0,r.u,[u.h,u.k,u.A],null,null),u.vb(2,16384,null,0,r.d,[u.k],null,null),(n()(),u.wb(3,0,null,0,35,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(n,l,e){var t=!0;return"submit"===l&&(t=!1!==u.Hb(n,5).onSubmit(e)&&t),"reset"===l&&(t=!1!==u.Hb(n,5).onReset()&&t),t}),null,null)),u.vb(4,16384,null,0,i.p,[],null,null),u.vb(5,540672,null,0,i.d,[[8,null],[8,null]],{form:[0,"form"]},null),u.Lb(2048,null,i.a,null,[i.d]),u.vb(7,16384,null,0,i.i,[[4,i.a]],null,null),(n()(),u.wb(8,0,null,null,11,"ion-item",[],null,null,null,c.db,c.t)),u.vb(9,49152,null,0,r.H,[u.h,u.k,u.A],null,null),(n()(),u.wb(10,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,c.eb,c.u)),u.vb(11,49152,null,0,r.N,[u.h,u.k,u.A],{position:[0,"position"]},null),(n()(),u.Ob(-1,0,["Email"])),(n()(),u.wb(13,0,null,0,6,"ion-input",[["formControlName","email"],["placeholder","Your email address"],["type","email"]],[[2,"invalid",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var t=!0;return"ionBlur"===l&&(t=!1!==u.Hb(n,14)._handleBlurEvent(e.target)&&t),"ionChange"===l&&(t=!1!==u.Hb(n,14)._handleInputEvent(e.target)&&t),t}),c.cb,c.s)),u.vb(14,16384,null,0,r.Pb,[u.k],null,null),u.Lb(1024,null,i.f,(function(n){return[n]}),[r.Pb]),u.vb(16,671744,null,0,i.c,[[3,i.a],[8,null],[8,null],[6,i.f],[2,i.o]],{name:[0,"name"]},null),u.Lb(2048,null,i.g,null,[i.c]),u.vb(18,16384,null,0,i.h,[[4,i.g]],null,null),u.vb(19,49152,null,0,r.G,[u.h,u.k,u.A],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),u.lb(16777216,null,null,1,null,m)),u.vb(21,16384,null,0,d.j,[u.R,u.N],{ngIf:[0,"ngIf"]},null),(n()(),u.wb(22,0,null,null,11,"ion-item",[],null,null,null,c.db,c.t)),u.vb(23,49152,null,0,r.H,[u.h,u.k,u.A],null,null),(n()(),u.wb(24,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,c.eb,c.u)),u.vb(25,49152,null,0,r.N,[u.h,u.k,u.A],{position:[0,"position"]},null),(n()(),u.Ob(-1,0,["Password"])),(n()(),u.wb(27,0,null,0,6,"ion-input",[["formControlName","password"],["placeholder","Your password"],["type","password"]],[[2,"invalid",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var t=!0;return"ionBlur"===l&&(t=!1!==u.Hb(n,28)._handleBlurEvent(e.target)&&t),"ionChange"===l&&(t=!1!==u.Hb(n,28)._handleInputEvent(e.target)&&t),t}),c.cb,c.s)),u.vb(28,16384,null,0,r.Pb,[u.k],null,null),u.Lb(1024,null,i.f,(function(n){return[n]}),[r.Pb]),u.vb(30,671744,null,0,i.c,[[3,i.a],[8,null],[8,null],[6,i.f],[2,i.o]],{name:[0,"name"]},null),u.Lb(2048,null,i.g,null,[i.c]),u.vb(32,16384,null,0,i.h,[[4,i.g]],null,null),u.vb(33,49152,null,0,r.G,[u.h,u.k,u.A],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),u.lb(16777216,null,null,1,null,h)),u.vb(35,16384,null,0,d.j,[u.R,u.N],{ngIf:[0,"ngIf"]},null),(n()(),u.wb(36,0,null,null,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(n,l,e){var u=!0,t=n.component;return"click"===l&&(u=!1!==t.signupUser(t.signupForm)&&u),u}),c.M,c.c)),u.vb(37,49152,null,0,r.k,[u.h,u.k,u.A],{disabled:[0,"disabled"],expand:[1,"expand"]},null),(n()(),u.Ob(-1,0,[" Create an Account "]))],(function(n,l){var e=l.component;n(l,5,0,e.signupForm),n(l,11,0,"stacked"),n(l,16,0,"email"),n(l,19,0,"Your email address","email"),n(l,21,0,!e.signupForm.controls.email.valid&&e.signupForm.controls.email.touched),n(l,25,0,"stacked"),n(l,30,0,"password"),n(l,33,0,"Your password","password"),n(l,35,0,!e.signupForm.controls.password.valid&&e.signupForm.controls.password.touched),n(l,37,0,!e.signupForm.valid,"block")}),(function(n,l){var e=l.component;n(l,3,0,u.Hb(l,7).ngClassUntouched,u.Hb(l,7).ngClassTouched,u.Hb(l,7).ngClassPristine,u.Hb(l,7).ngClassDirty,u.Hb(l,7).ngClassValid,u.Hb(l,7).ngClassInvalid,u.Hb(l,7).ngClassPending),n(l,13,0,!e.signupForm.controls.email.valid&&e.signupForm.controls.email.touched,u.Hb(l,18).ngClassUntouched,u.Hb(l,18).ngClassTouched,u.Hb(l,18).ngClassPristine,u.Hb(l,18).ngClassDirty,u.Hb(l,18).ngClassValid,u.Hb(l,18).ngClassInvalid,u.Hb(l,18).ngClassPending),n(l,27,0,!e.signupForm.controls.password.valid&&e.signupForm.controls.password.touched,u.Hb(l,32).ngClassUntouched,u.Hb(l,32).ngClassTouched,u.Hb(l,32).ngClassPristine,u.Hb(l,32).ngClassDirty,u.Hb(l,32).ngClassValid,u.Hb(l,32).ngClassInvalid,u.Hb(l,32).ngClassPending)}))}function f(n){return u.Qb(0,[(n()(),u.wb(0,0,null,null,1,"app-register",[],null,null,null,v,p)),u.vb(1,114688,null,0,s,[o.a,r.Gb,r.a,i.b,r.a,g.m],null,null)],(function(n,l){n(l,1,0)}),null)}var C=u.sb("app-register",s,f,{},{},[]);e.d(l,"RegisterPageModuleNgFactory",(function(){return w}));var w=u.tb(a,[],(function(n){return u.Eb([u.Fb(512,u.j,u.eb,[[8,[b.a,C]],[3,u.j],u.y]),u.Fb(4608,d.l,d.k,[u.v,[2,d.v]]),u.Fb(4608,i.n,i.n,[]),u.Fb(4608,r.b,r.b,[u.A,u.g]),u.Fb(4608,r.Hb,r.Hb,[r.b,u.j,u.r]),u.Fb(4608,r.Lb,r.Lb,[r.b,u.j,u.r]),u.Fb(4608,i.b,i.b,[]),u.Fb(1073742336,d.b,d.b,[]),u.Fb(1073742336,i.m,i.m,[]),u.Fb(1073742336,i.e,i.e,[]),u.Fb(1073742336,r.Eb,r.Eb,[]),u.Fb(1073742336,g.o,g.o,[[2,g.t],[2,g.m]]),u.Fb(1073742336,i.k,i.k,[]),u.Fb(1073742336,a,a,[]),u.Fb(1024,g.k,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);
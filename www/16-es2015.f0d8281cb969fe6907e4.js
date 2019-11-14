(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{qq66:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J"),o=u("mrSG"),t=u("6uu6"),i=u("ZZ/e"),r=u("s7LF");class a{constructor(l,n,u,e,o){this.authService=l,this.loadingCtrl=n,this.alertCtrl=u,this.formBuilder=e,this.router=o,this.signupForm=this.formBuilder.group({name:["",r.l.compose([r.l.required,r.l.maxLength(20)])],tel:["",r.l.compose([r.l.required,r.l.maxLength(13)])],email:["",r.l.compose([r.l.required,r.l.email])],password:["",r.l.compose([r.l.minLength(6),r.l.required])]})}ngOnInit(){}signupUser(l){return o.__awaiter(this,void 0,void 0,(function*(){l.valid?(this.authService.signupUser(l.value.name,l.value.tel,l.value.email,l.value.password).then(()=>{this.loading.dismiss().then(()=>{this.router.navigateByUrl("home")})},l=>{this.loading.dismiss().then(()=>o.__awaiter(this,void 0,void 0,(function*(){const n=yield this.alertCtrl.create({message:l.message,buttons:[{text:"Ok",role:"cancel"}]});yield n.present()})))}),this.loading=yield this.loadingCtrl.create(),yield this.loading.present()):console.log("Need to complete the form, current value: ",l.value)}))}}class s{}var b=u("pMnS"),g=u("oBZk"),d=u("SVse"),c=u("iInd"),p=e.pb({encapsulation:0,styles:[["form[_ngcontent-%COMP%]{margin-bottom:32px}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:20px!important}p[_ngcontent-%COMP%]{font-size:.8em;color:#d2d2d2}ion-label[_ngcontent-%COMP%]{margin-left:5px}ion-input[_ngcontent-%COMP%]{padding:5px}.invalid[_ngcontent-%COMP%]{border-bottom:1px solid #ff6153}.error-message[_ngcontent-%COMP%]{min-height:2.2rem}.error-message[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin:2px 0;font-size:60%;color:#ff6153}.error-message[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%]{border-bottom:0!important}"]],data:{}});function m(l){return e.Hb(0,[(l()(),e.rb(0,0,null,null,4,"ion-item",[["class","error-message"]],null,null,null,g.H,g.o)),e.qb(1,49152,null,0,i.G,[e.h,e.k,e.x],null,null),(l()(),e.rb(2,0,null,0,2,"ion-label",[],null,null,null,g.I,g.p)),e.qb(3,49152,null,0,i.M,[e.h,e.k,e.x],null,null),(l()(),e.Gb(-1,0,["Please enter a valid name."]))],null,null)}function h(l){return e.Hb(0,[(l()(),e.rb(0,0,null,null,4,"ion-item",[["class","error-message"]],null,null,null,g.H,g.o)),e.qb(1,49152,null,0,i.G,[e.h,e.k,e.x],null,null),(l()(),e.rb(2,0,null,0,2,"ion-label",[],null,null,null,g.I,g.p)),e.qb(3,49152,null,0,i.M,[e.h,e.k,e.x],null,null),(l()(),e.Gb(-1,0,["Please enter a valid telephone number."]))],null,null)}function C(l){return e.Hb(0,[(l()(),e.rb(0,0,null,null,4,"ion-item",[["class","error-message"]],null,null,null,g.H,g.o)),e.qb(1,49152,null,0,i.G,[e.h,e.k,e.x],null,null),(l()(),e.rb(2,0,null,0,2,"ion-label",[],null,null,null,g.I,g.p)),e.qb(3,49152,null,0,i.M,[e.h,e.k,e.x],null,null),(l()(),e.Gb(-1,0,["Please enter a valid email."]))],null,null)}function v(l){return e.Hb(0,[(l()(),e.rb(0,0,null,null,4,"ion-item",[["class","error-message"]],null,null,null,g.H,g.o)),e.qb(1,49152,null,0,i.G,[e.h,e.k,e.x],null,null),(l()(),e.rb(2,0,null,0,2,"ion-label",[],null,null,null,g.I,g.p)),e.qb(3,49152,null,0,i.M,[e.h,e.k,e.x],null,null),(l()(),e.Gb(-1,0,["Your password needs more than 6 characters."]))],null,null)}function f(l){return e.Hb(0,[(l()(),e.rb(0,0,null,null,66,"ion-content",[["padding",""]],null,null,null,g.C,g.j)),e.qb(1,49152,null,0,i.t,[e.h,e.k,e.x],null,null),e.qb(2,16384,null,0,i.d,[e.k],null,null),(l()(),e.rb(3,0,null,0,63,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var o=!0;return"submit"===n&&(o=!1!==e.Cb(l,5).onSubmit(u)&&o),"reset"===n&&(o=!1!==e.Cb(l,5).onReset()&&o),o}),null,null)),e.qb(4,16384,null,0,r.p,[],null,null),e.qb(5,540672,null,0,r.d,[[8,null],[8,null]],{form:[0,"form"]},null),e.Db(2048,null,r.a,null,[r.d]),e.qb(7,16384,null,0,r.i,[[4,r.a]],null,null),(l()(),e.rb(8,0,null,null,11,"ion-item",[],null,null,null,g.H,g.o)),e.qb(9,49152,null,0,i.G,[e.h,e.k,e.x],null,null),(l()(),e.rb(10,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,g.I,g.p)),e.qb(11,49152,null,0,i.M,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Gb(-1,0,["Email"])),(l()(),e.rb(13,0,null,0,6,"ion-input",[["formControlName","nom"],["placeholder","Your name and surname"],["type","nom"]],[[2,"invalid",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==e.Cb(l,14)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==e.Cb(l,14)._handleInputEvent(u.target)&&o),o}),g.G,g.n)),e.qb(14,16384,null,0,i.Lb,[e.k],null,null),e.Db(1024,null,r.f,(function(l){return[l]}),[i.Lb]),e.qb(16,671744,null,0,r.c,[[3,r.a],[8,null],[8,null],[6,r.f],[2,r.o]],{name:[0,"name"]},null),e.Db(2048,null,r.g,null,[r.c]),e.qb(18,16384,null,0,r.h,[[4,r.g]],null,null),e.qb(19,49152,null,0,i.F,[e.h,e.k,e.x],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),e.gb(16777216,null,null,1,null,m)),e.qb(21,16384,null,0,d.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(22,0,null,null,11,"ion-item",[],null,null,null,g.H,g.o)),e.qb(23,49152,null,0,i.G,[e.h,e.k,e.x],null,null),(l()(),e.rb(24,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,g.I,g.p)),e.qb(25,49152,null,0,i.M,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Gb(-1,0,["Email"])),(l()(),e.rb(27,0,null,0,6,"ion-input",[["formControlName","tel"],["placeholder","Your telephone number"],["type","tel"]],[[2,"invalid",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==e.Cb(l,28)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==e.Cb(l,28)._handleInputEvent(u.target)&&o),o}),g.G,g.n)),e.qb(28,16384,null,0,i.Lb,[e.k],null,null),e.Db(1024,null,r.f,(function(l){return[l]}),[i.Lb]),e.qb(30,671744,null,0,r.c,[[3,r.a],[8,null],[8,null],[6,r.f],[2,r.o]],{name:[0,"name"]},null),e.Db(2048,null,r.g,null,[r.c]),e.qb(32,16384,null,0,r.h,[[4,r.g]],null,null),e.qb(33,49152,null,0,i.F,[e.h,e.k,e.x],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),e.gb(16777216,null,null,1,null,h)),e.qb(35,16384,null,0,d.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(36,0,null,null,11,"ion-item",[],null,null,null,g.H,g.o)),e.qb(37,49152,null,0,i.G,[e.h,e.k,e.x],null,null),(l()(),e.rb(38,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,g.I,g.p)),e.qb(39,49152,null,0,i.M,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Gb(-1,0,["Email"])),(l()(),e.rb(41,0,null,0,6,"ion-input",[["formControlName","email"],["placeholder","Your email address"],["type","email"]],[[2,"invalid",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==e.Cb(l,42)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==e.Cb(l,42)._handleInputEvent(u.target)&&o),o}),g.G,g.n)),e.qb(42,16384,null,0,i.Lb,[e.k],null,null),e.Db(1024,null,r.f,(function(l){return[l]}),[i.Lb]),e.qb(44,671744,null,0,r.c,[[3,r.a],[8,null],[8,null],[6,r.f],[2,r.o]],{name:[0,"name"]},null),e.Db(2048,null,r.g,null,[r.c]),e.qb(46,16384,null,0,r.h,[[4,r.g]],null,null),e.qb(47,49152,null,0,i.F,[e.h,e.k,e.x],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),e.gb(16777216,null,null,1,null,C)),e.qb(49,16384,null,0,d.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(50,0,null,null,11,"ion-item",[],null,null,null,g.H,g.o)),e.qb(51,49152,null,0,i.G,[e.h,e.k,e.x],null,null),(l()(),e.rb(52,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,g.I,g.p)),e.qb(53,49152,null,0,i.M,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Gb(-1,0,["Password"])),(l()(),e.rb(55,0,null,0,6,"ion-input",[["formControlName","password"],["placeholder","Your password"],["type","password"]],[[2,"invalid",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==e.Cb(l,56)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==e.Cb(l,56)._handleInputEvent(u.target)&&o),o}),g.G,g.n)),e.qb(56,16384,null,0,i.Lb,[e.k],null,null),e.Db(1024,null,r.f,(function(l){return[l]}),[i.Lb]),e.qb(58,671744,null,0,r.c,[[3,r.a],[8,null],[8,null],[6,r.f],[2,r.o]],{name:[0,"name"]},null),e.Db(2048,null,r.g,null,[r.c]),e.qb(60,16384,null,0,r.h,[[4,r.g]],null,null),e.qb(61,49152,null,0,i.F,[e.h,e.k,e.x],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),e.gb(16777216,null,null,1,null,v)),e.qb(63,16384,null,0,d.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(64,0,null,null,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(l,n,u){var e=!0,o=l.component;return"click"===n&&(e=!1!==o.signupUser(o.signupForm)&&e),e}),g.u,g.b)),e.qb(65,49152,null,0,i.j,[e.h,e.k,e.x],{disabled:[0,"disabled"],expand:[1,"expand"]},null),(l()(),e.Gb(-1,0,[" Create an Account "]))],(function(l,n){var u=n.component;l(n,5,0,u.signupForm),l(n,11,0,"stacked"),l(n,16,0,"nom"),l(n,19,0,"Your name and surname","nom"),l(n,21,0,!u.signupForm.controls.name.valid&&u.signupForm.controls.name.touched),l(n,25,0,"stacked"),l(n,30,0,"tel"),l(n,33,0,"Your telephone number","tel"),l(n,35,0,!u.signupForm.controls.tel.valid&&u.signupForm.controls.tel.touched),l(n,39,0,"stacked"),l(n,44,0,"email"),l(n,47,0,"Your email address","email"),l(n,49,0,!u.signupForm.controls.email.valid&&u.signupForm.controls.email.touched),l(n,53,0,"stacked"),l(n,58,0,"password"),l(n,61,0,"Your password","password"),l(n,63,0,!u.signupForm.controls.password.valid&&u.signupForm.controls.password.touched),l(n,65,0,!u.signupForm.valid,"block")}),(function(l,n){var u=n.component;l(n,3,0,e.Cb(n,7).ngClassUntouched,e.Cb(n,7).ngClassTouched,e.Cb(n,7).ngClassPristine,e.Cb(n,7).ngClassDirty,e.Cb(n,7).ngClassValid,e.Cb(n,7).ngClassInvalid,e.Cb(n,7).ngClassPending),l(n,13,0,!u.signupForm.controls.name.valid&&u.signupForm.controls.name.touched,e.Cb(n,18).ngClassUntouched,e.Cb(n,18).ngClassTouched,e.Cb(n,18).ngClassPristine,e.Cb(n,18).ngClassDirty,e.Cb(n,18).ngClassValid,e.Cb(n,18).ngClassInvalid,e.Cb(n,18).ngClassPending),l(n,27,0,!u.signupForm.controls.tel.valid&&u.signupForm.controls.tel.touched,e.Cb(n,32).ngClassUntouched,e.Cb(n,32).ngClassTouched,e.Cb(n,32).ngClassPristine,e.Cb(n,32).ngClassDirty,e.Cb(n,32).ngClassValid,e.Cb(n,32).ngClassInvalid,e.Cb(n,32).ngClassPending),l(n,41,0,!u.signupForm.controls.email.valid&&u.signupForm.controls.email.touched,e.Cb(n,46).ngClassUntouched,e.Cb(n,46).ngClassTouched,e.Cb(n,46).ngClassPristine,e.Cb(n,46).ngClassDirty,e.Cb(n,46).ngClassValid,e.Cb(n,46).ngClassInvalid,e.Cb(n,46).ngClassPending),l(n,55,0,!u.signupForm.controls.password.valid&&u.signupForm.controls.password.touched,e.Cb(n,60).ngClassUntouched,e.Cb(n,60).ngClassTouched,e.Cb(n,60).ngClassPristine,e.Cb(n,60).ngClassDirty,e.Cb(n,60).ngClassValid,e.Cb(n,60).ngClassInvalid,e.Cb(n,60).ngClassPending)}))}function q(l){return e.Hb(0,[(l()(),e.rb(0,0,null,null,1,"app-register",[],null,null,null,f,p)),e.qb(1,114688,null,0,a,[t.a,i.Fb,i.a,r.b,c.m],null,null)],(function(l,n){l(n,1,0)}),null)}var k=e.nb("app-register",a,q,{},{},[]);u.d(n,"RegisterPageModuleNgFactory",(function(){return x}));var x=e.ob(s,[],(function(l){return e.zb([e.Ab(512,e.j,e.Z,[[8,[b.a,k]],[3,e.j],e.v]),e.Ab(4608,d.k,d.j,[e.s,[2,d.r]]),e.Ab(4608,r.n,r.n,[]),e.Ab(4608,i.b,i.b,[e.x,e.g]),e.Ab(4608,i.Gb,i.Gb,[i.b,e.j,e.p]),e.Ab(4608,i.Jb,i.Jb,[i.b,e.j,e.p]),e.Ab(4608,r.b,r.b,[]),e.Ab(1073742336,d.b,d.b,[]),e.Ab(1073742336,r.m,r.m,[]),e.Ab(1073742336,r.e,r.e,[]),e.Ab(1073742336,i.Db,i.Db,[]),e.Ab(1073742336,c.o,c.o,[[2,c.t],[2,c.m]]),e.Ab(1073742336,r.k,r.k,[]),e.Ab(1073742336,s,s,[]),e.Ab(1024,c.k,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);
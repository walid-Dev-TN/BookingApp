(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"f+ep":function(l,n,u){"use strict";u.r(n);var o=u("8Y7J"),e=u("mrSG"),r=u("s7LF"),i=u("ZZ/e"),t=u("6uu6");class a{constructor(l,n,u,o,e,i){this.loadingCtrl=l,this.navCtrl=n,this.alertCtrl=u,this.authService=o,this.router=e,this.formBuilder=i,this.code="",this.showCodeInput=!1,this.loginForm=this.formBuilder.group({email:["",r.l.compose([r.l.required,r.l.email])],password:["",r.l.compose([r.l.required,r.l.minLength(6)])]})}ngOnInit(){}loginUser(l){return e.__awaiter(this,void 0,void 0,(function*(){l.valid?(this.loading=yield this.loadingCtrl.create(),yield this.loading.present(),this.authService.loginUser(l.value.email,l.value.password).then(()=>{this.loading.dismiss().then(()=>{this.router.navigateByUrl("home")})},l=>{this.loading.dismiss().then(()=>e.__awaiter(this,void 0,void 0,(function*(){const n=yield this.alertCtrl.create({message:l.message,buttons:[{text:"Ok",role:"cancel"}]});yield n.present()})))})):console.log("Form is not valid yet, current value:",l.value)}))}}class s{}var b=u("pMnS"),c=u("oBZk"),d=u("SVse"),g=u("iInd"),p=o.qb({encapsulation:0,styles:[["form[_ngcontent-%COMP%]{margin-bottom:32px}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:20px!important}p[_ngcontent-%COMP%]{font-size:.8em;color:#d2d2d2}ion-label[_ngcontent-%COMP%]{margin-left:5px}ion-input[_ngcontent-%COMP%]{padding:5px}.invalid[_ngcontent-%COMP%]{border-bottom:1px solid #ff6153}.error-message[_ngcontent-%COMP%]{min-height:2.2rem}.error-message[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin:2px 0;font-size:60%;color:#ff6153}.error-message[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%]{border-bottom:0!important}"]],data:{}});function m(l){return o.Ib(0,[(l()(),o.sb(0,0,null,null,4,"ion-item",[["class","error-message"]],null,null,null,c.H,c.o)),o.rb(1,49152,null,0,i.G,[o.h,o.k,o.x],null,null),(l()(),o.sb(2,0,null,0,2,"ion-label",[],null,null,null,c.I,c.p)),o.rb(3,49152,null,0,i.M,[o.h,o.k,o.x],null,null),(l()(),o.Hb(-1,0,["Please enter a valid email address."]))],null,null)}function h(l){return o.Ib(0,[(l()(),o.sb(0,0,null,null,4,"ion-item",[["class","error-message"]],null,null,null,c.H,c.o)),o.rb(1,49152,null,0,i.G,[o.h,o.k,o.x],null,null),(l()(),o.sb(2,0,null,0,2,"ion-label",[],null,null,null,c.I,c.p)),o.rb(3,49152,null,0,i.M,[o.h,o.k,o.x],null,null),(l()(),o.Hb(-1,0,["Your password needs more than 6 characters."]))],null,null)}function k(l){return o.Ib(0,[(l()(),o.sb(0,0,null,null,35,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var e=!0;return"submit"===n&&(e=!1!==o.Db(l,2).onSubmit(u)&&e),"reset"===n&&(e=!1!==o.Db(l,2).onReset()&&e),e}),null,null)),o.rb(1,16384,null,0,r.p,[],null,null),o.rb(2,540672,null,0,r.d,[[8,null],[8,null]],{form:[0,"form"]},null),o.Eb(2048,null,r.a,null,[r.d]),o.rb(4,16384,null,0,r.i,[[4,r.a]],null,null),(l()(),o.sb(5,0,null,null,11,"ion-item",[],null,null,null,c.H,c.o)),o.rb(6,49152,null,0,i.G,[o.h,o.k,o.x],null,null),(l()(),o.sb(7,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,c.I,c.p)),o.rb(8,49152,null,0,i.M,[o.h,o.k,o.x],{position:[0,"position"]},null),(l()(),o.Hb(-1,0,["Email"])),(l()(),o.sb(10,0,null,0,6,"ion-input",[["formControlName","email"],["placeholder","Your email address"],["type","email"]],[[2,"invalid",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==o.Db(l,11)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==o.Db(l,11)._handleInputEvent(u.target)&&e),e}),c.G,c.n)),o.rb(11,16384,null,0,i.Lb,[o.k],null,null),o.Eb(1024,null,r.f,(function(l){return[l]}),[i.Lb]),o.rb(13,671744,null,0,r.c,[[3,r.a],[8,null],[8,null],[6,r.f],[2,r.o]],{name:[0,"name"]},null),o.Eb(2048,null,r.g,null,[r.c]),o.rb(15,16384,null,0,r.h,[[4,r.g]],null,null),o.rb(16,49152,null,0,i.F,[o.h,o.k,o.x],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),o.hb(16777216,null,null,1,null,m)),o.rb(18,16384,null,0,d.i,[o.N,o.K],{ngIf:[0,"ngIf"]},null),(l()(),o.sb(19,0,null,null,11,"ion-item",[],null,null,null,c.H,c.o)),o.rb(20,49152,null,0,i.G,[o.h,o.k,o.x],null,null),(l()(),o.sb(21,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,c.I,c.p)),o.rb(22,49152,null,0,i.M,[o.h,o.k,o.x],{position:[0,"position"]},null),(l()(),o.Hb(-1,0,["Password"])),(l()(),o.sb(24,0,null,0,6,"ion-input",[["formControlName","password"],["placeholder","Your password"],["type","password"]],[[2,"invalid",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==o.Db(l,25)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==o.Db(l,25)._handleInputEvent(u.target)&&e),e}),c.G,c.n)),o.rb(25,16384,null,0,i.Lb,[o.k],null,null),o.Eb(1024,null,r.f,(function(l){return[l]}),[i.Lb]),o.rb(27,671744,null,0,r.c,[[3,r.a],[8,null],[8,null],[6,r.f],[2,r.o]],{name:[0,"name"]},null),o.Eb(2048,null,r.g,null,[r.c]),o.rb(29,16384,null,0,r.h,[[4,r.g]],null,null),o.rb(30,49152,null,0,i.F,[o.h,o.k,o.x],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),o.hb(16777216,null,null,1,null,h)),o.rb(32,16384,null,0,d.i,[o.N,o.K],{ngIf:[0,"ngIf"]},null),(l()(),o.sb(33,0,null,null,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(l,n,u){var o=!0,e=l.component;return"click"===n&&(o=!1!==e.loginUser(e.loginForm)&&o),o}),c.u,c.b)),o.rb(34,49152,null,0,i.j,[o.h,o.k,o.x],{expand:[0,"expand"]},null),(l()(),o.Hb(-1,0,[" Log In "])),(l()(),o.sb(36,0,null,null,4,"ion-button",[["expand","block"],["fill","clear"],["routerLink","/register"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==o.Db(l,38).onClick()&&e),"click"===n&&(e=!1!==o.Db(l,39).onClick(u)&&e),e}),c.u,c.b)),o.rb(37,49152,null,0,i.j,[o.h,o.k,o.x],{expand:[0,"expand"],fill:[1,"fill"]},null),o.rb(38,16384,null,0,g.n,[g.m,g.a,[8,null],o.C,o.k],{routerLink:[0,"routerLink"]},null),o.rb(39,737280,null,0,i.Kb,[d.g,i.Hb,o.k,g.m,[2,g.n]],null,null),(l()(),o.Hb(-1,0,[" Create a new account\n"])),(l()(),o.sb(41,0,null,null,4,"ion-button",[["expand","block"],["fill","clear"],["routerLink","/reset-password"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==o.Db(l,43).onClick()&&e),"click"===n&&(e=!1!==o.Db(l,44).onClick(u)&&e),e}),c.u,c.b)),o.rb(42,49152,null,0,i.j,[o.h,o.k,o.x],{expand:[0,"expand"],fill:[1,"fill"]},null),o.rb(43,16384,null,0,g.n,[g.m,g.a,[8,null],o.C,o.k],{routerLink:[0,"routerLink"]},null),o.rb(44,737280,null,0,i.Kb,[d.g,i.Hb,o.k,g.m,[2,g.n]],null,null),(l()(),o.Hb(-1,0,[" I forgot my password :(\n"]))],(function(l,n){var u=n.component;l(n,2,0,u.loginForm),l(n,8,0,"stacked"),l(n,13,0,"email"),l(n,16,0,"Your email address","email"),l(n,18,0,!u.loginForm.controls.email.valid&&u.loginForm.controls.email.touched),l(n,22,0,"stacked"),l(n,27,0,"password"),l(n,30,0,"Your password","password"),l(n,32,0,!u.loginForm.controls.password.valid&&u.loginForm.controls.password.touched),l(n,34,0,"block"),l(n,37,0,"block","clear"),l(n,38,0,"/register"),l(n,39,0),l(n,42,0,"block","clear"),l(n,43,0,"/reset-password"),l(n,44,0)}),(function(l,n){var u=n.component;l(n,0,0,o.Db(n,4).ngClassUntouched,o.Db(n,4).ngClassTouched,o.Db(n,4).ngClassPristine,o.Db(n,4).ngClassDirty,o.Db(n,4).ngClassValid,o.Db(n,4).ngClassInvalid,o.Db(n,4).ngClassPending),l(n,10,0,!u.loginForm.controls.email.valid&&u.loginForm.controls.email.touched,o.Db(n,15).ngClassUntouched,o.Db(n,15).ngClassTouched,o.Db(n,15).ngClassPristine,o.Db(n,15).ngClassDirty,o.Db(n,15).ngClassValid,o.Db(n,15).ngClassInvalid,o.Db(n,15).ngClassPending),l(n,24,0,!u.loginForm.controls.password.valid&&u.loginForm.controls.password.touched,o.Db(n,29).ngClassUntouched,o.Db(n,29).ngClassTouched,o.Db(n,29).ngClassPristine,o.Db(n,29).ngClassDirty,o.Db(n,29).ngClassValid,o.Db(n,29).ngClassInvalid,o.Db(n,29).ngClassPending)}))}function f(l){return o.Ib(0,[(l()(),o.sb(0,0,null,null,1,"app-login",[],null,null,null,k,p)),o.rb(1,114688,null,0,a,[i.Fb,i.Hb,i.a,t.a,g.m,r.b],null,null)],(function(l,n){l(n,1,0)}),null)}var C=o.ob("app-login",a,f,{},{},[]);u.d(n,"LoginPageModuleNgFactory",(function(){return v}));var v=o.pb(s,[],(function(l){return o.Ab([o.Bb(512,o.j,o.ab,[[8,[b.a,C]],[3,o.j],o.v]),o.Bb(4608,d.k,d.j,[o.s,[2,d.r]]),o.Bb(4608,r.n,r.n,[]),o.Bb(4608,i.b,i.b,[o.x,o.g]),o.Bb(4608,i.Gb,i.Gb,[i.b,o.j,o.p]),o.Bb(4608,i.Jb,i.Jb,[i.b,o.j,o.p]),o.Bb(4608,r.b,r.b,[]),o.Bb(1073742336,d.b,d.b,[]),o.Bb(1073742336,r.m,r.m,[]),o.Bb(1073742336,r.e,r.e,[]),o.Bb(1073742336,i.Db,i.Db,[]),o.Bb(1073742336,g.o,g.o,[[2,g.t],[2,g.m]]),o.Bb(1073742336,r.k,r.k,[]),o.Bb(1073742336,s,s,[]),o.Bb(1024,g.k,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);
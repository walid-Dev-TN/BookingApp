(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"f+ep":function(l,n,u){"use strict";u.r(n);var o=u("8Y7J"),e=u("mrSG"),i=u("s7LF"),t=u("ZZ/e"),r=u("6uu6");class a{constructor(l,n,u,o,e,t){this.loadingCtrl=l,this.navCtrl=n,this.alertCtrl=u,this.authService=o,this.router=e,this.formBuilder=t,this.code="",this.showCodeInput=!1,this.loginForm=this.formBuilder.group({email:["",i.l.compose([i.l.required,i.l.email])],password:["",i.l.compose([i.l.required,i.l.minLength(6)])]})}ngOnInit(){}loginUser(l){return e.b(this,void 0,void 0,(function*(){l.valid?(this.loading=yield this.loadingCtrl.create(),yield this.loading.present(),this.authService.loginUser(l.value.email,l.value.password).then(()=>{this.loading.dismiss().then(()=>{this.router.navigateByUrl("home")})},l=>{this.loading.dismiss().then(()=>e.b(this,void 0,void 0,(function*(){const n=yield this.alertCtrl.create({message:l.message,buttons:[{text:"Ok",role:"cancel"}]});yield n.present()})))})):console.log("Form is not valid yet, current value:",l.value)}))}}class s{}var b=u("pMnS"),d=u("oBZk"),g=u("SVse"),c=u("iInd"),p=o.Ab({encapsulation:0,styles:[["form[_ngcontent-%COMP%]{margin-bottom:32px}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:20px!important}p[_ngcontent-%COMP%]{font-size:.8em;color:#d2d2d2}ion-label[_ngcontent-%COMP%]{margin-left:5px}ion-input[_ngcontent-%COMP%]{padding:5px}.invalid[_ngcontent-%COMP%]{border-bottom:1px solid #ff6153}.error-message[_ngcontent-%COMP%]{min-height:2.2rem}.error-message[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin:2px 0;font-size:60%;color:#ff6153}.error-message[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%]{border-bottom:0!important}"]],data:{}});function m(l){return o.Sb(0,[(l()(),o.Cb(0,0,null,null,4,"ion-item",[["class","error-message"]],null,null,null,d.O,d.p)),o.Bb(1,49152,null,0,t.G,[o.j,o.p,o.F],null,null),(l()(),o.Cb(2,0,null,0,2,"ion-label",[],null,null,null,d.P,d.q)),o.Bb(3,49152,null,0,t.M,[o.j,o.p,o.F],null,null),(l()(),o.Rb(-1,0,["Please enter a valid email address."]))],null,null)}function h(l){return o.Sb(0,[(l()(),o.Cb(0,0,null,null,4,"ion-item",[["class","error-message"]],null,null,null,d.O,d.p)),o.Bb(1,49152,null,0,t.G,[o.j,o.p,o.F],null,null),(l()(),o.Cb(2,0,null,0,2,"ion-label",[],null,null,null,d.P,d.q)),o.Bb(3,49152,null,0,t.M,[o.j,o.p,o.F],null,null),(l()(),o.Rb(-1,0,["Your password needs more than 6 characters."]))],null,null)}function C(l){return o.Sb(0,[(l()(),o.Cb(0,0,null,null,35,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var e=!0;return"submit"===n&&(e=!1!==o.Nb(l,2).onSubmit(u)&&e),"reset"===n&&(e=!1!==o.Nb(l,2).onReset()&&e),e}),null,null)),o.Bb(1,16384,null,0,i.p,[],null,null),o.Bb(2,540672,null,0,i.d,[[8,null],[8,null]],{form:[0,"form"]},null),o.Ob(2048,null,i.a,null,[i.d]),o.Bb(4,16384,null,0,i.i,[[4,i.a]],null,null),(l()(),o.Cb(5,0,null,null,11,"ion-item",[],null,null,null,d.O,d.p)),o.Bb(6,49152,null,0,t.G,[o.j,o.p,o.F],null,null),(l()(),o.Cb(7,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,d.P,d.q)),o.Bb(8,49152,null,0,t.M,[o.j,o.p,o.F],{position:[0,"position"]},null),(l()(),o.Rb(-1,0,["Email"])),(l()(),o.Cb(10,0,null,0,6,"ion-input",[["formControlName","email"],["placeholder","Your email address"],["type","email"]],[[2,"invalid",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==o.Nb(l,11)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==o.Nb(l,11)._handleInputEvent(u.target)&&e),e}),d.N,d.o)),o.Bb(11,16384,null,0,t.Mb,[o.p],null,null),o.Ob(1024,null,i.f,(function(l){return[l]}),[t.Mb]),o.Bb(13,671744,null,0,i.c,[[3,i.a],[8,null],[8,null],[6,i.f],[2,i.o]],{name:[0,"name"]},null),o.Ob(2048,null,i.g,null,[i.c]),o.Bb(15,16384,null,0,i.h,[[4,i.g]],null,null),o.Bb(16,49152,null,0,t.F,[o.j,o.p,o.F],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),o.rb(16777216,null,null,1,null,m)),o.Bb(18,16384,null,0,g.i,[o.X,o.T],{ngIf:[0,"ngIf"]},null),(l()(),o.Cb(19,0,null,null,11,"ion-item",[],null,null,null,d.O,d.p)),o.Bb(20,49152,null,0,t.G,[o.j,o.p,o.F],null,null),(l()(),o.Cb(21,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,d.P,d.q)),o.Bb(22,49152,null,0,t.M,[o.j,o.p,o.F],{position:[0,"position"]},null),(l()(),o.Rb(-1,0,["Password"])),(l()(),o.Cb(24,0,null,0,6,"ion-input",[["formControlName","password"],["placeholder","Your password"],["type","password"]],[[2,"invalid",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==o.Nb(l,25)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==o.Nb(l,25)._handleInputEvent(u.target)&&e),e}),d.N,d.o)),o.Bb(25,16384,null,0,t.Mb,[o.p],null,null),o.Ob(1024,null,i.f,(function(l){return[l]}),[t.Mb]),o.Bb(27,671744,null,0,i.c,[[3,i.a],[8,null],[8,null],[6,i.f],[2,i.o]],{name:[0,"name"]},null),o.Ob(2048,null,i.g,null,[i.c]),o.Bb(29,16384,null,0,i.h,[[4,i.g]],null,null),o.Bb(30,49152,null,0,t.F,[o.j,o.p,o.F],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),o.rb(16777216,null,null,1,null,h)),o.Bb(32,16384,null,0,g.i,[o.X,o.T],{ngIf:[0,"ngIf"]},null),(l()(),o.Cb(33,0,null,null,2,"ion-button",[["color","mango"],["expand","block"]],null,[[null,"click"]],(function(l,n,u){var o=!0,e=l.component;return"click"===n&&(o=!1!==e.loginUser(e.loginForm)&&o),o}),d.A,d.b)),o.Bb(34,49152,null,0,t.j,[o.j,o.p,o.F],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),o.Rb(-1,0,[" Log In "])),(l()(),o.Cb(36,0,null,null,4,"ion-button",[["expand","block"],["fill","clear"],["routerLink","/reset-password"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==o.Nb(l,38).onClick()&&e),"click"===n&&(e=!1!==o.Nb(l,39).onClick(u)&&e),e}),d.A,d.b)),o.Bb(37,49152,null,0,t.j,[o.j,o.p,o.F],{expand:[0,"expand"],fill:[1,"fill"]},null),o.Bb(38,16384,null,0,c.n,[c.m,c.a,[8,null],o.L,o.p],{routerLink:[0,"routerLink"]},null),o.Bb(39,737280,null,0,t.Kb,[g.g,t.Hb,o.p,c.m,[2,c.n]],null,null),(l()(),o.Rb(-1,0,[" I forgot my password :(\n"]))],(function(l,n){var u=n.component;l(n,2,0,u.loginForm),l(n,8,0,"stacked"),l(n,13,0,"email"),l(n,16,0,"Your email address","email"),l(n,18,0,!u.loginForm.controls.email.valid&&u.loginForm.controls.email.touched),l(n,22,0,"stacked"),l(n,27,0,"password"),l(n,30,0,"Your password","password"),l(n,32,0,!u.loginForm.controls.password.valid&&u.loginForm.controls.password.touched),l(n,34,0,"mango","block"),l(n,37,0,"block","clear"),l(n,38,0,"/reset-password"),l(n,39,0)}),(function(l,n){var u=n.component;l(n,0,0,o.Nb(n,4).ngClassUntouched,o.Nb(n,4).ngClassTouched,o.Nb(n,4).ngClassPristine,o.Nb(n,4).ngClassDirty,o.Nb(n,4).ngClassValid,o.Nb(n,4).ngClassInvalid,o.Nb(n,4).ngClassPending),l(n,10,0,!u.loginForm.controls.email.valid&&u.loginForm.controls.email.touched,o.Nb(n,15).ngClassUntouched,o.Nb(n,15).ngClassTouched,o.Nb(n,15).ngClassPristine,o.Nb(n,15).ngClassDirty,o.Nb(n,15).ngClassValid,o.Nb(n,15).ngClassInvalid,o.Nb(n,15).ngClassPending),l(n,24,0,!u.loginForm.controls.password.valid&&u.loginForm.controls.password.touched,o.Nb(n,29).ngClassUntouched,o.Nb(n,29).ngClassTouched,o.Nb(n,29).ngClassPristine,o.Nb(n,29).ngClassDirty,o.Nb(n,29).ngClassValid,o.Nb(n,29).ngClassInvalid,o.Nb(n,29).ngClassPending)}))}function f(l){return o.Sb(0,[(l()(),o.Cb(0,0,null,null,1,"app-login",[],null,null,null,C,p)),o.Bb(1,114688,null,0,a,[t.Fb,t.Hb,t.a,r.a,c.m,i.b],null,null)],(function(l,n){l(n,1,0)}),null)}var v=o.yb("app-login",a,f,{},{},[]);u.d(n,"LoginPageModuleNgFactory",(function(){return B}));var B=o.zb(s,[],(function(l){return o.Kb([o.Lb(512,o.m,o.kb,[[8,[b.a,v]],[3,o.m],o.D]),o.Lb(4608,g.k,g.j,[o.z,[2,g.r]]),o.Lb(4608,i.n,i.n,[]),o.Lb(4608,t.b,t.b,[o.F,o.g]),o.Lb(4608,t.Gb,t.Gb,[t.b,o.m,o.w]),o.Lb(4608,t.Jb,t.Jb,[t.b,o.m,o.w]),o.Lb(4608,i.b,i.b,[]),o.Lb(1073742336,g.b,g.b,[]),o.Lb(1073742336,i.m,i.m,[]),o.Lb(1073742336,i.e,i.e,[]),o.Lb(1073742336,t.Db,t.Db,[]),o.Lb(1073742336,c.o,c.o,[[2,c.t],[2,c.m]]),o.Lb(1073742336,i.k,i.k,[]),o.Lb(1073742336,s,s,[]),o.Lb(1024,c.k,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);
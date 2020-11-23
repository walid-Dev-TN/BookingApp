function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,l){for(var e=0;e<l.length;e++){var u=l[e];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(n,u.key,u)}}function _createClass(n,l,e){return l&&_defineProperties(n.prototype,l),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{qq66:function(n,l,e){"use strict";e.r(l);var u=e("8Y7J"),t=e("mrSG"),r=e("6uu6"),o=e("ZZ/e"),i=e("s7LF"),a=function(){function n(l,e,u,t,r,o){_classCallCheck(this,n),this.authService=l,this.loadingCtrl=e,this.alertCtrl=u,this.formBuilder=t,this.alertController=r,this.router=o,this.signupForm=this.formBuilder.group({email:["",i.l.compose([i.l.required,i.l.email])],password:["",i.l.compose([i.l.minLength(6),i.l.required])]})}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"signupUser",value:function(n){return t.b(this,void 0,void 0,regeneratorRuntime.mark((function l(){var e=this;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:if(!n.valid){l.next=9;break}return this.authService.signupUser(n.value.email,n.value.password,!0).then((function(){e.loading.dismiss().then((function(){e.presentAlert("Demande d'inscription envoy\xe9e avec succ\xe8s! <br/> Veuillez attendre la validation de l'administrateur de la plateforme")}))}),(function(n){e.loading.dismiss().then((function(){return t.b(e,void 0,void 0,regeneratorRuntime.mark((function l(){var e;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.alertCtrl.create({message:n.message,buttons:[{text:"Ok",role:"cancel"}]});case 2:return e=l.sent,l.next=5,e.present();case 5:case"end":return l.stop()}}),l,this)})))}))})),l.next=4,this.loadingCtrl.create();case 4:return this.loading=l.sent,l.next=7,this.loading.present();case 7:l.next=10;break;case 9:console.log("Need to complete the form, current value: ",n.value);case 10:case"end":return l.stop()}}),l,this)})))}},{key:"presentAlert",value:function(n){return t.b(this,void 0,void 0,regeneratorRuntime.mark((function l(){var e;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.alertController.create({cssClass:"my-custom-class",header:"Alert",subHeader:"",message:n,buttons:["OK"]});case 2:return e=l.sent,l.next=5,e.present();case 5:case"end":return l.stop()}}),l,this)})))}}]),n}(),s=function n(){_classCallCheck(this,n)},b=e("pMnS"),c=e("oBZk"),d=e("SVse"),p=e("iInd"),g=u.Cb({encapsulation:0,styles:[["form[_ngcontent-%COMP%]{margin-bottom:32px}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:20px!important}p[_ngcontent-%COMP%]{font-size:.8em;color:#d2d2d2}ion-label[_ngcontent-%COMP%]{margin-left:5px}ion-input[_ngcontent-%COMP%]{padding:5px}.invalid[_ngcontent-%COMP%]{border-bottom:1px solid #ff6153}.error-message[_ngcontent-%COMP%]{min-height:2.2rem}.error-message[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin:2px 0;font-size:60%;color:#ff6153}.error-message[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%]{border-bottom:0!important}"]],data:{}});function m(n){return u.Yb(0,[(n()(),u.Eb(0,0,null,null,4,"ion-item",[["class","error-message"]],null,null,null,c.ab,c.r)),u.Db(1,49152,null,0,o.H,[u.j,u.p,u.G],null,null),(n()(),u.Eb(2,0,null,0,2,"ion-label",[],null,null,null,c.bb,c.s)),u.Db(3,49152,null,0,o.N,[u.j,u.p,u.G],null,null),(n()(),u.Wb(-1,0,["Please enter a valid email."]))],null,null)}function h(n){return u.Yb(0,[(n()(),u.Eb(0,0,null,null,4,"ion-item",[["class","error-message"]],null,null,null,c.ab,c.r)),u.Db(1,49152,null,0,o.H,[u.j,u.p,u.G],null,null),(n()(),u.Eb(2,0,null,0,2,"ion-label",[],null,null,null,c.bb,c.s)),u.Db(3,49152,null,0,o.N,[u.j,u.p,u.G],null,null),(n()(),u.Wb(-1,0,["Your password needs more than 6 characters."]))],null,null)}function f(n){return u.Yb(0,[(n()(),u.Eb(0,0,null,null,38,"ion-content",[["padding",""]],null,null,null,c.T,c.k)),u.Db(1,49152,null,0,o.u,[u.j,u.p,u.G],null,null),u.Db(2,16384,null,0,o.d,[u.p],null,null),(n()(),u.Eb(3,0,null,0,35,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(n,l,e){var t=!0;return"submit"===l&&(t=!1!==u.Pb(n,5).onSubmit(e)&&t),"reset"===l&&(t=!1!==u.Pb(n,5).onReset()&&t),t}),null,null)),u.Db(4,16384,null,0,i.p,[],null,null),u.Db(5,540672,null,0,i.d,[[8,null],[8,null]],{form:[0,"form"]},null),u.Tb(2048,null,i.a,null,[i.d]),u.Db(7,16384,null,0,i.i,[[4,i.a]],null,null),(n()(),u.Eb(8,0,null,null,11,"ion-item",[],null,null,null,c.ab,c.r)),u.Db(9,49152,null,0,o.H,[u.j,u.p,u.G],null,null),(n()(),u.Eb(10,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,c.bb,c.s)),u.Db(11,49152,null,0,o.N,[u.j,u.p,u.G],{position:[0,"position"]},null),(n()(),u.Wb(-1,0,["Email"])),(n()(),u.Eb(13,0,null,0,6,"ion-input",[["formControlName","email"],["placeholder","Your email address"],["type","email"]],[[2,"invalid",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var t=!0;return"ionBlur"===l&&(t=!1!==u.Pb(n,14)._handleBlurEvent(e.target)&&t),"ionChange"===l&&(t=!1!==u.Pb(n,14)._handleInputEvent(e.target)&&t),t}),c.Z,c.q)),u.Db(14,16384,null,0,o.Pb,[u.p],null,null),u.Tb(1024,null,i.f,(function(n){return[n]}),[o.Pb]),u.Db(16,671744,null,0,i.c,[[3,i.a],[8,null],[8,null],[6,i.f],[2,i.o]],{name:[0,"name"]},null),u.Tb(2048,null,i.g,null,[i.c]),u.Db(18,16384,null,0,i.h,[[4,i.g]],null,null),u.Db(19,49152,null,0,o.G,[u.j,u.p,u.G],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),u.tb(16777216,null,null,1,null,m)),u.Db(21,16384,null,0,d.j,[u.Z,u.U],{ngIf:[0,"ngIf"]},null),(n()(),u.Eb(22,0,null,null,11,"ion-item",[],null,null,null,c.ab,c.r)),u.Db(23,49152,null,0,o.H,[u.j,u.p,u.G],null,null),(n()(),u.Eb(24,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,c.bb,c.s)),u.Db(25,49152,null,0,o.N,[u.j,u.p,u.G],{position:[0,"position"]},null),(n()(),u.Wb(-1,0,["Password"])),(n()(),u.Eb(27,0,null,0,6,"ion-input",[["formControlName","password"],["placeholder","Your password"],["type","password"]],[[2,"invalid",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var t=!0;return"ionBlur"===l&&(t=!1!==u.Pb(n,28)._handleBlurEvent(e.target)&&t),"ionChange"===l&&(t=!1!==u.Pb(n,28)._handleInputEvent(e.target)&&t),t}),c.Z,c.q)),u.Db(28,16384,null,0,o.Pb,[u.p],null,null),u.Tb(1024,null,i.f,(function(n){return[n]}),[o.Pb]),u.Db(30,671744,null,0,i.c,[[3,i.a],[8,null],[8,null],[6,i.f],[2,i.o]],{name:[0,"name"]},null),u.Tb(2048,null,i.g,null,[i.c]),u.Db(32,16384,null,0,i.h,[[4,i.g]],null,null),u.Db(33,49152,null,0,o.G,[u.j,u.p,u.G],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),u.tb(16777216,null,null,1,null,h)),u.Db(35,16384,null,0,d.j,[u.Z,u.U],{ngIf:[0,"ngIf"]},null),(n()(),u.Eb(36,0,null,null,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(n,l,e){var u=!0,t=n.component;return"click"===l&&(u=!1!==t.signupUser(t.signupForm)&&u),u}),c.L,c.c)),u.Db(37,49152,null,0,o.k,[u.j,u.p,u.G],{disabled:[0,"disabled"],expand:[1,"expand"]},null),(n()(),u.Wb(-1,0,[" Create an Account "]))],(function(n,l){var e=l.component;n(l,5,0,e.signupForm),n(l,11,0,"stacked"),n(l,16,0,"email"),n(l,19,0,"Your email address","email"),n(l,21,0,!e.signupForm.controls.email.valid&&e.signupForm.controls.email.touched),n(l,25,0,"stacked"),n(l,30,0,"password"),n(l,33,0,"Your password","password"),n(l,35,0,!e.signupForm.controls.password.valid&&e.signupForm.controls.password.touched),n(l,37,0,!e.signupForm.valid,"block")}),(function(n,l){var e=l.component;n(l,3,0,u.Pb(l,7).ngClassUntouched,u.Pb(l,7).ngClassTouched,u.Pb(l,7).ngClassPristine,u.Pb(l,7).ngClassDirty,u.Pb(l,7).ngClassValid,u.Pb(l,7).ngClassInvalid,u.Pb(l,7).ngClassPending),n(l,13,0,!e.signupForm.controls.email.valid&&e.signupForm.controls.email.touched,u.Pb(l,18).ngClassUntouched,u.Pb(l,18).ngClassTouched,u.Pb(l,18).ngClassPristine,u.Pb(l,18).ngClassDirty,u.Pb(l,18).ngClassValid,u.Pb(l,18).ngClassInvalid,u.Pb(l,18).ngClassPending),n(l,27,0,!e.signupForm.controls.password.valid&&e.signupForm.controls.password.touched,u.Pb(l,32).ngClassUntouched,u.Pb(l,32).ngClassTouched,u.Pb(l,32).ngClassPristine,u.Pb(l,32).ngClassDirty,u.Pb(l,32).ngClassValid,u.Pb(l,32).ngClassInvalid,u.Pb(l,32).ngClassPending)}))}var v=u.Ab("app-register",a,(function(n){return u.Yb(0,[(n()(),u.Eb(0,0,null,null,1,"app-register",[],null,null,null,f,g)),u.Db(1,114688,null,0,a,[r.a,o.Gb,o.a,i.b,o.a,p.m],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]);e.d(l,"RegisterPageModuleNgFactory",(function(){return C}));var C=u.Bb(s,[],(function(n){return u.Mb([u.Nb(512,u.m,u.mb,[[8,[b.a,v]],[3,u.m],u.E]),u.Nb(4608,d.l,d.k,[u.A,[2,d.v]]),u.Nb(4608,i.n,i.n,[]),u.Nb(4608,o.b,o.b,[u.G,u.g]),u.Nb(4608,o.Hb,o.Hb,[o.b,u.m,u.x]),u.Nb(4608,o.Lb,o.Lb,[o.b,u.m,u.x]),u.Nb(4608,i.b,i.b,[]),u.Nb(1073742336,d.b,d.b,[]),u.Nb(1073742336,i.m,i.m,[]),u.Nb(1073742336,i.e,i.e,[]),u.Nb(1073742336,o.Eb,o.Eb,[]),u.Nb(1073742336,p.o,p.o,[[2,p.t],[2,p.m]]),u.Nb(1073742336,i.k,i.k,[]),u.Nb(1073742336,s,s,[]),u.Nb(1024,p.k,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);
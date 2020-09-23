function _defineProperty(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,n,r){return n&&_defineProperties(e.prototype,n),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+JMX":function(e,n,r){"use strict";r.d(n,"a",(function(){return i}));var t=r("8Y7J"),a=r("Xr7G"),i=function(){var e=function(){function e(n){_classCallCheck(this,e),this.firestore=n}return _createClass(e,[{key:"create_NewUser",value:function(e){return this.firestore.collection("userProfile").add(e)}},{key:"read_Users",value:function(){return this.firestore.collection("userProfile").snapshotChanges()}},{key:"read_Drivers",value:function(){return this.firestore.collection("userProfile",(function(e){return e.where("isDriver","==",!0)})).snapshotChanges()}},{key:"create_NewMessage",value:function(e){return this.firestore.collection("Messages").add(e)}},{key:"read_Messages",value:function(){return this.firestore.collection("Messages").snapshotChanges()}},{key:"update_User",value:function(e,n){this.firestore.doc("userProfile/"+e).update(n)}},{key:"delete_User",value:function(e){this.firestore.doc("userProfile/"+e).delete()}}]),e}();return e.ngInjectableDef=t.Vb({factory:function(){return new e(t.Wb(a.a))},token:e,providedIn:"root"}),e}()},"6uu6":function(e,n,r){"use strict";r.d(n,"a",(function(){return i}));var t=r("Wcq6"),a=(r("6nsN"),r("5x/H"),r("8Y7J")),i=function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"signupUser",value:function(e,n){return t.auth().createUserWithEmailAndPassword(e,n).then((function(n){t.firestore().doc("/userProfile/".concat(n.user.uid)).set({email:e})})).catch((function(e){throw console.error(e),new Error(e)}))}},{key:"loginUser",value:function(e,n){return t.auth().signInWithEmailAndPassword(e,n)}},{key:"logoutUser",value:function(){return new Promise((function(e,n){t.auth().currentUser&&t.auth().signOut().then((function(){console.log("LOG Out"),e()})).catch((function(e){n()}))}))}},{key:"userDetails",value:function(){return t.auth().currentUser}}]),e}();return e.ngInjectableDef=a.Vb({factory:function(){return new e},token:e,providedIn:"root"}),e}()},Dl6n:function(e,n,r){"use strict";r.d(n,"a",(function(){return a})),r.d(n,"b",(function(){return i})),r.d(n,"c",(function(){return t})),r.d(n,"d",(function(){return u}));var t=function(e,n){return null!==n.closest(e)},a=function(e){return"string"==typeof e&&e.length>0?_defineProperty({"ion-color":!0},"ion-color-".concat(e),!0):void 0},i=function(e){var n={};return function(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter((function(e){return null!=e})).map((function(e){return e.trim()})).filter((function(e){return""!==e})):[]}(e).forEach((function(e){return n[e]=!0})),n},o=/^[a-z][a-z0-9+\-.]*:/,u=function(e,n,r){var t;return regeneratorRuntime.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(null==e||"#"===e[0]||o.test(e)){a.next=4;break}if(!(t=document.querySelector("ion-router"))){a.next=4;break}return a.abrupt("return",(null!=n&&n.preventDefault(),t.push(e,r)));case 4:return a.abrupt("return",!1);case 5:case"end":return a.stop()}}),null,null,null,Promise)}},UWxW:function(e,n,r){"use strict";r.d(n,"a",(function(){return t})),r.d(n,"b",(function(){return a}));var t=function e(n,r){_classCallCheck(this,e),this.x=n,this.y=r},a=function(e,n,r,t,a){var u=o(e.y,n.y,r.y,t.y,a);return i(e.x,n.x,r.x,t.x,u[0])},i=function(e,n,r,t,a){return a*(3*n*Math.pow(a-1,2)+a*(-3*r*a+3*r+t*a))-e*Math.pow(a-1,3)},o=function(e,n,r,t,a){return u((t-=a)-3*(r-=a)+3*(n-=a)-(e-=a),3*r-6*n+3*e,3*n-3*e,e).filter((function(e){return e>=0&&e<=1}))},u=function(e,n,r,t){if(0===e)return function(e,n,r){var t=n*n-4*e*r;return t<0?[]:[(-n+Math.sqrt(t))/(2*e),(-n-Math.sqrt(t))/(2*e)]}(n,r,t);var a=(3*(r/=e)-(n/=e)*n)/3,i=(2*n*n*n-9*n*r+27*(t/=e))/27;if(0===a)return[Math.pow(-i,1/3)];if(0===i)return[Math.sqrt(-a),-Math.sqrt(-a)];var o=Math.pow(i/2,2)+Math.pow(a/3,3);if(0===o)return[Math.pow(i/2,.5)-n/3];if(o>0)return[Math.pow(-i/2+Math.sqrt(o),1/3)-Math.pow(i/2+Math.sqrt(o),1/3)-n/3];var u=Math.sqrt(Math.pow(-a/3,3)),c=Math.acos(-i/(2*Math.sqrt(Math.pow(-a/3,3)))),s=2*Math.pow(u,1/3);return[s*Math.cos(c/3)-n/3,s*Math.cos((c+2*Math.PI)/3)-n/3,s*Math.cos((c+4*Math.PI)/3)-n/3]}},YtD4:function(e,n,r){"use strict";r.d(n,"a",(function(){return t}));var t=function(e){try{if("string"!=typeof e||""===e)return e;var n=document.createDocumentFragment(),r=document.createElement("div");n.appendChild(r),r.innerHTML=e,u.forEach((function(e){for(var r=n.querySelectorAll(e),t=r.length-1;t>=0;t--){var o=r[t];o.parentNode?o.parentNode.removeChild(o):n.removeChild(o);for(var u=i(o),c=0;c<u.length;c++)a(u[c])}}));for(var t=i(n),o=0;o<t.length;o++)a(t[o]);var c=document.createElement("div");c.appendChild(n);var s=c.querySelector("div");return null!==s?s.innerHTML:c.innerHTML}catch(l){return console.error(l),""}},a=function e(n){if(!n.nodeType||1===n.nodeType){for(var r=n.attributes.length-1;r>=0;r--){var t=n.attributes.item(r),a=t.name;if(o.includes(a.toLowerCase())){var u=t.value;null!=u&&u.toLowerCase().includes("javascript:")&&n.removeAttribute(a)}else n.removeAttribute(a)}for(var c=i(n),s=0;s<c.length;s++)e(c[s])}},i=function(e){return null!=e.children?e.children:e.childNodes},o=["class","id","href","src","name","slot"],u=["script","style","iframe","meta","link","object","embed"]},hbry:function(e,n,r){"use strict";r.d(n,"a",(function(){return w})),r.d(n,"b",(function(){return g})),r.d(n,"c",(function(){return y})),r.d(n,"d",(function(){return i}));var t=r("sWJ8"),a=r("kBU6"),i=function(e){return new Promise((function(n,r){Object(t.m)((function(){o(e),u(e).then((function(r){r.animation&&r.animation.destroy(),c(e),n(r)}),(function(n){c(e),r(n)}))}))}))},o=function(e){var n=e.enteringEl,r=e.leavingEl;x(n,r,e.direction),e.showGoBack?n.classList.add("can-go-back"):n.classList.remove("can-go-back"),y(n,!1),r&&y(r,!1)},u=function(e){var n;return regeneratorRuntime.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,regeneratorRuntime.awrap(s(e));case 2:return n=r.sent,r.abrupt("return",n?l(n,e):f(e));case 4:case"end":return r.stop()}}),null,null,null,Promise)},c=function(e){var n=e.leavingEl;e.enteringEl.classList.remove("ion-page-invisible"),void 0!==n&&n.classList.remove("ion-page-invisible")},s=function(e){return regeneratorRuntime.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.leavingEl||!e.animated||0===e.duration){n.next=16;break}if(!e.animationBuilder){n.next=5;break}n.t0=e.animationBuilder,n.next=15;break;case 5:if("ios"!==e.mode){n.next=11;break}return n.next=8,regeneratorRuntime.awrap(r.e(99).then(r.bind(null,"pdqh")));case 8:n.t1=n.sent.iosTransitionAnimation,n.next=14;break;case 11:return n.next=13,regeneratorRuntime.awrap(r.e(100).then(r.bind(null,"m2JY")));case 13:n.t1=n.sent.mdTransitionAnimation;case 14:n.t0=n.t1;case 15:return n.abrupt("return",n.t0);case 16:case"end":return n.stop()}}),null,null,null,Promise)},l=function(e,n){var t,a,i;return regeneratorRuntime.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,regeneratorRuntime.awrap(d(n,!0));case 2:return o.prev=2,o.next=5,regeneratorRuntime.awrap(r.e(7).then(r.bind(null,"gHMO")));case 5:return a=o.sent,o.next=8,regeneratorRuntime.awrap(a.create(e,n.baseEl,n));case 8:t=o.sent,o.next=14;break;case 11:o.prev=11,o.t0=o.catch(2),t=e(n.baseEl,n);case 14:return v(n.enteringEl,n.leavingEl),o.next=17,regeneratorRuntime.awrap(h(t,n));case 17:return i=o.sent,o.abrupt("return",(t.hasCompleted=i,n.progressCallback&&n.progressCallback(void 0),t.hasCompleted&&m(n.enteringEl,n.leavingEl),{hasCompleted:t.hasCompleted,animation:t}));case 19:case"end":return o.stop()}}),null,null,[[2,11]],Promise)},f=function(e){var n,r;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.enteringEl,r=e.leavingEl,t.next=3,regeneratorRuntime.awrap(d(e,!1));case 3:return v(n,r),m(n,r),t.abrupt("return",{hasCompleted:!0});case 6:case"end":return t.stop()}}),null,null,null,Promise)},d=function(e,n){var r;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return r=(void 0!==e.deepWait?e.deepWait:n)?[w(e.enteringEl),w(e.leavingEl)]:[b(e.enteringEl),b(e.leavingEl)],t.next=3,regeneratorRuntime.awrap(Promise.all(r));case 3:return t.next=5,regeneratorRuntime.awrap(p(e.viewIsReady,e.enteringEl));case 5:case"end":return t.stop()}}),null,null,null,Promise)},p=function(e,n){return regeneratorRuntime.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.t0=e,!r.t0){r.next=4;break}return r.next=4,regeneratorRuntime.awrap(e(n));case 4:case"end":return r.stop()}}),null,null,null,Promise)},h=function(e,n){var r=n.progressCallback,t=new Promise((function(n){return e.onFinish(n)}));return r?(e.progressStart(!0),r(e)):e.play(),t},v=function(e,n){g(n,a.c),g(e,a.a)},m=function(e,n){g(e,a.b),g(n,a.d)},g=function(e,n){if(e){var r=new CustomEvent(n,{bubbles:!1,cancelable:!1});e.dispatchEvent(r)}},b=function(e){return e&&e.componentOnReady?e.componentOnReady():Promise.resolve()},w=function e(n){var r;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r=n)){t.next=12;break}if(t.t0=null!=r.componentOnReady,!t.t0){t.next=8;break}return t.next=6,regeneratorRuntime.awrap(r.componentOnReady());case 6:t.t1=t.sent,t.t0=null!=t.t1;case 8:if(!t.t0){t.next=10;break}return t.abrupt("return");case 10:return t.next=12,regeneratorRuntime.awrap(Promise.all(Array.from(r.children).map(e)));case 12:case"end":return t.stop()}}),null,null,null,Promise)},y=function(e,n){n?(e.setAttribute("aria-hidden","true"),e.classList.add("ion-page-hidden")):(e.hidden=!1,e.removeAttribute("aria-hidden"),e.classList.remove("ion-page-hidden"))},x=function(e,n,r){void 0!==e&&(e.style.zIndex="back"===r?"99":"101"),void 0!==n&&(n.style.zIndex="100")}},m9yc:function(e,n,r){"use strict";r.d(n,"a",(function(){return t})),r.d(n,"b",(function(){return a}));var t=function(e,n,r,t,a){var i;return regeneratorRuntime.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(!e){o.next=2;break}return o.abrupt("return",e.attachViewToDom(n,r,a,t));case 2:if("string"==typeof r||r instanceof HTMLElement){o.next=4;break}throw new Error("framework delegate is missing");case 4:if(i="string"==typeof r?n.ownerDocument&&n.ownerDocument.createElement(r):r,t&&t.forEach((function(e){return i.classList.add(e)})),a&&Object.assign(i,a),n.appendChild(i),o.t0=i.componentOnReady,!o.t0){o.next=12;break}return o.next=12,regeneratorRuntime.awrap(i.componentOnReady());case 12:return o.abrupt("return",i);case 13:case"end":return o.stop()}}),null,null,null,Promise)},a=function(e,n){if(n){if(e)return e.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},"nN+u":function(e,n,r){"use strict";r.d(n,"a",(function(){return i})),r.d(n,"b",(function(){return t}));var t=function(e,n,r){var t=new MutationObserver((function(e){r(a(e,n))}));return t.observe(e,{childList:!0,subtree:!0}),t},a=function(e,n){var r;return e.forEach((function(e){for(var t=0;t<e.addedNodes.length;t++)r=i(e.addedNodes[t],n)||r})),r},i=function(e,n){if(1===e.nodeType)return(e.tagName===n.toUpperCase()?[e]:Array.from(e.querySelectorAll(n))).find((function(e){return!0===e.checked}))}},opz7:function(e,n,r){"use strict";r.d(n,"a",(function(){return a})),r.d(n,"b",(function(){return i})),r.d(n,"c",(function(){return o})),r.d(n,"d",(function(){return t}));var t=function(){var e=window.TapticEngine;e&&e.selection()},a=function(){var e=window.TapticEngine;e&&e.gestureSelectionStart()},i=function(){var e=window.TapticEngine;e&&e.gestureSelectionChanged()},o=function(){var e=window.TapticEngine;e&&e.gestureSelectionEnd()}}}]);
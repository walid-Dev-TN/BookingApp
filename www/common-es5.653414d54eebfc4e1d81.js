(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+JMX":function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t("CcnG"),i=t("fvl4"),o=function(){function e(e){this.firestore=e}return e.prototype.create_NewStudent=function(e){return this.firestore.collection("Passagers").add(e)},e.prototype.read_Students=function(){return this.firestore.collection("Passagers").snapshotChanges()},e.prototype.create_NewMessage=function(e){return this.firestore.collection("Messages").add(e)},e.prototype.read_Messages=function(){return this.firestore.collection("Messages").snapshotChanges()},e.prototype.update_Student=function(e,n){this.firestore.doc("Passagers/"+e).update(n)},e.prototype.delete_Student=function(e){this.firestore.doc("Passagers/"+e).delete()},e.ngInjectableDef=r.Mb({factory:function(){return new e(r.Nb(i.a))},token:e,providedIn:"root"}),e}()},"DK3/":function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return a})),t.d(n,"d",(function(){return r}));var r=function(){var e=window.TapticEngine;e&&e.selection()},i=function(){var e=window.TapticEngine;e&&e.gestureSelectionStart()},o=function(){var e=window.TapticEngine;e&&e.gestureSelectionChanged()},a=function(){var e=window.TapticEngine;e&&e.gestureSelectionEnd()}},Jky2:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return i})),t.d(n,"d",(function(){return u}));var r=t("mrSG"),i=function(e,n){return null!==n.closest(e)},o=function(e){var n;return"string"==typeof e&&e.length>0?((n={"ion-color":!0})["ion-color-"+e]=!0,n):void 0},a=function(e){var n={};return function(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter((function(e){return null!=e})).map((function(e){return e.trim()})).filter((function(e){return""!==e})):[]}(e).forEach((function(e){return n[e]=!0})),n},c=/^[a-z][a-z0-9+\-.]*:/,u=function(e,n,t){return Object(r.__awaiter)(void 0,void 0,void 0,(function(){var i;return Object(r.__generator)(this,(function(r){return null!=e&&"#"!==e[0]&&!c.test(e)&&(i=document.querySelector("ion-router"))?(null!=n&&n.preventDefault(),[2,i.push(e,t)]):[2,!1]}))}))}},NTBD:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return r}));var r=function(e,n,t){var r=new MutationObserver((function(e){t(i(e,n))}));return r.observe(e,{childList:!0,subtree:!0}),r},i=function(e,n){var t;return e.forEach((function(e){for(var r=0;r<e.addedNodes.length;r++)t=o(e.addedNodes[r],n)||t})),t},o=function(e,n){if(1===e.nodeType)return(e.tagName===n.toUpperCase()?[e]:Array.from(e.querySelectorAll(n))).find((function(e){return!0===e.checked}))}},"Qht+":function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return i}));var r=function(){return function(e,n){this.x=e,this.y=n}}(),i=function(e,n,t,r,i){var c=a(e.y,n.y,t.y,r.y,i);return o(e.x,n.x,t.x,r.x,c[0])},o=function(e,n,t,r,i){return i*(3*n*Math.pow(i-1,2)+i*(-3*t*i+3*t+r*i))-e*Math.pow(i-1,3)},a=function(e,n,t,r,i){return c((r-=i)-3*(t-=i)+3*(n-=i)-(e-=i),3*t-6*n+3*e,3*n-3*e,e).filter((function(e){return e>=0&&e<=1}))},c=function(e,n,t,r){if(0===e)return function(e,n,t){var r=n*n-4*e*t;return r<0?[]:[(-n+Math.sqrt(r))/(2*e),(-n-Math.sqrt(r))/(2*e)]}(n,t,r);var i=(3*(t/=e)-(n/=e)*n)/3,o=(2*n*n*n-9*n*t+27*(r/=e))/27;if(0===i)return[Math.pow(-o,1/3)];if(0===o)return[Math.sqrt(-i),-Math.sqrt(-i)];var a=Math.pow(o/2,2)+Math.pow(i/3,3);if(0===a)return[Math.pow(o/2,.5)-n/3];if(a>0)return[Math.pow(-o/2+Math.sqrt(a),1/3)-Math.pow(o/2+Math.sqrt(a),1/3)-n/3];var c=Math.sqrt(Math.pow(-i/3,3)),u=Math.acos(-o/(2*Math.sqrt(Math.pow(-i/3,3)))),s=2*Math.pow(c,1/3);return[s*Math.cos(u/3)-n/3,s*Math.cos((u+2*Math.PI)/3)-n/3,s*Math.cos((u+4*Math.PI)/3)-n/3]}},oVhV:function(e,n,t){"use strict";t.d(n,"a",(function(){return y})),t.d(n,"b",(function(){return g})),t.d(n,"c",(function(){return _})),t.d(n,"d",(function(){return a}));var r=t("mrSG"),i=t("0t5z"),o=t("ocqh"),a=function(e){return new Promise((function(n,t){Object(i.m)((function(){c(e),u(e).then((function(t){t.animation&&t.animation.destroy(),s(e),n(t)}),(function(n){s(e),t(n)}))}))}))},c=function(e){var n=e.enteringEl,t=e.leavingEl;M(n,t,e.direction),e.showGoBack?n.classList.add("can-go-back"):n.classList.remove("can-go-back"),_(n,!1),t&&_(t,!1)},u=function(e){return Object(r.__awaiter)(void 0,void 0,void 0,(function(){var n;return Object(r.__generator)(this,(function(t){switch(t.label){case 0:return[4,l(e)];case 1:return[2,(n=t.sent())?d(n,e):f(e)]}}))}))},s=function(e){var n=e.leavingEl;e.enteringEl.classList.remove("ion-page-invisible"),void 0!==n&&n.classList.remove("ion-page-invisible")},l=function(e){return Object(r.__awaiter)(void 0,void 0,void 0,(function(){var n;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:return e.leavingEl&&e.animated&&0!==e.duration?e.animationBuilder?[2,e.animationBuilder]:"ios"!==e.mode?[3,2]:[4,t.e(96).then(t.bind(null,"lJZS"))]:[2,void 0];case 1:return n=r.sent().iosTransitionAnimation,[3,4];case 2:return[4,t.e(97).then(t.bind(null,"hfCD"))];case 3:n=r.sent().mdTransitionAnimation,r.label=4;case 4:return[2,n]}}))}))},d=function(e,n){return Object(r.__awaiter)(void 0,void 0,void 0,(function(){var i,o;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:return[4,v(n,!0)];case 1:r.sent(),r.label=2;case 2:return r.trys.push([2,5,,6]),[4,t.e(6).then(t.bind(null,"5QBn"))];case 3:return[4,r.sent().create(e,n.baseEl,n)];case 4:return i=r.sent(),[3,6];case 5:return r.sent(),i=e(n.baseEl,n),[3,6];case 6:return b(n.enteringEl,n.leavingEl),[4,p(i,n)];case 7:return o=r.sent(),i.hasCompleted=o,n.progressCallback&&n.progressCallback(void 0),i.hasCompleted&&m(n.enteringEl,n.leavingEl),[2,{hasCompleted:i.hasCompleted,animation:i}]}}))}))},f=function(e){return Object(r.__awaiter)(void 0,void 0,void 0,(function(){var n,t;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:return n=e.enteringEl,t=e.leavingEl,[4,v(e,!1)];case 1:return r.sent(),b(n,t),m(n,t),[2,{hasCompleted:!0}]}}))}))},v=function(e,n){return Object(r.__awaiter)(void 0,void 0,void 0,(function(){var t;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:return t=(void 0!==e.deepWait?e.deepWait:n)?[y(e.enteringEl),y(e.leavingEl)]:[w(e.enteringEl),w(e.leavingEl)],[4,Promise.all(t)];case 1:return r.sent(),[4,h(e.viewIsReady,e.enteringEl)];case 2:return r.sent(),[2]}}))}))},h=function(e,n){return Object(r.__awaiter)(void 0,void 0,void 0,(function(){return Object(r.__generator)(this,(function(t){switch(t.label){case 0:return e?[4,e(n)]:[3,2];case 1:t.sent(),t.label=2;case 2:return[2]}}))}))},p=function(e,n){var t=n.progressCallback,r=new Promise((function(n){return e.onFinish(n)}));return t?(e.progressStart(!0),t(e)):e.play(),r},b=function(e,n){g(n,o.c),g(e,o.a)},m=function(e,n){g(e,o.b),g(n,o.d)},g=function(e,n){if(e){var t=new CustomEvent(n,{bubbles:!1,cancelable:!1});e.dispatchEvent(t)}},w=function(e){return e&&e.componentOnReady?e.componentOnReady():Promise.resolve()},y=function(e){return Object(r.__awaiter)(void 0,void 0,void 0,(function(){var n;return Object(r.__generator)(this,(function(t){switch(t.label){case 0:return(n=e)?null==n.componentOnReady?[3,2]:[4,n.componentOnReady()]:[3,4];case 1:if(null!=t.sent())return[2];t.label=2;case 2:return[4,Promise.all(Array.from(n.children).map(y))];case 3:t.sent(),t.label=4;case 4:return[2]}}))}))},_=function(e,n){n?(e.setAttribute("aria-hidden","true"),e.classList.add("ion-page-hidden")):(e.hidden=!1,e.removeAttribute("aria-hidden"),e.classList.remove("ion-page-hidden"))},M=function(e,n,t){void 0!==e&&(e.style.zIndex="back"===t?"99":"101"),void 0!==n&&(n.style.zIndex="100")}},"v7+D":function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return o}));var r=t("mrSG"),i=function(e,n,t,i,o){return Object(r.__awaiter)(void 0,void 0,void 0,(function(){var a;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:if(e)return[2,e.attachViewToDom(n,t,o,i)];if("string"!=typeof t&&!(t instanceof HTMLElement))throw new Error("framework delegate is missing");return a="string"==typeof t?n.ownerDocument&&n.ownerDocument.createElement(t):t,i&&i.forEach((function(e){return a.classList.add(e)})),o&&Object.assign(a,o),n.appendChild(a),a.componentOnReady?[4,a.componentOnReady()]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2,a]}}))}))},o=function(e,n){if(n){if(e)return e.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},zwjO:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r=function(e){try{if("string"!=typeof e||""===e)return e;var n=document.createDocumentFragment(),t=document.createElement("div");n.appendChild(t),t.innerHTML=e,c.forEach((function(e){for(var t=n.querySelectorAll(e),r=t.length-1;r>=0;r--){var a=t[r];a.parentNode?a.parentNode.removeChild(a):n.removeChild(a);for(var c=o(a),u=0;u<c.length;u++)i(c[u])}}));for(var r=o(n),a=0;a<r.length;a++)i(r[a]);var u=document.createElement("div");u.appendChild(n);var s=u.querySelector("div");return null!==s?s.innerHTML:u.innerHTML}catch(l){return console.error(l),""}},i=function(e){if(!e.nodeType||1===e.nodeType){for(var n=e.attributes.length-1;n>=0;n--){var t=e.attributes.item(n),r=t.name;if(a.includes(r.toLowerCase())){var c=t.value;null!=c&&c.toLowerCase().includes("javascript:")&&e.removeAttribute(r)}else e.removeAttribute(r)}var u=o(e);for(n=0;n<u.length;n++)i(u[n])}},o=function(e){return null!=e.children?e.children:e.childNodes},a=["class","id","href","src","name","slot"],c=["script","style","iframe","meta","link","object","embed"]}}]);
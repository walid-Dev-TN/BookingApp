function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _createForOfIteratorHelper(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw a}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{k5eQ:function(e,t,r){"use strict";r.r(t),r.d(t,"ion_route",(function(){return i})),r.d(t,"ion_route_redirect",(function(){return u})),r.d(t,"ion_router",(function(){return O})),r.d(t,"ion_router_link",(function(){return P}));var n=r("sWJ8"),o=(r("AfW+"),r("HWnG")),a=r("Dl6n"),i=function(){function e(t){_classCallCheck(this,e),Object(n.l)(this,t),this.url="",this.ionRouteDataChanged=Object(n.d)(this,"ionRouteDataChanged",7)}return _createClass(e,[{key:"onUpdate",value:function(e){this.ionRouteDataChanged.emit(e)}},{key:"onComponentProps",value:function(e,t){if(e!==t){var r=e?Object.keys(e):[],n=t?Object.keys(t):[];if(r.length===n.length){var o,a=_createForOfIteratorHelper(r);try{for(a.s();!(o=a.n()).done;){var i=o.value;if(e[i]!==t[i])return void this.onUpdate(e)}}catch(u){a.e(u)}finally{a.f()}}else this.onUpdate(e)}}},{key:"connectedCallback",value:function(){this.ionRouteDataChanged.emit()}}],[{key:"watchers",get:function(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}}]),e}(),u=function(){function e(t){_classCallCheck(this,e),Object(n.l)(this,t),this.ionRouteRedirectChanged=Object(n.d)(this,"ionRouteRedirectChanged",7)}return _createClass(e,[{key:"propDidChange",value:function(){this.ionRouteRedirectChanged.emit()}},{key:"connectedCallback",value:function(){this.ionRouteRedirectChanged.emit()}}],[{key:"watchers",get:function(){return{from:["propDidChange"],to:["propDidChange"]}}}]),e}(),s=function(e){return"/"+e.filter((function(e){return e.length>0})).join("/")},c=function(e){if(null==e)return[""];var t=e.split("/").map((function(e){return e.trim()})).filter((function(e){return e.length>0}));return 0===t.length?[""]:t},l=function(e,t,r,n){var o,a,i,u,s=arguments;return regeneratorRuntime.async((function(c){for(;;)switch(c.prev=c.next){case 0:if(o=s.length>4&&void 0!==s[4]&&s[4],c.prev=1,a=f(e),!(n>=t.length)&&a){c.next=5;break}return c.abrupt("return",o);case 5:return c.next=7,regeneratorRuntime.awrap(a.componentOnReady());case 7:return i=t[n],c.next=10,regeneratorRuntime.awrap(a.setRouteId(i.id,i.params,r));case 10:return(u=c.sent).changed&&(r="root",o=!0),c.next=14,regeneratorRuntime.awrap(l(u.element,t,r,n+1,o));case 14:if(o=c.sent,c.t0=u.markVisible,!c.t0){c.next=19;break}return c.next=19,regeneratorRuntime.awrap(u.markVisible());case 19:return c.abrupt("return",o);case 22:return c.prev=22,c.t1=c.catch(1),c.abrupt("return",(console.error(c.t1),!1));case 25:case"end":return c.stop()}}),null,null,[[1,22]],Promise)},h=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",f=function(e){if(e)return e.matches(h)?e:e.querySelector(h)||void 0},d=function(e,t){return t.find((function(t){return function(e,t){var r=t.from;if(void 0===t.to)return!1;if(r.length>e.length)return!1;for(var n=0;n<r.length;n++){var o=r[n];if("*"===o)return!0;if(o!==e[n])return!1}return r.length===e.length}(e,t)}))},p=function(e,t){for(var r=Math.min(e.length,t.length),n=0;n<r&&e[n].toLowerCase()===t[n].id;n++);return n},v=function(e,t){for(var r,n=new m(e),o=!1,a=0;a<t.length;a++){var i=t[a].path;if(""===i[0])o=!0;else{var u,s=_createForOfIteratorHelper(i);try{for(s.s();!(u=s.n()).done;){var c=u.value,l=n.next();if(":"===c[0]){if(""===l)return null;((r=r||[])[a]||(r[a]={}))[c.slice(1)]=l}else if(l!==c)return null}}catch(h){s.e(h)}finally{s.f()}o=!1}}return o&&o!==(""===n.next())?null:r?t.map((function(e,t){return{id:e.id,path:e.path,params:g(e.params,r[t])}})):t},g=function(e,t){return!e&&t?t:e&&!t?e:e&&t?Object.assign(Object.assign({},e),t):void 0},y=function(e){var t,r=1,n=1,o=_createForOfIteratorHelper(e);try{for(o.s();!(t=o.n()).done;){var a,i=_createForOfIteratorHelper(t.value.path);try{for(i.s();!(a=i.n()).done;){var u=a.value;":"===u[0]?r+=Math.pow(1,n):""!==u&&(r+=Math.pow(2,n)),n++}}catch(s){i.e(s)}finally{i.f()}}}catch(s){o.e(s)}finally{o.f()}return r},m=function(){function e(t){_classCallCheck(this,e),this.path=t.slice()}return _createClass(e,[{key:"next",value:function(){return this.path.length>0?this.path.shift():""}}]),e}(),b=function(e){return Array.from(e.children).filter((function(e){return"ION-ROUTE-REDIRECT"===e.tagName})).map((function(e){var t=R(e,"to");return{from:c(R(e,"from")),to:null==t?void 0:c(t)}}))},w=function(e){return C(k(e))},k=function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;return Array.from(r.children).filter((function(e){return"ION-ROUTE"===e.tagName&&e.component})).map((function(r){var n=R(r,"component");if(null==n)throw new Error("component missing in ion-route");return{path:c(R(r,"url")),id:n.toLowerCase(),params:r.componentProps,children:e(t,r)}}))},R=function(e,t){return t in e?e[t]:e.hasAttribute(t)?e.getAttribute(t):null},C=function(e){var t,r=[],n=_createForOfIteratorHelper(e);try{for(n.s();!(t=n.n()).done;){var o=t.value;_([],r,o)}}catch(a){n.e(a)}finally{n.f()}return r},_=function e(t,r,n){var o=t.slice();if(o.push({id:n.id,path:n.path,params:n.params}),0!==n.children.length){var a,i=_createForOfIteratorHelper(n.children);try{for(i.s();!(a=i.n()).done;){e(o,r,a.value)}}catch(u){i.e(u)}finally{i.f()}}else r.push(o)},O=function(){function e(t){_classCallCheck(this,e),Object(n.l)(this,t),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0,this.ionRouteWillChange=Object(n.d)(this,"ionRouteWillChange",7),this.ionRouteDidChange=Object(n.d)(this,"ionRouteDidChange",7)}return _createClass(e,[{key:"componentWillLoad",value:function(){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return console.debug("[ion-router] router will load"),e.next=3,regeneratorRuntime.awrap(f(document.body)?Promise.resolve():new Promise((function(e){window.addEventListener("ionNavWillLoad",e,{once:!0})})));case 3:return console.debug("[ion-router] found nav"),e.next=6,regeneratorRuntime.awrap(this.onRoutesChanged());case 6:case"end":return e.stop()}}),null,this,null,Promise)}},{key:"componentDidLoad",value:function(){window.addEventListener("ionRouteRedirectChanged",Object(o.g)(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",Object(o.g)(this.onRoutesChanged.bind(this),100))}},{key:"onPopState",value:function(){var e=this.historyDirection(),t=this.getPath();return console.debug("[ion-router] URL changed -> update nav",t,e),this.writeNavStateRoot(t,e)}},{key:"onBackButton",value:function(e){var t=this;e.detail.register(0,(function(){return t.back()}))}},{key:"push",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"forward";e.startsWith(".")&&(e=new URL(e,window.location.href).pathname),console.debug("[ion-router] URL pushed -> updating nav",e,t);var r=c(e);return this.setPath(r,t),this.writeNavStateRoot(r,t)}},{key:"back",value:function(){return window.history.back(),Promise.resolve(this.waitPromise)}},{key:"printDebug",value:function(){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:console.debug("CURRENT PATH",this.getPath()),console.debug("PREVIOUS PATH",this.previousPath),function(e){console.group("[ion-core] ROUTES[".concat(e.length,"]"));var t,r=_createForOfIteratorHelper(e);try{var n=function(){var e=t.value,r=[];e.forEach((function(e){return r.push.apply(r,_toConsumableArray(e.path))}));var n=e.map((function(e){return e.id}));console.debug("%c ".concat(s(r)),"font-weight: bold; padding-left: 20px","=>\t","(".concat(n.join(", "),")"))};for(r.s();!(t=r.n()).done;)n()}catch(o){r.e(o)}finally{r.f()}console.groupEnd()}(w(this.el)),function(e){console.group("[ion-core] REDIRECTS[".concat(e.length,"]"));var t,r=_createForOfIteratorHelper(e);try{for(r.s();!(t=r.n()).done;){var n=t.value;n.to&&console.debug("FROM: ","$c ".concat(s(n.from)),"font-weight: bold"," TO: ","$c ".concat(s(n.to)),"font-weight: bold")}}catch(o){r.e(o)}finally{r.f()}console.groupEnd()}(b(this.el));case 1:case"end":return e.stop()}}),null,this,null,Promise)}},{key:"navChanged",value:function(e){var t,r,n,o,a;return regeneratorRuntime.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(!this.busy){i.next=2;break}return i.abrupt("return",(console.warn("[ion-router] router is busy, navChanged was cancelled"),!1));case 2:return i.next=4,regeneratorRuntime.awrap(function(e){var t,r,n,o;return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],n=window.document.body;case 2:if(!(r=f(n))){e.next=11;break}return e.next=5,regeneratorRuntime.awrap(r.getRouteId());case 5:if(o=e.sent){e.next=8;break}return e.abrupt("break",11);case 8:n=o.element,o.element=void 0,t.push(o);case 9:e.next=2;break;case 11:return e.abrupt("return",{ids:t,outlet:r});case 12:case"end":return e.stop()}}),null,null,null,Promise)}());case 4:if(t=i.sent,r=t.ids,n=t.outlet,o=function(e,t){var r,n=null,o=0,a=e.map((function(e){return e.id})),i=_createForOfIteratorHelper(t);try{for(i.s();!(r=i.n()).done;){var u=r.value,s=p(a,u);s>o&&(n=u,o=s)}}catch(c){i.e(c)}finally{i.f()}return n?n.map((function(t,r){return{id:t.id,path:t.path,params:g(t.params,e[r]&&e[r].params)}})):null}(r,w(this.el))){i.next=10;break}return i.abrupt("return",(console.warn("[ion-router] no matching URL for ",r.map((function(e){return e.id}))),!1));case 10:if(!(a=function(e){var t,r=[],n=_createForOfIteratorHelper(e);try{for(n.s();!(t=n.n()).done;){var o,a=t.value,i=_createForOfIteratorHelper(a.path);try{for(i.s();!(o=i.n()).done;){var u=o.value;if(":"===u[0]){var s=a.params&&a.params[u.slice(1)];if(!s)return null;r.push(s)}else""!==u&&r.push(u)}}catch(c){i.e(c)}finally{i.f()}}}catch(c){n.e(c)}finally{n.f()}return r}(o))){i.next=19;break}return console.debug("[ion-router] nav changed -> update URL",r,a),this.setPath(a,e),i.next=16,regeneratorRuntime.awrap(this.safeWriteNavState(n,o,"root",a,null,r.length));case 16:i.t0=!0,i.next=20;break;case 19:i.t0=(console.warn("[ion-router] router could not match path because some required param is missing"),!1);case 20:return i.abrupt("return",i.t0);case 21:case"end":return i.stop()}}),null,this,null,Promise)}},{key:"onRedirectChanged",value:function(){var e=this.getPath();e&&d(e,b(this.el))&&this.writeNavStateRoot(e,"root")}},{key:"onRoutesChanged",value:function(){return this.writeNavStateRoot(this.getPath(),"root")}},{key:"historyDirection",value:function(){var e=window;null===e.history.state&&(this.state++,e.history.replaceState(this.state,e.document.title,e.document.location&&e.document.location.href));var t=e.history.state,r=this.lastState;return this.lastState=t,t>r?"forward":t<r?"back":"root"}},{key:"writeNavStateRoot",value:function(e,t){var r,n,o,a;return regeneratorRuntime.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(e){i.next=2;break}return i.abrupt("return",(console.error("[ion-router] URL is not part of the routing set"),!1));case 2:return r=b(this.el),n=d(e,r),o=null,n&&(this.setPath(n.to,t),o=n.from,e=n.to),a=function(e,t){var r,n=null,o=0,a=_createForOfIteratorHelper(t);try{for(a.s();!(r=a.n()).done;){var i=r.value,u=v(e,i);if(null!==u){var s=y(u);s>o&&(o=s,n=u)}}}catch(c){a.e(c)}finally{a.f()}return n}(e,w(this.el)),i.abrupt("return",a?this.safeWriteNavState(document.body,a,t,e,o):(console.error("[ion-router] the path does not match any route"),!1));case 7:case"end":return i.stop()}}),null,this,null,Promise)}},{key:"safeWriteNavState",value:function(e,t,r,n,o){var a,i,u,s=arguments;return regeneratorRuntime.async((function(c){for(;;)switch(c.prev=c.next){case 0:return a=s.length>5&&void 0!==s[5]?s[5]:0,c.next=3,regeneratorRuntime.awrap(this.lock());case 3:return i=c.sent,u=!1,c.prev=5,c.next=8,regeneratorRuntime.awrap(this.writeNavState(e,t,r,n,o,a));case 8:u=c.sent,c.next=14;break;case 11:c.prev=11,c.t0=c.catch(5),console.error(c.t0);case 14:return c.abrupt("return",(i(),u));case 15:case"end":return c.stop()}}),null,this,[[5,11]],Promise)}},{key:"lock",value:function(){var e,t;return regeneratorRuntime.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(e=this.waitPromise,this.waitPromise=new Promise((function(e){return t=e})),r.t0=void 0!==e,!r.t0){r.next=6;break}return r.next=6,regeneratorRuntime.awrap(e);case 6:return r.abrupt("return",t);case 7:case"end":return r.stop()}}),null,this,null,Promise)}},{key:"writeNavState",value:function(e,t,r,n,o){var a,i,u,s=arguments;return regeneratorRuntime.async((function(c){for(;;)switch(c.prev=c.next){case 0:if(a=s.length>5&&void 0!==s[5]?s[5]:0,!this.busy){c.next=3;break}return c.abrupt("return",(console.warn("[ion-router] router is busy, transition was cancelled"),!1));case 3:return this.busy=!0,(i=this.routeChangeEvent(n,o))&&this.ionRouteWillChange.emit(i),c.next=8,regeneratorRuntime.awrap(l(e,t,r,a));case 8:return u=c.sent,c.abrupt("return",(this.busy=!1,u&&console.debug("[ion-router] route changed",n),i&&this.ionRouteDidChange.emit(i),u));case 10:case"end":return c.stop()}}),null,this,null,Promise)}},{key:"setPath",value:function(e,t){var r=this;this.state++,function(e,t,n,o,a,i){var u=s([].concat(_toConsumableArray(c(r.root)),_toConsumableArray(o)));n&&(u="#"+u),"forward"===a?e.pushState(i,"",u):e.replaceState(i,"",u)}(window.history,0,this.useHash,e,t,this.state)}},{key:"getPath",value:function(){var e=this;return function(t,r,n){var o=t.pathname;if(e.useHash){var a=t.hash;o="#"===a[0]?a.slice(1):""}return function(e,t){if(e.length>t.length)return null;if(e.length<=1&&""===e[0])return t;for(var r=0;r<e.length;r++)if(e[r].length>0&&e[r]!==t[r])return null;return t.length===e.length?[""]:t.slice(e.length)}(c(r),c(o))}(window.location,this.root)}},{key:"routeChangeEvent",value:function(e,t){var r=this.previousPath,n=s(e);return this.previousPath=n,n===r?null:{from:r,redirectedFrom:t?s(t):null,to:n}}},{key:"el",get:function(){return Object(n.f)(this)}}]),e}(),P=function(){function e(t){var r=this;_classCallCheck(this,e),Object(n.l)(this,t),this.routerDirection="forward",this.onClick=function(e){Object(a.d)(r.href,e,r.routerDirection)}}return _createClass(e,[{key:"render",value:function(){var e,t=Object(n.e)(this),r={href:this.href,rel:this.rel,target:this.target};return Object(n.i)(n.a,{onClick:this.onClick,class:Object.assign(Object.assign({},Object(a.a)(this.color)),(e={},_defineProperty(e,t,!0),_defineProperty(e,"ion-activatable",!0),e))},Object(n.i)("a",Object.assign({},r),Object(n.i)("slot",null)))}}],[{key:"style",get:function(){return":host{--background:transparent;--color:var(--ion-color-primary,#3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"}}]),e}()}}]);
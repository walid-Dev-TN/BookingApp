function _defineProperty(i,n,e){return n in i?Object.defineProperty(i,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[n]=e,i}function _classCallCheck(i,n){if(!(i instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(i,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(i,t.key,t)}}function _createClass(i,n,e){return n&&_defineProperties(i.prototype,n),e&&_defineProperties(i,e),i}(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{nf6t:function(i,n,e){"use strict";e.r(n),e.d(n,"ion_infinite_scroll",(function(){return o})),e.d(n,"ion_infinite_scroll_content",(function(){return l}));var t=e("sWJ8"),s=e("AfW+"),r=e("YtD4"),o=function(){function i(n){var e=this;_classCallCheck(this,i),Object(t.l)(this,n),this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.isLoading=!1,this.threshold="15%",this.disabled=!1,this.position="bottom",this.onScroll=function(){var i=e.scrollEl;if(!i||!e.canStart())return 1;var n=e.el.offsetHeight;if(0===n)return 2;var t=i.scrollTop,s=i.offsetHeight,r=0!==e.thrPc?s*e.thrPc:e.thrPx;if(("bottom"===e.position?i.scrollHeight-n-t-r-s:t-n-r)<0){if(!e.didFire)return e.isLoading=!0,e.didFire=!0,e.ionInfinite.emit(),3}else e.didFire=!1;return 4},this.ionInfinite=Object(t.d)(this,"ionInfinite",7)}return _createClass(i,[{key:"thresholdChanged",value:function(){var i=this.threshold;i.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(i)/100):(this.thrPx=parseFloat(i),this.thrPc=0)}},{key:"disabledChanged",value:function(){var i=this.disabled;i&&(this.isLoading=!1,this.isBusy=!1),this.enableScrollEvents(!i)}},{key:"connectedCallback",value:function(){var i,n=this;return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i=this.el.closest("ion-content"))){e.next=10;break}return e.next=4,regeneratorRuntime.awrap(i.getScrollElement());case 4:this.scrollEl=e.sent,this.thresholdChanged(),this.disabledChanged(),"top"===this.position&&Object(t.m)((function(){n.scrollEl&&(n.scrollEl.scrollTop=n.scrollEl.scrollHeight-n.scrollEl.clientHeight)})),e.next=11;break;case 10:console.error("<ion-infinite-scroll> must be used inside an <ion-content>");case 11:case"end":return e.stop()}}),null,this,null,Promise)}},{key:"disconnectedCallback",value:function(){this.enableScrollEvents(!1),this.scrollEl=void 0}},{key:"complete",value:function(){var i,n,e=this;return regeneratorRuntime.async((function(s){for(;;)switch(s.prev=s.next){case 0:i=this.scrollEl,this.isLoading&&i&&(this.isLoading=!1,"top"===this.position)&&(this.isBusy=!0,n=i.scrollHeight-i.scrollTop,requestAnimationFrame((function(){Object(t.g)((function(){var s=i.scrollHeight-n;requestAnimationFrame((function(){Object(t.m)((function(){i.scrollTop=s,e.isBusy=!1}))}))}))})));case 2:case"end":return s.stop()}}),null,this,null,Promise)}},{key:"canStart",value:function(){return!(this.disabled||this.isBusy||!this.scrollEl||this.isLoading)}},{key:"enableScrollEvents",value:function(i){this.scrollEl&&(i?this.scrollEl.addEventListener("scroll",this.onScroll):this.scrollEl.removeEventListener("scroll",this.onScroll))}},{key:"render",value:function(){var i,n=Object(t.e)(this),e=this.disabled;return Object(t.i)(t.a,{class:(i={},_defineProperty(i,n,!0),_defineProperty(i,"infinite-scroll-loading",this.isLoading),_defineProperty(i,"infinite-scroll-enabled",!e),i)})}},{key:"el",get:function(){return Object(t.f)(this)}}],[{key:"watchers",get:function(){return{threshold:["thresholdChanged"],disabled:["disabledChanged"]}}},{key:"style",get:function(){return"ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}"}}]),i}(),l=function(){function i(n){_classCallCheck(this,i),Object(t.l)(this,n)}return _createClass(i,[{key:"componentDidLoad",value:function(){if(void 0===this.loadingSpinner){var i=Object(t.e)(this);this.loadingSpinner=s.b.get("infiniteLoadingSpinner",s.b.get("spinner","ios"===i?"lines":"crescent"))}}},{key:"render",value:function(){var i,n=Object(t.e)(this);return Object(t.i)(t.a,{class:(i={},_defineProperty(i,n,!0),_defineProperty(i,"infinite-scroll-content-".concat(n),!0),i)},Object(t.i)("div",{class:"infinite-loading"},this.loadingSpinner&&Object(t.i)("div",{class:"infinite-loading-spinner"},Object(t.i)("ion-spinner",{name:this.loadingSpinner})),this.loadingText&&Object(t.i)("div",{class:"infinite-loading-text",innerHTML:Object(r.a)(this.loadingText)})))}}],[{key:"style",get:function(){return"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600,#666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line{stroke:var(--ion-color-step-600,#666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600,#666)}"}}]),i}()}}]);
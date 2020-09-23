function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{Ftzj:function(e,t,r){"use strict";r.r(t),r.d(t,"ion_reorder",(function(){return s})),r.d(t,"ion_reorder_group",(function(){return o}));var n=r("sWJ8"),i=(r("AfW+"),r("opz7")),s=function(){function e(t){_classCallCheck(this,e),Object(n.l)(this,t)}return _createClass(e,[{key:"onClick",value:function(e){e.preventDefault(),e.stopImmediatePropagation()}},{key:"render",value:function(){return Object(n.i)(n.a,{class:Object(n.e)(this)},Object(n.i)("slot",null,Object(n.i)("ion-icon",{name:"reorder",lazy:!1,class:"reorder-icon"})))}}],[{key:"style",get:function(){return":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px;font-size:31px;opacity:.3}"}}]),e}(),o=function(){function e(t){_classCallCheck(this,e),Object(n.l)(this,t),this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.state=0,this.disabled=!0,this.ionItemReorder=Object(n.d)(this,"ionItemReorder",7)}return _createClass(e,[{key:"disabledChanged",value:function(){this.gesture&&this.gesture.setDisabled(this.disabled)}},{key:"connectedCallback",value:function(){var e,t=this;return regeneratorRuntime.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=this.el.closest("ion-content"),n.t0=e,!n.t0){n.next=6;break}return n.next=5,regeneratorRuntime.awrap(e.getScrollElement());case 5:this.scrollEl=n.sent;case 6:return n.next=8,regeneratorRuntime.awrap(Promise.resolve().then(r.bind(null,"mUkt")));case 8:this.gesture=n.sent.createGesture({el:this.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:!1,canStart:function(e){return t.canStart(e)},onStart:function(e){return t.onStart(e)},onMove:function(e){return t.onMove(e)},onEnd:function(){return t.onEnd()}}),this.disabledChanged();case 10:case"end":return n.stop()}}),null,this,null,Promise)}},{key:"disconnectedCallback",value:function(){this.onEnd(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}},{key:"complete",value:function(e){return Promise.resolve(this.completeSync(e))}},{key:"canStart",value:function(e){if(this.selectedItemEl||0!==this.state)return!1;var t=e.event.target.closest("ion-reorder");if(!t)return!1;var r=a(t,this.el);return!!r&&(e.data=r,!0)}},{key:"onStart",value:function(e){e.event.preventDefault();var t=this.selectedItemEl=e.data,r=this.cachedHeights;r.length=0;var n=this.el,s=n.children;if(s&&0!==s.length){for(var o=0,a=0;a<s.length;a++){var h=s[a];r.push(o+=h.offsetHeight),h.$ionIndex=a}var d=n.getBoundingClientRect();if(this.containerTop=d.top,this.containerBottom=d.bottom,this.scrollEl){var f=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=f.top+c,this.scrollElBottom=f.bottom-c}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=l(t),this.selectedItemHeight=t.offsetHeight,this.state=1,t.classList.add(u),Object(i.a)()}}},{key:"onMove",value:function(e){var t=this.selectedItemEl;if(t){var r=this.autoscroll(e.currentY),n=this.containerTop-r,s=Math.max(n,Math.min(e.currentY,this.containerBottom-r)),o=r+s-e.startY,a=this.itemIndexForTop(s-n);if(a!==this.lastToIndex){var c=l(t);this.lastToIndex=a,Object(i.b)(),this.reorderMove(c,a)}t.style.transform="translateY(".concat(o,"px)")}}},{key:"onEnd",value:function(){var e=this.selectedItemEl;if(this.state=2,e){var t=this.lastToIndex,r=l(e);t===r?this.completeSync():this.ionItemReorder.emit({from:r,to:t,complete:this.completeSync.bind(this)}),Object(i.c)()}else this.state=0}},{key:"completeSync",value:function(e){var t=this.selectedItemEl;if(t&&2===this.state){var r=this.el.children,n=r.length,i=this.lastToIndex,s=l(t);i===s||e&&!0!==e||this.el.insertBefore(t,s<i?r[i+1]:r[i]),Array.isArray(e)&&(e=d(e,s,i));for(var o=0;o<n;o++)r[o].style.transform="";t.style.transition="",t.classList.remove(u),this.selectedItemEl=void 0,this.state=0}return e}},{key:"itemIndexForTop",value:function(e){var t=this.cachedHeights,r=0;for(r=0;r<t.length&&!(t[r]>e);r++);return r}},{key:"reorderMove",value:function(e,t){for(var r=this.selectedItemHeight,n=this.el.children,i=0;i<n.length;i++){var s="";i>e&&i<=t?s="translateY(".concat(-r,"px)"):i<e&&i>=t&&(s="translateY(".concat(r,"px)")),n[i].style.transform=s}}},{key:"autoscroll",value:function(e){if(!this.scrollEl)return 0;var t=0;return e<this.scrollElTop?t=-h:e>this.scrollElBottom&&(t=h),0!==t&&this.scrollEl.scrollBy(0,t),this.scrollEl.scrollTop-this.scrollElInitial}},{key:"render",value:function(){var e,t=Object(n.e)(this);return Object(n.i)(n.a,{class:(e={},_defineProperty(e,t,!0),_defineProperty(e,"reorder-enabled",!this.disabled),_defineProperty(e,"reorder-list-active",0!==this.state),e)})}},{key:"el",get:function(){return Object(n.f)(this)}}],[{key:"watchers",get:function(){return{disabled:["disabledChanged"]}}},{key:"style",get:function(){return".reorder-list-active>*{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none!important;transition:none!important;-webkit-box-shadow:0 0 10px rgba(0,0,0,.4);box-shadow:0 0 10px rgba(0,0,0,.4);opacity:.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translateZ(0);transform:translateZ(0)}"}}]),e}(),l=function(e){return e.$ionIndex},a=function(e,t){for(var r;e;){if((r=e.parentElement)===t)return e;e=r}},c=60,h=10,u="reorder-selected",d=function(e,t,r){var n=e[t];return e.splice(t,1),e.splice(r,0,n),e.slice()}}}]);